# SCHULE — App nativa iOS + Android

Todo lo necesario para compilar, testear y publicar la app en las
tiendas. Está pensado para que un dev con Windows + otro dev con Mac
(o vos con un Mac alquilado) puedan operar sin fricción.

---

## 1. Arquitectura de un vistazo

```
Frontend web (Vercel)  ←──── OTA reload
        ↑
        │
    WebView (Capacitor)
        │
   ┌────┴──────┬─────────────┐
   │ iOS shell │ Android shell│
   └───────────┴──────────────┘
```

- El shell nativo (iOS/Android) carga el frontend **desde
  `schule.aprender-aleman.de`** — cualquier push a `main` que actualice
  el web actualiza también las apps al reabrir. Zero re-submission
  para cambios de UI.
- Solo se necesita nuevo build + submit cuando cambian plugins
  nativos o permisos en Info.plist / AndroidManifest.

---

## 2. Requisitos por plataforma

| | Android | iOS |
|---|---|---|
| Sistema para compilar | Windows/Mac/Linux | **Mac obligatorio** (o Xcode Cloud) |
| Herramientas | Android Studio + JDK 17+ | Xcode 15+ + Cocoapods |
| Cuenta de tienda | Google Play Console ($25 pago único) | Apple Developer ($99/año) |
| Firma | Keystore local (crear una vez) | Automatic Signing con Apple ID |

---

## 3. Setup local (una vez)

### Android (Windows)

```bash
# 1. Instalar Android Studio → File → Settings → SDK Manager
#    Instalar: SDK Platform 34, Build Tools 34.0.0, Emulator, Platform-Tools
# 2. Crear un emulador (AVD Manager) — recomiendo Pixel 6 API 34
# 3. Abrir el proyecto:
cd C:\Users\gelfi\Desktop\schule\aprender-aleman
npm install
npm run build        # genera dist/
npx cap sync android # copia dist/ + plugins nativos al proyecto Android
npx cap open android # abre Android Studio con el proyecto

# En Android Studio: Run → verás la app en el emulador
```

Alternativa sin Android Studio (más rápido para iterar):
```bash
npx cap run android            # compila + instala en dispositivo/emulador
```

### iOS (Mac)

```bash
# 1. Instalar Xcode desde App Store
# 2. sudo gem install cocoapods
# 3. Clonar el repo:
git clone https://github.com/aprenderaleman/aprender-aleman-schule.git
cd aprender-aleman-schule
npm install
npm run build
cd ios/App
pod install                    # descarga Capacitor + plugins nativos
cd ../..
npx cap open ios               # abre Xcode
# En Xcode: elegir simulador iPhone → Run (▶)
```

Si el `pod install` tarda mucho la primera vez es normal (bajarán ~500MB).

---

## 4. Estructura del repo

```
android/                    Proyecto Android (Gradle)
  app/
    src/main/
      AndroidManifest.xml   Permisos + deep links
      res/                  Iconos, splash, strings
      java/de/aprenderaleman/schule/MainActivity.java

ios/                        Proyecto iOS (Xcode)
  App/
    App/
      Info.plist            Permisos + config
      Assets.xcassets/      Iconos + splash
    App.xcworkspace         ← abrir con Xcode (NO el .xcodeproj)

assets/                     Fuentes para generar iconos con
  icon-only.png             @capacitor/assets
  icon-foreground.png

capacitor.config.ts         Config central (appId, WebView URL, plugins)

scripts/
  build-pruefungen-answers.mjs  Prebuild: genera server/pruefungen-answers.json

src/utils/
  platform.js               isNative / isIOS / isAndroid / isWeb
  nativeBridge.js           Back button, deep links, splash, status bar
  speech.js                 STT + TTS (web/native abstraction)
  pushNotifications.js      FCM/APNs + register token
  biometric.js              Face ID / Touch ID unlock
  storage.js                localStorage + Capacitor Preferences
```

---

## 5. Workflow diario

Cuando cambia código del frontend:
```bash
npm run build       # incluye prebuild (sync-pruefungen)
npx cap sync        # copia dist/ + config a las plataformas
npx cap run android # o open ios en Xcode
```

Cuando agregás/actualizás un plugin nativo:
```bash
npm install <plugin>
npx cap sync
# iOS solo: cd ios/App && pod install
```

Cuando cambian iconos o splash:
```bash
# Reemplazá assets/icon-only.png y assets/icon-foreground.png
npx capacitor-assets generate --iconBackgroundColor '#FAF4EA' \
  --iconBackgroundColorDark '#0E1B2E' \
  --splashBackgroundColor '#FAF4EA' \
  --splashBackgroundColorDark '#0E1B2E'
npx cap sync
```

---

## 6. Testing con beta users

### Android (Google Play Internal Testing)

1. En Play Console → app → Testing → Internal testing
2. Subir bundle firmado:
   ```bash
   cd android
   ./gradlew bundleRelease  # genera app-release.aab
   # Firmar con keystore (ver sección 8)
   ```
3. Agregar emails de beta testers en la lista
4. Copiar el opt-in link y mandarlo por email/WhatsApp
5. Alumnos aceptan → instalan desde Play Store

### iOS (TestFlight)

1. En Xcode: Product → Archive
2. Distribute App → App Store Connect → Upload
3. En App Store Connect: TestFlight tab → agregar internal testers
4. Los testers reciben email con link a la app TestFlight

---

## 7. Publicación a producción

### Android (Google Play)

1. Production track en Play Console → crear release
2. Upload del `.aab` firmado
3. Escribir "What's new in this version" (300 chars max)
4. Rollout: podés empezar con 10% → subir gradualmente
5. Review: 1-3 días. Aprobado → live automático.

### iOS (App Store)

1. En App Store Connect → App Store tab → nueva versión
2. Screenshots requeridos: 6.7" (iPhone 15 Pro Max), 6.5" (iPhone 11 Pro Max)
3. Descripción, keywords (100 chars), URL de soporte, URL de privacidad
4. Version release: manual (vos activás cuando aprueban) o automatic
5. Submit for review → 1-3 días típico
6. Aprobado → activar

### Checklist antes de submit

- [ ] Testeado en dispositivo real (no solo emulador)
- [ ] Push funciona end-to-end (FCM certs configurados)
- [ ] Face ID / biometría probada
- [ ] Prüfungen speaking funciona con STT nativo
- [ ] `Pricing.jsx` esconde CTAs Stripe en iOS (ya lo hace)
- [ ] Info.plist tiene todas las `*UsageDescription` (ya está)
- [ ] AndroidManifest tiene todos los permisos (ya está)
- [ ] Version bumpeada (`android/app/build.gradle` versionCode+1, `ios/App/App.xcodeproj` version)
- [ ] Privacy policy actualizada mencionando push + biometría

---

## 8. Firma Android (una vez)

```bash
# Generar keystore. GUARDÁ ESTE ARCHIVO Y LA CONTRASEÑA EN 1PASSWORD.
# Si lo perdés, no podés más publicar updates de la app.
keytool -genkey -v -keystore schule-release.jks -alias schule -keyalg RSA -keysize 2048 -validity 10000
```

Guardar el `.jks` fuera del repo. Configurar en `android/app/build.gradle`:

```gradle
signingConfigs {
    release {
        storeFile file('../schule-release.jks')
        storePassword System.getenv('SCHULE_KEYSTORE_PASSWORD')
        keyAlias 'schule'
        keyPassword System.getenv('SCHULE_KEY_PASSWORD')
    }
}
buildTypes {
    release {
        signingConfig signingConfigs.release
        minifyEnabled true
    }
}
```

Antes de compilar release:
```bash
export SCHULE_KEYSTORE_PASSWORD=...
export SCHULE_KEY_PASSWORD=...
./gradlew bundleRelease
```

---

## 9. Push notifications setup (una vez)

### Firebase (para Android y como pipeline unificado para iOS)

1. Crear proyecto Firebase en `console.firebase.google.com`
2. Add app → Android → package name `de.aprenderaleman.schule`
3. Descargar `google-services.json` → poner en `android/app/`
4. Editar `android/build.gradle` → agregar `classpath 'com.google.gms:google-services:4.4.0'`
5. Editar `android/app/build.gradle` → agregar al final `apply plugin: 'com.google.gms.google-services'`

### APNs (iOS)

1. En Apple Developer → Certificates, Identifiers & Profiles
2. Crear un Auth Key (.p8) para APNs
3. En Firebase → Project Settings → Cloud Messaging → iOS app config → subir el .p8

### Backend (server/index.js)

El endpoint `/api/notifications/register-token` ya existe. Para enviar
pushes desde el server hay que agregar:

```bash
npm install firebase-admin
```

Ejemplo mínimo (agregar como cron o desde eventos):
```js
import admin from 'firebase-admin'
admin.initializeApp({ credential: admin.credential.applicationDefault() })

async function sendPush(userId, { title, body, route }) {
  const [tokens] = await pool.query(
    'SELECT token FROM schule_device_tokens WHERE userId = ?', [userId]
  )
  if (!tokens.length) return
  await admin.messaging().sendEachForMulticast({
    tokens: tokens.map(t => t.token),
    notification: { title, body },
    data: { route: route || '/dashboard' },
  })
}
```

Ideas de push para engagement:
- Cooldown de Prüfung Sprechen expirado
- Racha de 12 días en riesgo (falta actividad hoy)
- Nueva unidad B2 desbloqueada
- Certificado emitido
- Nuevo bloque del path completado

---

## 10. Troubleshooting frecuente

**"White screen al abrir la app"**
- Chequear que `capacitor.config.ts` tenga la URL correcta.
- Ver logs: `npx cap run android --consolelogs` o Safari Web Inspector para iOS.

**"pod install falla con network error"**
- Usar VPN o cambiar red. Cocoapods a veces se traba con conexiones lentas.

**"Face ID no funciona en simulador iOS"**
- El simulador tiene menú Features → Face ID → Enrolled + Matching Face.

**"Los deep links no abren la app"**
- iOS: verificar que el URL scheme esté en Info.plist (por defecto Capacitor lo mete). En Xcode: Target → Info → URL Types → agregar `schule`.
- Android: `adb shell am start -W -a android.intent.action.VIEW -d "schule://dashboard" de.aprenderaleman.schule` para probar.

**"Push no llega en iOS"**
- Chequear que `NSFaceIDUsageDescription` esté en Info.plist (falso amigo — la ausencia de OTRO descriptor puede tirar el proceso).
- Verificar en Firebase que se registró el token del device.
- Provisioning profile tiene que incluir Push Notifications capability.

**"El bundle Android es enorme (>50MB)"**
- Habilitar `minifyEnabled true` + `shrinkResources true` en build.gradle.
- El AAB comprime bien, no te preocupes por eso en Play Store.

---

## 11. Costos operativos

| Item | Costo | Frecuencia |
|---|---|---|
| Apple Developer | $99 | anual |
| Google Play | $25 | one-time |
| Firebase (push) | $0 | free tier ilimitado para nuestro volumen |
| Mac cloud (MacInCloud) | ~$30/mes | opcional si no tenés Mac |
| Xcode Cloud | $15/mes | alternativa a Mac local |

---

## 12. Contactos y accesos

- Bundle IDs: `de.aprenderaleman.schule` (iOS + Android)
- Apple Team ID: (pendiente — completar cuando se cree la cuenta)
- Google Play account: (pendiente)
- Firebase project: (pendiente — crear en Semana 4 del roadmap)
- Keystore Android: (guardar en 1Password bajo "SCHULE Android keystore")
