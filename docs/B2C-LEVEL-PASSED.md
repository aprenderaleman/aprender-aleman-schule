# Contrato Schule → b2c: «nivel aprobado»

Para la sesión que mantiene b2c. Schule ya hace su parte; falta el endpoint
en b2c y lo que cuelga de él (certificado, perfil, correo).

## Cuándo llama Schule

Una sola vez por (alumno, nivel), en el momento en que el alumno tiene el
nivel aprobado **con todas las notas confirmadas**: Lesen y Hören se
confirman solos; Schreiben y Sprechen los confirma un profesor en Schule.
Reglas de aprobado: `levelPassStatus` en `server/realExam.js` (60 % por módulo,
con las compensaciones documentadas en `docs/PRUEFUNGEN.md`).

## La llamada

```
POST {B2C_API_BASE}/api/internal/schule/level-passed
X-Internal-Api-Key: {B2C_INTERNAL_API_KEY}
Content-Type: application/json

{
  "email": "alumna@ejemplo.com",
  "fullName": "Ana Ejemplo",
  "level": "B1",
  "passedAt": "2026-10-14T09:30:00.000Z",
  "modules": {
    "lesen":     { "bestPct": 84, "passed": true },
    "hoeren":    { "bestPct": 77, "passed": true },
    "schreiben": { "bestPct": 80, "passed": true },
    "sprechen":  { "bestPct": 68, "passed": true }
  },
  "avgPct": 77,
  "compensated": false
}
```

- Respuesta esperada: cualquier `2xx` con JSON. Schule marca el aviso como
  entregado.
- `5xx` o timeout (8 s): Schule reintenta cada hora durante 7 días.
- `4xx` (p. ej. 404 mientras el endpoint no exista): no reintenta solo; un
  profe puede pulsar «Reenviar aviso» en la revisión del examen.
- La llamada puede repetirse (reintentos, reenvío manual): el endpoint debe
  ser **idempotente** por (email, level).

## Qué debe hacer b2c al recibirla

1. Pedir a Schule la emisión formal, que ya existe y **congela los intentos**
   para que sus notas no puedan cambiar después:

   ```
   POST {SCHULE_API}/api/internal/certificate/issue
   X-Internal-Api-Key: {B2C_SYNC_SECRET}
   { "email": "...", "level": "B1", "issuedBy": "level-passed" }
   ```

   Devuelve `certificateId`, `modules` (con % por módulo) y `basedOn`. Si el
   alumno no cumple, responde 400 (no debería ocurrir tras este aviso).
2. Generar el PDF del certificado con esos datos.
3. Mostrarlo en el perfil del alumno en b2c.
4. Enviar al alumno el correo de felicitación con el certificado adjunto.

## Alternativa sin endpoint

`GET {SCHULE_API}/api/internal/student/progress?email=…` sigue funcionando y
ahora solo cuenta notas confirmadas, así que b2c puede seguir consultando en
vez de recibir el aviso. El aviso solo evita el retraso.
