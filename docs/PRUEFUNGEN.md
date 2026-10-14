# Exámenes (Prüfungen) — cómo funcionan

Todo el contenido de los exámenes vive en el servidor (`server/pruefungen/data/`).
El navegador recibe el examen **sin claves** al empezar un intento y el servidor
corrige todo (`server/realExam.js` → `gradeExam`). Nada de esto va en el bundle.

## Dos pools por (nivel, módulo)

| Pool | Archivos | Para qué | Al terminar |
|---|---|---|---|
| `simulation` | `goethe-<nivel>-<módulo>.js` | Práctica ilimitada | Nota + soluciones |
| `real` | `real-<nivel>-<módulo>.js` (`pool: 'real'`) | Cuenta para el certificado | Nota por Teil + corrección IA de Schreiben/Sprechen, **sin soluciones** |

Los `real-*.js` se descubren solos (ver `data/index.js`). Un examen real nuevo debe
tener la misma estructura que su simulacro: `node scripts/pruefung-validate.mjs`.

## Reglas del examen real

- **Preparación:** se desbloquea con un simulacro de ese módulo ≥ 65 %
  (`READINESS_MIN_SIM_PCT`). El profesorado no pasa por este filtro.
- Solo el nivel del alumno · 24 h entre intentos · máx. 3 intentos por módulo.
- Tiempo oficial, +15 % en Lesen y Schreiben (`TIME_BONUS`).
- Cámara obligatoria (grabación en `RECORDINGS_DIR`, 30 días).

## Aprobado de nivel (`levelPassStatus`)

- Cada módulo: 60 %.
- **A1/A2:** compensación global — media ≥ 60 % y ningún módulo < 40 %.
- **B1–C2:** un único módulo entre 50 y 59 % vale si la media es ≥ 65 %.
- Alternativa: 85 % de la ruta de ejercicios del nivel.

## Corrección IA (Schreiben / Sprechen)

`gradeSchreibenCore` / `gradeSprechenCore` en `server/index.js`: rúbrica de 4
criterios (0-25) calibrada por nivel (`LEVEL_EXPECTATIONS`). Caché versionada
(`GRADING_CACHE_VERSION`): súbela si cambias el enunciado.

## Audio de Hören

- Simulacros: mp3 estáticos en `public/audio/pruefungen/`.
- Exámenes reales: el servidor sintetiza cada clip la primera vez que se pide
  (OpenAI TTS, una voz por hablante — `speechSegments`) y lo guarda en
  `AUDIO_CACHE_DIR` (por defecto `server/audio-cache/`).
  **Requiere `OPENAI_API_KEY` en el servidor.** Sin ella, el examen real de Hören
  no se ofrece y se usa el simulacro como examen real.
- Recomendado: volumen persistente para `AUDIO_CACHE_DIR` (si no, se regenera
  tras cada redeploy, bajo demanda).

## Transcripts para audio

Diálogos: una intervención por línea, `Etiqueta: texto` (Mann, Frau, Moderator,
nombre…). La etiqueta no se pronuncia. Sin abreviaturas; horas y cifras
delicadas escritas como deben sonar. Evita «Palabra: …» en líneas de narrador.

## Revisión docente (`server/examReview.js`)

Al entregar un examen real, el intento recibe un `reviewStatus`:

| Módulo | Estado al entregar | Qué ve el alumno |
|---|---|---|
| Lesen, Hören | `confirmed` (corrección exacta) | Nota al instante |
| Schreiben, Sprechen | `pending` | «En revisión», sin nota; no puede repetir el módulo |

- **Solo cuentan las notas confirmadas** (`REVIEW_COUNTS_SQL`) para `cert-status`,
  el progreso que consulta b2c y la emisión del certificado. Los intentos
  anteriores a este sistema (`reviewStatus NULL`) cuentan como confirmados.
- El profesorado (teacher/admin/superadmin) revisa en `/revision-examenes`:
  preguntas, respuestas, soluciones, texto, **audio de Sprechen**, vídeo de
  cámara y rúbrica de la IA. Ajusta los 4 criterios (0–25) y confirma.
  `aiScore` conserva la nota original de la IA; `score` es la vigente.
- Al confirmar: correo al alumno con su resultado (lo ve en
  `/pruefungen/ergebnis/:id`) y comprobación de nivel aprobado.
- Los intentos reales del profesorado no entran en la cola.

### Audio de Sprechen

El navegador graba el micrófono a la vez que transcribe y sube un archivo por
tarea (`POST /api/pruefungen/attempts/:id/speaking-audio/:partId`). Se guarda en
`EXAM_AUDIO_DIR` (por defecto `server/exam-audio/`) durante
`EXAM_AUDIO_TTL_DAYS` (365). **Necesita volumen persistente en Coolify.**
Interruptor de emergencia: `EXAM_SPEAKING_AUDIO=off`. Si el reconocimiento de
voz no entiende nada pero hay audio, el intento se entrega igual y el profe
puntúa escuchando.

### Correos

- A administración, al entregar cada examen real: preguntas, respuestas y
  notas en texto. Destinatarios: `EXAM_RESULTS_EMAIL` (lista separada por
  comas) o, si no existe, todos los `superadmin`.
- Al alumno, cuando el profe confirma.
- A administración, cuando un nivel queda aprobado.
Requieren `RESEND_API_KEY`; sin ella solo se escriben en el log.

### Nivel aprobado → b2c

Cuando el alumno aprueba el nivel con notas confirmadas se guarda una fila en
`schule_level_passed` (una por alumno y nivel) y se llama a b2c. Contrato en
`docs/B2C-LEVEL-PASSED.md`.

### Variables nuevas

`EXAM_AUDIO_DIR`, `EXAM_AUDIO_TTL_DAYS`, `EXAM_SPEAKING_AUDIO`,
`EXAM_RESULTS_EMAIL`, y para el aviso a b2c las ya existentes `B2C_API_BASE` +
`B2C_INTERNAL_API_KEY`.
