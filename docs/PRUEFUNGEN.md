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
