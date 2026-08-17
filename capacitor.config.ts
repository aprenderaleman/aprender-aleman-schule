import type { CapacitorConfig } from '@capacitor/cli'

/**
 * Capacitor config for the SCHULE native app.
 *
 * Strategy: the WebView loads our production frontend from Vercel
 * (server: {url}) so every push to main updates the app OTA — no
 * store re-submission needed for pure frontend changes. Native code
 * changes (new plugins, permissions) still require an app update.
 *
 * For iOS builds we swap to the local bundled build via the
 * `capacitor.config.local.ts` override so App Store review sees
 * self-contained content. See scripts/build-mobile.mjs.
 */
const config: CapacitorConfig = {
  appId: 'de.aprenderaleman.schule',
  appName: 'SCHULE',
  webDir: 'dist',
  // Point the WebView at production so alumnos see the latest UI
  // without waiting for store updates. Local bundle is a fallback.
  server: {
    url: 'https://schule.aprender-aleman.de',
    cleartext: false,
    androidScheme: 'https',
  },
  ios: {
    contentInset: 'always',
    limitsNavigationsToAppBoundDomains: false,
    // Prevent Safari-style bounce that looks broken inside an app shell
    scrollEnabled: true,
  },
  android: {
    allowMixedContent: false,
    // Keep Android splash on until React is ready
    backgroundColor: '#FAF4EA',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      launchAutoHide: true,
      backgroundColor: '#FAF4EA',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    },
    StatusBar: {
      style: 'DEFAULT', // adapts to system dark/light
      backgroundColor: '#FAF4EA',
    },
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
  },
}

export default config
