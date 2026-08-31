import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import Button from '../components/UI/Button'

const API_URL = import.meta.env.VITE_API_URL || ''

/**
 * Handles two flows:
 *  - SSO (legacy from app.aprender-aleman.de):  ?token=...
 *  - Magic-link (email):                        ?magicToken=...
 *
 * Both end up logged in via ssoLogin() into AuthContext.
 */
export default function AutoLogin() {
  const [searchParams] = useSearchParams()
  const { ssoLogin } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const [errorContext, setErrorContext] = useState('sso')  // 'sso' | 'magic'

  useEffect(() => {
    const ssoToken = searchParams.get('token')
    const magicToken = searchParams.get('magicToken')
    // Deep-link opcional. b2c manda ?next=/deutschb1 en el redirectUrl que
    // recibe de /api/b2c/sso-link para que el profe aterrice en el curso
    // seleccionado en vez del dashboard. Validamos a path relativo para
    // que no se pueda redirigir fuera del dominio.
    const rawNext = searchParams.get('next')
    const nextPath =
      rawNext && /^\/[^/\\]/.test(rawNext) && !/^\/\//.test(rawNext)
        ? rawNext
        : null

    const landFor = (role) => {
      if (nextPath) return nextPath
      if (role === 'admin' || role === 'superadmin') return '/admin'
      if (role === 'teacher') return '/cursos'
      return '/dashboard'
    }

    if (magicToken) {
      // ── Magic link flow ─────────────────────────────
      setErrorContext('magic')
      fetch(`${API_URL}/api/auth/magic-link/consume`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: magicToken }),
      })
        .then(async res => {
          const data = await res.json().catch(() => ({}))
          if (!res.ok) throw new Error(data.error || 'invalid')
          return data
        })
        .then(data => {
          ssoLogin(data.token, data.user)
          // Strip the token from the URL for safety
          window.history.replaceState({}, '', '/auto-login')
          navigate(landFor(data.user.role), { replace: true })
        })
        .catch(() => {
          setError('Der Anmeldelink ist abgelaufen oder ungültig. Bitte fordere einen neuen Link an.')
        })
      return
    }

    if (ssoToken) {
      // ── SSO flow (from app.aprender-aleman.de) ──────
      setErrorContext('sso')
      fetch(`${API_URL}/api/auth/sso-verify?token=${encodeURIComponent(ssoToken)}`)
        .then(res => {
          if (!res.ok) throw new Error('Ungültiges oder abgelaufenes Token')
          return res.json()
        })
        .then(data => {
          ssoLogin(data.token, data.user)
          navigate(landFor(data.user.role), { replace: true })
        })
        .catch(() => {
          setError('Der Zugangslink ist abgelaufen oder ungültig. Kehre zu deinem Dashboard unter app.aprender-aleman.de zurück und versuche es erneut.')
        })
      return
    }

    setError('Kein Authentifizierungstoken erhalten.')
  }, [searchParams, ssoLogin, navigate])

  if (error) {
    const isMagic = errorContext === 'magic'
    return (
      <div className="min-h-screen-d bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="text-5xl mb-4">😕</div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
            Anmeldung fehlgeschlagen
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-6">{error}</p>
          {isMagic ? (
            <Link to="/login">
              <Button variant="primary" size="lg">
                Neuen Anmeldelink anfordern
              </Button>
            </Link>
          ) : (
            <a href="https://app.aprender-aleman.de" rel="noopener noreferrer">
              <Button variant="primary" size="lg">
                Zurück zu app.aprender-aleman.de
              </Button>
            </a>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen-d bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <LoadingSpinner message="Anmeldung läuft…" />
    </div>
  )
}
