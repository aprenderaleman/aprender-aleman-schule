import React from 'react'
import { motion } from 'framer-motion'
import { User, Mail, GraduationCap, LogOut, ExternalLink } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useProgress } from '../context/ProgressContext'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Layout/Navbar'
import Button from '../components/UI/Button'
import Toast from '../components/UI/Toast'

export default function Profile() {
  const { user, logout, toast } = useAuth()
  const { progress } = useProgress()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const levelColors = {
    A1: 'bg-green-100 text-green-700',
    A2: 'bg-teal-100 text-teal-700',
    B1: 'bg-blue-100 text-blue-700',
    B2: 'bg-purple-100 text-purple-700',
    C1: 'bg-orange-100 text-orange-700',
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <Toast toast={toast} />
      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">Mi Perfil</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Gestiona tu cuenta, {user?.name}.</p>
        </div>

        {/* Avatar + stats */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="card mb-6 flex items-center gap-5"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white text-2xl font-extrabold shadow-md">
            {user?.name?.[0]?.toUpperCase() || 'U'}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">{user?.name}</h2>
            <p className="text-sm text-gray-400">{user?.email}</p>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full mt-1 inline-block ${levelColors[user?.level] || 'bg-gray-100'}`}>
              Nivel {user?.level}
            </span>
          </div>
          <div className="ml-auto text-right">
            <p className="text-2xl font-extrabold text-orange-500">{progress.xp || 0}</p>
            <p className="text-xs text-gray-400">XP total</p>
          </div>
        </motion.div>

        {/* Profile info (read-only, synced from main platform) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card mb-6"
        >
          <h2 className="font-bold text-gray-800 dark:text-gray-100 text-lg mb-5">Información de la cuenta</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                <User size={12} className="inline mr-1 mb-0.5" /> Nombre
              </label>
              <p className="text-gray-800 dark:text-gray-100 font-medium">{user?.name}</p>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                <Mail size={12} className="inline mr-1 mb-0.5" /> Correo electrónico
              </label>
              <p className="text-gray-800 dark:text-gray-100 font-medium">{user?.email}</p>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                <GraduationCap size={12} className="inline mr-1 mb-0.5" /> Nivel de alemán
              </label>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${levelColors[user?.level] || 'bg-gray-100'}`}>
                {user?.level}
              </span>
            </div>
          </div>
          <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700">
            <p className="text-xs text-gray-400 mb-2">
              Para cambiar tu nombre, email, contraseña o nivel, visita tu perfil en la plataforma principal.
            </p>
            <a
              href="https://app.aprender-aleman.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-orange-500 font-semibold hover:text-orange-600 transition-colors"
            >
              Ir a app.aprender-aleman.de <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card mb-6"
        >
          <h2 className="font-bold text-gray-800 dark:text-gray-100 text-lg mb-4">Estadísticas</h2>
          <div className="grid grid-cols-2 gap-4 text-center">
            {[
              { label: 'Ejercicios completados', value: progress.completedExercises?.length || 0 },
              { label: 'Racha actual', value: `${progress.streak || 0} días` },
              { label: 'Logros desbloqueados', value: progress.achievements?.length || 0 },
              { label: 'Miembro desde', value: user?.createdAt ? new Date(user.createdAt).toLocaleDateString('es-ES') : '—' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3">
                <p className="text-lg font-extrabold text-orange-500">{value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Logout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-red-200 text-red-500 font-semibold hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            aria-label="Cerrar sesión"
          >
            <LogOut size={18} />
            Cerrar sesión
          </button>
        </motion.div>
      </main>
    </div>
  )
}
