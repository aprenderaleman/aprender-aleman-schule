import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Shield, ExternalLink, Sparkles, Check } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import Button from '../components/UI/Button'

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ fullName: '', email: '', password: '', confirmPassword: '' })
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!form.fullName.trim() || !form.email.trim() || !form.password) {
      return setError('Alle Felder sind erforderlich.')
    }
    if (form.password.length < 6) {
      return setError('Das Passwort muss mindestens 6 Zeichen lang sein.')
    }
    if (form.password !== form.confirmPassword) {
      return setError('Die Passwörter stimmen nicht überein.')
    }

    setLoading(true)
    const result = await register({ fullName: form.fullName, email: form.email, password: form.password })
    setLoading(false)

    if (result.error) setError(result.error)
    else navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
            <span className="font-extrabold text-orange-500 text-2xl">Schule</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Jetzt kostenlos starten</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
            <strong className="text-warm">10.000 XP gratis</strong> · danach <strong>15&thinsp;€/Monat</strong>
          </p>
        </div>

        {/* Transparent pricing card — qualifies the lead before they sign up */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-5 rounded-2xl border-2 border-warm/40 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/15 dark:to-amber-900/10 p-4"
        >
          <div className="flex items-start gap-3">
            <div className="bg-warm text-warm-foreground rounded-xl p-2 shrink-0">
              <Sparkles size={18} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 dark:text-gray-100 text-sm mb-2">
                Was du bekommst:
              </h3>
              <ul className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-1.5">
                  <Check size={14} className="text-success shrink-0 mt-0.5" />
                  <span><strong>10.000 XP gratis</strong> — alle Funktionen ohne Kreditkarte testen</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check size={14} className="text-success shrink-0 mt-0.5" />
                  <span>Übungen, KI-Lehrer Hans, Karteikarten, Sprechen mit Aussprache-Feedback</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check size={14} className="text-success shrink-0 mt-0.5" />
                  <span>Danach <strong>15&thinsp;€/Monat</strong> — jederzeit kündbar, keine Bindung</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <form onSubmit={handleSubmit} className="card">
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm p-3 rounded-xl mb-4">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Vollständiger Name</label>
              <input
                type="text"
                value={form.fullName}
                onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))}
                className="input-field"
                placeholder="Dein Name"
                autoComplete="name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">E-Mail</label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="input-field"
                placeholder="du@beispiel.de"
                autoComplete="email"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Passwort</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={form.password}
                  onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                  className="input-field pr-10"
                  placeholder="Mindestens 6 Zeichen"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(p => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={showPass ? 'Passwort verbergen' : 'Passwort anzeigen'}
                >
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Passwort bestätigen</label>
              <input
                type="password"
                value={form.confirmPassword}
                onChange={e => setForm(f => ({ ...f, confirmPassword: e.target.value }))}
                className="input-field"
                placeholder="Passwort wiederholen"
                autoComplete="new-password"
              />
            </div>
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full mt-6" disabled={loading}>
            {loading ? 'Konto wird erstellt...' : 'Kostenlos starten — 10.000 XP'}
          </Button>
          <p className="text-[11px] text-center text-gray-400 mt-2">
            Keine Kreditkarte erforderlich. Nach 10.000 XP: 15&thinsp;€/Monat oder kündigen.
          </p>

          <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-700 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Schon ein Konto?{' '}
              <Link to="/login" className="font-semibold text-orange-500 hover:text-orange-600 transition-colors">
                Anmelden
              </Link>
            </p>
          </div>
        </form>

        {/* SSO reminder for existing Aprender-Aleman.de students — placed below the form */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-5 rounded-2xl border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4"
        >
          <div className="flex items-start gap-3">
            <div className="bg-blue-500 text-white rounded-xl p-2 shrink-0">
              <Shield size={18} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-blue-900 dark:text-blue-200 text-sm mb-1">
                Bist du bereits Schüler von{' '}
                <a
                  href="https://aprender-aleman.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-700 dark:hover:text-blue-100 transition-colors"
                >
                  Aprender-Aleman.de
                </a>
                ?
              </h3>
              <p className="text-xs text-blue-800/80 dark:text-blue-300/80 leading-relaxed mb-2">
                Dein Zugriff auf Schule ist <strong>kostenlos inbegriffen</strong>. Melde dich nicht hier an — logge dich auf deiner Hauptplattform ein und du wirst automatisch weitergeleitet.
              </p>
              <a
                href="https://app.aprender-aleman.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200 transition-colors"
              >
                Zu app.aprender-aleman.de <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </motion.div>

        <p className="text-center mt-6">
          <Link to="/" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
            ← Zurück zur Startseite
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
