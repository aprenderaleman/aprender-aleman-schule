// Magic link tokens. SCHULE-owned (independent from b2c).
// Storage: schule_magic_links table.
// Tokens are SHA-256-hashed at rest so a leaked DB doesn't enable account takeover.

import crypto from 'node:crypto'

const TTL_MS = 15 * 60 * 1000   // 15 minutes — match what we tell users in the email

function hashToken(rawToken) {
  return crypto.createHash('sha256').update(rawToken).digest('hex')
}

function generateRawToken() {
  // 32 bytes = 256 bits — collision-free in practice
  return crypto.randomBytes(32).toString('hex')
}

/**
 * Create a one-time magic link for the given email.
 * Returns the RAW token (only stored hashed in DB).
 * Caller is responsible for emailing the user with this token in the URL.
 */
async function createMagicLink(pool, { email, ip = null, userAgent = null }) {
  const rawToken = generateRawToken()
  const tokenHash = hashToken(rawToken)
  const ttlMinutes = Math.round(TTL_MS / 60000)

  // Compute expiresAt server-side via DATE_ADD(NOW(), INTERVAL N MINUTE).
  // This avoids any timezone mismatch between Node and MySQL — previously,
  // a Node-side `new Date(...)` was being serialised with the wrong TZ
  // offset and stored in the past, so links were dead on arrival.
  await pool.query(
    `INSERT INTO schule_magic_links (email, tokenHash, expiresAt, requesterIp, userAgent)
     VALUES (?, ?, DATE_ADD(NOW(), INTERVAL ? MINUTE), ?, ?)`,
    [email.trim().toLowerCase(), tokenHash, ttlMinutes, ip, userAgent]
  )

  return { token: rawToken, ttlMinutes }
}

/**
 * Validate a raw token. If valid:
 *   - marks it as used (so a replay attack can't reuse the link)
 *   - returns the associated email
 * If invalid: returns null.
 */
async function consumeMagicLink(pool, rawToken) {
  if (!rawToken || rawToken.length < 32) return null
  const tokenHash = hashToken(rawToken)

  // Look the row up with the expiry / used checks fully server-side so
  // there's no JS↔MySQL timezone arithmetic in the validity decision.
  const [rows] = await pool.query(
    `SELECT id, email
       FROM schule_magic_links
      WHERE tokenHash = ?
        AND usedAt IS NULL
        AND expiresAt > NOW()
      LIMIT 1`,
    [tokenHash]
  )
  if (rows.length === 0) return null
  const row = rows[0]

  // Mark as used atomically (CAS-style: only succeeds if usedAt is still null)
  const [result] = await pool.query(
    `UPDATE schule_magic_links SET usedAt = NOW() WHERE id = ? AND usedAt IS NULL`,
    [row.id]
  )
  if (result.affectedRows === 0) return null  // race lost — someone else used it

  return { email: row.email }
}

/**
 * Periodic cleanup of expired/used links older than 24h. Called by the cron.
 */
async function purgeOld(pool) {
  await pool.query(
    `DELETE FROM schule_magic_links
     WHERE (usedAt IS NOT NULL AND usedAt < DATE_SUB(NOW(), INTERVAL 1 DAY))
        OR (expiresAt < DATE_SUB(NOW(), INTERVAL 1 DAY))`
  )
}

export { createMagicLink, consumeMagicLink, purgeOld, TTL_MS }
