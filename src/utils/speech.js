// Thin wrappers around the browser's Web Speech APIs so callers don't
// have to sprinkle vendor-prefix / feature-detection boilerplate. We use
// these instead of paid Whisper/TTS: quality is good enough for German
// language learning and it costs zero cents.

// ─── Speech recognition (STT) ─────────────────────────────────────────

const SR = typeof window !== 'undefined'
  ? (window.SpeechRecognition || window.webkitSpeechRecognition)
  : null

export function isSpeechRecognitionSupported() {
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
    // The API resolves via onend right after onerror, so we just log.
    if (e?.error !== 'no-speech' && e?.error !== 'aborted') {
      console.warn('[speech] recognition error:', e.error)
    }
  }

  try { rec.start() } catch { /* already started */ }

  return {
    stop() { try { rec.stop() } catch {} ; return done },
    abort() { try { rec.abort() } catch {} ; return done },
  }
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
export function speak(text, { lang = 'de-DE', rate = 1, onEnd } = {}) {
  if (!isSpeechSynthesisSupported() || !text) {
    if (onEnd) onEnd()
    return Promise.resolve()
  }

  // Cancel anything currently queued so a new utterance takes over.
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

    // Some browsers need voices loaded before speak works — nudge them.
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

export function stopSpeaking() {
  if (isSpeechSynthesisSupported()) window.speechSynthesis.cancel()
}
