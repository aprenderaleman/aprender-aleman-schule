import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Zap, Flame, Award, Clock, BookOpen } from 'lucide-react'
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts'

const API_URL = import.meta.env.VITE_API_URL || ''

function getAuthHeaders() {
  const token = localStorage.getItem('auth_token')
  return { Authorization: `Bearer ${token}` }
}

const TYPE_EMOJIS = {
  grammar: '\u{1F4DA}',
  reading: '\u{1F4D6}',
  listening: '\u{1F3A7}',
  writing: '\u270D\uFE0F'
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  const months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
  return `${d.getDate()}. ${months[d.getMonth()]} ${d.getFullYear()}`
}

function formatDateTime(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  const months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
  const hh = String(d.getHours()).padStart(2, '0')
  const mm = String(d.getMinutes()).padStart(2, '0')
  return `${d.getDate()}. ${months[d.getMonth()]} ${d.getFullYear()}, ${hh}:${mm}`
}

function scoreColor(score) {
  if (score >= 80) return 'text-green-500'
  if (score >= 50) return 'text-yellow-500'
  return 'text-red-500'
}

function scoreBg(score) {
  if (score >= 80) return 'bg-green-500/20 text-green-400'
  if (score >= 50) return 'bg-yellow-500/20 text-yellow-400'
  return 'bg-red-500/20 text-red-400'
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 }
  })
}

export default function AdminUserDetail() {
  const { userId } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch(`${API_URL}/api/admin/users/${userId}`, {
          headers: getAuthHeaders()
        })
        if (!res.ok) {
          if (res.status === 404) throw new Error('Benutzer nicht gefunden')
          throw new Error(`Error ${res.status}`)
        }
        const json = await res.json()
        setData(json)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [userId])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-400 text-lg">Schülerdaten werden geladen...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-red-400 text-xl font-semibold">{error}</p>
          <Link
            to="/admin/usuarios"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
          >
            <ArrowLeft size={18} />
            Zurück zu den Benutzern
          </Link>
        </div>
      </div>
    )
  }

  const { user, exerciseResults, achievements, activityByDay, scoreByType } = data

  const statusColors = {
    active: 'bg-green-500/20 text-green-400 border-green-500/30',
    inactive: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    suspended: 'bg-red-500/20 text-red-400 border-red-500/30'
  }

  const statusLabels = {
    active: 'Aktiv',
    inactive: 'Inaktiv',
    suspended: 'Gesperrt'
  }

  const classLabels = {
    group: 'Gruppe',
    individual: 'Einzelunterricht',
    self: 'Autodidakt'
  }

  const skillData = Object.entries(user.skillScores || {}).map(([skill, value]) => ({
    skill: skill.charAt(0).toUpperCase() + skill.slice(1),
    score: value,
    fill: '#F97316'
  }))

  const stats = [
    { label: 'XP gesamt', value: user.xp.toLocaleString(), icon: Zap, color: 'text-orange-400', bg: 'bg-orange-500/10' },
    { label: 'Serie', value: `${user.streak} Tage`, icon: Flame, color: 'text-red-400', bg: 'bg-red-500/10' },
    { label: 'Perfekte Serie', value: user.perfectStreak, icon: Award, color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
    { label: 'Übungen', value: exerciseResults.length, icon: BookOpen, color: 'text-blue-400', bg: 'bg-blue-500/10' }
  ]

  const recentExercises = exerciseResults.slice(-50).reverse()

  return (
    <div className="space-y-8">

        {/* Back button */}
        <Link
          to="/admin/usuarios"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Zurück zu den Benutzern
        </Link>

        {/* Profile header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card rounded-2xl p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center text-2xl font-bold text-orange-400 shrink-0">
              {user.fullName?.charAt(0)?.toUpperCase() || '?'}
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold truncate">{user.fullName}</h1>
              <p className="text-gray-400 truncate">{user.email}</p>
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30">
                  Niveau {user.level}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[user.status] || statusColors.inactive}`}>
                  {statusLabels[user.status] || user.status}
                </span>
                {user.classType && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-400 border border-purple-500/30">
                    {classLabels[user.classType] || user.classType}
                  </span>
                )}
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock size={12} />
                  Mitglied seit {formatDate(user.createdAt)}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="card rounded-xl p-5"
            >
              <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center mb-3`}>
                <stat.icon size={20} className={stat.color} />
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Skill scores bar chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card rounded-2xl p-6"
          >
            <h2 className="text-lg font-semibold mb-4">Fähigkeiten</h2>
            {skillData.length > 0 ? (
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={skillData} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis type="number" domain={[0, 100]} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                  <YAxis dataKey="skill" type="category" tick={{ fill: '#9CA3AF', fontSize: 12 }} width={80} />
                  <Tooltip
                    contentStyle={{ backgroundColor: 'var(--tooltip-bg, #fff)', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                    labelStyle={{ color: '#F9FAFB' }}
                    itemStyle={{ color: '#F97316' }}
                  />
                  <Bar dataKey="score" fill="#F97316" radius={[0, 6, 6, 0]} barSize={24} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-gray-500 text-center py-12">Keine Daten zu Fähigkeiten</p>
            )}
          </motion.div>

          {/* Activity line chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card rounded-2xl p-6"
          >
            <h2 className="text-lg font-semibold mb-4">Tägliche Aktivität</h2>
            {activityByDay && activityByDay.length > 0 ? (
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={activityByDay}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis
                    dataKey="date"
                    tick={{ fill: '#9CA3AF', fontSize: 11 }}
                    tickFormatter={(d) => {
                      const dt = new Date(d)
                      return `${dt.getDate()}/${dt.getMonth() + 1}`
                    }}
                  />
                  <YAxis yAxisId="left" tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                  <YAxis yAxisId="right" orientation="right" domain={[0, 100]} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: 'var(--tooltip-bg, #fff)', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                    labelStyle={{ color: '#F9FAFB' }}
                    labelFormatter={(d) => formatDate(d)}
                  />
                  <Line yAxisId="left" type="monotone" dataKey="count" stroke="#F97316" strokeWidth={2} dot={false} name="Übungen" />
                  <Line yAxisId="right" type="monotone" dataKey="avgScore" stroke="#60A5FA" strokeWidth={2} dot={false} name="Durchschnittspunktzahl" />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-gray-500 text-center py-12">Keine Aktivitätsdaten</p>
            )}
          </motion.div>
        </div>

        {/* Score by type horizontal bar chart */}
        {scoreByType && scoreByType.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="card rounded-2xl p-6"
          >
            <h2 className="text-lg font-semibold mb-4">Durchschnittliche Punktzahl nach Typ</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart
                data={scoreByType.map((s) => ({
                  ...s,
                  label: `${TYPE_EMOJIS[s.type] || ''} ${s.type.charAt(0).toUpperCase() + s.type.slice(1)} (${s.count})`
                }))}
                layout="vertical"
                margin={{ left: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis type="number" domain={[0, 100]} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                <YAxis dataKey="label" type="category" tick={{ fill: '#9CA3AF', fontSize: 12 }} width={160} />
                <Tooltip
                  contentStyle={{ backgroundColor: 'var(--tooltip-bg, #fff)', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  labelStyle={{ color: '#F9FAFB' }}
                  itemStyle={{ color: '#F97316' }}
                />
                <Bar dataKey="avgScore" fill="#F97316" radius={[0, 6, 6, 0]} barSize={22} name="Durchschnittspunktzahl" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        )}

        {/* Achievements */}
        {achievements && achievements.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="card rounded-2xl p-6"
          >
            <h2 className="text-lg font-semibold mb-4">Erfolge ({achievements.length})</h2>
            <div className="flex flex-wrap gap-2">
              {achievements.map((a) => (
                <span
                  key={a}
                  className="px-3 py-1.5 rounded-full text-sm bg-orange-500/10 text-orange-400 border border-orange-500/20"
                >
                  {a.replace(/_/g, ' ')}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Exercise history table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card rounded-2xl p-6"
        >
          <h2 className="text-lg font-semibold mb-4">
            Übungsverlauf
            <span className="text-sm text-gray-500 font-normal ml-2">
              (letzte {recentExercises.length})
            </span>
          </h2>

          {recentExercises.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700 text-gray-400 text-left">
                    <th className="pb-3 pr-4 font-medium">Übung</th>
                    <th className="pb-3 pr-4 font-medium">Typ</th>
                    <th className="pb-3 pr-4 font-medium">Punktzahl</th>
                    <th className="pb-3 pr-4 font-medium">XP</th>
                    <th className="pb-3 pr-4 font-medium">Zeit</th>
                    <th className="pb-3 font-medium">Datum</th>
                  </tr>
                </thead>
                <tbody>
                  {recentExercises.map((ex, i) => (
                    <tr
                      key={`${ex.exerciseId}-${i}`}
                      className="border-b border-gray-200 dark:border-gray-700/50 hover:bg-gray-100 dark:bg-gray-800/30 transition-colors"
                    >
                      <td className="py-3 pr-4 font-mono text-xs text-gray-300">{ex.exerciseId}</td>
                      <td className="py-3 pr-4 whitespace-nowrap">
                        <span className="mr-1">{TYPE_EMOJIS[ex.exerciseType] || ''}</span>
                        <span className="capitalize">{ex.exerciseType}</span>
                      </td>
                      <td className="py-3 pr-4">
                        <span className={`px-2 py-0.5 rounded text-xs font-semibold ${scoreBg(ex.score)}`}>
                          {ex.score}%
                        </span>
                      </td>
                      <td className="py-3 pr-4 text-orange-400 font-medium">+{ex.xpEarned}</td>
                      <td className="py-3 pr-4 text-gray-400">{ex.timeSpent}s</td>
                      <td className="py-3 text-gray-400 text-xs whitespace-nowrap">{formatDateTime(ex.completedAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">Dieser Schüler hat noch keine Übungen abgeschlossen.</p>
          )}
        </motion.div>

    </div>
  )
}
