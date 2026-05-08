import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Play, ArrowRight, Brain, BookOpen, Headphones, PenLine, Mic, Zap, Flag } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useProgress } from '../../context/ProgressContext'
import { getNextNode, getLevelProgress } from '../../utils/learningPath'

const TYPE_META = {
  grammar:   { Icon: Brain,      label: 'Grammatik' },
  reading:   { Icon: BookOpen,   label: 'Lesen' },
  listening: { Icon: Headphones, label: 'Hören' },
  writing:   { Icon: PenLine,    label: 'Schreiben' },
  speaking:  { Icon: Mic,        label: 'Sprechen' },
}

/**
 * Big primary CTA on the dashboard pointing the user at the next exercise
 * in their path. Falls back to "ready for the final exam" once the path is
 * fully completed.
 */
export default function NextExerciseCard() {
  const { user } = useAuth()
  const { progress } = useProgress()
  const navigate = useNavigate()

  const level = user?.level || 'A1'
  const completedIds = progress.completedExercises || []

  const { next, summary } = useMemo(() => ({
    next: getNextNode(level, completedIds),
    summary: getLevelProgress(level, completedIds),
  }), [level, completedIds])

  // Path complete — point to final exam
  if (!next && summary.complete) {
    return (
      <motion.button
        type="button"
        onClick={() => navigate('/pruefungen')}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="block w-full text-left bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 rounded-2xl p-5 mb-6 shadow-lg hover:shadow-xl transition-all"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
              <Flag size={22} className="text-white" />
            </div>
            <div>
              <p className="text-white/85 text-xs font-semibold uppercase tracking-wider">Bereit für die Endprüfung</p>
              <p className="text-white font-extrabold text-lg leading-tight">
                Bestehe sie und steige auf das nächste Niveau auf
              </p>
            </div>
          </div>
          <span className="bg-white text-amber-600 font-bold px-4 py-2 rounded-xl shadow flex items-center gap-1.5 shrink-0">
            Prüfung starten <ArrowRight size={16} />
          </span>
        </div>
      </motion.button>
    )
  }

  if (!next) return null

  const meta = TYPE_META[next.type] || TYPE_META.grammar
  const Icon = meta.Icon
  const stepNumber = next.index + 1

  return (
    <motion.button
      type="button"
      onClick={() => navigate(`/ejercicio/${next.id}`)}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      className="block w-full text-left bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-5 mb-6 shadow-lg hover:shadow-xl transition-all group"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
            <Icon size={22} className="text-white" />
          </div>
          <div className="min-w-0">
            <p className="text-white/85 text-xs font-semibold uppercase tracking-wider">
              Nächste Übung · Schritt {stepNumber} / {summary.total}
            </p>
            <p className="text-white font-extrabold text-lg leading-tight truncate">
              {next.title}
            </p>
            <p className="text-white/80 text-xs mt-0.5 flex items-center gap-2">
              <span>{meta.label}</span>
              <span className="opacity-60">·</span>
              <span className="inline-flex items-center gap-1"><Zap size={11} /> +{next.xp} XP</span>
            </p>
          </div>
        </div>
        <span className="bg-white text-orange-600 font-bold px-4 py-2 rounded-xl shadow flex items-center gap-1.5 shrink-0 group-hover:scale-105 transition-transform">
          <Play size={14} fill="currentColor" /> Starten
        </span>
      </div>
    </motion.button>
  )
}
