import React from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

/**
 * Wrap each page in <PageTransition> to get a subtle fade+slide
 * when the route changes. Uses the location key so AnimatePresence
 * can swap them out cleanly.
 */
export default function PageTransition({ children, className = '' }) {
  const location = useLocation()
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
