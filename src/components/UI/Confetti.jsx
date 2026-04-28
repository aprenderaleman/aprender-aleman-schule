import { useEffect } from 'react'
import confetti from 'canvas-confetti'
import { haptics } from '../../utils/haptics'

const COLORS = ['#F4A261', '#FBBF24', '#2D6A4F', '#15315A', '#F97316', '#A78BFA']

/**
 * Native-feel celebration: physics-based canvas confetti firing from
 * both bottom corners with realistic gravity + drift. Triggers haptic
 * celebration pattern on supported devices.
 */
export default function Confetti({ active, onDone, intensity = 'normal' }) {
  useEffect(() => {
    if (!active) return

    haptics.celebrate()

    const duration = intensity === 'big' ? 2500 : 1800
    const end = Date.now() + duration
    const particleCount = intensity === 'big' ? 60 : 40

    const fire = () => {
      // Burst from bottom-left
      confetti({
        particleCount,
        angle: 60,
        spread: 80,
        startVelocity: 55,
        origin: { x: 0, y: 1 },
        colors: COLORS,
        scalar: 0.9,
        ticks: 200,
      })
      // Burst from bottom-right
      confetti({
        particleCount,
        angle: 120,
        spread: 80,
        startVelocity: 55,
        origin: { x: 1, y: 1 },
        colors: COLORS,
        scalar: 0.9,
        ticks: 200,
      })
    }

    fire()
    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval)
        onDone?.()
        return
      }
      // Smaller follow-up bursts
      confetti({
        particleCount: 15,
        angle: 90,
        spread: 100,
        startVelocity: 35,
        origin: { x: Math.random(), y: 0.8 },
        colors: COLORS,
        scalar: 0.7,
      })
    }, 350)

    return () => clearInterval(interval)
  }, [active, onDone, intensity])

  return null
}
