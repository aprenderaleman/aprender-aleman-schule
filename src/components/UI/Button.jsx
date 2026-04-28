import React from 'react'
import { motion } from 'framer-motion'
import { haptics } from '../../utils/haptics'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
  'aria-label': ariaLabel,
  hapticOnClick = true,
  ...props
}) {
  const handleClick = (e) => {
    if (disabled || loading) return
    if (hapticOnClick) haptics.tap()
    onClick?.(e)
  }
  const base = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary: 'bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white focus:ring-orange-400 shadow-md hover:shadow-lg',
    secondary: 'bg-white hover:bg-orange-50 text-orange-600 border-2 border-orange-500 focus:ring-orange-400',
    ghost: 'bg-transparent hover:bg-orange-50 text-orange-600 focus:ring-orange-400',
    danger: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-400 shadow-md',
    dark: 'bg-gray-800 hover:bg-gray-700 text-white focus:ring-gray-500 shadow-md',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  }

  return (
    <motion.button
      whileTap={{ scale: disabled || loading ? 1 : 0.96 }}
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      transition={{ type: 'spring', damping: 20, stiffness: 400 }}
      type={type}
      disabled={disabled || loading}
      onClick={handleClick}
      aria-label={ariaLabel}
      className={`${base} ${variants[variant]} ${sizes[size]} ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : null}
      {children}
    </motion.button>
  )
}
