import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, Zap, BookOpen, Trophy, ChevronRight } from 'lucide-react'
import Button from '../components/UI/Button'
import { useTheme } from '../context/ThemeContext'
import { Moon, Sun } from 'lucide-react'

const features = [
  { icon: '🤖', title: 'IA como profesor', desc: 'Correcciones personalizadas con Claude AI en tiempo real' },
  { icon: '📊', title: 'Seguimiento de progreso', desc: 'Gráficas detalladas de tus 4 habilidades lingüísticas' },
  { icon: '🔥', title: 'Sistema de rachas', desc: 'Mantén tu motivación con rachas diarias y logros' },
  { icon: '🎧', title: '4 tipos de ejercicios', desc: 'Gramática, lectura, audición y escritura para cada nivel' },
]

const levels = [
  { level: 'A1', desc: 'Principiante absoluto', color: 'bg-green-100 text-green-800' },
  { level: 'A2', desc: 'Básico', color: 'bg-blue-100 text-blue-800' },
  { level: 'B1', desc: 'Intermedio', color: 'bg-yellow-100 text-yellow-800' },
  { level: 'B2', desc: 'Intermedio alto', color: 'bg-orange-100 text-orange-800' },
  { level: 'C1', desc: 'Avanzado', color: 'bg-red-100 text-red-800' },
]

const testimonials = [
  { name: 'Laura G.', text: 'En 3 meses pasé de A1 a A2. Las correcciones de la IA son increíbles.', avatar: '👩' },
  { name: 'Carlos M.', text: 'Lo mejor es que puedo practicar a cualquier hora y a mi ritmo.', avatar: '👨' },
  { name: 'Ana P.', text: 'Las explicaciones en español hacen que todo sea mucho más claro.', avatar: '👩‍🦱' },
]

export default function Landing() {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" className="w-9 h-9" />
            <span className="font-extrabold text-orange-500 text-lg">Aprender-Aleman.de</span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link to="/login" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors">
              Iniciar sesión
            </Link>
            <Link to="/registro">
              <Button variant="primary" size="sm">Empieza gratis</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap size={16} /> Aprende alemán con inteligencia artificial
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6">
            Habla alemán con{' '}
            <span className="text-gradient">confianza</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            La plataforma de aprendizaje de alemán diseñada para hispanohablantes. Ejercicios adaptativos, feedback de IA y seguimiento personalizado desde A1 hasta C1.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/registro">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Empieza gratis <ChevronRight size={20} className="ml-1" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Ya tengo cuenta
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-4">5 dias gratis · Luego solo 15&euro;/mes · Sin permanencia</p>
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
                <span className="text-sm text-gray-400 ml-2">ejercicio-gramática.de</span>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Completa la frase:</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">Ich ___ müde. (Yo estoy cansado)</p>
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
                  🎉 ¡Muy bien, María! Con "ich" usamos "bin". +10 XP
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
            Todo lo que necesitas para aprender alemán
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
          <h2 className="text-3xl font-extrabold mb-4">Desde cero hasta avanzado</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10">Contenido adaptado a cada nivel del Marco Europeo de Referencia</p>
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

      {/* Testimonials */}
      <section className="bg-orange-50 dark:bg-gray-800 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12">Lo que dicen nuestros estudiantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-sm"
              >
                <div className="text-4xl mb-3">{t.avatar}</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm italic mb-4">"{t.text}"</p>
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
            ¿Listo para empezar? 🚀
          </h2>
          <p className="text-orange-100 mb-8 text-lg">Únete gratis y empieza tu primer ejercicio en menos de 2 minutos</p>
          <Link to="/registro">
            <Button variant="dark" size="xl">
              Empieza gratis ahora
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-sm text-gray-400 dark:text-gray-500 border-t border-gray-200 dark:border-gray-700">
        <p>© {new Date().getFullYear()} Aprender-Aleman.de — Hecho con ❤️ para hispanohablantes</p>
      </footer>
    </div>
  )
}
