import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'

// Catálogo de los cinco cursos por nivel (A1-C1). Replica el diseño de la
// plataforma de la academia: cabecera de color con emoji, chip de nivel,
// descripción en español y "Ir al curso". Los teachers aterrizan aquí tras
// el SSO desde b2c (ver AutoLogin).
const CURSOS = [
  {
    level: 'A1',
    to: '/deutscha1',
    emoji: '🌱',
    color: 'from-green-400 to-emerald-600',
    desc: 'Tu primer paso en el alemán. Aprende a presentarte, pedir en un restaurante, hacer compras y desenvolverte en situaciones cotidianas.',
  },
  {
    level: 'A2',
    to: '/deutscha2',
    emoji: '🚀',
    color: 'from-sky-400 to-blue-600',
    desc: 'Consolida las bases. Habla sobre tu rutina, haz planes con amigos, entiende instrucciones y participa en conversaciones sencillas.',
  },
  {
    level: 'B1',
    to: '/deutschb1',
    emoji: '📚',
    color: 'from-purple-400 to-violet-600',
    desc: 'El salto intermedio. Expresa opiniones, cuenta experiencias, entiende textos más largos y prepárate para el certificado B1.',
  },
  {
    level: 'B2',
    to: '/deutschb2',
    emoji: '💼',
    color: 'from-amber-400 to-orange-600',
    desc: 'Domina la comunicación profesional. Argumenta, debate, escribe textos formales y comprende contenido complejo en alemán.',
  },
  {
    level: 'C1',
    to: '/deutschc1',
    emoji: '🎓',
    color: 'from-red-400 to-rose-600',
    desc: 'Nivel avanzado. Comprende textos exigentes, exprésate con fluidez y precisión, y domina matices del idioma a nivel nativo.',
  },
]

export default function Cursos() {
  const { user } = useAuth()
  const isStaff = ['teacher', 'admin', 'superadmin'].includes(user?.role)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl md:pl-72 mx-auto w-full px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">Cursos</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {isStaff
              ? 'Cursos disponibles para tus estudiantes. Consulta el contenido de cada nivel.'
              : 'Elige tu nivel y entra a tu curso.'}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
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
                className="group flex flex-col h-full rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div
                  className={`h-40 bg-gradient-to-br ${c.color} flex items-center justify-center`}
                  aria-hidden="true"
                >
                  <span className="text-5xl drop-shadow-sm">{c.emoji}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="self-start text-xs font-bold px-2.5 py-1 rounded-full bg-muted text-foreground/80">
                    {c.level}
                  </span>
                  <h2 className="mt-2 text-lg font-extrabold text-gray-800 dark:text-gray-100">
                    Deutsch {c.level}
                  </h2>
                  <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                    {c.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-warm">
                    Ir al curso
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </span>
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
