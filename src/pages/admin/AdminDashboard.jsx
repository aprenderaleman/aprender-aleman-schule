import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Users, UserCheck, BookOpen, Zap, TrendingUp, Award } from 'lucide-react'
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts'

const API_URL = import.meta.env.VITE_API_URL || ''

function getAuthHeaders() {
  const token = localStorage.getItem('auth_token')
  return { Authorization: `Bearer ${token}` }
}

const COLORS = {
  orange: '#F97316',
  blue: '#3B82F6',
  green: '#22C55E',
  purple: '#8B5CF6',
  pink: '#EC4899',
}

const PIE_COLORS = [COLORS.orange, COLORS.blue, COLORS.green, COLORS.purple, COLORS.pink]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' },
  }),
}

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

function StatCard({ icon: Icon, label, value, color, index }) {
  return (
    <motion.div
      className="card p-6 flex items-center gap-4"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        className="flex items-center justify-center w-14 h-14 rounded-xl"
        style={{ backgroundColor: `${color}20` }}
      >
        <Icon className="w-7 h-7" style={{ color }} />
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          {typeof value === 'number' ? value.toLocaleString() : value}
        </p>
      </div>
    </motion.div>
  )
}

function ChartCard({ title, children }) {
  return (
    <motion.div
      className="card p-6"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">{title}</h3>
      {children}
    </motion.div>
  )
}

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3 text-sm">
      <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</p>
      {payload.map((entry, i) => (
        <p key={i} style={{ color: entry.color }}>
          {entry.name}: <span className="font-semibold">{entry.value?.toLocaleString()}</span>
        </p>
      ))}
    </div>
  )
}

export default function AdminDashboard() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchStats() {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch(`${API_URL}/api/admin/stats`, {
          headers: getAuthHeaders(),
        })
        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`)
        }
        const data = await res.json()
        setStats(data)
      } catch (err) {
        console.error('Failed to fetch admin stats:', err)
        setError(err.message || 'Failed to load dashboard data.')
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 dark:text-gray-400 text-sm">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="card p-8 text-center max-w-md">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
            <span className="text-red-500 text-2xl font-bold">!</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Error Loading Dashboard
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  const {
    totalUsers = 0,
    activeUsers = 0,
    totalExercises = 0,
    totalXP = 0,
    byLevel = [],
    activityByDay = [],
    topStudents = [],
    byType = [],
    avgScores = [],
    registrationsByDay = [],
  } = stats || {}

  const statCards = [
    { icon: Users, label: 'Total Users', value: totalUsers, color: COLORS.blue },
    { icon: UserCheck, label: 'Active Users', value: activeUsers, color: COLORS.green },
    { icon: BookOpen, label: 'Total Exercises', value: totalExercises, color: COLORS.purple },
    { icon: Zap, label: 'Total XP', value: totalXP, color: COLORS.orange },
  ]

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-orange-500" />
          Admin Dashboard
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Overview of the platform's key metrics and activity.
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((card, i) => (
          <StatCard key={card.label} index={i} {...card} />
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Activity Line Chart */}
        <ChartCard title="Daily Activity (Last 30 Days)">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={activityByDay}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12 }}
                tickFormatter={(val) => {
                  const d = new Date(val)
                  return `${d.getDate()}/${d.getMonth() + 1}`
                }}
              />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="exercises"
                stroke={COLORS.orange}
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 5 }}
                name="Exercises"
              />
              <Line
                type="monotone"
                dataKey="users"
                stroke={COLORS.blue}
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 5 }}
                name="Active Users"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Students by Level Bar Chart */}
        <ChartCard title="Students by Level">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={byLevel}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="level" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="count" name="Students" radius={[6, 6, 0, 0]}>
                {byLevel.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Exercise Type Distribution Pie Chart */}
        <ChartCard title="Exercise Type Distribution">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={byType}
                dataKey="count"
                nameKey="type"
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={50}
                paddingAngle={3}
                label={({ type, percent }) =>
                  `${type} (${(percent * 100).toFixed(0)}%)`
                }
              >
                {byType.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Average Scores by Type Bar Chart */}
        <ChartCard title="Average Scores by Exercise Type">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={avgScores}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="type" tick={{ fontSize: 12 }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="avg_score" name="Avg Score" radius={[6, 6, 0, 0]}>
                {avgScores.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Registrations Line Chart */}
        <ChartCard title="New Registrations (Last 30 Days)">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={registrationsByDay}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12 }}
                tickFormatter={(val) => {
                  const d = new Date(val)
                  return `${d.getDate()}/${d.getMonth() + 1}`
                }}
              />
              <YAxis tick={{ fontSize: 12 }} allowDecimals={false} />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="count"
                stroke={COLORS.green}
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 5 }}
                name="Registrations"
                fill={`${COLORS.green}20`}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Top Students Table */}
      <motion.div
        className="card p-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-orange-500" />
          Top 10 Students
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">#</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">Name</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">Email</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">Level</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">XP</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">Streak</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">Exercises</th>
              </tr>
            </thead>
            <tbody>
              {topStudents.slice(0, 10).map((student, i) => (
                <tr
                  key={student.email}
                  className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400 font-medium">
                    {i + 1}
                  </td>
                  <td className="py-3 px-4 font-medium text-gray-800 dark:text-gray-100">
                    {student.name}
                  </td>
                  <td className="py-3 px-4 text-gray-500 dark:text-gray-400">
                    {student.email}
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
                      {student.level}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right font-semibold text-gray-800 dark:text-gray-100">
                    {student.xp?.toLocaleString()}
                  </td>
                  <td className="py-3 px-4 text-right text-gray-600 dark:text-gray-300">
                    {student.streak} days
                  </td>
                  <td className="py-3 px-4 text-right text-gray-600 dark:text-gray-300">
                    {student.exerciseCount?.toLocaleString()}
                  </td>
                </tr>
              ))}
              {topStudents.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-gray-400 dark:text-gray-500">
                    No student data available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
