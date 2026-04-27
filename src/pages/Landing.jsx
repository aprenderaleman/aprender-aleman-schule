import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, Zap, BookOpen, Trophy, ChevronRight, Star } from 'lucide-react'
import Button from '../components/UI/Button'
import Footer from '../components/Layout/Footer'
import { useTheme } from '../context/ThemeContext'
import { Moon, Sun } from 'lucide-react'

const API_URL = import.meta.env.VITE_API_URL || ''

const features = [
  { icon: '🤖', title: 'KI als Lehrer', desc: 'Personalisierte Korrekturen mit Claude KI in Echtzeit' },
  { icon: '📊', title: 'Fortschrittsverfolgung', desc: 'Detaillierte Grafiken deiner 4 Sprachfertigkeiten' },
  { icon: '🔥', title: 'Serien-System', desc: 'Behalte deine Motivation mit täglichen Serien und Erfolgen' },
  { icon: '🎧', title: '4 Übungstypen', desc: 'Grammatik, Lesen, Hören und Schreiben für jedes Niveau' },
]

const levels = [
  { level: 'A1', desc: 'Absoluter Anfänger', color: 'bg-green-100 text-green-800' },
  { level: 'A2', desc: 'Grundlagen', color: 'bg-blue-100 text-blue-800' },
  { level: 'B1', desc: 'Mittelstufe', color: 'bg-yellow-100 text-yellow-800' },
  { level: 'B2', desc: 'Obere Mittelstufe', color: 'bg-orange-100 text-orange-800' },
  { level: 'C1', desc: 'Fortgeschritten', color: 'bg-red-100 text-red-800' },
]

// Fallback testimonials shown only if there are no real reviews yet
const FALLBACK_TESTIMONIALS = [
  { name: 'Laura G.', comment: 'In 3 Monaten bin ich von A1 auf A2 gekommen. Die KI-Korrekturen sind unglaublich.', rating: 5 },
  { name: 'Carlos M.', comment: 'Das Beste ist, dass ich jederzeit und in meinem eigenen Tempo üben kann.', rating: 5 },
  { name: 'Ana P.', comment: 'Die klaren Erklärungen machen alles viel verständlicher.', rating: 5 },
]

export default function Landing() {
  const { darkMode, toggleDarkMode } = useTheme()
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/api/reviews/public`)
      .then(r => r.json())
      .then(data => setReviews(Array.isArray(data.reviews) ? data.reviews : []))
      .catch(() => {})
  }, [])

  const displayed = reviews.length >= 3 ? reviews.slice(0, 6) : FALLBACK_TESTIMONIALS

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Schule Logo" className="w-9 h-9" />
            <span className="font-extrabold text-orange-500 text-lg">Schule</span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500" aria-label={darkMode ? 'Hellen Modus aktivieren' : 'Dunklen Modus aktivieren'}>
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link to="/login" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors">
              Anmelden
            </Link>
            <Link to="/registro">
              <Button variant="primary" size="sm">Kostenlos starten</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap size={16} /> Lerne Deutsch mit künstlicher Intelligenz
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6">
            Dein Online-{' '}
            <span className="text-gradient">Klassenraum</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Die Plattform zum Deutschlernen mit adaptiven Übungen, KI-Feedback und personalisierter Fortschrittsverfolgung von A1 bis C1.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/registro">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Kostenlos starten <ChevronRight size={20} className="ml-1" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Ich habe schon ein Konto
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-4">10 Lektionen gratis · Danach nur 15&euro;/Monat · Keine Bindung</p>
        </motion.div>

        {/* Hero illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 relative"
        >
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 max-w-3xl mx-auto shadow-2xl border border-orange-100 dark:border-gray-600">
            <div className="text-left space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-sm text-gray-400 ml-2">grammatik-übung.de</span>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Vervollständige den Satz:</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">Ich ___ müde.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['bin ✓', 'bist', 'ist', 'sind'].map((opt, i) => (
                  <div key={i} className={`p-3 rounded-xl text-center text-sm font-semibold ${i === 0 ? 'bg-green-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}>
                    {opt}
                  </div>
                ))}
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 border border-green-300 rounded-xl p-3">
                <p className="text-sm text-green-700 dark:text-green-300 font-semibold">
                  🎉 Sehr gut, Maria! Mit "ich" verwenden wir "bin". +10 XP
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12">
            Alles, was du zum Deutschlernen brauchst
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4">Von null bis fortgeschritten</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10">Inhalte angepasst an jedes Niveau des Europäischen Referenzrahmens</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {levels.map((l, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-4 rounded-2xl font-bold text-center min-w-[120px] ${l.color}`}
              >
                <div className="text-2xl font-extrabold">{l.level}</div>
                <div className="text-xs mt-1 opacity-80">{l.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — real reviews from users (rating ≥4) */}
      <section className="bg-orange-50 dark:bg-gray-800 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-2">Was unsere Schüler sagen</h2>
          {reviews.length >= 3 && (
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-10">
              {(() => {
                const avg = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
                return (
                  <span className="inline-flex items-center gap-1.5">
                    <span className="flex items-center gap-0.5">
                      {[1,2,3,4,5].map(n => (
                        <Star key={n} size={14} className={n <= Math.round(avg) ? 'fill-orange-400 text-orange-400' : 'text-gray-300'} />
                      ))}
                    </span>
                    <strong>{avg.toFixed(1)}</strong> · {reviews.length} Bewertungen
                  </span>
                )
              })()}
            </p>
          )}
          {reviews.length < 3 && <div className="mb-10" />}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayed.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-0.5 mb-3">
                  {[1,2,3,4,5].map(n => (
                    <Star key={n} size={16} className={n <= (t.rating || 5) ? 'fill-orange-400 text-orange-400' : 'text-gray-300'} />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm italic mb-4">"{t.comment}"</p>
                <p className="font-bold text-gray-800 dark:text-gray-100">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-orange-500 to-orange-600">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Bereit anzufangen? 🚀
          </h2>
          <p className="text-orange-100 mb-8 text-lg">Melde dich kostenlos an und starte deine erste Übung in weniger als 2 Minuten</p>
          <Link to="/registro">
            <Button variant="dark" size="xl">
              Jetzt kostenlos starten
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
