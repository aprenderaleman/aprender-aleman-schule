import React, { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import { ProgressProvider } from './context/ProgressContext'
import { ThemeProvider } from './context/ThemeContext'
import { SidebarProvider } from './context/SidebarContext'
import { initNativeBridge } from './utils/nativeBridge'

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
import LevelTest from './pages/LevelTest'
import AdminLayout from './components/Layout/AdminLayout'
import Paywall from './components/UI/Paywall'
import TrialBanner from './components/UI/TrialBanner'
import Navbar from './components/Layout/Navbar'
import AppSidebar from './components/Layout/AppSidebar'
import MobileTabBar from './components/Layout/MobileTabBar'
import NetworkStatus from './components/UI/NetworkStatus'
import InstallPrompt from './components/UI/InstallPrompt'
import ImpersonationBanner from './components/UI/ImpersonationBanner'
import CommandPalette from './components/UI/CommandPalette'
import SkipLink from './components/UI/SkipLink'
import MaintenanceGate from './components/MaintenanceGate'
import ChatBot from './components/ChatBot/ChatBot'
import { useGlobalShortcuts } from './hooks/useGlobalShortcuts'

// Lazy load admin pages
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'))
const AdminUsers = lazy(() => import('./pages/admin/AdminUsers'))
const AdminUserDetail = lazy(() => import('./pages/admin/AdminUserDetail'))
const AdminFinances = lazy(() => import('./pages/admin/AdminFinances'))
const AdminReviews = lazy(() => import('./pages/admin/AdminReviews'))

// Cursos por nivel — chunk propio, solo se descargan al entrar
const DeutschC1 = lazy(() => import('./pages/DeutschC1'))
const DeutschB2 = lazy(() => import('./pages/DeutschB2'))
const DeutschB1 = lazy(() => import('./pages/DeutschB1'))

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
      <div className="min-h-screen bg-background">
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

// Curso Goethe C1: alumnos activos, profesores y admin. Nadie más.
// Ojo: esto es solo UX. El gate de verdad está en el servidor — el contenido
// del curso vive en server/deutschc1/ y solo sale por /api/deutschc1/*, que
// exige el mismo rol y el mismo subscriptionMiddleware.
const C1_ROLES = ['superadmin', 'admin', 'teacher', 'student', 'schule_student']

function C1Route({ children }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  if (!C1_ROLES.includes(user.role)) return <Navigate to="/dashboard" replace />
  // Alumnos necesitan además suscripción activa; PaidRoute deja pasar al staff.
  return (
    <PaidRoute>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-orange-500" />
        </div>
      }>
        {children}
      </Suspense>
    </PaidRoute>
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

function GlobalShortcutsBinder() {
  useGlobalShortcuts()
  return null
}

function AppRoutes() {
  return (
    <>
      <GlobalShortcutsBinder />
      <TrialBanner />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auto-login" element={<AutoLogin />} />
        <Route path="/pricing" element={<Pricing />} />
        {/* Public level test — funnel for new users */}
        <Route path="/test-de-nivel" element={<LevelTest />} />
        <Route path="/niveau-test" element={<LevelTest />} />
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
        {/* Goethe-Zertifikat C1 — curso restringido */}
        <Route path="/deutschc1" element={<C1Route><DeutschC1 /></C1Route>} />
        <Route path="/deutschc1/:id" element={<C1Route><DeutschC1 /></C1Route>} />
        <Route path="/deutschb2" element={<C1Route><DeutschB2 /></C1Route>} />
        <Route path="/deutschb2/:id" element={<C1Route><DeutschB2 /></C1Route>} />
        <Route path="/deutschb1" element={<C1Route><DeutschB1 /></C1Route>} />
        <Route path="/deutschb1/:id" element={<C1Route><DeutschB1 /></C1Route>} />
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
  // Wire hardware back button, deep links, status bar, splash hide.
  // No-op on web. Only runs once on mount.
  useEffect(() => {
    initNativeBridge()
    // Offline queue works on web too (navigator.online events).
    import('./utils/offlineQueue').then(({ initOfflineQueue }) => initOfflineQueue())
  }, [])

  return (
    <ErrorBoundary>
      <MaintenanceGate>
        <BrowserRouter>
          <ThemeProvider>
            <AuthProvider>
              <ProgressProvider>
                <SidebarProvider>
                  <SkipLink />
                  <ImpersonationBanner />
                  <NetworkStatus />
                  <AppSidebar />
                  <AppRoutes />
                  <MobileTabBar />
                  <CommandPalette />
                  <InstallPrompt />
                  <ChatBot />
                </SidebarProvider>
              </ProgressProvider>
            </AuthProvider>
          </ThemeProvider>
        </BrowserRouter>
      </MaintenanceGate>
    </ErrorBoundary>
  )
}
