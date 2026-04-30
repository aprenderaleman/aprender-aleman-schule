import React, { useEffect, useState, useCallback } from 'react'
import MaintenancePage from './MaintenancePage'

const API_URL = import.meta.env.VITE_API_URL || ''
const FORCED = import.meta.env.VITE_MAINTENANCE_MODE === 'true'

const POLL_INTERVAL_MS = 30_000      // re-check every 30s while down
const HEALTH_TIMEOUT_MS = 5_000      // give up on a single health check after 5s

/**
 * Wraps the entire app. On mount, pings the backend's /api/health.
 *  - 200 OK → renders children (normal app)
 *  - anything else → renders MaintenancePage
 *
 * While in maintenance mode it auto-retries every 30s; when the backend
 * recovers, the app loads automatically without the user reloading.
 *
 * Override:
 *  - VITE_MAINTENANCE_MODE=true → always show maintenance, skip the check
 *    (useful for planned maintenance windows)
 */
export default function MaintenanceGate({ children }) {
  const [status, setStatus] = useState('checking')   // checking | ok | down
  const [retrying, setRetrying] = useState(false)

  const checkHealth = useCallback(async () => {
    if (FORCED) { setStatus('down'); return }

    setRetrying(true)
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), HEALTH_TIMEOUT_MS)
    try {
      const res = await fetch(`${API_URL}/api/health`, {
        signal: controller.signal,
        cache: 'no-store',
      })
      if (res.ok) {
        setStatus('ok')
      } else {
        setStatus('down')
      }
    } catch {
      setStatus('down')
    } finally {
      clearTimeout(timer)
      setRetrying(false)
    }
  }, [])

  // Initial check
  useEffect(() => {
    checkHealth()
  }, [checkHealth])

  // While down, poll periodically so the user doesn't have to refresh
  useEffect(() => {
    if (status !== 'down') return
    const id = setInterval(checkHealth, POLL_INTERVAL_MS)
    return () => clearInterval(id)
  }, [status, checkHealth])

  // First-render: brief blank to avoid flashing maintenance for a few ms
  if (status === 'checking') {
    return (
      <div className="min-h-screen-d bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
    )
  }

  if (status === 'down') {
    return <MaintenancePage retrying={retrying} onRetry={checkHealth} />
  }

  return children
}
