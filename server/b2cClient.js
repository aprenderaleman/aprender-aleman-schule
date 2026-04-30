// HTTP client to consume b2c.aprender-aleman.de internal endpoints.
// Centralizes timeout, retry, error semantics (fail-open vs fail-closed),
// and API key handling. Read from env, never hardcoded.

const B2C_API_BASE = process.env.B2C_API_BASE || ''
const B2C_API_KEY  = process.env.B2C_INTERNAL_API_KEY || ''
const TIMEOUT_MS   = 8_000

function isConfigured() {
  return !!(B2C_API_BASE && B2C_API_KEY)
}

/**
 * Low-level fetch wrapper with timeout + standard headers.
 */
async function call(pathAndQuery, { method = 'GET' } = {}) {
  if (!isConfigured()) {
    const err = new Error('b2c not configured (missing B2C_API_BASE / B2C_INTERNAL_API_KEY)')
    err.code = 'NOT_CONFIGURED'
    throw err
  }

  const url = `${B2C_API_BASE}${pathAndQuery}`
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)

  try {
    const res = await fetch(url, {
      method,
      headers: {
        'X-Internal-Api-Key': B2C_API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      signal: controller.signal,
    })

    // Auth/permission errors → fail closed
    if (res.status === 401 || res.status === 403) {
      const err = new Error(`b2c auth error: ${res.status}`)
      err.code = 'B2C_AUTH'
      err.status = res.status
      throw err
    }

    // 5xx → fail open (caller decides)
    if (res.status >= 500) {
      const err = new Error(`b2c upstream ${res.status}`)
      err.code = 'B2C_5XX'
      err.status = res.status
      throw err
    }

    if (!res.ok) {
      let body = ''
      try { body = await res.text() } catch {}
      const err = new Error(`b2c ${res.status}: ${body.slice(0, 200)}`)
      err.code = 'B2C_BAD_REQUEST'
      err.status = res.status
      throw err
    }

    return await res.json()
  } catch (e) {
    if (e.name === 'AbortError') {
      const err = new Error(`b2c timeout after ${TIMEOUT_MS}ms`)
      err.code = 'B2C_TIMEOUT'
      throw err
    }
    throw e
  } finally {
    clearTimeout(timer)
  }
}

/**
 * Bulk: list every active student (+ teachers/admins) from b2c.
 * Returns the full payload — caller iterates.
 */
async function fetchActiveStudents() {
  return await call('/api/internal/students/active')
}

/**
 * Single-user lookup. Used at login + page-level gating.
 * Returns: { isActiveStudent: boolean, role?: string, ... } based on b2c contract.
 *
 * Note: b2c returns 200 with `success:true, data:{isActiveStudent}` on hit,
 * and 200 with `success:true, data:{isActiveStudent:false}` on miss.
 */
async function verifyEmail(email) {
  const trimmed = String(email || '').trim().toLowerCase()
  if (!trimmed) return { isActiveStudent: false }
  const url = `/api/internal/student/verify?email=${encodeURIComponent(trimmed)}`
  const json = await call(url)
  // Accept both shapes: { success, data: { isActiveStudent } } or { isActiveStudent }
  const data = json?.data || json || {}
  return {
    isActiveStudent: !!data.isActiveStudent,
    role:            data.role || null,
    fullName:        data.full_name || data.fullName || null,
    userId:          data.user_id || data.userId || null,
    subscriptionStatus: data.subscription_status || data.subscriptionStatus || null,
    stripeCustomerId:   data.stripe_customer_id || data.stripeCustomerId || null,
    raw: data,
  }
}

// ─── In-memory TTL cache for verifyEmail ────────────────────────────
const CACHE_TTL_MS = 15 * 60 * 1000   // 15 minutes
const cache = new Map()

function cacheGet(key) {
  const hit = cache.get(key)
  if (!hit) return null
  if (Date.now() > hit.expiresAt) {
    cache.delete(key)
    return null
  }
  return hit.value
}

function cacheSet(key, value) {
  cache.set(key, { value, expiresAt: Date.now() + CACHE_TTL_MS })
}

function cacheInvalidate(email) {
  cache.delete(String(email || '').trim().toLowerCase())
}

// Periodic cleanup of expired entries (every 30 min)
setInterval(() => {
  const now = Date.now()
  for (const [k, v] of cache) if (v.expiresAt < now) cache.delete(k)
}, 30 * 60 * 1000)

/**
 * Cached version of verifyEmail. Use this everywhere except admin/debug routes.
 */
async function verifyEmailCached(email) {
  const key = String(email || '').trim().toLowerCase()
  if (!key) return { isActiveStudent: false }
  const cached = cacheGet(key)
  if (cached) return cached
  const fresh = await verifyEmail(key)
  cacheSet(key, fresh)
  return fresh
}

export {
  isConfigured,
  fetchActiveStudents,
  verifyEmail,
  verifyEmailCached,
  cacheInvalidate,
}
