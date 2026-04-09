import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import Button from '../components/UI/Button'

const API_URL = import.meta.env.VITE_API_URL || ''

export default function AutoLogin() {
  const [searchParams] = useSearchParams()
  const { ssoLogin } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  useEffect(() => {
    const token = searchParams.get('token')

    if (!token) {
      setError('No se recibió token de autenticación.')
      return
    }

    // Verify SSO token with backend and log in
    fetch(`${API_URL}/api/auth/sso-verify?token=${encodeURIComponent(token)}`)
      .then(res => {
        if (!res.ok) throw new Error('Token inválido o expirado')
        return res.json()
      })
      .then(data => {
        ssoLogin(data.token, data.user)
        navigate('/dashboard', { replace: true })
      })
      .catch(() => {
        setError('El enlace de acceso ha expirado o no es válido. Vuelve a tu panel en app.aprender-aleman.de e inténtalo de nuevo.')
      })
  }, [searchParams, ssoLogin, navigate])

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="text-5xl mb-4">😕</div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
            No se pudo iniciar sesión
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-6">{error}</p>
          <a href="https://app.aprender-aleman.de" rel="noopener noreferrer">
            <Button variant="primary" size="lg">
              Volver a app.aprender-aleman.de
            </Button>
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <LoadingSpinner message="Iniciando sesión automáticamente..." />
    </div>
  )
}
