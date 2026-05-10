import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Send, CheckCircle, ArrowLeft } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import Button from '../components/UI/Button'
import Toast from '../components/UI/Toast'
import Logo from '../components/UI/Logo'

const API_URL = import.meta.env.VITE_API_URL || ''

/**
 * Magic-link login.
 *  1. User types email
 *  2. We POST /api/auth/magic-link
 *  3. Backend verifies with b2c, sends a one-time link if active
 *  4. Always show "if your email is registered, we sent a link"
 *  5. User clicks link → /auto-login?magicToken=...
 */
export default function Login() {
  const { toast } = useAuth()
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const trimmed = email.trim().toLowerCase()
    if (!trimmed || !trimmed.includes('@')) {
      setError('Bitte gib eine gültige E-Mail-Adresse ein.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/api/auth/magic-link`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      })
      // Always treat as success (no enumeration). Even on 503 we show success
      // for security reasons; only network-level errors get surfaced.
      if (res.ok || res.status === 200) {
        setSent(true)
      } else if (res.status === 503) {
        setError('Anmeldedienst ist gerade nicht verfügbar. Bitte versuche es in ein paar Minuten erneut.')
      } else {
        // Be vague on other errors too
        setSent(true)
      }
    } catch {
      setError('Netzwerkfehler. Bitte überprüfe deine Verbindung.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen-d bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <Toast toast={toast} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <Logo size={36} />
            <span className="font-extrabold text-warm text-2xl">Schule</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Willkommen zurück</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Melde dich mit deiner E-Mail an</p>
        </div>

        <div className="card">
          <AnimatePresence mode="wait">
            {!sent ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
              >
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">
                    E-Mail
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      enterKeyHint="send"
                      autoCapitalize="off"
                      autoCorrect="off"
                      spellCheck="false"
                      autoFocus
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="du@beispiel.de"
                      aria-label="E-Mail"
                      className="input-field pl-10"
                    />
                  </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/15 border border-orange-100 dark:border-orange-900/30 rounded-xl p-3 flex items-start gap-2">
                  <Send size={14} className="text-warm shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                    Wir schicken dir einen einmaligen Anmeldelink per E-Mail. <strong>Kein Passwort nötig.</strong>
                  </p>
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-red-500 font-medium bg-red-50 dark:bg-red-900/30 px-3 py-2 rounded-lg"
                  >
                    {error}
                  </motion.p>
                )}

                <Button type="submit" loading={loading} variant="primary" className="w-full" size="lg">
                  <Send size={16} className="mr-2" />
                  Anmeldelink senden
                </Button>
              </motion.form>
            ) : (
              <motion.div
                key="sent"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-4"
              >
                <div className="w-14 h-14 rounded-full bg-success/15 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={28} className="text-success" />
                </div>
                <h2 className="font-extrabold text-lg text-foreground mb-2">Schau in dein Postfach</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Falls die Adresse <strong className="text-foreground break-all">{email}</strong> registriert
                  und aktiv ist, haben wir dir gerade einen Anmeldelink geschickt. Der Link ist <strong>15 Minuten</strong> gültig.
                </p>
                <p className="text-xs text-muted-foreground mb-5">
                  Tipp: schau auch im Spam-Ordner.
                </p>
                <button
                  type="button"
                  onClick={() => { setSent(false); setEmail('') }}
                  className="text-sm text-warm hover:text-orange-700 font-semibold inline-flex items-center gap-1"
                >
                  <ArrowLeft size={14} />
                  Andere E-Mail verwenden
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-700 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Bist du Schüler von{' '}
              <a
                href="https://aprender-aleman.de"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-warm hover:text-orange-700 transition-colors"
              >
                Aprender-Aleman.de
              </a>
              ? Logge dich auf der Hauptplattform ein und du wirst weitergeleitet.
            </p>
          </div>
        </div>

        <p className="text-center mt-6">
          <Link to="/" className="text-sm text-gray-400 hover:text-warm transition-colors">
            ← Zurück zur Startseite
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
