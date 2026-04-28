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
import Flashcards from './pages/Flashcards'
import Pricing from './pages/Pricing'
import AutoLogin from './pages/AutoLogin'
import Pruefungen from './pages/Pruefungen'
import PruefungPlayer from './pages/PruefungPlayer'
import AdminLayout from './components/Layout/AdminLayout'
import Paywall from './components/UI/Paywall'
import TrialBanner from './components/UI/TrialBanner'
import Navbar from './components/Layout/Navbar'
import MobileTabBar from './components/Layout/MobileTabBar'
import ChatBot from './components/ChatBot/ChatBot'

// Lazy load admin pages
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'))
const AdminUsers = lazy(() => import('./pages/admin/AdminUsers'))
const AdminUserDetail = lazy(() => import('./pages/admin/AdminUserDetail'))
const AdminFinances = lazy(() => import('./pages/admin/AdminFinances'))
const AdminReviews = lazy(() => import('./pages/admin/AdminReviews'))

function ProtectedRoute({ children }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  return children
}

// Protected route that also requires active subscription/trial
function PaidRoute({ children }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />

  // Admins always pass
  if (user.role === 'superadmin' || user.role === 'admin') return children

  // Check subscription
  const sub = user.subscription
  if (!sub || !sub.hasAccess) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <Paywall />
      </div>
    )
  }

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
    <>
      <TrialBanner />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auto-login" element={<AutoLogin />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/registro" element={<PublicRoute><Register /></PublicRoute>} />
        {/* Dashboard always accessible (shows paywall inside if needed) */}
        <Route path="/dashboard" element={<PaidRoute><Dashboard /></PaidRoute>} />
        {/* Content routes require subscription */}
        <Route path="/ejercicios" element={<PaidRoute><Exercises /></PaidRoute>} />
        <Route path="/ejercicio/:id" element={<PaidRoute><ExercisePlayer /></PaidRoute>} />
        <Route path="/progreso" element={<PaidRoute><Progress /></PaidRoute>} />
        <Route path="/perfil" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/logros" element={<PaidRoute><Achievements /></PaidRoute>} />
        <Route path="/flashcards" element={<PaidRoute><Flashcards /></PaidRoute>} />
        <Route path="/pruefungen" element={<PaidRoute><Pruefungen /></PaidRoute>} />
        <Route path="/pruefungen/:examId" element={<PaidRoute><PruefungPlayer /></PaidRoute>} />
        {/* Admin routes */}
        <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
        <Route path="/admin/usuarios" element={<AdminRoute><AdminUsers /></AdminRoute>} />
        <Route path="/admin/usuarios/:userId" element={<AdminRoute><AdminUserDetail /></AdminRoute>} />
        <Route path="/admin/finanzen" element={<AdminRoute><AdminFinances /></AdminRoute>} />
        <Route path="/admin/bewertungen" element={<AdminRoute><AdminReviews /></AdminRoute>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
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
              <MobileTabBar />
              <ChatBot />
            </ProgressProvider>
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
