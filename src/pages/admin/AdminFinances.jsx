import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  DollarSign, TrendingUp, TrendingDown, Users, CreditCard, AlertTriangle,
  RefreshCw, Megaphone, Target, MousePointerClick, Eye, ArrowUpRight,
  Bot, Play, Clock, CheckCircle, XCircle, ChevronDown, ChevronUp,
  Upload, FileSpreadsheet, X,
} from 'lucide-react'
import {
  LineChart, Line, BarChart, Bar, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  PieChart, Pie, Cell, ComposedChart,
} from 'recharts'

const API_URL = import.meta.env.VITE_API_URL || ''

function getAuthHeaders() {
  const token = localStorage.getItem('auth_token')
  return { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
}

const COLORS = {
  orange: '#F97316', blue: '#3B82F6', green: '#22C55E',
  purple: '#8B5CF6', pink: '#EC4899', teal: '#14B8A6',
  red: '#EF4444', yellow: '#EAB308', indigo: '#6366F1',
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
}
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function StatCard({ icon: Icon, label, value, subValue, color, trend, index }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 flex items-center gap-4"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0" style={{ backgroundColor: `${color}18` }}>
        <Icon className="w-6 h-6" style={{ color }} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{label}</p>
        <p className="text-xl font-bold text-gray-800 dark:text-gray-100 truncate">{value}</p>
        {subValue && (
          <p className={`text-[11px] font-semibold flex items-center gap-1 ${trend === 'up' ? 'text-green-500' : trend === 'down' ? 'text-red-500' : 'text-gray-400'}`}>
            {trend === 'up' && <TrendingUp size={12} />}
            {trend === 'down' && <TrendingDown size={12} />}
            {subValue}
          </p>
        )}
      </div>
    </motion.div>
  )
}

function ChartCard({ title, children, className = '' }) {
  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 ${className}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100 mb-4">{title}</h3>
      {children}
    </motion.div>
  )
}

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-3 shadow-lg text-xs">
      <p className="font-semibold text-gray-600 dark:text-gray-300 mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color }} className="font-medium">
          {p.name}: {typeof p.value === 'number' && p.name?.toLowerCase().includes('€') ? `€${p.value.toFixed(2)}` : p.value?.toLocaleString?.() || p.value}
        </p>
      ))}
    </div>
  )
}

export default function AdminFinances() {
  const [data, setData] = useState(null)
  const [adsData, setAdsData] = useState(null)
  const [agentLogs, setAgentLogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [agentRunning, setAgentRunning] = useState(false)
  const [error, setError] = useState(null)
  const [showAgentLogs, setShowAgentLogs] = useState(false)
  const [selectedPeriod, setSelectedPeriod] = useState('6months')

  // CSV upload state
  const [uploading, setUploading] = useState(false)
  const [uploadResult, setUploadResult] = useState(null)
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef(null)

  const fetchFinances = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${API_URL}/api/admin/finances?period=${selectedPeriod}`, { headers: getAuthHeaders() })
      if (!res.ok) throw new Error('Fehler beim Laden')
      setData(await res.json())
    } catch (err) {
      setError(err.message)
    }
    setLoading(false)
  }, [selectedPeriod])

  const fetchAds = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/api/admin/ads-metrics`, { headers: getAuthHeaders() })
      if (res.ok) setAdsData(await res.json())
    } catch {}
  }, [])

  const fetchAgentLogs = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/api/admin/ads-agent/logs`, { headers: getAuthHeaders() })
      if (res.ok) setAgentLogs(await res.json())
    } catch {}
  }, [])

  const [agentError, setAgentError] = useState(null)

  const runAgent = async () => {
    if (agentRunning) return
    setAgentRunning(true)
    setAgentError(null)
    try {
      const res = await fetch(`${API_URL}/api/admin/ads-agent/run`, {
        method: 'POST',
        headers: getAuthHeaders(),
      })
      const result = await res.json().catch(() => ({}))
      if (res.ok) {
        setAgentLogs(prev => [result, ...prev])
        fetchAds()
      } else {
        setAgentError(result.error || `Fehler ${res.status}: ${res.statusText}`)
      }
    } catch (err) {
      setAgentError(err.message || 'Netzwerkfehler beim Ausführen des Agents.')
    }
    setAgentRunning(false)
  }

  const handleCsvUpload = async (files) => {
    // Normalize to array: accept a single File or a FileList/array
    const fileArray = Array.isArray(files) ? files : (files?.length !== undefined ? Array.from(files) : [files])
    const csvFiles = fileArray.filter(f => f && /\.csv$/i.test(f.name))

    if (csvFiles.length === 0) {
      setUploadResult({ ok: false, error: 'Bitte mindestens eine CSV-Datei auswählen.' })
      return
    }

    setUploading(true)
    setUploadResult(null)

    const results = []
    let totalRows = 0
    const allMonths = new Set()
    const errors = []

    for (const file of csvFiles) {
      try {
        const text = await file.text()
        const res = await fetch(`${API_URL}/api/admin/ads-report/upload`, {
          method: 'POST',
          headers: getAuthHeaders(),
          body: JSON.stringify({ csvData: text }),
        })
        const result = await res.json()
        if (res.ok) {
          results.push({ file: file.name, ok: true, ...result })
          totalRows += result.rowsImported || 0
          ;(result.months || []).forEach(m => allMonths.add(m))
        } else {
          errors.push(`${file.name}: ${result.error || 'Unbekannter Fehler'}`)
          results.push({ file: file.name, ok: false, error: result.error })
        }
      } catch (err) {
        errors.push(`${file.name}: ${err.message}`)
        results.push({ file: file.name, ok: false, error: err.message })
      }
    }

    const successCount = results.filter(r => r.ok).length
    if (successCount > 0) {
      setUploadResult({
        ok: true,
        fileCount: successCount,
        totalFiles: csvFiles.length,
        rowsImported: totalRows,
        months: Array.from(allMonths).sort(),
        errors: errors.length > 0 ? errors : null,
        results,
      })
      fetchAds()
      fetchFinances()
    } else {
      setUploadResult({
        ok: false,
        error: errors.join(' · ') || 'Upload fehlgeschlagen.',
        results,
      })
    }

    setUploading(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    const files = e.dataTransfer?.files
    if (files && files.length > 0) handleCsvUpload(files)
  }

  const handleFileInput = (e) => {
    const files = e.target.files
    if (files && files.length > 0) handleCsvUpload(files)
    e.target.value = ''
  }

  useEffect(() => { fetchFinances() }, [fetchFinances])
  useEffect(() => { fetchAds(); fetchAgentLogs() }, [fetchAds, fetchAgentLogs])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-orange-500" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <AlertTriangle size={48} className="mx-auto text-red-400 mb-4" />
        <p className="text-gray-500 dark:text-gray-400 mb-4">{error}</p>
        <button onClick={fetchFinances} className="px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors">
          Erneut versuchen
        </button>
      </div>
    )
  }

  if (!data) return null

  const { stripe, monthly, subscriptions, overview } = data

  // P&L data for chart
  const plData = (monthly || []).map(m => ({
    month: m.month,
    'Einnahmen €': m.revenue,
    'Ads-Kosten €': m.adSpend || 0,
    'Gewinn €': m.revenue - (m.adSpend || 0),
  }))

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">Finanzen</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Einnahmen, Abonnements und Werbeausgaben</p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={selectedPeriod}
            onChange={e => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-orange-400"
          >
            <option value="3months">Letzte 3 Monate</option>
            <option value="6months">Letzte 6 Monate</option>
            <option value="12months">Letzte 12 Monate</option>
            <option value="all">Alles</option>
          </select>
          <button onClick={() => { fetchFinances(); fetchAds() }} className="p-2 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-gray-500">
            <RefreshCw size={18} />
          </button>
        </div>
      </div>

      {/* ════════ STRIPE OVERVIEW ════════ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={DollarSign} label="MRR (Monatlich)" value={`€${(stripe?.mrr || 0).toFixed(2)}`}
          subValue={stripe?.mrrChange ? `${stripe.mrrChange > 0 ? '+' : ''}${stripe.mrrChange.toFixed(1)}% vs Vormonat` : null}
          trend={stripe?.mrrChange > 0 ? 'up' : stripe?.mrrChange < 0 ? 'down' : null}
          color={COLORS.green} index={0} />
        <StatCard icon={CreditCard} label="Aktive Abonnenten" value={stripe?.activeSubscribers || 0}
          subValue={`${stripe?.trialUsers || 0} im Probezeitraum`}
          color={COLORS.blue} index={1} />
        <StatCard icon={TrendingUp} label="Gesamteinnahmen" value={`€${(stripe?.totalRevenue || 0).toFixed(2)}`}
          subValue={`Ø €${(stripe?.avgRevenuePerUser || 0).toFixed(2)}/Nutzer`}
          color={COLORS.orange} index={2} />
        <StatCard icon={Users} label="Churn-Rate" value={`${(stripe?.churnRate || 0).toFixed(1)}%`}
          subValue={`${stripe?.canceledThisMonth || 0} Kündigungen diesen Monat`}
          trend={stripe?.churnRate > 5 ? 'down' : 'up'}
          color={stripe?.churnRate > 5 ? COLORS.red : COLORS.teal} index={3} />
      </div>

      {/* ════════ GOOGLE ADS OVERVIEW (from CSV) ════════ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Megaphone} label="Ads-Ausgaben (Monat)" value={`€${(adsData?.currentMonth?.spend || 0).toFixed(2)}`}
          subValue={adsData?.hasData ? (adsData.currentMonth?.changeVsPrev ? `${adsData.currentMonth.changeVsPrev > 0 ? '+' : ''}${adsData.currentMonth.changeVsPrev.toFixed(1)}%` : 'Aktueller Monat') : 'Noch kein CSV hochgeladen'}
          trend={adsData?.hasData ? (adsData.currentMonth?.changeVsPrev > 0 ? 'up' : 'down') : null}
          color={COLORS.purple} index={4} />
        <StatCard icon={MousePointerClick} label="CPA (Kosten/Abo)" value={adsData?.hasData ? `€${(adsData?.currentMonth?.cpa || 0).toFixed(2)}` : '—'}
          subValue={adsData?.hasData ? `Ziel: < €30` : 'CSV hochladen'}
          trend={adsData?.currentMonth?.cpa < 30 ? 'up' : 'down'}
          color={COLORS.indigo} index={5} />
        <StatCard icon={Eye} label="Impressionen" value={adsData?.hasData ? (adsData?.currentMonth?.impressions || 0).toLocaleString() : '—'}
          subValue={adsData?.hasData ? `CTR: ${(adsData?.currentMonth?.ctr || 0).toFixed(2)}%` : null}
          color={COLORS.yellow} index={6} />
        <StatCard icon={Target} label="Conversions (Monat)" value={adsData?.hasData ? (adsData?.currentMonth?.conversions || 0) : '—'}
          subValue={adsData?.hasData ? `Ziel: 200/Monat` : null}
          trend={adsData?.currentMonth?.conversions >= 200 ? 'up' : 'down'}
          color={COLORS.pink} index={7} />
      </div>

      {/* ════════ CSV UPLOAD AREA ════════ */}
      <motion.div
        className={`relative rounded-2xl border-2 border-dashed transition-colors ${
          dragOver
            ? 'border-purple-400 bg-purple-50 dark:bg-purple-900/20'
            : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
        } p-6`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv,text/csv"
          multiple
          onChange={handleFileInput}
          className="hidden"
        />
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
            {uploading ? (
              <RefreshCw size={24} className="text-purple-500 animate-spin" />
            ) : (
              <Upload size={24} className="text-purple-500" />
            )}
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-100">Google Ads Bericht hochladen</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
              Eine oder mehrere CSV-Dateien hier ablegen oder <button onClick={() => fileInputRef.current?.click()} className="text-purple-500 font-semibold hover:underline">Dateien auswählen</button>
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Exportiere Berichte aus Google Ads (Kampagnen, Keywords, etc.) als CSV mit Datum, Kosten, Klicks, Impressionen, Conversions. Mehrere Dateien werden nacheinander verarbeitet.
            </p>
            {adsData?.lastUpload && (
              <p className="text-xs text-gray-400 mt-1">
                Letzter Upload: {new Date(adsData.lastUpload).toLocaleString('de-DE')}
              </p>
            )}
          </div>
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="px-4 py-2.5 rounded-xl bg-purple-500 text-white text-sm font-semibold hover:bg-purple-600 transition-colors disabled:opacity-50 flex items-center gap-2 shrink-0"
          >
            <FileSpreadsheet size={16} />
            {uploading ? 'Wird importiert...' : 'CSV hochladen'}
          </button>
        </div>

        {/* Upload result */}
        <AnimatePresence>
          {uploadResult && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4"
            >
              <div className={`rounded-xl p-3 ${
                uploadResult.ok
                  ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                  : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
              }`}>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2 flex-1 min-w-0">
                    {uploadResult.ok ? (
                      <CheckCircle size={16} className="text-green-500 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                    )}
                    <div className={`text-sm font-medium min-w-0 flex-1 ${uploadResult.ok ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                      {uploadResult.ok ? (
                        <>
                          <p>
                            {uploadResult.fileCount > 1
                              ? `${uploadResult.fileCount} von ${uploadResult.totalFiles} Dateien importiert`
                              : `${uploadResult.rowsImported} Zeilen importiert`}
                            {uploadResult.fileCount > 1 && ` · ${uploadResult.rowsImported} Zeilen gesamt`}
                          </p>
                          {uploadResult.months?.length > 0 && (
                            <p className="text-xs opacity-80 mt-0.5">Monate: {uploadResult.months.join(', ')}</p>
                          )}
                          {uploadResult.errors?.length > 0 && (
                            <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">
                              ⚠️ {uploadResult.errors.length} Datei(en) fehlgeschlagen: {uploadResult.errors.join(' · ')}
                            </p>
                          )}
                        </>
                      ) : (
                        <p className="break-words">{uploadResult.error}</p>
                      )}
                    </div>
                  </div>
                  <button onClick={() => setUploadResult(null)} className="text-gray-400 hover:text-gray-600 shrink-0">
                    <X size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ════════ CHARTS ROW 1: Revenue + P&L ════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Monatliche Einnahmen">
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={monthly || []}>
              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={COLORS.green} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={COLORS.green} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={v => `€${v}`} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="revenue" name="Einnahmen €" stroke={COLORS.green} fill="url(#revGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Gewinn & Verlust">
          <ResponsiveContainer width="100%" height={280}>
            <ComposedChart data={plData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} tickFormatter={v => `€${v}`} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="Einnahmen €" fill={COLORS.green} radius={[4, 4, 0, 0]} />
              <Bar dataKey="Ads-Kosten €" fill={COLORS.red} radius={[4, 4, 0, 0]} />
              <Line type="monotone" dataKey="Gewinn €" stroke={COLORS.blue} strokeWidth={2} dot={{ r: 3 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* ════════ CHARTS ROW 2: Subscribers + Ads ════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Abonnenten-Entwicklung">
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={monthly || []}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line type="monotone" dataKey="activeSubscribers" name="Aktive" stroke={COLORS.blue} strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="newSubscribers" name="Neue" stroke={COLORS.green} strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="canceled" name="Gekündigt" stroke={COLORS.red} strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {adsData?.hasData && adsData?.dailyMetrics?.length > 0 ? (
          <ChartCard title="Google Ads — Tägliche Performance (CSV)">
            <ResponsiveContainer width="100%" height={280}>
              <ComposedChart data={adsData.dailyMetrics}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                <YAxis yAxisId="left" tick={{ fontSize: 11 }} tickFormatter={v => `€${v}`} />
                <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar yAxisId="left" dataKey="spend" name="Kosten €" fill={COLORS.purple} radius={[3, 3, 0, 0]} />
                <Line yAxisId="right" type="monotone" dataKey="clicks" name="Klicks" stroke={COLORS.orange} strokeWidth={2} />
                <Line yAxisId="right" type="monotone" dataKey="conversions" name="Conversions" stroke={COLORS.green} strokeWidth={2} />
              </ComposedChart>
            </ResponsiveContainer>
          </ChartCard>
        ) : (
          <ChartCard title="Google Ads — Tägliche Performance">
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <FileSpreadsheet size={40} className="text-gray-300 dark:text-gray-600 mb-3" />
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Noch keine Ads-Daten vorhanden</p>
              <p className="text-xs text-gray-400 mt-1 max-w-xs">
                Lade einen CSV-Bericht aus Google Ads hoch, um hier die tägliche Performance zu sehen.
              </p>
            </div>
          </ChartCard>
        )}
      </div>

      {/* ════════ SUBSCRIPTION BREAKDOWN ════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChartCard title="Abo-Status Verteilung">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={subscriptions?.statusBreakdown || []}
                dataKey="count"
                nameKey="status"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {(subscriptions?.statusBreakdown || []).map((_, i) => (
                  <Cell key={i} fill={[COLORS.green, COLORS.blue, COLORS.yellow, COLORS.red, COLORS.purple][i % 5]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Finanzübersicht" className="lg:col-span-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { label: 'Gesamteinnahmen', value: `€${(overview?.totalRevenue || 0).toFixed(2)}`, color: COLORS.green },
              { label: 'Gesamte Ads-Kosten', value: `€${(overview?.totalAdSpend || 0).toFixed(2)}`, color: COLORS.red },
              { label: 'Nettogewinn', value: `€${(overview?.netProfit || 0).toFixed(2)}`, color: overview?.netProfit >= 0 ? COLORS.green : COLORS.red },
              { label: 'ROAS', value: overview?.roas ? `${overview.roas.toFixed(1)}x` : '—', color: COLORS.blue },
              { label: 'LTV (Ø)', value: `€${(overview?.avgLtv || 0).toFixed(2)}`, color: COLORS.orange },
              { label: 'Zahlende Nutzer', value: overview?.payingUsers || 0, color: COLORS.teal },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{item.label}</p>
                <p className="text-lg font-bold" style={{ color: item.color }}>{item.value}</p>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>

      {/* ════════ AI AGENT SECTION ════════ */}
      <motion.div
        className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800 p-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
              <Bot size={22} className="text-indigo-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">KI-Werbeagent</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Analysiert hochgeladene Google Ads Daten und schlägt Optimierungen vor</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAgentLogs(!showAgentLogs)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Clock size={14} />
              Protokoll
              {showAgentLogs ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            <button
              onClick={runAgent}
              disabled={agentRunning || !adsData?.hasData}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {agentRunning ? <RefreshCw size={14} className="animate-spin" /> : <Play size={14} />}
              {agentRunning ? 'Agent läuft...' : 'Jetzt analysieren'}
            </button>
          </div>
        </div>

        {/* Agent error */}
        <AnimatePresence>
          {agentError && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4 rounded-xl p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-start gap-2"
            >
              <XCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
              <div className="text-sm text-red-700 dark:text-red-400 flex-1 break-words">{agentError}</div>
              <button onClick={() => setAgentError(null)} className="text-red-400 hover:text-red-600 shrink-0">
                <X size={14} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Agent status */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700">
            <p className="text-[10px] text-gray-400 font-bold uppercase">Datenquelle</p>
            <p className={`text-sm font-semibold ${adsData?.hasData ? 'text-green-500' : 'text-yellow-500'}`}>
              {adsData?.hasData ? '● CSV hochgeladen' : '● Kein CSV vorhanden'}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700">
            <p className="text-[10px] text-gray-400 font-bold uppercase">Letzte Analyse</p>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              {agentLogs[0]?.timestamp ? new Date(agentLogs[0].timestamp).toLocaleString('de-DE') : 'Noch nie'}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700">
            <p className="text-[10px] text-gray-400 font-bold uppercase">Ziel</p>
            <p className="text-sm font-semibold text-indigo-500">200 zahlende Nutzer/Monat</p>
          </div>
        </div>

        {/* Agent logs */}
        <AnimatePresence>
          {showAgentLogs && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {agentLogs.length === 0 ? (
                  <p className="text-sm text-gray-400 text-center py-4">Noch keine Agent-Ausführungen</p>
                ) : (
                  agentLogs.map((log, i) => (
                    <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {log.status === 'success' ? (
                            <CheckCircle size={14} className="text-green-500" />
                          ) : (
                            <XCircle size={14} className="text-red-500" />
                          )}
                          <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                            {new Date(log.timestamp).toLocaleString('de-DE')}
                          </span>
                        </div>
                        {(log.changes?.length > 0 || log.proposedChanges?.length > 0) && (
                          <span className="text-[10px] font-bold bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-full">
                            {(log.proposedChanges || log.changes)?.length} Vorschläge
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">{log.summary}</p>
                      {(log.proposedChanges || log.changes)?.length > 0 && (
                        <div className="mt-2 space-y-1">
                          <p className="text-[10px] font-bold text-indigo-500 uppercase">Vorgeschlagene Änderungen</p>
                          {(log.proposedChanges || log.changes).map((c, j) => (
                            <div key={j} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                              <ArrowUpRight size={12} className="text-indigo-400 mt-0.5 shrink-0" />
                              <span>{c}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {log.recommendations?.length > 0 && (
                        <div className="mt-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-2">
                          <p className="text-[10px] font-bold text-yellow-600 dark:text-yellow-400 mb-1">EMPFEHLUNGEN</p>
                          {log.recommendations.map((r, j) => (
                            <p key={j} className="text-xs text-gray-600 dark:text-gray-300">• {r}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ════════ RECENT PAYMENTS TABLE ════════ */}
      <ChartCard title="Letzte Zahlungen">
        <div className="overflow-x-auto -mx-2">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                <th className="text-left px-3 py-2 font-semibold">Datum</th>
                <th className="text-left px-3 py-2 font-semibold">Nutzer</th>
                <th className="text-left px-3 py-2 font-semibold">Betrag</th>
                <th className="text-left px-3 py-2 font-semibold">Status</th>
                <th className="text-left px-3 py-2 font-semibold">Typ</th>
              </tr>
            </thead>
            <tbody>
              {(data?.recentPayments || []).map((p, i) => (
                <tr key={i} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td className="px-3 py-2.5 text-gray-600 dark:text-gray-300">{new Date(p.date).toLocaleDateString('de-DE')}</td>
                  <td className="px-3 py-2.5 text-gray-800 dark:text-gray-100 font-medium">{p.name || p.email}</td>
                  <td className="px-3 py-2.5 font-semibold text-green-600">€{(p.amount / 100).toFixed(2)}</td>
                  <td className="px-3 py-2.5">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      p.status === 'succeeded' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                      p.status === 'failed' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                      'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                      {p.status === 'succeeded' ? 'Erfolgreich' : p.status === 'failed' ? 'Fehlgeschlagen' : 'Ausstehend'}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-gray-500 dark:text-gray-400">{p.type || 'Abo'}</td>
                </tr>
              ))}
              {(!data?.recentPayments || data.recentPayments.length === 0) && (
                <tr>
                  <td colSpan={5} className="px-3 py-8 text-center text-gray-400">Noch keine Zahlungen</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </ChartCard>
    </div>
  )
}
