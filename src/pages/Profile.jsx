import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, GraduationCap, LogOut, ExternalLink, CreditCard, Shield, Clock, Zap, Loader2, Trophy, ChevronRight } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useProgress } from '../context/ProgressContext'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/Layout/Navbar'
import Button from '../components/UI/Button'
import Toast from '../components/UI/Toast'

const API_URL = import.meta.env.VITE_API_URL || ''

export default function Profile() {
  const { user, logout, toast, getToken, showToast } = useAuth()
  const [portalLoading, setPortalLoading] = useState(false)
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
          <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">Mein Profil</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Verwalte dein Konto, {user?.name}.</p>
        </div>

        {/* Avatar + stats */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="card mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5"
        >
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white text-xl sm:text-2xl font-extrabold shadow-md shrink-0">
              {user?.name?.[0]?.toUpperCase() || 'U'}
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 truncate">{user?.name}</h2>
              <p className="text-xs sm:text-sm text-gray-400 truncate">{user?.email}</p>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full mt-1 inline-block ${levelColors[user?.level] || 'bg-gray-100'}`}>
                Niveau {user?.level}
              </span>
            </div>
            <div className="text-right sm:hidden">
              <p className="text-xl font-extrabold text-orange-500">{progress.xp || 0}</p>
              <p className="text-[10px] text-gray-400">XP</p>
            </div>
          </div>
          <div className="hidden sm:block ml-auto text-right">
            <p className="text-2xl font-extrabold text-orange-500">{progress.xp || 0}</p>
            <p className="text-xs text-gray-400">Gesamt-XP</p>
          </div>
        </motion.div>

        {/* Profile info (read-only, synced from main platform) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card mb-6"
        >
          <h2 className="font-bold text-gray-800 dark:text-gray-100 text-lg mb-5">Kontoinformationen</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                <User size={12} className="inline mr-1 mb-0.5" /> Name
              </label>
              <p className="text-gray-800 dark:text-gray-100 font-medium">{user?.name}</p>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                <Mail size={12} className="inline mr-1 mb-0.5" /> E-Mail-Adresse
              </label>
              <p className="text-gray-800 dark:text-gray-100 font-medium">{user?.email}</p>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                <GraduationCap size={12} className="inline mr-1 mb-0.5" /> Deutsch-Niveau
              </label>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${levelColors[user?.level] || 'bg-gray-100'}`}>
                {user?.level}
              </span>
            </div>
          </div>
          <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700">
            <p className="text-xs text-gray-400 mb-2">
              Um deinen Namen, E-Mail, Passwort oder Niveau zu ändern, besuche dein Profil auf der Hauptplattform.
            </p>
            <a
              href="https://app.aprender-aleman.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-orange-500 font-semibold hover:text-orange-600 transition-colors"
            >
              Zu app.aprender-aleman.de <ExternalLink size={14} />
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
          <h2 className="font-bold text-gray-800 dark:text-gray-100 text-lg mb-4">Statistiken</h2>
          <div className="grid grid-cols-2 gap-4 text-center">
            {[
              { label: 'Abgeschlossene Übungen', value: progress.completedExercises?.length || 0 },
              { label: 'Aktuelle Serie', value: `${progress.streak || 0} Tage` },
              { label: 'Freigeschaltete Erfolge', value: progress.achievements?.length || 0 },
              { label: 'Mitglied seit', value: user?.createdAt ? new Date(user.createdAt).toLocaleDateString('de-DE') : '—' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3">
                <p className="text-lg font-extrabold text-orange-500">{value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievements shortcut */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          className="mb-6"
        >
          <Link
            to="/logros"
            className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800 hover:shadow-md transition-all group"
          >
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 text-white rounded-2xl p-3 shadow-md">
              <Trophy size={22} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-800 dark:text-gray-100">Meine Erfolge</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {progress.achievements?.length || 0} freigeschaltet · Sieh deine Auszeichnungen
              </p>
            </div>
            <ChevronRight size={20} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Subscription */}
        {(user?.role === 'student' || user?.role === 'schule_student') && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="card mb-6"
          >
            <h2 className="font-bold text-gray-800 dark:text-gray-100 text-lg mb-4 flex items-center gap-2">
              <CreditCard size={18} className="text-orange-500" /> Abonnement
            </h2>
            {user.subscription?.ssoUser ? (
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 flex items-center gap-3">
                <Shield size={20} className="text-blue-500 shrink-0" />
                <div>
                  <p className="font-bold text-blue-700 dark:text-blue-300">Zugriff inbegriffen</p>
                  <p className="text-sm text-blue-600/70 dark:text-blue-400/70">Dein Abonnement bei Aprender-Aleman.de beinhaltet den vollständigen Zugriff auf Schule.</p>
                </div>
              </div>
            ) : user.subscription?.paid ? (
              <div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 flex items-center gap-3 mb-3">
                  <Zap size={20} className="text-green-500 shrink-0" />
                  <div>
                    <p className="font-bold text-green-700 dark:text-green-300">Aktives Abonnement</p>
                    <p className="text-sm text-green-600/70 dark:text-green-400/70">15&euro;/Monat. Voller Zugriff auf alle Inhalte.</p>
                  </div>
                </div>
                <button
                  onClick={async () => {
                    setPortalLoading(true)
                    try {
                      const res = await fetch(`${API_URL}/api/stripe/portal`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getToken()}` },
                      })
                      const data = await res.json()
                      if (!res.ok) throw new Error(data.error)
                      window.location.href = data.url
                    } catch (err) {
                      showToast(err.message || 'Fehler beim Öffnen des Portals.', 'error')
                    } finally {
                      setPortalLoading(false)
                    }
                  }}
                  disabled={portalLoading}
                  className="text-sm text-orange-500 font-semibold hover:text-orange-600 flex items-center gap-1"
                >
                  {portalLoading ? <Loader2 size={14} className="animate-spin" /> : <ExternalLink size={14} />}
                  Abonnement bei Stripe verwalten
                </button>
              </div>
            ) : user.subscription?.trialActive ? (
              <div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4 mb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock size={20} className="text-indigo-500 shrink-0" />
                    <div>
                      <p className="font-bold text-indigo-700 dark:text-indigo-300">Kostenlose Testphase</p>
                      <p className="text-sm text-indigo-600/70 dark:text-indigo-400/70">
                        <strong>{(user.subscription.xpEarned ?? user.subscription.lessonsPassed ?? 0).toLocaleString('de-DE')}</strong>{' '}
                        / {(user.subscription.freeXpLimit ?? user.subscription.freeLessonsLimit ?? 10000).toLocaleString('de-DE')} XP genutzt
                      </p>
                    </div>
                  </div>
                  <div className="h-2 bg-indigo-100 dark:bg-indigo-900/40 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                      style={{ width: `${Math.min(100, Math.round(((user.subscription.xpEarned ?? user.subscription.lessonsPassed ?? 0) / (user.subscription.freeXpLimit ?? user.subscription.freeLessonsLimit ?? 10000)) * 100))}%` }}
                    />
                  </div>
                </div>
                <Link to="/pricing" className="text-sm text-indigo-500 font-semibold hover:text-indigo-600 flex items-center gap-1">
                  <Zap size={14} /> Jetzt abonnieren
                </Link>
              </div>
            ) : (
              <div>
                <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 flex items-center gap-3 mb-3">
                  <Clock size={20} className="text-red-500 shrink-0" />
                  <div>
                    <p className="font-bold text-red-700 dark:text-red-300">Kein aktives Abonnement</p>
                    <p className="text-sm text-red-600/70 dark:text-red-400/70">Du hast das XP-Limit der kostenlosen Testphase erreicht. Abonniere, um weiter zu lernen.</p>
                  </div>
                </div>
                <Link to="/pricing" className="inline-flex items-center gap-2 bg-orange-500 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-orange-600 transition-colors text-sm">
                  <Zap size={16} /> Für 15&euro;/Monat abonnieren
                </Link>
              </div>
            )}
          </motion.div>
        )}

        {/* Logout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-red-200 text-red-500 font-semibold hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            aria-label="Abmelden"
          >
            <LogOut size={18} />
            Abmelden
          </button>
        </motion.div>
      </main>
    </div>
  )
}
