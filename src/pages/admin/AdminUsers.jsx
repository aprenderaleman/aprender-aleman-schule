import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  Filter,
  UserPlus,
  Edit2,
  Trash2,
  ToggleLeft,
  ToggleRight,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

const API_URL = import.meta.env.VITE_API_URL || ''

function getAuthHeaders() {
  const token = localStorage.getItem('auth_token')
  return { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
}

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1']
const STATUSES = ['active', 'inactive']

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.9, y: 20 }
}

function Modal({ isOpen, onClose, title, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            className="relative w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function InputField({ label, id, ...props }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        {label}
      </label>
      <input
        id={id}
        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-shadow"
        {...props}
      />
    </div>
  )
}

function SelectField({ label, id, options, placeholder, ...props }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        {label}
      </label>
      <select
        id={id}
        className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-shadow"
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}

export default function AdminUsers() {
  const [users, setUsers] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const limit = 50

  // Filters
  const [search, setSearch] = useState('')
  const [filterLevel, setFilterLevel] = useState('')
  const [filterStatus, setFilterStatus] = useState('')

  // Modals
  const [createOpen, setCreateOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [editingUser, setEditingUser] = useState(null)

  // Create form
  const [createForm, setCreateForm] = useState({
    fullName: '',
    email: '',
    password: '',
    level: 'A1',
    status: 'active'
  })

  // Edit form
  const [editForm, setEditForm] = useState({
    fullName: '',
    email: '',
    password: '',
    level: '',
    status: ''
  })

  const [saving, setSaving] = useState(false)

  // ── Fetch users ──────────────────────────────────────────────
  const fetchUsers = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams({
        search,
        level: filterLevel,
        status: filterStatus,
        page: String(page),
        limit: String(limit)
      })
      const res = await fetch(`${API_URL}/api/admin/users?${params}`, {
        headers: getAuthHeaders()
      })
      if (!res.ok) throw new Error('Fehler beim Laden der Benutzer')
      const data = await res.json()
      setUsers(data.users)
      setTotal(data.total)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [search, filterLevel, filterStatus, page])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  // Reset page when filters change
  useEffect(() => {
    setPage(1)
  }, [search, filterLevel, filterStatus])

  const totalPages = Math.max(1, Math.ceil(total / limit))

  // ── Create user ──────────────────────────────────────────────
  const handleCreate = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      const res = await fetch(`${API_URL}/api/admin/users`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(createForm)
      })
      if (!res.ok) throw new Error('Fehler beim Erstellen des Benutzers')
      setCreateOpen(false)
      setCreateForm({
        fullName: '',
        email: '',
        password: '',
        level: 'A1',
        status: 'active'
      })
      fetchUsers()
    } catch (err) {
      console.error(err)
      alert('Der Benutzer konnte nicht erstellt werden.')
    } finally {
      setSaving(false)
    }
  }

  // ── Edit user ────────────────────────────────────────────────
  const openEdit = (user) => {
    setEditingUser(user)
    setEditForm({
      fullName: user.fullName,
      email: user.email,
      password: '',
      level: user.level,
      status: user.status
    })
    setEditOpen(true)
  }

  const handleEdit = async (e) => {
    e.preventDefault()
    if (!editingUser) return
    setSaving(true)
    try {
      const body = {
        fullName: editForm.fullName,
        email: editForm.email,
        level: editForm.level,
        status: editForm.status
      }
      if (editForm.password) body.password = editForm.password
      const res = await fetch(
        `${API_URL}/api/admin/users/${editingUser.id}`,
        {
          method: 'PATCH',
          headers: getAuthHeaders(),
          body: JSON.stringify(body)
        }
      )
      if (!res.ok) throw new Error('Fehler beim Aktualisieren')
      setEditOpen(false)
      setEditingUser(null)
      fetchUsers()
    } catch (err) {
      console.error(err)
      alert('Der Benutzer konnte nicht aktualisiert werden.')
    } finally {
      setSaving(false)
    }
  }

  // ── Toggle status ────────────────────────────────────────────
  const toggleStatus = async (user) => {
    const newStatus = user.status === 'active' ? 'inactive' : 'active'
    try {
      const res = await fetch(`${API_URL}/api/admin/users/${user.id}`, {
        method: 'PATCH',
        headers: getAuthHeaders(),
        body: JSON.stringify({ status: newStatus })
      })
      if (!res.ok) throw new Error('Fehler beim Ändern des Status')
      fetchUsers()
    } catch (err) {
      console.error(err)
      alert('Der Status des Benutzers konnte nicht geändert werden.')
    }
  }

  // ── Delete user ──────────────────────────────────────────────
  const handleDelete = async (user) => {
    if (
      !window.confirm(
        `Möchtest du "${user.fullName}" wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.`
      )
    )
      return
    try {
      const res = await fetch(`${API_URL}/api/admin/users/${user.id}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      })
      if (!res.ok) throw new Error('Fehler beim Löschen')
      fetchUsers()
    } catch (err) {
      console.error(err)
      alert('Der Benutzer konnte nicht gelöscht werden.')
    }
  }

  // ── Format helpers ───────────────────────────────────────────
  const formatDate = (dateStr) => {
    if (!dateStr) return '—'
    return new Date(dateStr).toLocaleDateString('de-DE', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
  }

  // ── Render ───────────────────────────────────────────────────
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Benutzer
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {total} {total !== 1 ? 'registrierte Benutzer' : 'registrierter Benutzer'}
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setCreateOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl shadow-lg shadow-orange-500/25 transition-colors"
        >
          <UserPlus size={18} />
          Neuer Benutzer
        </motion.button>
      </div>

      {/* Filters */}
      <div className="card p-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Nach Name oder E-Mail suchen..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-shadow"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-gray-400 hidden md:block" />
            <select
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value)}
              className="px-3 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-shadow"
            >
              <option value="">Alle Niveaus</option>
              {LEVELS.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-shadow"
            >
              <option value="">Alle Status</option>
              {STATUSES.map((s) => (
                <option key={s} value={s}>
                  {s === 'active' ? 'Aktiv' : 'Inaktiv'}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  E-Mail
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-center">
                  Niveau
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right">
                  XP
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right">
                  Übungen
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right">
                  Serie
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Letzte Aktivität
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-center">
                  Status
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-center">
                  Aktionen
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700/50">
              {loading ? (
                <tr>
                  <td colSpan={9} className="px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 text-gray-400">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          ease: 'linear'
                        }}
                        className="w-5 h-5 border-2 border-orange-500 border-t-transparent rounded-full"
                      />
                      Benutzer werden geladen...
                    </div>
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td
                    colSpan={9}
                    className="px-4 py-16 text-center text-gray-400"
                  >
                    Keine Benutzer gefunden.
                  </td>
                </tr>
              ) : (
                users.map((user, index) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.02 }}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <Link
                        to={`/admin/usuarios/${user.id}`}
                        className="font-medium text-gray-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                      >
                        {user.fullName}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                      {user.email}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-flex items-center justify-center w-10 h-6 text-xs font-bold rounded-md bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400">
                        {user.level}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-gray-700 dark:text-gray-300 font-medium tabular-nums">
                      {user.xp?.toLocaleString('de-DE') ?? '—'}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-gray-700 dark:text-gray-300 tabular-nums">
                      {user.exerciseCount?.toLocaleString('de-DE') ?? '—'}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-gray-700 dark:text-gray-300 tabular-nums">
                      {user.streak ?? '—'}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(user.lastActivityDate)}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full ${
                          user.status === 'active'
                            ? 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400'
                            : 'bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            user.status === 'active'
                              ? 'bg-green-500'
                              : 'bg-red-500'
                          }`}
                        />
                        {user.status === 'active' ? 'Aktiv' : 'Inaktiv'}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-1">
                        <button
                          onClick={() => openEdit(user)}
                          title="Bearbeiten"
                          className="p-1.5 rounded-lg text-gray-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-500/10 transition-colors"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => toggleStatus(user)}
                          title={
                            user.status === 'active'
                              ? 'Deaktivieren'
                              : 'Aktivieren'
                          }
                          className="p-1.5 rounded-lg text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-colors"
                        >
                          {user.status === 'active' ? (
                            <ToggleRight size={16} className="text-green-500" />
                          ) : (
                            <ToggleLeft size={16} />
                          )}
                        </button>
                        <button
                          onClick={() => handleDelete(user)}
                          title="Löschen"
                          className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Seite {page} von {totalPages}
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={16} />
                Zurück
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Weiter
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── Create Modal ─────────────────────────────────────── */}
      <Modal
        isOpen={createOpen}
        onClose={() => setCreateOpen(false)}
        title="Neuer Benutzer"
      >
        <form onSubmit={handleCreate} className="space-y-4">
          <InputField
            label="Vollständiger Name"
            id="create-name"
            type="text"
            required
            value={createForm.fullName}
            onChange={(e) =>
              setCreateForm({ ...createForm, fullName: e.target.value })
            }
          />
          <InputField
            label="E-Mail"
            id="create-email"
            type="email"
            required
            value={createForm.email}
            onChange={(e) =>
              setCreateForm({ ...createForm, email: e.target.value })
            }
          />
          <InputField
            label="Passwort"
            id="create-password"
            type="password"
            required
            minLength={6}
            value={createForm.password}
            onChange={(e) =>
              setCreateForm({ ...createForm, password: e.target.value })
            }
          />
          <div className="grid grid-cols-2 gap-4">
            <SelectField
              label="Niveau"
              id="create-level"
              options={LEVELS}
              value={createForm.level}
              onChange={(e) =>
                setCreateForm({ ...createForm, level: e.target.value })
              }
            />
            <SelectField
              label="Status"
              id="create-status"
              options={STATUSES}
              value={createForm.status}
              onChange={(e) =>
                setCreateForm({ ...createForm, status: e.target.value })
              }
            />
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setCreateOpen(false)}
              className="px-4 py-2 text-sm font-medium rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Abbrechen
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-4 py-2 text-sm font-medium rounded-xl bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25 disabled:opacity-50 transition-colors"
            >
              {saving ? 'Wird erstellt...' : 'Benutzer erstellen'}
            </button>
          </div>
        </form>
      </Modal>

      {/* ── Edit Modal ───────────────────────────────────────── */}
      <Modal
        isOpen={editOpen}
        onClose={() => {
          setEditOpen(false)
          setEditingUser(null)
        }}
        title="Benutzer bearbeiten"
      >
        <form onSubmit={handleEdit} className="space-y-4">
          <InputField
            label="Vollständiger Name"
            id="edit-name"
            type="text"
            required
            value={editForm.fullName}
            onChange={(e) =>
              setEditForm({ ...editForm, fullName: e.target.value })
            }
          />
          <InputField
            label="E-Mail"
            id="edit-email"
            type="email"
            required
            value={editForm.email}
            onChange={(e) =>
              setEditForm({ ...editForm, email: e.target.value })
            }
          />
          <InputField
            label="Neues Passwort (leer lassen, um nicht zu ändern)"
            id="edit-password"
            type="password"
            value={editForm.password}
            onChange={(e) =>
              setEditForm({ ...editForm, password: e.target.value })
            }
          />
          <div className="grid grid-cols-2 gap-4">
            <SelectField
              label="Niveau"
              id="edit-level"
              options={LEVELS}
              value={editForm.level}
              onChange={(e) =>
                setEditForm({ ...editForm, level: e.target.value })
              }
            />
            <SelectField
              label="Status"
              id="edit-status"
              options={STATUSES}
              value={editForm.status}
              onChange={(e) =>
                setEditForm({ ...editForm, status: e.target.value })
              }
            />
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                setEditOpen(false)
                setEditingUser(null)
              }}
              className="px-4 py-2 text-sm font-medium rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Abbrechen
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-4 py-2 text-sm font-medium rounded-xl bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25 disabled:opacity-50 transition-colors"
            >
              {saving ? 'Wird gespeichert...' : 'Änderungen speichern'}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
