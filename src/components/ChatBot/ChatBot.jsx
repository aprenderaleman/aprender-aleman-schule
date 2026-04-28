import React, { useState, useRef, useEffect, useCallback } from 'react'
import { MessageCircle, X, Send, Bot, User, Sparkles, HelpCircle, Loader2, Trash2, Mic, Square, Volume2, VolumeX } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const API_URL = import.meta.env.VITE_API_URL || ''

const MODES = {
  tutor: {
    label: 'Deutsch-Tutor',
    icon: Sparkles,
    color: 'from-orange-500 to-amber-500',
    placeholder: 'Schreib mir auf Deutsch...',
    description: 'Dein persönlicher Deutsch-Tutor',
  },
  support: {
    label: 'Hilfe',
    icon: HelpCircle,
    color: 'from-blue-500 to-indigo-500',
    placeholder: 'Wie funktioniert...?',
    description: 'Technische Hilfe zur Plattform',
  },
}

function pickMime() {
  for (const m of ['audio/webm;codecs=opus', 'audio/webm', 'audio/ogg;codecs=opus', 'audio/mp4']) {
    if (typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported(m)) return m
  }
  return ''
}

export default function ChatBot() {
  const { user } = useAuth()
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState('tutor')
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPulse, setShowPulse] = useState(true)
  const [voiceMode, setVoiceMode] = useState(false)
  const [recording, setRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [playingAudio, setPlayingAudio] = useState(null) // message index currently playing

  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const recorderRef = useRef(null)
  const chunksRef = useRef([])
  const streamRef = useRef(null)
  const timerRef = useRef(null)
  const audioRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open && !voiceMode && inputRef.current) inputRef.current.focus()
  }, [open, voiceMode])

  useEffect(() => {
    if (open) setShowPulse(false)
  }, [open])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopRecording()
      if (audioRef.current) { audioRef.current.pause(); audioRef.current = null }
    }
  }, [])

  const getToken = () => localStorage.getItem('auth_token')
  const authHeaders = (extra = {}) => {
    const token = getToken()
    return { ...(token ? { Authorization: `Bearer ${token}` } : {}), ...extra }
  }

  // ─── TEXT CHAT ─────────────────────────────────────
  const sendMessage = async (text) => {
    const msg = (text || input).trim()
    if (!msg || loading) return

    const userMsg = { role: 'user', content: msg }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: authHeaders({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({ message: msg, mode, history: newMessages.slice(-20) }),
      })
      if (!res.ok) throw new Error()
      const data = await res.json()
      const assistantMsg = { role: 'assistant', content: data.reply }
      setMessages(prev => [...prev, assistantMsg])

      // Auto-speak in voice mode
      if (voiceMode && data.reply) {
        speakText(data.reply)
      }
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: '❌ Verbindungsfehler. Bitte versuche es erneut.' }])
    } finally {
      setLoading(false)
    }
  }

  // ─── VOICE: RECORD ────────────────────────────────
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream
      const mime = pickMime()
      const recorder = new MediaRecorder(stream, mime ? { mimeType: mime } : {})
      recorderRef.current = recorder
      chunksRef.current = []

      recorder.ondataavailable = (e) => { if (e.data.size > 0) chunksRef.current.push(e.data) }
      recorder.onstop = () => handleRecordingDone()
      recorder.start(250)
      setRecording(true)
      setRecordingTime(0)
      timerRef.current = setInterval(() => setRecordingTime(t => t + 1), 1000)
    } catch (err) {
      console.error('Mic error:', err)
      setMessages(prev => [...prev, { role: 'assistant', content: '❌ Kein Zugriff auf das Mikrofon. Bitte überprüfe die Berechtigungen.' }])
    }
  }

  const stopRecording = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
    if (recorderRef.current && recorderRef.current.state !== 'inactive') {
      recorderRef.current.stop()
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop())
      streamRef.current = null
    }
    setRecording(false)
  }, [])

  const handleRecordingDone = async () => {
    const chunks = chunksRef.current
    if (!chunks.length) return

    const blob = new Blob(chunks, { type: chunks[0].type || 'audio/webm' })
    chunksRef.current = []

    // Show placeholder
    setMessages(prev => [...prev, { role: 'user', content: '🎙️ ...' }])
    setLoading(true)

    try {
      // Step 1: Transcribe
      const transcriptRes = await fetch(`${API_URL}/api/chat/transcribe`, {
        method: 'POST',
        headers: authHeaders({ 'Content-Type': blob.type || 'audio/webm' }),
        body: blob,
      })
      if (!transcriptRes.ok) throw new Error('Transcription failed')
      const { transcript } = await transcriptRes.json()

      if (!transcript || transcript.trim().length === 0) {
        setMessages(prev => {
          const copy = [...prev]
          copy[copy.length - 1] = { role: 'user', content: '🎙️ (kein Audio erkannt)' }
          return copy
        })
        setLoading(false)
        return
      }

      // Update placeholder with actual text
      setMessages(prev => {
        const copy = [...prev]
        copy[copy.length - 1] = { role: 'user', content: transcript }
        return copy
      })

      // Step 2: Get Claude response + TTS
      const chatRes = await fetch(`${API_URL}/api/chat/voice`, {
        method: 'POST',
        headers: authHeaders({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
          message: transcript,
          mode,
          history: [...messages, { role: 'user', content: transcript }].slice(-20),
          voice: mode === 'support' ? 'nova' : 'onyx',
        }),
      })
      if (!chatRes.ok) throw new Error('Voice response failed')
      const { reply, audioBase64 } = await chatRes.json()

      const assistantMsg = { role: 'assistant', content: reply, audioBase64 }
      setMessages(prev => [...prev, assistantMsg])

      // Auto-play response
      if (audioBase64) {
        playAudioBase64(audioBase64, messages.length + 1)
      }
    } catch (err) {
      console.error('Voice chat error:', err)
      setMessages(prev => [...prev, { role: 'assistant', content: '❌ Fehler beim Sprachgespräch. Bitte versuche es erneut.' }])
    } finally {
      setLoading(false)
    }
  }

  // ─── TTS: Speak text (for text-mode messages) ─────
  const speakText = async (text) => {
    try {
      const res = await fetch(`${API_URL}/api/chat/tts`, {
        method: 'POST',
        headers: authHeaders({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({ text, voice: mode === 'support' ? 'nova' : 'onyx' }),
      })
      if (!res.ok) return
      const { audioBase64 } = await res.json()
      if (audioBase64) playAudioBase64(audioBase64)
    } catch { /* silent fail */ }
  }

  // ─── AUDIO PLAYBACK ───────────────────────────────
  const playAudioBase64 = (base64, msgIndex) => {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current = null }
    const audio = new Audio(`data:audio/mp3;base64,${base64}`)
    audioRef.current = audio
    setPlayingAudio(msgIndex ?? -1)
    audio.onended = () => { setPlayingAudio(null); audioRef.current = null }
    audio.onerror = () => { setPlayingAudio(null); audioRef.current = null }
    audio.play().catch(() => setPlayingAudio(null))
  }

  const stopAudio = () => {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current = null }
    setPlayingAudio(null)
  }

  // ─── HANDLERS ─────────────────────────────────────
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
  }

  const clearChat = () => {
    setMessages([])
    stopAudio()
  }

  const switchMode = (newMode) => {
    if (newMode !== mode) { setMode(newMode); setMessages([]); stopAudio() }
  }

  const toggleVoiceMode = () => {
    if (recording) stopRecording()
    stopAudio()
    setVoiceMode(v => !v)
  }

  const handleMicClick = () => {
    if (recording) stopRecording()
    else startRecording()
  }

  const formatTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

  const currentMode = MODES[mode]
  const ModeIcon = currentMode.icon

  if (!user) return null

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed right-4 sm:right-6 z-30 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 bottom-[calc(4.5rem+env(safe-area-inset-bottom,0px))] md:bottom-6"
          aria-label="Chat öffnen"
        >
          <MessageCircle className="w-6 h-6" />
          {showPulse && <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />}
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-50 w-full sm:w-[380px] sm:max-w-[calc(100vw-2rem)] h-full sm:h-[560px] sm:max-h-[calc(100dvh-4rem)] flex flex-col bg-white dark:bg-gray-900 sm:rounded-2xl shadow-2xl sm:border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className={`bg-gradient-to-r ${currentMode.color} p-3 sm:p-4 text-white`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ModeIcon className="w-5 h-5" />
                <span className="font-semibold text-sm sm:text-base">{currentMode.label}</span>
                {voiceMode && (
                  <span className="text-[10px] bg-white/25 px-1.5 py-0.5 rounded-full font-medium">VOZ</span>
                )}
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <button onClick={clearChat} className="p-2.5 sm:p-1.5 rounded-lg hover:bg-white/20 transition-colors" title="Chat löschen">
                    <Trash2 className="w-5 h-5 sm:w-4 sm:h-4" />
                  </button>
                )}
                <button onClick={() => setOpen(false)} className="p-2.5 sm:p-1.5 rounded-lg hover:bg-white/20 transition-colors">
                  <X className="w-5 h-5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
            {/* Mode switcher */}
            <div className="flex gap-2 mt-2 sm:mt-3">
              {Object.entries(MODES).map(([key, m]) => (
                <button
                  key={key}
                  onClick={() => switchMode(key)}
                  className={`flex-1 text-xs py-2 sm:py-1.5 px-2 rounded-lg transition-all ${mode === key ? 'bg-white/30 font-semibold' : 'bg-white/10 hover:bg-white/20'}`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 dark:text-gray-500 gap-3">
                <ModeIcon className="w-10 h-10 opacity-50" />
                <p className="text-sm">{currentMode.description}</p>
                {voiceMode ? (
                  <p className="text-xs text-gray-400">Drücke das Mikrofon zum Sprechen</p>
                ) : (
                  <div className="space-y-1.5 w-full">
                    {(mode === 'tutor'
                      ? ['Was bedeutet „Konjunktiv II"?', 'Wie benutzt man die Fälle?', 'Erkläre mir die Wechselpräpositionen']
                      : ['Wie funktionieren die Übungen?', 'Was beinhaltet das Abo?', 'Wie übe ich für die Goethe-Prüfung?']
                    ).map((q) => (
                      <button
                        key={q}
                        onClick={() => { setInput(q); inputRef.current?.focus() }}
                        className={`w-full text-left text-sm sm:text-xs px-3 py-3 sm:py-2 rounded-xl sm:rounded-lg bg-gray-50 dark:bg-gray-800 ${mode === 'tutor' ? 'hover:bg-orange-50' : 'hover:bg-blue-50'} dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors`}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  </div>
                )}
                <div className={`max-w-[80%] sm:max-w-[75%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap break-words ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-br-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-md'
                }`}>
                  {msg.content}
                  {/* Play button on assistant messages */}
                  {msg.role === 'assistant' && !msg.content.startsWith('❌') && (
                    <button
                      onClick={() => {
                        if (playingAudio === i) { stopAudio() }
                        else if (msg.audioBase64) { playAudioBase64(msg.audioBase64, i) }
                        else { speakText(msg.content); setPlayingAudio(i) }
                      }}
                      className="mt-1.5 flex items-center gap-1.5 text-xs py-1 opacity-70 hover:opacity-100 transition-opacity"
                    >
                      {playingAudio === i
                        ? <><VolumeX className="w-3.5 h-3.5" /> Stopp</>
                        : <><Volume2 className="w-3.5 h-3.5" /> Anhören</>
                      }
                    </button>
                  )}
                </div>
                {msg.role === 'user' && (
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-2 justify-start">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-bl-md px-4 py-3">
                  <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] border-t border-gray-200 dark:border-gray-700">
            {/* Voice mode: big mic button */}
            {voiceMode ? (
              <div className="flex flex-col items-center gap-2 py-2">
                {recording && (
                  <div className="flex items-center gap-2 text-sm text-red-500">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    Aufnahme {formatTime(recordingTime)}
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleMicClick}
                    disabled={loading}
                    className={`flex items-center justify-center w-16 h-16 rounded-full transition-all duration-200 ${
                      recording
                        ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                        : 'bg-gradient-to-br from-orange-500 to-amber-500 hover:shadow-lg hover:scale-105'
                    } text-white disabled:opacity-40`}
                  >
                    {recording ? <Square className="w-7 h-7" /> : <Mic className="w-7 h-7" />}
                  </button>
                  <button
                    onClick={toggleVoiceMode}
                    className="p-3 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    title="Zum Text wechseln"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xs text-gray-400">
                  {recording ? 'Drücke zum Stoppen' : 'Drücke zum Sprechen'}
                </p>
              </div>
            ) : (
              /* Text mode */
              <div className="flex gap-2 items-end">
                <button
                  onClick={toggleVoiceMode}
                  className="flex items-center justify-center w-11 h-11 shrink-0 rounded-xl text-gray-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-gray-800 transition-all"
                  title="Sprachmodus"
                >
                  <Mic className="w-5 h-5" />
                </button>
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={currentMode.placeholder}
                  rows={1}
                  style={{ maxHeight: '120px' }}
                  className="flex-1 resize-none rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 px-3.5 py-2.5 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || loading}
                  className="flex items-center justify-center w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-md transition-all"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
