import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, Zap, Shield, Clock, BookOpen, Brain, Layers, Trophy, AlertCircle, Loader2 } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import { Moon, Sun } from 'lucide-react'
import Navbar from '../components/Layout/Navbar'
import Toast from '../components/UI/Toast'

const API_URL = import.meta.env.VITE_API_URL || ''

const features = [
  { icon: BookOpen, text: 'Übungen zu Grammatik, Lesen, Hören und Schreiben' },
  { icon: Brain, text: 'Personalisierte Korrekturen mit KI (Claude)' },
  { icon: Layers, text: 'Karteikarten mit Spaced Repetition (456+ Karten)' },
  { icon: Trophy, text: 'Serien-System, Erfolge und detaillierter Fortschritt' },
  { icon: Zap, text: 'Niveaus A1 bis C1 mit vollständigen Inhalten' },
  { icon: Shield, text: 'Unbegrenzter Zugriff auf alle Funktionen' },
]

export default function Pricing() {
  const { user, toast, getToken, showToast } = useAuth()
  const { darkMode, toggleDarkMode } = useTheme()
  const [searchParams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const paymentCanceled = searchParams.get('payment') === 'canceled'

  const subscription = user?.subscription

  const handleSubscribe = async () => {
    if (!user) {
      window.location.href = '/registro'
      return
    }
    setLoading(true)
    try {
      const token = getToken()
      const res = await fetch(`${API_URL}/api/stripe/create-checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Error')
      // Redirect to Stripe Checkout
      window.location.href = data.url
    } catch (err) {
      showToast(err.message || 'Fehler beim Starten der Zahlung.', 'error')
    } finally {
      setLoading(false)
    }
  }

  // If user is logged in, show with Navbar
  if (user) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <Toast toast={toast} />
        <main className="max-w-3xl mx-auto px-4 py-12">
          <PricingContent
            subscription={subscription}
            onSubscribe={handleSubscribe}
            loading={loading}
            paymentCanceled={paymentCanceled}
            loggedIn={true}
          />
        </main>
      </div>
    )
  }

  // Public pricing page
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <nav className="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Schule Logo" className="w-9 h-9" />
            <span className="font-extrabold text-orange-500 text-lg">Schule</span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link to="/login" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-orange-500">
              Anmelden
            </Link>
          </div>
        </div>
      </nav>
      <main className="max-w-3xl mx-auto px-4 py-16">
        <PricingContent
          onSubscribe={() => { window.location.href = '/registro' }}
          loading={false}
          paymentCanceled={paymentCanceled}
          loggedIn={false}
        />
      </main>
    </div>
  )
}

function PricingContent({ subscription, onSubscribe, loading, paymentCanceled, loggedIn }) {
  const freeLimit = subscription?.freeXpLimit ?? subscription?.freeLessonsLimit ?? 10000
  const freeRemaining = subscription?.xpRemaining ?? subscription?.freeLessonsRemaining ?? freeLimit
  const xpEarned = subscription?.xpEarned ?? subscription?.lessonsPassed ?? 0
  const inFreePhase = !!subscription?.trialActive && freeRemaining > 0

  return (
    <div>
      {/* Payment canceled alert */}
      {paymentCanceled && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6 flex items-center gap-3"
        >
          <AlertCircle size={20} className="text-amber-500 shrink-0" />
          <p className="text-sm text-amber-700 dark:text-amber-300">Die Zahlung wurde abgebrochen. Du kannst es jederzeit erneut versuchen.</p>
        </motion.div>
      )}

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-3">
          Lerne Deutsch richtig
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Alles, was du brauchst, um Deutsch zu meistern - für weniger als einen Kaffee pro Woche.
        </p>
      </motion.div>

      {/* Pricing card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border-2 border-orange-200 dark:border-orange-800 overflow-hidden"
      >
        {/* Top badge */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-center">
          <p className="text-white font-bold text-sm">
            {loggedIn && inFreePhase
              ? `${xpEarned.toLocaleString('de-DE')} / ${freeLimit.toLocaleString('de-DE')} XP genutzt`
              : `${freeLimit.toLocaleString('de-DE')} XP gratis — danach 15 €/Monat`}
          </p>
        </div>

        <div className="p-8">
          {/* Price */}
          <div className="text-center mb-6">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl font-extrabold text-gray-800 dark:text-gray-100">15</span>
              <span className="text-2xl font-bold text-gray-400">&euro;/Monat</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">Jederzeit kündbar</p>
          </div>

          {/* Features */}
          <div className="space-y-3 mb-8">
            {features.map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-1.5">
                  <Icon size={16} className="text-orange-500" />
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">{text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          {subscription?.paid ? (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 text-center">
              <p className="text-green-700 dark:text-green-300 font-bold flex items-center justify-center gap-2">
                <Check size={18} /> Dein Abonnement ist aktiv
              </p>
            </div>
          ) : subscription?.ssoUser ? (
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 text-center">
              <p className="text-blue-700 dark:text-blue-300 font-bold flex items-center justify-center gap-2">
                <Shield size={18} /> Zugriff inbegriffen mit deinem Kurs auf Aprender-Aleman.de
              </p>
            </div>
          ) : (
            <button
              onClick={onSubscribe}
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg py-4 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <><Loader2 size={20} className="animate-spin" /> Weiterleitung zu Stripe...</>
              ) : loggedIn ? (
                <><Zap size={20} /> Für 15&euro;/Monat abonnieren</>
              ) : (
                <><Zap size={20} /> {freeLimit} Lektionen gratis starten</>
              )}
            </button>
          )}

          {/* Trust */}
          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1"><Shield size={12} /> Sichere Zahlung mit Stripe</span>
            <span className="flex items-center gap-1"><Clock size={12} /> Jederzeit kündbar</span>
          </div>
        </div>
      </motion.div>

      {/* FAQ-like note for students */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 border border-blue-200 dark:border-blue-800"
      >
        <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Du bist bereits Schüler von Aprender-Aleman.de?</h3>
        <p className="text-sm text-blue-600/80 dark:text-blue-400/80">
          Wenn du bereits einen aktiven Kurs auf <strong>app.aprender-aleman.de</strong> hast, ist dein Zugriff auf die Schule <strong>kostenlos</strong>.
          Melde dich auf der Hauptplattform an und du wirst automatisch weitergeleitet.
        </p>
      </motion.div>
    </div>
  )
}
