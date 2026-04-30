# Migración de emergencia — Supabase → MySQL en Hetzner VPS

Plan para volver online con los estudiantes activos. Tiempo estimado: 2-3 horas.

## Resumen del flujo

```
Supabase (PostgreSQL)        Hetzner VPS (MySQL)         Coolify backend
       │                           │                            │
       │  pg_dump conceptual       │                            │
       └──── migrate-script ──────►│                            │
                                   │                            │
                                   │◄────── env vars actualizados ─┘
                                   │
                              [App vive]
```

## Pre-requisitos

- [ ] Acceso SSH a tu VPS Hetzner `77.42.22.34`
- [ ] Connection string de Supabase (Dashboard → Settings → Database)
- [ ] Acceso al panel de Coolify

---

## Paso 1 — Inspeccionar el schema de Supabase (10 min)

Antes de tocar nada, miramos qué hay en Supabase para saber cómo mapear.

```bash
cd C:\Users\gelfi\Desktop\schule\aprender-aleman
npm i pg
```

Setear connection string (PowerShell):
```powershell
$env:PG_URL="postgresql://postgres:TU_PASSWORD@db.mtemnkmxajaluocfekbx.supabase.co:5432/postgres"
```

Para conseguirla:
- Supabase Dashboard → Settings → Database
- Sección **Connection string** → tab **URI**
- Usar la "Direct connection" (la del puerto 5432)

Correr:
```bash
node scripts/inspect-supabase.mjs
```

Te imprime tablas, columnas, conteos y ejemplos. **Mandame el output**.

Con eso ajustamos las queries del paso 3.

---

## Paso 2 — Levantar MySQL en tu Hetzner VPS (30 min)

### 2a. Conectarte por SSH

```bash
ssh root@77.42.22.34
```

### 2b. Subir el script

Desde tu PC local:
```bash
scp C:\Users\gelfi\Desktop\schule\aprender-aleman\deploy\setup-mysql.sh root@77.42.22.34:/root/
```

### 2c. Editar el script en el VPS

```bash
nano /root/setup-mysql.sh
```

Cambiar estas líneas:
```bash
DB_PASSWORD="generar_uno_random_24_caracteres"   # IMPORTANTE
COOLIFY_OUTBOUND_IP="<saca-este-IP-en-paso-2d>"
```

### 2d. Conseguir la IP saliente de Coolify

En Coolify → api-schule → **Terminal**:
```bash
curl -s ifconfig.me
```

Copiá esa IP y pegala en `COOLIFY_OUTBOUND_IP` del script.

### 2e. Ejecutar el script en el VPS

```bash
bash /root/setup-mysql.sh
```

Al final imprime las credenciales y un comando de test. Probá el test desde tu PC para confirmar.

### 2f. Verificación

Desde tu PC:
```bash
node -e "require('mysql2/promise').createConnection('mysql://aprenderaleman:PW@77.42.22.34:3307/aprenderaleman').then(c=>c.query('SELECT 1')).then(r=>console.log('OK',r))"
```

---

## Paso 3 — Migrar datos (45 min)

### 3a. Ajustar `migrate-supabase-to-mysql.mjs`

Editá las constantes `SUPABASE_QUERY` y `STUDENTS_QUERY` según el schema real
que viste en el paso 1. Yo te puedo ayudar después de ver el output del inspect.

### 3b. Setear connection strings

```powershell
$env:PG_URL="postgresql://postgres:PW@db.mtemnkmxajaluocfekbx.supabase.co:5432/postgres"
$env:MYSQL_URL="mysql://aprenderaleman:PW@77.42.22.34:3307/aprenderaleman"
```

### 3c. Dry run (NO escribe nada)

```powershell
$env:DRY_RUN="1"
node scripts/migrate-supabase-to-mysql.mjs
```

Vas a ver cuántos users/students se importarían y un sample de los primeros.
Si todo se ve bien, hacelo en serio:

### 3d. Migración real

```powershell
$env:DRY_RUN="0"   # o $env:DRY_RUN=$null
node scripts/migrate-supabase-to-mysql.mjs
```

Salida esperada:
```
✓ 234 users insertados
✓ 198 students insertados
Backfill schule_progress + schule_subscriptions…
✓ Migración completa.
```

### 3e. Verificar en MySQL

```bash
mysql -h 77.42.22.34 -P 3307 -u aprenderaleman -p aprenderaleman -e "SELECT COUNT(*) FROM users; SELECT COUNT(*) FROM students;"
```

---

## Paso 4 — Apuntar Coolify a la nueva DB (5 min)

### 4a. Cambiar env vars del backend

En Coolify → **api-schule** → **Variables ambientales**:

```
DB_HOST = 77.42.22.34
DB_PORT = 3307
DB_USER = aprenderaleman
DB_PASS = (el random que pusiste en setup-mysql.sh)
DB_NAME = aprenderaleman
```

### 4b. Restart

Coolify → api-schule → **Detener → Iniciar**.

Mirá los logs: deberían aparecer las creaciones de tablas SCHULE:
```
Schule subscriptions table ready
Reviews table ready
Financial tracking tables ready
[migration] No SCHULE-only users to migrate
Server running on http://localhost:3001
```

### 4c. Health check

```
https://api-schule.aprender-aleman.de/api/health/full
```

Esperado:
```json
{
  "status": "ok",
  "db": true,
  "tables": {
    "users":   { "exists": true, "rowCount": 234 },
    "students":{ "exists": true, "rowCount": 198 },
    "schule_subscriptions": { "exists": true, "rowCount": 234 },
    ...
  },
  "loginJoin": { "ok": true, "error": null }
}
```

---

## Paso 5 — Migrar también `app.aprender-aleman.de` (CRÍTICO)

Si tu app principal de la academia usa la misma DB, también necesita
apuntar a este nuevo MySQL. **Mismo cambio de env vars** en su backend
(donde sea que viva). Si no, los estudiantes no pueden hacer SSO.

---

## Paso 6 — Comunicación con usuarios

Mandar un email a la lista de estudiantes:

> Hola, hemos tenido un problema técnico con nuestro proveedor de
> base de datos. Para volver a entrar, hacé clic en "Olvidé mi contraseña"
> y te llegará un email para crear una nueva. Los datos de tu progreso
> y suscripción siguen activos. Disculpas por la molestia.

**Importante**: agregar el endpoint de password reset al backend (no existe ahora).

---

## Rollback / Plan B

Si todo sale mal y querés volver al estado anterior:

- En Coolify → api-schule → revertir env vars al `DB_HOST=62.146.225.25`
- Restart

Pero como ese server está caído, no va a servir mucho. La fuente
de verdad ahora es el VPS Hetzner.

## Backup automático del nuevo MySQL

Configurar después de relanzar:

```bash
# En el VPS Hetzner, agregar a crontab (root)
0 3 * * * mysqldump -u aprenderaleman -pPW aprenderaleman | gzip > /root/backups/db-$(date +\%Y\%m\%d).sql.gz
0 4 * * 0 find /root/backups -mtime +30 -delete
```
