import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Compass, Check, Sparkles, Gift } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const API_URL = import.meta.env.VITE_API_URL || ''

const SKILL_META = {
  grammar:   { label: 'Grammatik', emoji: '📚', route: '/ejercicios?tipo=grammar' },
  reading:   { label: 'Lesen',     emoji: '📖', route: '/ejercicios?tipo=reading' },
  listening: { label: 'Hören',     emoji: '🎧', route: '/ejercicios?tipo=listening' },
  writing:   { label: 'Schreiben', emoji: '✍️', route: '/ejercicios?tipo=writing' },
  speaking:  { label: 'Sprechen',  emoji: '🎙️', route: '/ejercicios?tipo=speaking' },
}

function getAuthHeaders() {
  const token = localStorage.getItem('auth_token')
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }
}

export default function ExplorerChallenge() {
  const { user, showToast } = useAuth()
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const [claiming, setClaiming] = useState(false)
  const [justClaimed, setJustClaimed] = useState(false)

  const load = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/api/explorer-challenge`, { headers: getAuthHeaders() })
      if (!res.ok) return
      const json = await res.json()
      setData(json)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    if (!user?.id) return
    load()
  }, [user?.id, load])

  const claim = async () => {
    if (claiming) return
    setClaiming(true)
    try {
      const res = await fetch(`${API_URL}/api/explorer-challenge/claim`, {
        method: 'POST',
        headers: getAuthHeaders(),
      })
      const json = await res.json()
      if (res.ok) {
        setData(d => d ? { ...d, claimed: true } : d)
        setJustClaimed(true)
        showToast?.('🎉 +10 kostenlose Lektionen freigeschaltet!', 'success')
        // GTM: track explorer-challenge completion
        try {
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({ event: 'explorer_challenge_completed' })
        } catch { /* ignore */ }
      } else {
        showToast?.(json.error || 'Challenge noch nicht abgeschlossen.', 'error')
      }
    } catch {
      showToast?.('Verbindung zum Server fehlgeschlagen.', 'error')
    } finally {
      setClaiming(false)
    }
  }

  // Only show for trial users (not paid / not SSO)
  const sub = user?.subscription
  const onTrial = sub && !sub.paid && !sub.ssoUser
  if (!onTrial) return null
  if (!data) return null
  // Hide the card once the bonus has been claimed (and the small "claimed" celebration has passed)
  if (data.claimed && !justClaimed) return null

  const skills = data.skills || []
  const done = new Set(data.skillsDone || [])
  const progress = skills.length > 0 ? Math.round((done.size / skills.length) * 100) : 0
  const ready = data.completed && !data.claimed

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-600 p-5 sm:p-6 shadow-lg mb-6"
    >
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20 shrink-0">
              <Compass size={22} className="text-white" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 bg-white/15 text-white/90 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-1">
                <Sparkles size={11} /> Entdecker-Challenge
              </div>
              <h3 className="text-white font-extrabold text-lg sm:text-xl leading-tight">
                Probier alle 5 Bereiche aus
              </h3>
              <p className="text-white/80 text-sm mt-0.5">
                {ready
                  ? 'Geschafft! Hol dir deine Belohnung.'
                  : <>Belohnung: <span className="font-bold text-yellow-200">+10 kostenlose Lektionen</span></>
                }
              </p>
            </div>
          </div>
        </div>

        {/* Skill circles */}
        <div className="grid grid-cols-5 gap-2 mb-4">
          {skills.map((skill) => {
            const meta = SKILL_META[skill] || { label: skill, emoji: '•', route: '/ejercicios' }
            const isDone = done.has(skill)
            return (
              <button
                key={skill}
                onClick={() => navigate(meta.route)}
                aria-label={`${meta.label} üben`}
                className="group flex flex-col items-center gap-1.5 focus:outline-none"
              >
                <div
                  className={
                    'relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xl sm:text-2xl transition-all ' +
                    (isDone
                      ? 'bg-gradient-to-br from-yellow-300 to-amber-400 shadow-lg ring-2 ring-white/40'
                      : 'bg-white/10 border-2 border-dashed border-white/40 group-hover:bg-white/20 group-hover:border-white/60')
                  }
                >
                  <span>{meta.emoji}</span>
                  {isDone && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-white flex items-center justify-center"
                    >
                      <Check size={10} className="text-white" strokeWidth={4} />
                    </motion.span>
                  )}
                </div>
                <span className={'text-[10px] sm:text-xs font-semibold ' + (isDone ? 'text-white' : 'text-white/70')}>
                  {meta.label}
                </span>
              </button>
            )
          })}
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-white/15 rounded-full overflow-hidden mb-3">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-yellow-300 to-amber-300"
          />
        </div>
        <div className="flex items-center justify-between text-xs text-white/80">
          <span className="font-semibold">{done.size} / {skills.length} Bereiche ausprobiert</span>
          {!ready && <span>{skills.length - done.size} übrig</span>}
        </div>

        {/* Claim button */}
        <AnimatePresence>
          {ready && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              onClick={claim}
              disabled={claiming}
              className="mt-4 w-full bg-white text-fuchsia-700 font-extrabold py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 disabled:opacity-60"
            >
              <Gift size={18} />
              {claiming ? 'Wird freigeschaltet…' : '+10 Lektionen freischalten'}
            </motion.button>
          )}
        </AnimatePresence>

        {justClaimed && data.claimed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center text-white"
          >
            <p className="font-bold text-sm flex items-center justify-center gap-1.5">
              <Sparkles size={14} /> 10 extra Lektionen hinzugefügt!
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
