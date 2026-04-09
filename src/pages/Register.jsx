import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, EyeOff } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import Button from '../components/UI/Button'

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ fullName: '', email: '', password: '', confirmPassword: '' })
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!form.fullName.trim() || !form.email.trim() || !form.password) {
      return setError('Todos los campos son obligatorios.')
    }
    if (form.password.length < 6) {
      return setError('La contraseña debe tener al menos 6 caracteres.')
    }
    if (form.password !== form.confirmPassword) {
      return setError('Las contraseñas no coinciden.')
    }

    setLoading(true)
    const result = await register({ fullName: form.fullName, email: form.email, password: form.password })
    setLoading(false)

    if (result.error) setError(result.error)
    else navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
            <span className="font-extrabold text-orange-500 text-2xl">Aprender-Aleman.de</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Crear cuenta</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Empieza a aprender alemán hoy</p>
        </div>

        <form onSubmit={handleSubmit} className="card">
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm p-3 rounded-xl mb-4">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Nombre completo</label>
              <input
                type="text"
                value={form.fullName}
                onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))}
                className="input-field"
                placeholder="Tu nombre"
                autoComplete="name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Correo electrónico</label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="input-field"
                placeholder="tu@email.com"
                autoComplete="email"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Contraseña</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={form.password}
                  onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                  className="input-field pr-10"
                  placeholder="Mínimo 6 caracteres"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(p => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={showPass ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Confirmar contraseña</label>
              <input
                type="password"
                value={form.confirmPassword}
                onChange={e => setForm(f => ({ ...f, confirmPassword: e.target.value }))}
                className="input-field"
                placeholder="Repite tu contraseña"
                autoComplete="new-password"
              />
            </div>
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full mt-6" disabled={loading}>
            {loading ? 'Creando cuenta...' : 'Crear cuenta'}
          </Button>

          <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-700 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              ¿Ya tienes cuenta?{' '}
              <Link to="/login" className="font-semibold text-orange-500 hover:text-orange-600 transition-colors">
                Inicia sesión
              </Link>
            </p>
          </div>
        </form>

        <p className="text-center mt-6">
          <Link to="/" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
            ← Volver al inicio
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
