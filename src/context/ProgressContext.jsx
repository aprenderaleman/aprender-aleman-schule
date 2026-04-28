import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { useAuth } from './AuthContext'
import { checkAchievements } from '../utils/achievements'
import { useBroadcastSync } from '../hooks/useBroadcastSync'

const ProgressContext = createContext(null)
const API_URL = import.meta.env.VITE_API_URL || ''

const defaultProgress = {
  xp: 0,
  level: 'A1',
  streak: 0,
  lastActivityDate: null,
  completedExercises: [],
  exerciseHistory: [],
  achievements: [],
  skillScores: {
    grammar: 0,
    reading: 0,
    listening: 0,
    writing: 0,
  },
  unlockedUnits: { A1: [1,2,3], A2: [1,2,3], B1: [1,2,3], B2: [1,2,3], C1: [1,2,3] },
  perfectStreak: 0,
}

function getAuthHeaders() {
  const token = localStorage.getItem('auth_token')
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }
}

export function ProgressProvider({ children }) {
  const { user } = useAuth()
  const [progress, setProgress] = useState(defaultProgress)
  const [newAchievements, setNewAchievements] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [reloadTick, setReloadTick] = useState(0)

  // Cross-tab sync: when another tab updates progress, refetch here
  const broadcast = useBroadcastSync('schule-progress', (msg) => {
    if (msg?.type === 'progress-updated' && msg?.userId === user?.id) {
      setReloadTick(t => t + 1)
    }
  })

  // Load progress from backend
  useEffect(() => {
    if (!user?.id) { setLoaded(false); return }
    let cancelled = false

    async function loadProgress() {
      try {
        const res = await fetch(`${API_URL}/api/progress`, { headers: getAuthHeaders() })
        if (!res.ok) throw new Error('Failed to load')
        const data = await res.json()
        if (!cancelled) {
          setProgress({
            ...defaultProgress,
            ...data,
            level: user?.level || 'A1',
          })
          setLoaded(true)
        }
      } catch {
        // Fallback: use localStorage if backend is unavailable
        const stored = localStorage.getItem(`progress_${user.id}`)
        if (stored && !cancelled) {
          try {
            setProgress({ ...defaultProgress, ...JSON.parse(stored), level: user?.level || 'A1' })
          } catch { /* ignore */ }
        }
        if (!cancelled) setLoaded(true)
      }
    }
    loadProgress()
    return () => { cancelled = true }
  // reloadTick triggers a refetch when another tab broadcasts progress changes
  }, [user?.id, user?.level, reloadTick])

  // Also save to localStorage as cache
  useEffect(() => {
    if (user?.id && loaded) {
      localStorage.setItem(`progress_${user.id}`, JSON.stringify(progress))
    }
  }, [progress, user?.id, loaded])

  const addXP = useCallback((amount) => {
    setProgress(prev => ({ ...prev, xp: prev.xp + amount }))
  }, [])

  const recordExerciseResult = useCallback(({ exerciseId, type, score, perfect, xpEarned, timeSpent }) => {
    setProgress(prev => {
      // Streak calculation
      const today = new Date().toDateString()
      const lastActivity = prev.lastActivityDate
      let streak = prev.streak || 0
      if (!lastActivity) {
        streak = 1
      } else {
        const last = new Date(lastActivity).toDateString()
        const yesterday = new Date(Date.now() - 86400000).toDateString()
        if (last === today) { /* same day */ }
        else if (last === yesterday) { streak += 1 }
        else { streak = 1 }
      }

      const alreadyCompleted = prev.completedExercises.includes(exerciseId)
      let totalXP = prev.xp + xpEarned
      if (!alreadyCompleted) totalXP += 50
      if (perfect) totalXP += 100
      if (streak > prev.streak) totalXP += 25

      const finalXpEarned = totalXP - prev.xp

      const completedExercises = alreadyCompleted
        ? prev.completedExercises
        : [...prev.completedExercises, exerciseId]

      const historyEntry = {
        exerciseId, type, score, perfect,
        date: new Date().toISOString(),
        xpEarned: finalXpEarned,
      }
      const exerciseHistory = [historyEntry, ...(prev.exerciseHistory || [])].slice(0, 100)

      const skillScores = { ...prev.skillScores }
      const skillKey = type
      if (skillKey && skillScores[skillKey] !== undefined) {
        skillScores[skillKey] = Math.min(100, (skillScores[skillKey] || 0) + (score / 100) * 5)
      }

      const perfectStreak = perfect ? (prev.perfectStreak || 0) + 1 : 0

      const updated = {
        ...prev,
        xp: totalXP,
        streak,
        lastActivityDate: new Date().toISOString(),
        completedExercises,
        exerciseHistory,
        skillScores,
        perfectStreak,
      }

      // Check achievements
      const earned = checkAchievements(updated, prev.achievements || [])
      if (earned.length > 0) {
        updated.achievements = [...(prev.achievements || []), ...earned.map(a => a.id)]
        setNewAchievements(earned)
        setTimeout(() => setNewAchievements([]), 5000)
        // Save achievements to backend
        earned.forEach(a => {
          fetch(`${API_URL}/api/progress/achievement`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify({ achievementId: a.id }),
          }).catch(() => {})
        })
      }

      // Sync exercise result to backend, then notify other tabs
      fetch(`${API_URL}/api/progress/exercise`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ exerciseId, exerciseType: type, score, perfect, xpEarned: finalXpEarned, timeSpent: timeSpent || 0 }),
      })
        .then(() => broadcast({ type: 'progress-updated', userId: user?.id }))
        .catch(() => {})

      return updated
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id])

  const unlockUnit = useCallback((level, unit) => {
    setProgress(prev => {
      const levelUnits = prev.unlockedUnits[level] || []
      if (levelUnits.includes(unit)) return prev
      return {
        ...prev,
        unlockedUnits: { ...prev.unlockedUnits, [level]: [...levelUnits, unit] },
      }
    })
  }, [])

  const getSkillLevel = useCallback((skill) => {
    const score = progress.skillScores[skill] || 0
    if (score >= 80) return 'Fortgeschritten'
    if (score >= 50) return 'Mittelstufe'
    if (score >= 20) return 'Grundlagen'
    return 'Anfänger'
  }, [progress.skillScores])

  return (
    <ProgressContext.Provider value={{
      progress,
      addXP,
      recordExerciseResult,
      unlockUnit,
      getSkillLevel,
      newAchievements,
      setNewAchievements,
    }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider')
  return ctx
}
