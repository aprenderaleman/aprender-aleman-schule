import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, ArrowRight } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'

const CURSOS = [
  { level: 'A1', to: '/deutscha1', title: 'Deutsch A1', subtitle: 'Anfänger — erste Schritte', color: 'from-emerald-400 to-green-600' },
  { level: 'A2', to: '/deutscha2', title: 'Deutsch A2', subtitle: 'Alltagssituationen meistern', color: 'from-teal-400 to-cyan-600' },
  { level: 'B1', to: '/deutschb1', title: 'Deutsch B1', subtitle: 'Selbstständig kommunizieren', color: 'from-blue-400 to-indigo-600' },
  { level: 'B2', to: '/deutschb2', title: 'Deutsch B2', subtitle: 'Fließend & differenziert', color: 'from-purple-400 to-fuchsia-600' },
  { level: 'C1', to: '/deutschc1', title: 'Deutsch C1', subtitle: 'Fortgeschritten — Zertifikatsniveau', color: 'from-orange-400 to-red-600' },
]

export default function Cursos() {
  const { user } = useAuth()
  const isStaff = ['teacher', 'admin', 'superadmin'].includes(user?.role)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl md:pl-72 mx-auto w-full px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">Kurse</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {isStaff
              ? `Wähle einen Kurs, ${user?.name}. Als Lehrkraft hast du Zugriff auf alle Niveaus.`
              : 'Wähle deinen Kurs und leg los.'}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {CURSOS.map((c, i) => (
            <motion.div
              key={c.level}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={c.to}
                className="group block rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className={`h-24 bg-gradient-to-br ${c.color} flex items-end p-4`}>
                  <span className="text-white text-3xl font-extrabold drop-shadow">{c.level}</span>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-gray-800 dark:text-gray-100">{c.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{c.subtitle}</p>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-gray-400 group-hover:text-warm group-hover:translate-x-1 transition-all shrink-0 mt-1"
                    />
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                    <BookOpen size={12} />
                    <span>Lektionen, Übungen & Prüfungen</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
