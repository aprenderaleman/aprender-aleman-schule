import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RotateCw, Flame, CheckCircle, ArrowRight } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import { EXERCISES } from '../utils/exercises'

const API_URL = import.meta.env.VITE_API_URL || ''

/**
 * "Wiederholung" (repaso) — ejercicios fallados que vuelven con intervalos
 * crecientes (1d → 3d → 7d → 14d → 30d → 60d). Cuando el alumno acierta
 * un repaso, se promueve al siguiente intervalo; si vuelve a fallar, se
 * resetea a 1 dia. Al dominarlo (acierto en 60d), sale de la cola.
 */
export default function Wiederholung() {
  const { getToken } = useAuth()
  const [items, setItems] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetch(`${API_URL}/api/srs/due`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
      .then(res => {
        if (!res.ok) throw new Error('fetch_failed')
        return res.json()
      })
      .then(data => { if (!cancelled) setItems(data.items || []) })
      .catch(() => { if (!cancelled) setError('No se pudo cargar la cola de repaso. Intenta más tarde.') })
    return () => { cancelled = true }
  }, [getToken])

  const enriched = items
    ? items
        .map(it => ({ ...it, exercise: EXERCISES.find(e => e.id === it.exerciseId) }))
        .filter(it => it.exercise)  // ejercicios eliminados del cliente — ignorar
    : null

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl md:pl-72 mx-auto w-full px-4 sm:px-6 py-8">
        <header className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-500">
              <RotateCw size={22} />
            </div>
            <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">Wiederholung</h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Übungen, die du schon einmal gemacht hast und die heute dran sind, damit du sie wirklich behältst.
          </p>
        </header>

        {items === null && !error && (
          <div className="py-10"><LoadingSpinner message="Lade deine Wiederholung..." /></div>
        )}

        {error && (
          <div className="bg-red-50 dark:bg-red-900/30 border border-red-300 rounded-xl p-4 text-sm text-red-700 dark:text-red-300">
            {error}
          </div>
        )}

        {enriched && enriched.length === 0 && (
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-8 text-center">
            <CheckCircle size={40} className="text-emerald-500 mx-auto mb-3" />
            <h2 className="text-xl font-bold text-emerald-700 dark:text-emerald-300 mb-1">
              Alles im grünen Bereich!
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Keine Übungen stehen heute zum Wiederholen an. Mach ein paar neue — Fehler landen
              hier und kommen im richtigen Moment zurück.
            </p>
            <Link
              to="/ejercicios"
              className="mt-4 inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-orange-600 transition"
            >
              Zu den Übungen <ArrowRight size={16} />
            </Link>
          </div>
        )}

        {enriched && enriched.length > 0 && (
          <div className="space-y-3">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              <strong>{enriched.length}</strong> Übung{enriched.length === 1 ? '' : 'en'} für heute
            </p>
            {enriched.map((it, i) => (
              <motion.div
                key={it.exerciseId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link
                  to={`/ejercicio/${it.exerciseId}`}
                  className="flex items-center justify-between gap-3 p-4 rounded-xl bg-card border border-border hover:border-orange-400 hover:shadow-md transition group"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold uppercase text-orange-500">
                        {it.exercise.type} · {it.exercise.level}
                      </span>
                      {it.failures >= 3 && (
                        <span className="text-xs inline-flex items-center gap-1 text-red-500 font-bold">
                          <Flame size={11} /> {it.failures}× falsch
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate">
                      {it.exercise.title}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Nächster Abstand: {it.intervalDays} Tag{it.intervalDays === 1 ? '' : 'e'}
                      {it.reviews > 0 && ` · ${it.reviews} Wiederholung${it.reviews === 1 ? '' : 'en'}`}
                    </p>
                  </div>
                  <ArrowRight size={18} className="text-gray-400 group-hover:text-orange-500 group-hover:translate-x-0.5 transition" />
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
