import React, { useState, useMemo, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, RotateCcw, ChevronRight, Layers, Star, Clock, CheckCircle, XCircle, Brain } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useProgress } from '../context/ProgressContext'
import Navbar from '../components/Layout/Navbar'
import Toast from '../components/UI/Toast'
import { FLASHCARD_TOPICS } from '../data/flashcards'

// SM-2 Spaced Repetition defaults
const DEFAULT_CARD_STATE = { interval: 0, repetition: 0, easeFactor: 2.5, nextReview: 0 }

function getCardState(cardId) {
  try {
    const stored = JSON.parse(localStorage.getItem('flashcard_progress') || '{}')
    return stored[cardId] || { ...DEFAULT_CARD_STATE }
  } catch { return { ...DEFAULT_CARD_STATE } }
}

function saveCardState(cardId, state) {
  try {
    const stored = JSON.parse(localStorage.getItem('flashcard_progress') || '{}')
    stored[cardId] = state
    localStorage.setItem('flashcard_progress', JSON.stringify(stored))
  } catch {}
}

function getAllProgress() {
  try {
    return JSON.parse(localStorage.getItem('flashcard_progress') || '{}')
  } catch { return {} }
}

// SM-2 algorithm
function sm2(cardState, quality) {
  // quality: 0 = Again, 1 = Hard, 3 = Good, 5 = Easy
  let { interval, repetition, easeFactor } = cardState

  if (quality < 3) {
    repetition = 0
    interval = 0
  } else {
    if (repetition === 0) interval = 1
    else if (repetition === 1) interval = 6
    else interval = Math.round(interval * easeFactor)
    repetition += 1
  }

  easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  if (easeFactor < 1.3) easeFactor = 1.3

  const nextReview = Date.now() + interval * 24 * 60 * 60 * 1000

  return { interval, repetition, easeFactor, nextReview }
}

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1']

// Topic Selection Screen
function TopicSelector({ level, onSelect }) {
  const [selectedLevel, setSelectedLevel] = useState(level)
  const topics = FLASHCARD_TOPICS[selectedLevel] || FLASHCARD_TOPICS['A1']
  const progress = getAllProgress()

  return (
    <div>
      {/* Level tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {LEVELS.map(l => (
          <button
            key={l}
            onClick={() => setSelectedLevel(l)}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              selectedLevel === l
                ? 'bg-orange-500 text-white shadow-sm'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {topics.map(topic => {
        const total = topic.cards.length
        const learned = topic.cards.filter(c => {
          const state = progress[`${topic.id}-${c.de}`]
          return state && state.repetition >= 2
        }).length
        const due = topic.cards.filter(c => {
          const state = progress[`${topic.id}-${c.de}`]
          return !state || Date.now() >= (state.nextReview || 0)
        }).length
        const pct = Math.round((learned / total) * 100)

        return (
          <motion.button
            key={topic.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(topic)}
            className="card text-left hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-3xl">{topic.icon}</span>
              {due > 0 && (
                <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-bold px-2 py-1 rounded-full">
                  {due} offen
                </span>
              )}
            </div>
            <h3 className="font-bold text-gray-800 dark:text-gray-100 text-lg group-hover:text-orange-500 transition-colors">
              {topic.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{topic.nameEs}</p>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-orange-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">{pct}%</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span className="flex items-center gap-1"><Layers size={12} /> {total} Karten</span>
              <span className="flex items-center gap-1"><CheckCircle size={12} className="text-green-500" /> {learned} gelernt</span>
            </div>
          </motion.button>
        )
      })}
      </div>
    </div>
  )
}

// Flashcard Study Component
function FlashcardStudy({ topic, onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [answered, setAnswered] = useState(false)
  const [sessionStats, setSessionStats] = useState({ correct: 0, incorrect: 0, total: 0 })
  const [sessionDone, setSessionDone] = useState(false)

  // Sort cards: due cards first, then by next review date
  const sortedCards = useMemo(() => {
    const now = Date.now()
    return [...topic.cards].sort((a, b) => {
      const stateA = getCardState(`${topic.id}-${a.de}`)
      const stateB = getCardState(`${topic.id}-${b.de}`)
      const dueA = now >= (stateA.nextReview || 0)
      const dueB = now >= (stateB.nextReview || 0)
      if (dueA && !dueB) return -1
      if (!dueA && dueB) return 1
      return (stateA.nextReview || 0) - (stateB.nextReview || 0)
    })
  }, [topic])

  const currentCard = sortedCards[currentIndex]
  const cardId = currentCard ? `${topic.id}-${currentCard.de}` : null

  const handleFlip = useCallback(() => {
    if (!answered) setFlipped(f => !f)
  }, [answered])

  const handleAnswer = useCallback((quality) => {
    if (!cardId) return
    const state = getCardState(cardId)
    const newState = sm2(state, quality)
    saveCardState(cardId, newState)
    setAnswered(true)

    setSessionStats(prev => ({
      correct: prev.correct + (quality >= 3 ? 1 : 0),
      incorrect: prev.incorrect + (quality < 3 ? 1 : 0),
      total: prev.total + 1,
    }))

    setTimeout(() => {
      if (currentIndex + 1 >= sortedCards.length) {
        setSessionDone(true)
      } else {
        setCurrentIndex(i => i + 1)
        setFlipped(false)
        setAnswered(false)
      }
    }, 600)
  }, [cardId, currentIndex, sortedCards.length])

  if (sessionDone) {
    const pct = sessionStats.total > 0 ? Math.round((sessionStats.correct / sessionStats.total) * 100) : 0
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
        <div className="text-6xl mb-4">{pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪'}</div>
        <h2 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 mb-2">
          {pct >= 80 ? 'Ausgezeichnet!' : pct >= 50 ? 'Gut gemacht!' : 'Weiter üben!'}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">Du hast alle Karten dieses Themas abgeschlossen</p>
        <div className="flex justify-center gap-6 mb-8">
          <div className="text-center">
            <p className="text-3xl font-bold text-green-500">{sessionStats.correct}</p>
            <p className="text-sm text-gray-400">Richtig</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-red-500">{sessionStats.incorrect}</p>
            <p className="text-sm text-gray-400">Zu wiederholen</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-orange-500">{pct}%</p>
            <p className="text-sm text-gray-400">Trefferquote</p>
          </div>
        </div>
        <div className="flex justify-center gap-3">
          <button onClick={() => { setCurrentIndex(0); setFlipped(false); setAnswered(false); setSessionStats({ correct: 0, incorrect: 0, total: 0 }); setSessionDone(false) }}
            className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors flex items-center gap-2">
            <RotateCcw size={18} /> Wiederholen
          </button>
          <button onClick={onBack}
            className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-xl font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            Andere Themen
          </button>
        </div>
      </motion.div>
    )
  }

  if (!currentCard) return null

  const cardState = getCardState(cardId)
  const nextReviewText = cardState.interval > 0
    ? cardState.interval === 1 ? '1 Tag' : `${cardState.interval} Tage`
    : 'Neu'

  return (
    <div>
      {/* Progress bar */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={onBack} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              {topic.icon} {topic.name}
            </span>
            <span className="text-sm text-gray-400">
              {currentIndex + 1} / {sortedCards.length}
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <motion.div
              className="bg-orange-500 h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / sortedCards.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="flex justify-center mb-8">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-lg cursor-pointer"
          onClick={handleFlip}
        >
          <div className="relative" style={{ perspective: '1000px' }}>
            <motion.div
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.5 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative"
            >
              {/* Front */}
              <div
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 min-h-[280px] flex flex-col items-center justify-center border-2 ${
                  flipped ? 'border-transparent' : 'border-orange-200 dark:border-orange-800'
                }`}
                style={{ backfaceVisibility: 'hidden' }}
              >
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-4">Deutsch</span>
                <p className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 text-center mb-4">
                  {currentCard.de}
                </p>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Clock size={14} />
                  <span>{nextReviewText}</span>
                </div>
                <p className="text-xs text-gray-400 mt-6">Zum Umdrehen tippen</p>
              </div>

              {/* Back */}
              <div
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 min-h-[280px] flex flex-col items-center justify-center absolute inset-0 border-2 border-blue-200 dark:border-blue-800"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-4">Übersetzung</span>
                <p className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 text-center mb-4">
                  {currentCard.es}
                </p>
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-3 w-full">
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center italic">
                    „{currentCard.example}"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Answer buttons - show after flip */}
      <AnimatePresence>
        {flipped && !answered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex justify-center gap-3"
          >
            <button onClick={() => handleAnswer(0)}
              className="flex flex-col items-center gap-1 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-5 py-3 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors min-w-[80px]">
              <XCircle size={20} />
              <span className="text-xs font-bold">Nochmal</span>
            </button>
            <button onClick={() => handleAnswer(1)}
              className="flex flex-col items-center gap-1 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 px-5 py-3 rounded-xl hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors min-w-[80px]">
              <Brain size={20} />
              <span className="text-xs font-bold">Schwer</span>
            </button>
            <button onClick={() => handleAnswer(3)}
              className="flex flex-col items-center gap-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 px-5 py-3 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors min-w-[80px]">
              <CheckCircle size={20} />
              <span className="text-xs font-bold">Gut</span>
            </button>
            <button onClick={() => handleAnswer(5)}
              className="flex flex-col items-center gap-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-5 py-3 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors min-w-[80px]">
              <Star size={20} />
              <span className="text-xs font-bold">Leicht</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Answered feedback */}
      <AnimatePresence>
        {answered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center"
          >
            <div className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 px-6 py-3 rounded-xl font-bold flex items-center gap-2">
              <CheckCircle size={18} />
              Nächste Karte!
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Flashcards() {
  const { user, toast } = useAuth()
  const [selectedTopic, setSelectedTopic] = useState(null)
  const level = user?.level || 'A1'

  // Global stats across ALL levels
  const progress = getAllProgress()
  const allTopics = LEVELS.flatMap(l => FLASHCARD_TOPICS[l] || [])
  const totalCards = allTopics.reduce((sum, t) => sum + t.cards.length, 0)
  const learnedCards = allTopics.reduce((sum, t) =>
    sum + t.cards.filter(c => {
      const s = progress[`${t.id}-${c.de}`]
      return s && s.repetition >= 2
    }).length, 0
  )
  const dueCards = allTopics.reduce((sum, t) =>
    sum + t.cards.filter(c => {
      const s = progress[`${t.id}-${c.de}`]
      return !s || Date.now() >= (s.nextReview || 0)
    }).length, 0
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <Toast toast={toast} />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {selectedTopic ? (
            <motion.div key="study" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
              <FlashcardStudy topic={selectedTopic} onBack={() => setSelectedTopic(null)} />
            </motion.div>
          ) : (
            <motion.div key="selector" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 flex items-center gap-3">
                  <Layers className="text-orange-500" size={28} />
                  Karteikarten
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                  Vokabular mit verteilter Wiederholung — alle Niveaus
                </p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="card text-center">
                  <Layers size={22} className="text-orange-500 mx-auto mb-1" />
                  <p className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">{totalCards}</p>
                  <p className="text-xs text-gray-400">Karten gesamt</p>
                </div>
                <div className="card text-center">
                  <CheckCircle size={22} className="text-green-500 mx-auto mb-1" />
                  <p className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">{learnedCards}</p>
                  <p className="text-xs text-gray-400">Gelernt</p>
                </div>
                <div className="card text-center">
                  <Clock size={22} className="text-amber-500 mx-auto mb-1" />
                  <p className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">{dueCards}</p>
                  <p className="text-xs text-gray-400">Offen</p>
                </div>
              </div>

              {/* Topic grid */}
              <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">Wähle ein Thema</h2>
              <TopicSelector level={level} onSelect={setSelectedTopic} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}
