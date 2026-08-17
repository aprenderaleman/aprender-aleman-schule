import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { isNative } from './utils/platform'

// Web: registrar service worker para PWA + funcionalidad offline.
// Nativo (Capacitor): NO registrar. El shell nativo maneja su propio
// caching y un SW residual bloquea las actualizaciones OTA + interfiere
// con las push notifications nativas. Además, si alguien tenía la PWA
// instalada antes y ahora usa la app nativa, los SWs viejos se limpian.
if (isNative()) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(regs => {
      regs.forEach(reg => reg.unregister())
    }).catch(() => {})
  }
} else if ('serviceWorker' in navigator) {
  import('virtual:pwa-register').then(({ registerSW }) => {
    registerSW({ immediate: true })
  }).catch(() => {})
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
