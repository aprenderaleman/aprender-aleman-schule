import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import Button from '../components/UI/Button'
import Toast from '../components/UI/Toast'

export default function Login() {
  const { login, toast } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPass, setShowPass] = useState(false)

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (!form.email || !form.password) {
      setError('Bitte fülle alle Felder aus.')
      return
    }
    setLoading(true)
    const result = await login(form)
    setLoading(false)
    if (result.error) {
      setError(result.error)
    } else {
      // Read user from context — login() already updated the state and localStorage
      const stored = JSON.parse(localStorage.getItem('auth_user') || '{}')
      if (stored.role === 'superadmin' || stored.role === 'admin') {
        navigate('/admin')
      } else {
        navigate('/dashboard')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <Toast toast={toast} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
            <span className="font-extrabold text-orange-500 text-2xl">Schule</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Willkommen zurück</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Melde dich an, um weiter zu lernen</p>
        </div>

        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
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
                  enterKeyHint="next"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="du@beispiel.de"
                  aria-label="E-Mail"
                  className="input-field pl-10"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5">
                Passwort
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type={showPass ? 'text' : 'password'}
                  autoComplete="current-password"
                  enterKeyHint="go"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Dein Passwort"
                  aria-label="Passwort"
                  className="input-field pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(p => !p)}
                  aria-label={showPass ? 'Passwort verbergen' : 'Passwort anzeigen'}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
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
              Anmelden
            </Button>
          </form>

          <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-700 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Noch kein Konto?{' '}
              <Link to="/registro" className="font-semibold text-orange-500 hover:text-orange-600 transition-colors">
                Kostenlos registrieren
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center mt-6">
          <Link to="/" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
            ← Zurück zur Startseite
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
