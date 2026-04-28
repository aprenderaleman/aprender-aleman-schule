import React, { useEffect } from 'react'
import { useMotionValue, useTransform, animate, motion } from 'framer-motion'

/**
 * Smoothly animates a number when it changes. Spring-driven so increments
 * feel physical (overshoot slightly before settling).
 *
 * Props:
 *  - value: target number
 *  - duration: tween length in seconds (default 0.8)
 *  - format: optional function to format the displayed string
 */
export default function AnimatedNumber({ value, duration = 0.8, format, className = '' }) {
  const motionValue = useMotionValue(value)
  const rounded = useTransform(motionValue, latest => {
    const v = Math.round(latest)
    return format ? format(v) : v.toLocaleString('de-DE')
  })

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.16, 1, 0.3, 1], // expo-out
    })
    return controls.stop
  }, [value, duration, motionValue])

  return <motion.span className={className}>{rounded}</motion.span>
}
