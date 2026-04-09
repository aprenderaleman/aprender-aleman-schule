import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🇩🇪</span>
            <span className="font-extrabold text-orange-500">Aprender-Aleman.de</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Aprende alemán con inteligencia artificial. ¡Viel Erfolg!
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <Link to="/ejercicios" className="hover:text-orange-500 transition-colors">Ejercicios</Link>
            <Link to="/progreso" className="hover:text-orange-500 transition-colors">Progreso</Link>
            <Link to="/logros" className="hover:text-orange-500 transition-colors">Logros</Link>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} Aprender-Aleman.de — Hecho con ❤️ para hispanohablantes
        </div>
      </div>
    </footer>
  )
}
