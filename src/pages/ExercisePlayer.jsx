import React, { useState, useEffect, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Clock, Zap, X } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useProgress } from '../context/ProgressContext'
import Navbar from '../components/Layout/Navbar'
import GrammarExercise from '../components/Exercises/GrammarExercise'
import ReadingExercise from '../components/Exercises/ReadingExercise'
import ListeningExercise from '../components/Exercises/ListeningExercise'
import WritingExercise from '../components/Exercises/WritingExercise'
import SpeakingExercise from '../components/Exercises/SpeakingExercise'
import Confetti from '../components/UI/Confetti'
import Modal from '../components/UI/Modal'
import ProgressBar from '../components/UI/ProgressBar'
import Button from '../components/UI/Button'
import { EXERCISES } from '../utils/exercises'

export default function ExercisePlayer() {
  const { id } = useParams()
  const { user } = useAuth()
  const { progress, recordExerciseResult, newAchievements } = useProgress()
  const navigate = useNavigate()

  const exercise = EXERCISES.find(e => e.id === id)

  const [score, setScore] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [confetti, setConfetti] = useState(false)
  const [timerOn, setTimerOn] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [showAchievement, setShowAchievement] = useState(false)
  // Reset state when id changes
  useEffect(() => {
    setScore(null)
    setShowResult(false)
    setConfetti(false)
    setSeconds(0)
    setTimerOn(true)
    setShowAchievement(false)
  }, [id])
  // Timer
  useEffect(() => {
    if (!timerOn) return
    const interval = setInterval(() => setSeconds(s => s + 1), 1000)
    return () => clearInterval(interval)
  }, [timerOn])

  // Auto-start timer
  useEffect(() => { setTimerOn(true) }, [])

  // Next exercise of the same type
  const nextExercise = useMemo(() => {
    if (!exercise) return null
    const sameType = EXERCISES.filter(e => e.type === exercise.type)
    const currentIndex = sameType.findIndex(e => e.id === id)
    if (currentIndex === -1) return null
    // Try next in same type, wrapping is not needed - just go forward
    return sameType[currentIndex + 1] || null
  }, [exercise, id])

  if (!exercise) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-gray-500">Übung nicht gefunden.</p>
          <Button onClick={() => navigate('/ejercicios')} className="mt-4">Zurück zu den Übungen</Button>
        </div>
      </div>
    )
  }

  const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`

  const handleComplete = (result) => {
    const finalScore = typeof result === 'number'
      ? result
      : typeof result?.score === 'number'
        ? result.score
        : result?.correct
          ? 100
          : 0
    setTimerOn(false)
    const perfect = finalScore >= 100
    const xpEarned = Math.round((finalScore / 100) * (exercise.xp || 10))
    setScore(finalScore)
    recordExerciseResult({
      exerciseId: exercise.id,
      type: exercise.type,
      score: finalScore,
      perfect,
      xpEarned,
    })
    if (perfect) setConfetti(true)
    setShowResult(true)
    if (newAchievements?.length > 0) setShowAchievement(true)
  }

  const getMotivationalMessage = (s) => {
    if (s < 50) return `Lass dich nicht entmutigen, ${user?.name}. Übe weiter und versuche es nochmal!`
    if (s < 80) return `Gut gemacht, ${user?.name}. Du hast es fast geschafft!`
    return `Ausgezeichnet, ${user?.name}! Das ist echtes Deutsch!`
  }

  const getScoreColor = (s) => {
    if (s >= 80) return 'text-green-500'
    if (s >= 50) return 'text-yellow-500'
    return 'text-red-500'
  }

  const renderExercise = () => {
    const props = {
      exercise,
      userName: user?.name,
      userLevel: user?.level,
      onComplete: handleComplete,
    }
    switch (exercise.type) {
      case 'grammar': return <GrammarExercise {...props} />
      case 'reading': return <ReadingExercise {...props} />
      case 'listening': return <ListeningExercise {...props} />
      case 'writing': return <WritingExercise {...props} />
      case 'speaking': return <SpeakingExercise {...props} />
      default: return <GrammarExercise {...props} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      {confetti && <Confetti active={true} onDone={() => setConfetti(false)} />}

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(`/ejercicios?tipo=${exercise.type}`)}
            className="flex items-center gap-1 text-gray-400 hover:text-orange-500 transition-colors text-sm"
            aria-label="Zurück zu den Übungen"
          >
            <ArrowLeft size={18} />
            Übungen
          </button>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <Clock size={16} />
              <span>{formatTime(seconds)}</span>
              <button
                onClick={() => setTimerOn(t => !t)}
                className="ml-1 text-xs underline hover:text-orange-500"
                aria-label={timerOn ? 'Timer pausieren' : 'Timer fortsetzen'}
              >
                {timerOn ? 'Pause' : 'Fortsetzen'}
              </button>
            </div>
            <span className="flex items-center gap-1 text-orange-500 text-sm font-semibold">
              <Zap size={16} />
              +{exercise.xp} XP
            </span>
          </div>
        </div>

        {/* Exercise header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 px-2 py-1 rounded-full capitalize">
              {exercise.type === 'grammar' ? 'Grammatik' :
                exercise.type === 'reading' ? 'Lesen' :
                  exercise.type === 'listening' ? 'Hören' :
                    exercise.type === 'speaking' ? 'Sprechen' : 'Schreiben'}
            </span>
            <span className="text-xs text-gray-400">Niveau {exercise.level} · Einheit {exercise.unit}</span>
          </div>
          <h1 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">{exercise.title}</h1>
        </motion.div>

        {/* Exercise content */}
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="exercise"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {renderExercise()}
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card text-center py-10"
            >
              <div className="text-7xl font-extrabold mb-3">
                {score >= 80 ? '🎉' : score >= 50 ? '💪' : '📚'}
              </div>
              <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-1">
                <span className={getScoreColor(score)}>{score}%</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-2">Endpunktzahl</p>
              <p className="text-gray-700 dark:text-gray-200 font-medium text-lg mb-6 max-w-sm mx-auto">
                {getMotivationalMessage(score)}
              </p>

              <div className="w-full max-w-xs mx-auto mb-6">
                <ProgressBar value={score} color={score >= 80 ? 'green' : score >= 50 ? 'yellow' : 'red'} showPercent />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={() => { setShowResult(false); setScore(null); setSeconds(0); setTimerOn(true) }}
                  variant="secondary"
                >
                  Übung wiederholen
                </Button>
                {nextExercise ? (
                  <Button
                    onClick={() => navigate(`/ejercicio/${nextExercise.id}`)}
                    variant="primary"
                  >
                    Nächste Übung →
                  </Button>
                ) : (
                  <Button onClick={() => navigate(`/ejercicios?tipo=${exercise.type}`)} variant="primary">
                    Mehr Übungen
                  </Button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Achievement toast */}
        <AnimatePresence>
          {showAchievement && newAchievements?.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-20 sm:bottom-6 right-3 sm:right-6 left-3 sm:left-auto bg-yellow-400 text-gray-900 rounded-2xl p-4 shadow-xl flex items-center gap-3 z-50 sm:max-w-xs"
            >
              <span className="text-2xl">🏅</span>
              <div>
                <p className="font-bold text-sm">Neuer Erfolg freigeschaltet!</p>
                <p className="text-xs mt-0.5">{newAchievements[0]?.label}</p>
              </div>
              <button
                onClick={() => setShowAchievement(false)}
                className="ml-auto"
                aria-label="Erfolgsbenachrichtigung schließen"
              >
                <X size={16} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}