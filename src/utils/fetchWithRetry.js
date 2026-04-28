/**
 * fetch() wrapper with automatic retry + exponential backoff for transient
 * failures (network errors, 502/503/504). Doesn't retry 4xx responses since
 * those are usually a real problem with the request.
 *
 * Usage: const res = await fetchWithRetry('/api/foo', { method: 'POST', body })
 */
export async function fetchWithRetry(url, options = {}, { retries = 2, baseDelay = 400 } = {}) {
  let lastErr
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, options)
      // Retry on transient server errors
      if ((res.status === 502 || res.status === 503 || res.status === 504) && attempt < retries) {
        await delay(baseDelay * Math.pow(2, attempt))
        continue
      }
      return res
    } catch (err) {
      lastErr = err
      if (attempt < retries) {
        await delay(baseDelay * Math.pow(2, attempt))
        continue
      }
      throw err
    }
  }
  throw lastErr
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
