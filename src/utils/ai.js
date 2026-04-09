const API_URL = import.meta.env.VITE_API_URL || ''

function getAuthHeaders() {
  const token = localStorage.getItem('auth_token')
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }
}

export async function evaluateWriting(userName, userLevel, prompt, submission) {
  try {
    const res = await fetch(`${API_URL}/api/ai/evaluate-writing`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ prompt, submission, userName, userLevel }),
    })
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

export async function getGrammarExplanation(userName, userLevel, topic) {
  try {
    const res = await fetch(`${API_URL}/api/ai/grammar-explanation`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ topic, userName, userLevel }),
    })
    if (!res.ok) return null
    const data = await res.json()
    return data.explanation
  } catch {
    return null
  }
}

// These functions are no longer needed with static exercises, but kept for compatibility
export async function generateGrammarExercise() { return null }
export async function generateReadingText() { return null }
export async function translateWord() { return null }
