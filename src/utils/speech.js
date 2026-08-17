// Speech in/out abstraction.
//
// Web       → Web Speech API (SpeechRecognition + speechSynthesis)
// Native    → @capacitor-community/speech-recognition +
//             @capacitor-community/text-to-speech
//
// Same API on both. Components never need to know which one is active.

import { isNative } from './platform'

// ─── Speech recognition (STT) ─────────────────────────────────────────

const SR = typeof window !== 'undefined'
  ? (window.SpeechRecognition || window.webkitSpeechRecognition)
  : null

export function isSpeechRecognitionSupported() {
  // Native: assume yes (we'll request permission the first time). Web: check.
  if (isNative()) return true
  return !!SR
}

/**
 * Start recognising German speech. Returns an object with a `stop()`
 * method that resolves to `{transcript, durationSeconds}`. If the browser
 * doesn't support recognition, throws — callers should check
 * isSpeechRecognitionSupported first.
 *
 * Options:
 *   lang      — BCP-47 tag, default 'de-DE'
 *   onPartial — called on interim results with the current text
 */
export function startRecognition({ lang = 'de-DE', onPartial } = {}) {
  return isNative() ? startNativeRecognition({ lang, onPartial }) : startWebRecognition({ lang, onPartial })
}

function startWebRecognition({ lang, onPartial }) {
  if (!SR) throw new Error('SpeechRecognition not supported')

  const rec = new SR()
  rec.lang = lang
  rec.continuous = true
  rec.interimResults = true

  let finalTranscript = ''
  const startedAt = Date.now()

  rec.onresult = (event) => {
    let interim = ''
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const r = event.results[i]
      if (r.isFinal) finalTranscript += r[0].transcript + ' '
      else interim += r[0].transcript
    }
    if (onPartial) onPartial((finalTranscript + ' ' + interim).trim())
  }

  let doneResolve
  const done = new Promise(resolve => { doneResolve = resolve })

  rec.onend = () => {
    doneResolve({
      transcript: finalTranscript.trim(),
      durationSeconds: Math.round((Date.now() - startedAt) / 1000),
    })
  }
  rec.onerror = (e) => {
    if (e?.error !== 'no-speech' && e?.error !== 'aborted') {
      console.warn('[speech] recognition error:', e.error)
    }
  }

  try { rec.start() } catch {}
  return {
    stop() { try { rec.stop() } catch {} ; return done },
    abort() { try { rec.abort() } catch {} ; return done },
  }
}

/**
 * Native STT via @capacitor-community/speech-recognition. Handles
 * runtime permission request, streams partial results, and supports
 * the same {transcript, durationSeconds} return shape as the web path.
 */
function startNativeRecognition({ lang, onPartial }) {
  const startedAt = Date.now()
  let finalTranscript = ''
  let listener = null
  let plugin = null
  let stopped = false

  let doneResolve
  const done = new Promise(resolve => { doneResolve = resolve })

  ;(async () => {
    try {
      const { SpeechRecognition } = await import('@capacitor-community/speech-recognition')
      plugin = SpeechRecognition
      const perm = await plugin.checkPermissions().catch(() => null)
      if (!perm || perm.speechRecognition !== 'granted') {
        const req = await plugin.requestPermissions().catch(() => null)
        if (!req || req.speechRecognition !== 'granted') {
          doneResolve({ transcript: '', durationSeconds: 0 })
          return
        }
      }
      listener = await plugin.addListener('partialResults', (data) => {
        const text = (data.matches?.[0] || '').trim()
        if (text) {
          finalTranscript = text
          if (onPartial) onPartial(text)
        }
      })
      await plugin.start({
        language: lang,
        maxResults: 3,
        partialResults: true,
        popup: false,
      })
    } catch (e) {
      console.warn('[speech-native] start failed:', e?.message)
      doneResolve({ transcript: '', durationSeconds: 0 })
    }
  })()

  async function finish() {
    if (stopped) return done
    stopped = true
    try { if (listener) await listener.remove() } catch {}
    try { if (plugin) await plugin.stop() } catch {}
    doneResolve({
      transcript: finalTranscript.trim(),
      durationSeconds: Math.round((Date.now() - startedAt) / 1000),
    })
    return done
  }

  return { stop: finish, abort: finish }
}

// ─── Speech synthesis (TTS) ───────────────────────────────────────────

export function isSpeechSynthesisSupported() {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

function pickVoice(lang) {
  const all = window.speechSynthesis.getVoices()
  // Prefer a native de-DE / de-AT / de-CH voice; fall back to any de-*.
  return all.find(v => v.lang === lang)
    || all.find(v => v.lang?.startsWith(lang.slice(0, 2)))
    || all[0]
    || null
}

/**
 * Speak a chunk of text. Returns a promise that resolves when playback
 * ends (or immediately if TTS isn't supported). Options:
 *   lang  — BCP-47 tag, default 'de-DE'
 *   rate  — 0.5..2, default 1
 *   onEnd — optional callback fired at end
 */
export function speak(text, opts = {}) {
  if (!text) return Promise.resolve()
  return isNative() ? speakNative(text, opts) : speakWeb(text, opts)
}

function speakWeb(text, { lang = 'de-DE', rate = 1, onEnd } = {}) {
  if (!isSpeechSynthesisSupported()) {
    if (onEnd) onEnd()
    return Promise.resolve()
  }
  window.speechSynthesis.cancel()
  return new Promise(resolve => {
    const utter = new SpeechSynthesisUtterance(String(text))
    utter.lang = lang
    utter.rate = rate
    const voice = pickVoice(lang)
    if (voice) utter.voice = voice
    const finish = () => { if (onEnd) onEnd(); resolve() }
    utter.onend = finish
    utter.onerror = finish
    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = () => {
        const v = pickVoice(lang)
        if (v) utter.voice = v
        window.speechSynthesis.speak(utter)
      }
    } else {
      window.speechSynthesis.speak(utter)
    }
  })
}

/**
 * Native TTS via @capacitor-community/text-to-speech. Uses the OS's
 * built-in German voices (better quality than most browser voices).
 */
async function speakNative(text, { lang = 'de-DE', rate = 1, onEnd } = {}) {
  try {
    const { TextToSpeech } = await import('@capacitor-community/text-to-speech')
    await TextToSpeech.stop().catch(() => {})
    await TextToSpeech.speak({
      text: String(text),
      lang,
      rate,
      pitch: 1.0,
      volume: 1.0,
      category: 'ambient',
    })
  } catch (e) {
    console.warn('[speech-native] tts failed:', e?.message)
  }
  if (onEnd) onEnd()
}

export function stopSpeaking() {
  if (isNative()) {
    import('@capacitor-community/text-to-speech')
      .then(m => m.TextToSpeech.stop().catch(() => {}))
      .catch(() => {})
    return
  }
  if (isSpeechSynthesisSupported()) window.speechSynthesis.cancel()
}
