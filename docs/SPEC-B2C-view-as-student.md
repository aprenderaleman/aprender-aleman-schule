# Spec para Dev-B2C — "Ver como alumno" en el panel de teacher

**Owner del lado SCHULE**: ya implementado y en producción (commits `0533cd7` + `547de1d`).
**Owner del lado B2C**: pendiente — este documento.
**Tiempo estimado de trabajo B2C**: 3-5 h (backend proxy + UI + testing).

---

## Contexto

Los teachers de la academia necesitan poder revisar qué está haciendo cada alumno dentro de SCHULE (ejercicios completados, errores, Prüfungen rendidos, chat con Hans, etc.).

En vez de armar un panel de teacher aparte dentro de SCHULE, aprovechamos el mecanismo SSO que ya conecta B2C con SCHULE: el teacher se loguea **como el alumno** por 2 horas, en **modo solo lectura** (no puede modificar el progreso).

SCHULE muestra un banner púrpura permanente arriba de la pantalla ("*TeacherX está viendo como AlumnoY · solo lectura*") y bloquea cualquier POST/PUT/DELETE con 403.

## Lo que ya hace SCHULE (no hace falta tocar)

- Endpoint `POST /api/b2c/sso-link` acepta parámetros `impersonatedBy` y `readOnly`.
- Genera un JWT de sesión con esos flags y devuelve un `redirectUrl` con el token en query.
- El middleware `blockIfReadOnly` está aplicado a 13 endpoints de mutación (`/api/progress/*`, `/api/chat`, `/api/reviews`, `/api/ai/*`, `/api/pruefungen/*`).
- Session del teacher dura solo 2 h (vs 30 días para alumnos reales).
- Toda impersonación queda registrada en `schule_impersonation_log` (auditoría).

## Lo que necesita hacer Dev-B2C

### 1. UI — botón en el panel de teacher

En la vista donde el teacher lista sus alumnos asignados, agregar por cada fila un botón:

```
👁 Ver como alumno
```

Estilo sugerido: outline púrpura, no primary — es una acción sensible.

### 2. Backend — endpoint proxy

Nuevo endpoint en B2C, por ejemplo:

```
POST /api/teacher/students/:studentId/impersonate
```

Auth: el teacher debe estar logueado con role `teacher` o `admin`.

Lógica:

```
1. Verificar auth y role del usuario logueado (teacher/admin).
2. Verificar que el studentId está asignado a ese teacher.
   (Si es admin, puede ver cualquier alumno — bypass.)
3. Obtener datos del alumno (email, full_name) desde la DB de B2C.
4. POST a SCHULE:
      URL:     https://api-schule.aprender-aleman.de/api/b2c/sso-link
      Method:  POST
      Body (JSON):
      {
        "email":         "<alumno@ejemplo.com>",
        "full_name":     "<Nombre completo alumno>",
        "secret":        process.env.B2C_SYNC_SECRET,
        "impersonatedBy": {
          "id":       "<teacher UUID en B2C>",
          "email":    "<teacher email>",
          "fullName": "<Nombre completo teacher>"
        },
        "readOnly":       true
      }
5. Respuesta esperada:
      { "ssoToken": "...", "userId": "...", "redirectUrl": "https://schule.aprender-aleman.de/auto-login?token=..." }
6. Responder al frontend de B2C con { redirectUrl }.
```

### 3. Frontend — abrir SCHULE con el link recibido

Al recibir el `redirectUrl`, abrir en **una nueva pestaña**:

```js
window.open(redirectUrl, '_blank', 'noopener,noreferrer')
```

*Nueva pestaña*, no `location.replace`, para que:
- El teacher no pierda su sesión de B2C.
- Si tiene varios alumnos abiertos, cada uno queda en su tab.

### 4. Auditoría (opcional, recomendado)

Cada llamada a `/api/b2c/sso-link` con `impersonatedBy` se registra automáticamente en la tabla `schule_impersonation_log` de SCHULE. Si querés exponerlo en un panel de admin de B2C, hay que agregar un endpoint que lo lea. Para MVP no es necesario.

## Qué pasa después (automático en SCHULE, ya funciona)

1. Teacher aterriza en `https://schule.aprender-aleman.de/auto-login?token=...`.
2. Frontend valida token, guarda sesión y redirige al Dashboard.
3. Aparece banner púrpura arriba de todo:
   ```
   👁 Sonia López está viendo como Sandra Arroyo · solo lectura   [Salir]
   ```
4. Teacher puede navegar libremente: ver ejercicios, ver Prüfungen, ver chat con Hans, ver progreso.
5. Cualquier POST/PUT/DELETE responde `403 { "error": "...", "code": "read_only_impersonation" }`.
6. Session expira en 2 h → teacher vuelve al login.
7. Botón "Salir" del banner → logout inmediato → puede volver a B2C.

## Manejo de errores

| Situación | Qué recibe B2C | Qué mostrar al teacher |
|---|---|---|
| Alumno no existe en SCHULE | `POST /sso-link` devuelve 200 (SCHULE crea el usuario en el momento). Nada raro. | Todo OK, redirigir normalmente. |
| `B2C_SYNC_SECRET` mal configurado | 403 `{"error": "Acceso denegado."}` | Toast "Error de configuración. Contactá con el equipo técnico." |
| Timeout / SCHULE caído | 5xx o network error | Toast "SCHULE no responde. Intentá de nuevo en unos minutos." |
| Alumno inactivo | Se reactiva automáticamente | Sin problema, redirige normal. |

## Testing

Casos que Dev-B2C debería verificar antes de mergear:

- [ ] Teacher válido puede impersonar a alumno asignado → banner púrpura visible.
- [ ] Teacher NO puede impersonar a alumno de otro teacher (403 desde B2C).
- [ ] En modo impersonación, click en "responder ejercicio" → 403 en SCHULE, sin ensuciar progreso del alumno.
- [ ] Cerrar sesión desde el banner → logout completo.
- [ ] Después de 2 h → sesión expira automáticamente.
- [ ] Auditoría: revisar que `schule_impersonation_log` tiene una fila por cada impersonación (query directa a la DB de SCHULE).

## Contactos

- SCHULE backend + docs: repo `aprender-aleman-schule` (Gelfis)
- Env vars compartidos: `B2C_SYNC_SECRET` (ya está en el env de B2C y en Coolify de SCHULE)
- Dudas técnicas: preguntar a Gelfis o abrir issue en el repo de SCHULE

---

## Referencia rápida — cURL para testear desde consola

```bash
curl -X POST https://api-schule.aprender-aleman.de/api/b2c/sso-link \
  -H "Content-Type: application/json" \
  -d '{
    "email": "sandra.1305arroyo@gmail.com",
    "full_name": "Sandra Arroyo",
    "secret": "<B2C_SYNC_SECRET>",
    "impersonatedBy": {
      "id": "teacher-uuid-123",
      "email": "sonia@aprender-aleman.de",
      "fullName": "Sonia López"
    },
    "readOnly": true
  }'
```

Respuesta esperada:
```json
{
  "ssoToken": "eyJhbGc...",
  "userId": "1597adb3-8626-4339-bbc2-575fb2f57895",
  "redirectUrl": "https://schule.aprender-aleman.de/auto-login?token=eyJhbGc..."
}
```

Abrí ese `redirectUrl` en el navegador → deberías ver el banner púrpura y estar logueado como Sandra en modo solo lectura.
