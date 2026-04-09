import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import { ProgressProvider } from './context/ProgressContext'
import { ThemeProvider } from './context/ThemeContext'

import ErrorBoundary from './components/ErrorBoundary'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Exercises from './pages/Exercises'
import ExercisePlayer from './pages/ExercisePlayer'
import Progress from './pages/Progress'
import Profile from './pages/Profile'
import Achievements from './pages/Achievements'
import AutoLogin from './pages/AutoLogin'
import AdminLayout from './components/Layout/AdminLayout'

// Lazy load admin pages
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'))
const AdminUsers = lazy(() => import('./pages/admin/AdminUsers'))
const AdminUserDetail = lazy(() => import('./pages/admin/AdminUserDetail'))

function ProtectedRoute({ children }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  return children
}

function AdminRoute({ children }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  if (user.role !== 'superadmin' && user.role !== 'admin') return <Navigate to="/dashboard" replace />
  return (
    <AdminLayout>
      <Suspense fallback={
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-orange-500" />
        </div>
      }>
        {children}
      </Suspense>
    </AdminLayout>
  )
}

function PublicRoute({ children }) {
  const { user } = useAuth()
  if (user) {
    if (user.role === 'superadmin' || user.role === 'admin') return <Navigate to="/admin" replace />
    return <Navigate to="/dashboard" replace />
  }
  return children
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auto-login" element={<AutoLogin />} />
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/registro" element={<PublicRoute><Register /></PublicRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/ejercicios" element={<ProtectedRoute><Exercises /></ProtectedRoute>} />
      <Route path="/ejercicio/:id" element={<ProtectedRoute><ExercisePlayer /></ProtectedRoute>} />
      <Route path="/progreso" element={<ProtectedRoute><Progress /></ProtectedRoute>} />
      <Route path="/perfil" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="/logros" element={<ProtectedRoute><Achievements /></ProtectedRoute>} />
      {/* Admin routes */}
      <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
      <Route path="/admin/usuarios" element={<AdminRoute><AdminUsers /></AdminRoute>} />
      <Route path="/admin/usuarios/:userId" element={<AdminRoute><AdminUserDetail /></AdminRoute>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider>
          <AuthProvider>
            <ProgressProvider>
              <AppRoutes />
            </ProgressProvider>
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
