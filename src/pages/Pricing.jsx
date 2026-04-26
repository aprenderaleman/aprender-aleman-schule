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

  const handleSubscribe = async (plan = 'monthly') => {
    if (!user) {
      window.location.href = '/registro'
      return
    }
    setLoading(plan)
    try {
      const token = getToken()
      const res = await fetch(`${API_URL}/api/stripe/create-checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ plan }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Error')
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

      {/* Free trial badge */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-2 bg-warm/10 dark:bg-warm/20 text-warm font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full">
          <Zap size={14} />
          {loggedIn && inFreePhase
            ? `${xpEarned.toLocaleString('de-DE')} / ${freeLimit.toLocaleString('de-DE')} XP genutzt`
            : `${freeLimit.toLocaleString('de-DE')} XP gratis testen`}
        </span>
      </div>

      {/* Account-state banners */}
      {subscription?.paid ? (
        <motion.div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 text-center mb-6">
          <p className="text-green-700 dark:text-green-300 font-bold flex items-center justify-center gap-2">
            <Check size={18} /> Dein Abonnement ist aktiv
          </p>
        </motion.div>
      ) : subscription?.ssoUser ? (
        <motion.div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 text-center mb-6">
          <p className="text-blue-700 dark:text-blue-300 font-bold flex items-center justify-center gap-2">
            <Shield size={18} /> Zugriff inbegriffen mit deinem Kurs auf Aprender-Aleman.de
          </p>
        </motion.div>
      ) : null}

      {/* Two pricing cards: monthly + annual */}
      <div className="grid md:grid-cols-2 gap-5 mb-8">
        {/* MONTHLY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col"
        >
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="font-bold text-gray-700 dark:text-gray-200 text-sm uppercase tracking-wide mb-1">Monatlich</h3>
            <p className="text-xs text-gray-400 mb-4">Flexibel — jederzeit kündbar</p>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">15</span>
              <span className="text-lg font-bold text-gray-400">&euro;/Monat</span>
            </div>
            <p className="text-xs text-gray-400 mb-5">Entspricht 180&thinsp;€ pro Jahr</p>

            <button
              onClick={() => onSubscribe('monthly')}
              disabled={loading || subscription?.paid || subscription?.ssoUser}
              className="w-full bg-gray-900 dark:bg-gray-700 text-white font-bold py-3 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading === 'monthly' ? (
                <><Loader2 size={18} className="animate-spin" /> Weiterleitung…</>
              ) : (
                <>Monatlich abonnieren</>
              )}
            </button>
          </div>
        </motion.div>

        {/* YEARLY — featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="relative bg-gradient-to-br from-warm/10 to-amber-50 dark:from-warm/15 dark:to-amber-900/20 rounded-2xl shadow-xl border-2 border-warm overflow-hidden flex flex-col"
        >
          {/* "BEST VALUE" badge */}
          <div className="absolute top-0 right-0 bg-warm text-warm-foreground text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-bl-xl">
            45% Rabatt
          </div>

          <div className="p-6 flex-1 flex flex-col">
            <h3 className="font-bold text-warm text-sm uppercase tracking-wide mb-1">Jährlich</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Beste Wahl für ernsthafte Lerner</p>

            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">99</span>
              <span className="text-lg font-bold text-gray-400">&euro;/Jahr</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              Nur <strong className="text-gray-700 dark:text-gray-200">8,25&thinsp;€/Monat</strong>
              <span className="line-through text-gray-400 ml-2">180&thinsp;€</span>
            </p>
            <p className="text-xs text-success font-bold mb-5">Du sparst 81&thinsp;€ pro Jahr</p>

            <button
              onClick={() => onSubscribe('yearly')}
              disabled={loading || subscription?.paid || subscription?.ssoUser}
              className="w-full bg-warm text-warm-foreground font-bold py-3 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading === 'yearly' ? (
                <><Loader2 size={18} className="animate-spin" /> Weiterleitung…</>
              ) : (
                <><Zap size={18} /> Jahresabo wählen</>
              )}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Features card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 p-6 mb-8"
      >
        <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-4">In beiden Plänen enthalten:</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {features.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <div className="bg-warm/15 rounded-lg p-1.5 shrink-0">
                <Icon size={14} className="text-warm" />
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300">{text}</span>
            </div>
          ))}
        </div>

        {/* Trust */}
        <div className="mt-5 pt-5 border-t border-gray-100 dark:border-gray-700 flex items-center justify-center gap-4 text-xs text-gray-400 flex-wrap">
          <span className="flex items-center gap-1"><Shield size={12} /> Sichere Zahlung mit Stripe</span>
          <span className="flex items-center gap-1"><Clock size={12} /> Jederzeit kündbar</span>
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
