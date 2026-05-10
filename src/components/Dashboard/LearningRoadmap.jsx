import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, Lock, Play, Trophy, Brain, BookOpen, Headphones, PenLine, Mic, Flag } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useProgress } from '../../context/ProgressContext'
import { getPath, getLevelProgress, getMilestones } from '../../utils/learningPath'

const TYPE_META = {
  grammar:   { Icon: Brain,      label: 'Grammatik', color: 'from-blue-500 to-indigo-500' },
  reading:   { Icon: BookOpen,   label: 'Lesen',     color: 'from-green-500 to-emerald-500' },
  listening: { Icon: Headphones, label: 'Hören',     color: 'from-purple-500 to-fuchsia-500' },
  writing:   { Icon: PenLine,    label: 'Schreiben', color: 'from-pink-500 to-rose-500' },
  speaking:  { Icon: Mic,        label: 'Sprechen',  color: 'from-teal-500 to-cyan-500' },
}

/**
 * Visual roadmap of the user's path through their current level.
 * Each node represents an exercise. Color/state:
 *   ✓ done   ▶ current   • upcoming   🏁 final exam
 */
export default function LearningRoadmap() {
  const { user } = useAuth()
  const { progress } = useProgress()
  const navigate = useNavigate()

  const level = user?.level || 'A1'
  const completedIds = progress.completedExercises || []

  const { path, summary, nextIdx, milestones } = useMemo(() => {
    const path = getPath(level)
    const summary = getLevelProgress(level, completedIds)
    const set = new Set(completedIds)
    const nextIdx = path.findIndex(n => !set.has(n.id))
    const milestones = getMilestones(level)
    return { path, summary, nextIdx, milestones }
  }, [level, completedIds])

  if (!path.length) return null

  const milestoneAt = (idx) => milestones.find(m => m.at === idx + 1)

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="card mb-6"
      aria-label={`Lernpfad Niveau ${level}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4 gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <span className="shrink-0 px-2.5 py-1 rounded-lg bg-warm/15 text-warm text-sm font-extrabold tracking-wide">
            {level}
          </span>
          <div className="min-w-0">
            <h2 className="font-extrabold text-foreground text-lg leading-tight truncate">
              Dein Lernpfad
            </h2>
            <p className="text-xs text-muted-foreground">
              {summary.done} / {summary.total} Übungen — {summary.pct}%
            </p>
          </div>
        </div>
        {summary.complete && (
          <span className="shrink-0 inline-flex items-center gap-1 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full">
            <Trophy size={12} /> Bereit für die Prüfung
          </span>
        )}
      </div>

      {/* Top-level progress bar */}
      <div className="h-2.5 rounded-full bg-muted overflow-hidden mb-5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${summary.pct}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-warm to-orange-600"
        />
      </div>

      {/* Node grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(2.5rem,1fr))] gap-1.5 mb-2">
        {path.map((node, idx) => {
          const done = completedIds.includes(node.id)
          const isCurrent = idx === nextIdx
          const upcoming = !done && !isCurrent
          const meta = TYPE_META[node.type] || TYPE_META.grammar
          const milestone = milestoneAt(idx)

          const baseCls =
            'relative aspect-square rounded-lg flex items-center justify-center text-xs font-bold transition-all '
          const stateCls = done
            ? 'bg-emerald-500 text-white shadow-sm'
            : isCurrent
              ? `bg-gradient-to-br ${meta.color} text-white ring-2 ring-warm ring-offset-2 ring-offset-card scale-110 shadow-md`
              : 'bg-muted text-muted-foreground/60 hover:bg-muted/80'

          const clickable = done || isCurrent

          return (
            <button
              key={node.id}
              type="button"
              onClick={() => clickable && navigate(`/ejercicio/${node.id}`)}
              disabled={!clickable}
              title={`${idx + 1}. ${meta.label} · ${node.title}${done ? ' ✓' : isCurrent ? ' (jetzt)' : ' (gesperrt)'}`}
              aria-label={`Übung ${idx + 1}: ${node.title}${done ? ', abgeschlossen' : isCurrent ? ', aktuelle Übung' : ', gesperrt'}`}
              className={baseCls + stateCls + (clickable ? ' cursor-pointer' : ' cursor-not-allowed')}
            >
              {done ? (
                <Check size={14} strokeWidth={3} />
              ) : isCurrent ? (
                <Play size={12} fill="currentColor" />
              ) : (
                <span className="opacity-70">{idx + 1}</span>
              )}
              {milestone && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-yellow-400 border-2 border-card flex items-center justify-center text-[8px]" aria-hidden="true">
                  ⭐
                </span>
              )}
            </button>
          )
        })}

        {/* Final exam marker */}
        <div
          className="aspect-square rounded-lg flex items-center justify-center"
          title={summary.complete ? `Endprüfung ${level} verfügbar` : `Endprüfung — schließe zuerst alle ${summary.total} Übungen ab`}
          aria-label={summary.complete ? 'Endprüfung verfügbar' : 'Endprüfung gesperrt'}
        >
          {summary.complete ? (
            <span className="w-full h-full rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 text-white flex items-center justify-center shadow-md ring-2 ring-warm ring-offset-2 ring-offset-card">
              <Flag size={14} />
            </span>
          ) : (
            <span className="w-full h-full rounded-lg bg-muted/70 text-muted-foreground/60 flex items-center justify-center">
              <Lock size={12} />
            </span>
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-muted-foreground mt-3">
        <span className="inline-flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-emerald-500" /> Erledigt</span>
        <span className="inline-flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-warm" /> Aktuell</span>
        <span className="inline-flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-muted border border-border" /> Gesperrt</span>
        <span className="inline-flex items-center gap-1">⭐ Bonus-Meilenstein</span>
        <span className="inline-flex items-center gap-1"><Flag size={10} /> Endprüfung</span>
      </div>
    </motion.section>
  )
}
