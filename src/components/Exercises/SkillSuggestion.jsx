import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'

const ALL_SKILLS = ['grammar', 'reading', 'listening', 'writing', 'speaking']

// Unique value proposition per skill — shown on the post-exercise suggestion card
// to entice the user to try a skill they haven't explored yet.
const SKILL_PITCH = {
  grammar: {
    emoji: '📚',
    title: 'Probier eine Grammatikübung',
    pitch: 'Verstehe die deutsche Grammatik Schritt für Schritt — mit klaren Erklärungen und Beispielen.',
    gradient: 'from-blue-500 via-indigo-500 to-violet-500',
    textColor: 'text-blue-700',
  },
  reading: {
    emoji: '📖',
    title: 'Probier eine Leseübung',
    pitch: 'Lies echte deutsche Texte — Artikel, Dialoge und Geschichten auf deinem Niveau.',
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    textColor: 'text-emerald-700',
  },
  listening: {
    emoji: '🎧',
    title: 'Probier eine Höraufgabe',
    pitch: 'Trainiere dein Ohr mit Audios von Muttersprachlern — natürliches Sprechtempo und echte Aussprache.',
    gradient: 'from-purple-500 via-fuchsia-500 to-pink-500',
    textColor: 'text-purple-700',
  },
  writing: {
    emoji: '✍️',
    title: 'Probier eine Schreibübung',
    pitch: 'Die KI korrigiert deine Texte — Grammatik, Wortwahl und Stil. Personalisiertes Feedback in Sekunden.',
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    textColor: 'text-rose-700',
  },
  speaking: {
    emoji: '🎙️',
    title: 'Probier eine Sprechübung',
    pitch: 'KI-Aussprachefeedback in Echtzeit — sprich frei zu einem Thema und erhalte sofort Verbesserungen.',
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    textColor: 'text-orange-700',
  },
}

/**
 * Shown on the exercise-results screen to nudge the user toward a skill
 * they haven't tried yet. Rotates between unexplored types.
 *
 * Props:
 *  - currentType: the type of the exercise just completed (won't be suggested)
 *  - exerciseHistory: array of { type } objects from ProgressContext
 */
export default function SkillSuggestion({ currentType, exerciseHistory = [] }) {
  const navigate = useNavigate()

  const suggestion = useMemo(() => {
    const triedTypes = new Set(exerciseHistory.map(h => h.type).filter(Boolean))
    // Always include the skill the user just completed as "tried"
    if (currentType) triedTypes.add(currentType)
    const unexplored = ALL_SKILLS.filter(s => !triedTypes.has(s))
    if (unexplored.length === 0) return null
    // Rotate deterministically using the number of completed exercises,
    // so the suggestion changes session-to-session without flicker on re-render.
    const idx = exerciseHistory.length % unexplored.length
    return unexplored[idx]
  }, [currentType, exerciseHistory])

  if (!suggestion) return null
  const meta = SKILL_PITCH[suggestion]
  if (!meta) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-6"
    >
      <button
        onClick={() => navigate(`/ejercicios?tipo=${suggestion}`)}
        className={`group block w-full text-left relative overflow-hidden rounded-2xl bg-gradient-to-r ${meta.gradient} p-5 shadow-lg hover:shadow-xl transition-all`}
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative flex items-center gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-3xl sm:text-4xl shrink-0 group-hover:scale-110 transition-transform">
            {meta.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-1 bg-white/15 text-white/90 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-1">
              <Sparkles size={10} /> Neu für dich
            </div>
            <h3 className="text-white font-extrabold text-base sm:text-lg leading-tight">
              {meta.title}
            </h3>
            <p className="text-white/85 text-xs sm:text-sm mt-0.5 line-clamp-2">
              {meta.pitch}
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-white text-gray-800 flex items-center justify-center shrink-0 shadow-md group-hover:translate-x-1 transition-transform">
            <ArrowRight size={18} className={meta.textColor} />
          </div>
        </div>
      </button>
    </motion.div>
  )
}
