import React, { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Star, Eye, EyeOff, RefreshCw, MessageSquare } from 'lucide-react'

const API_URL = import.meta.env.VITE_API_URL || ''

function getAuthHeaders() {
  const token = localStorage.getItem('auth_token')
  return { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
}

export default function AdminReviews() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all') // all | published | unpublished | low

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/api/admin/reviews`, { headers: getAuthHeaders() })
      if (res.ok) setData(await res.json())
    } catch { /* ignore */ }
    setLoading(false)
  }, [])

  useEffect(() => { load() }, [load])

  const togglePublish = async (id, currentlyPublished) => {
    try {
      const res = await fetch(`${API_URL}/api/admin/reviews/${id}`, {
        method: 'PATCH',
        headers: getAuthHeaders(),
        body: JSON.stringify({ published: !currentlyPublished }),
      })
      if (res.ok) load()
    } catch { /* ignore */ }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <RefreshCw className="animate-spin text-orange-500" size={32} />
      </div>
    )
  }

  if (!data) return <p className="text-gray-500">Keine Daten verfügbar.</p>

  const filtered = data.reviews.filter(r => {
    if (filter === 'published') return r.published === 1
    if (filter === 'unpublished') return r.published === 0
    if (filter === 'low') return r.rating <= 3
    return true
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">Bewertungen</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
          Feedback der Schüler. Bewertungen mit ≥4 Sternen werden automatisch auf der Startseite veröffentlicht.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-400 font-bold uppercase">Gesamt</p>
          <p className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">{data.total}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-400 font-bold uppercase">Durchschnitt</p>
          <div className="flex items-center gap-2">
            <p className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">{data.avgRating}</p>
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(n => (
                <Star key={n} size={14} className={n <= Math.round(data.avgRating) ? 'fill-orange-400 text-orange-400' : 'text-gray-300'} />
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-400 font-bold uppercase">Veröffentlicht</p>
          <p className="text-3xl font-extrabold text-green-500">{data.reviews.filter(r => r.published).length}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-400 font-bold uppercase">Niedrig (≤3⭐)</p>
          <p className="text-3xl font-extrabold text-red-500">{data.reviews.filter(r => r.rating <= 3).length}</p>
        </div>
      </div>

      {/* Distribution */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-400 font-bold uppercase mb-3">Verteilung</p>
        <div className="space-y-1.5">
          {[5,4,3,2,1].map(n => {
            const count = data.distribution[n] || 0
            const pct = data.total > 0 ? (count / data.total) * 100 : 0
            return (
              <div key={n} className="flex items-center gap-2 text-sm">
                <span className="w-12 flex items-center gap-0.5 text-gray-600 dark:text-gray-300">
                  {n} <Star size={11} className="fill-orange-400 text-orange-400" />
                </span>
                <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-400 rounded-full" style={{ width: `${pct}%` }} />
                </div>
                <span className="w-10 text-right text-xs text-gray-500">{count}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Filter */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {[
          { id: 'all', label: 'Alle' },
          { id: 'published', label: 'Veröffentlicht' },
          { id: 'unpublished', label: 'Nicht veröffentlicht' },
          { id: 'low', label: 'Niedrig (≤3⭐)' },
        ].map(f => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
              filter === f.id
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 border border-gray-200 dark:border-gray-700 text-center">
            <MessageSquare size={32} className="text-gray-300 mx-auto mb-3" />
            <p className="text-sm text-gray-500">Keine Bewertungen gefunden.</p>
          </div>
        ) : (
          filtered.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(n => (
                        <Star key={n} size={16} className={n <= r.rating ? 'fill-orange-400 text-orange-400' : 'text-gray-300'} />
                      ))}
                    </div>
                    <span className="font-bold text-gray-800 dark:text-gray-100 text-sm">{r.userName}</span>
                    <span className="text-xs text-gray-400">{r.userEmail}</span>
                    <span className="text-xs text-gray-400">·</span>
                    <span className="text-xs text-gray-400">{new Date(r.createdAt).toLocaleDateString('de-DE')}</span>
                    {r.published === 1 && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                        Live
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                    {r.comment || <span className="italic text-gray-400">Kein Kommentar</span>}
                  </p>
                </div>
                <button
                  onClick={() => togglePublish(r.id, r.published === 1)}
                  className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    r.published === 1
                      ? 'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
                  }`}
                >
                  {r.published === 1 ? <Eye size={14} /> : <EyeOff size={14} />}
                  {r.published === 1 ? 'Sichtbar' : 'Verborgen'}
                </button>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  )
}
