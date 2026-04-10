import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

const AuthContext = createContext(null)

const API_URL = import.meta.env.VITE_API_URL || ''

function getStoredAuth() {
  try {
    const token = localStorage.getItem('auth_token')
    const user = localStorage.getItem('auth_user')
    if (token && user) return { token, user: JSON.parse(user) }
  } catch {}
  return null
}

function storeAuth(token, user) {
  localStorage.setItem('auth_token', token)
  localStorage.setItem('auth_user', JSON.stringify(user))
}

function clearAuth() {
  localStorage.removeItem('auth_token')
  localStorage.removeItem('auth_user')
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [toast, setToast] = useState(null)

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type, id: Date.now() })
    setTimeout(() => setToast(null), 3500)
  }, [])

  // On mount: check stored token and verify with server
  useEffect(() => {
    const stored = getStoredAuth()
    if (!stored) {
      setLoading(false)
      return
    }

    // Verify token is still valid
    fetch(`${API_URL}/api/auth/me`, {
      headers: { Authorization: `Bearer ${stored.token}` },
    })
      .then(res => {
        if (!res.ok) throw new Error('Invalid token')
        return res.json()
      })
      .then(userData => {
        const u = { ...userData, token: stored.token }
        storeAuth(stored.token, userData)
        setUser(userData)
      })
      .catch(() => {
        // Token expired or invalid – clear and require re-login
        clearAuth()
        setUser(null)
      })
      .finally(() => setLoading(false))
  }, [])

  const login = useCallback(async ({ email, password }) => {
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        return { error: data.error || 'Fehler bei der Anmeldung.' }
      }

      storeAuth(data.token, data.user)
      setUser(data.user)
      showToast(`Willkommen zurück, ${data.user.name}!`, 'success')
      return { success: true }
    } catch {
      return { error: 'Verbindung zum Server fehlgeschlagen.' }
    }
  }, [showToast])

  const register = useCallback(async ({ fullName, email, password }) => {
    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, password }),
      })
      const data = await res.json()
      if (!res.ok) return { error: data.error || 'Fehler bei der Registrierung.' }
      storeAuth(data.token, data.user)
      setUser(data.user)
      showToast(`Willkommen, ${data.user.name}! 🎉`, 'success')
      return { success: true }
    } catch {
      return { error: 'Verbindung zum Server fehlgeschlagen.' }
    }
  }, [showToast])

  const logout = useCallback(() => {
    clearAuth()
    setUser(null)
  }, [])

  const updateProfile = useCallback((updates) => {
    // For now, just update locally since profile edits are local to the new app
    const updated = { ...user, ...updates }
    setUser(updated)
    localStorage.setItem('auth_user', JSON.stringify(updated))
    showToast('Profil erfolgreich aktualisiert.', 'success')
  }, [user, showToast])

  // SSO login: called from /auto-login page with token from main app
  const ssoLogin = useCallback((token, userData) => {
    storeAuth(token, userData)
    setUser(userData)
    showToast(`Willkommen, ${userData.name}! 🎉`, 'success')
  }, [showToast])

  // Helper to get the auth token for API calls
  const getToken = useCallback(() => {
    return localStorage.getItem('auth_token')
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, toast, login, register, ssoLogin, logout, updateProfile, showToast, getToken }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
