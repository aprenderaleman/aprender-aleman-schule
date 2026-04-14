import React, { useState, useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Brain, BookOpen, Headphones, PenLine, Mic, Filter, Search, Lock, CheckCircle, Play } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useProgress } from '../context/ProgressContext'
import Navbar from '../components/Layout/Navbar'
import { EXERCISES } from '../utils/exercises'

const TYPE_META = {
  grammar: { label: 'Grammatik', icon: Brain, color: 'text-orange-500', bg: 'bg-orange-100 dark:bg-orange-900/30' },
  reading: { label: 'Lesen', icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
  listening: { label: 'Hören', icon: Headphones, color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-900/30' },
  writing: { label: 'Schreiben', icon: PenLine, color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/30' },
  speaking: { label: 'Sprechen', icon: Mic, color: 'text-teal-500', bg: 'bg-teal-100 dark:bg-teal-900/30' },
}
const LEVELS = ['Alle', 'A1', 'A2', 'B1', 'B2', 'C1']
const TYPES = ['Alle', 'grammar', 'reading', 'listening', 'writing', 'speaking']

export default function Exercises() {
  const { user } = useAuth()
  const { progress } = useProgress()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [search, setSearch] = useState('')
  // Auto-filter by user level and URL param for type
  const [levelFilter, setLevel] = useState(user?.level || 'Alle')
  const [typeFilter, setType] = useState(() => {
    const tipo = searchParams.get('tipo')
    return tipo && TYPES.includes(tipo) ? tipo : 'Alle'
  })

  const filtered = useMemo(() => {
    return EXERCISES.filter(ex => {
      const matchLevel = levelFilter === 'Alle' || ex.level === levelFilter
      const matchType = typeFilter === 'Alle' || ex.type === typeFilter
      const matchSearch = !search || ex.title.toLowerCase().includes(search.toLowerCase())
      return matchLevel && matchType && matchSearch
    })
  }, [levelFilter, typeFilter, search])

  const isCompleted = (id) => progress.completedExercises?.includes(id)

  // All exercises are unlocked for all users
  const isLocked = () => false

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } }
  const item = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">Übungen</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Wähle eine Übung und fange an zu üben, {user?.name}.</p>
        </div>

        {/* Filters */}
        <div className="card mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Übungen suchen..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="input-field pl-9 py-2 text-sm"
                aria-label="Übungen suchen"
              />
            </div>

            {/* Level filter */}
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-gray-400 shrink-0" />
              <div className="flex gap-1.5 overflow-x-auto pb-1 -mb-1 scrollbar-hide">
                {LEVELS.map(l => (
                  <button
                    key={l}
                    onClick={() => setLevel(l)}
                    aria-pressed={levelFilter === l}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${levelFilter === l
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-orange-100'
                      }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Type filter */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-1 -mb-1 scrollbar-hide">
            {TYPES.map(t => {
              const meta = TYPE_META[t]
              const Icon = meta?.icon
              return (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  aria-pressed={typeFilter === t}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${typeFilter === t
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-orange-100'
                    }`}
                >
                  {Icon && <Icon size={14} />}
                  {meta?.label || 'Alle'}
                </button>
              )
            })}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-400 mb-4">{filtered.length} Übungen gefunden</p>

        {/* Exercise grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.map(ex => {
            const meta = TYPE_META[ex.type] || TYPE_META.grammar
            const Icon = meta.icon
            const done = isCompleted(ex.id)
            const locked = isLocked(ex)

            return (
              <motion.div key={ex.id} variants={item}>
                <div
                  className={`card relative cursor-pointer group transition-all hover:shadow-lg ${locked ? 'opacity-60' : ''
                    }`}
                  onClick={() => !locked && navigate(`/ejercicio/${ex.id}`)}
                  role="button"
                  tabIndex={locked ? -1 : 0}
                  onKeyDown={e => e.key === 'Enter' && !locked && navigate(`/ejercicio/${ex.id}`)}
                  aria-label={`${locked ? 'Gesperrt: ' : ''}${ex.title}`}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-3">
                    <div className={`${meta.bg} ${meta.color} p-2 rounded-xl`}>
                      <Icon size={20} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 px-2 py-1 rounded-full">
                        {ex.level}
                      </span>
                      {done && <CheckCircle size={18} className="text-green-500" />}
                      {locked && <Lock size={18} className="text-gray-400" />}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-gray-800 dark:text-gray-100 text-base mb-1 group-hover:text-orange-500 transition-colors">
                    {ex.title}
                  </h3>
                  <p className="text-xs text-gray-400 capitalize">
                    {meta.label} · Einheit {ex.unit}
                  </p>

                  {/* XP badge */}
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs font-semibold text-orange-500 bg-orange-50 dark:bg-orange-900/20 px-2 py-0.5 rounded-full">
                      +{ex.xp} XP
                    </span>
                    {!locked && (
                      <span className="text-xs text-gray-400 group-hover:text-orange-500 flex items-center gap-1 transition-colors">
                        <Play size={12} />
                        {done ? 'Wiederholen' : 'Starten'}
                      </span>
                    )}
                    {locked && (
                      <span className="text-xs text-gray-400">Gesperrt</span>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">Keine Übungen gefunden.</p>
            <p className="text-gray-300 text-sm mt-2">Probiere es mit anderen Filtern.</p>
          </div>
        )}
      </main>
    </div>
  )
}
