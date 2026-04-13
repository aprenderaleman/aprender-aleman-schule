/**
 * generate-hoeren-audio.mjs
 *
 * Reads all Goethe Hoeren exam data files, extracts transcripts,
 * calls OpenAI TTS API to generate MP3 audio, and saves them to
 * public/audio/pruefungen/{examId}/...
 *
 * Usage:
 *   OPENAI_API_KEY=sk-... node scripts/generate-hoeren-audio.mjs
 *
 * Requires: node >= 18 (uses native fetch)
 */

import { writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// ── Config ──────────────────────────────────────────────────────────
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const AUDIO_BASE = path.join(PROJECT_ROOT, 'public', 'audio', 'pruefungen');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.error('ERROR: OPENAI_API_KEY environment variable is not set.');
  console.error('Usage: OPENAI_API_KEY=sk-... node scripts/generate-hoeren-audio.mjs');
  process.exit(1);
}

const TTS_MODEL = 'tts-1';
const VOICES = ['alloy', 'nova', 'onyx', 'echo', 'shimmer'];

// Cycle through voices for variety
let voiceIndex = 0;
function nextVoice() {
  const voice = VOICES[voiceIndex % VOICES.length];
  voiceIndex++;
  return voice;
}

// ── Data imports ────────────────────────────────────────────────────
import { pathToFileURL } from 'node:url';

function dataUrl(filename) {
  return pathToFileURL(path.join(PROJECT_ROOT, 'src', 'data', 'pruefungen', filename)).href;
}

const { goetheA1HoerenExams } = await import(dataUrl('goethe-a1-hoeren.js'));
const { goetheA2HoerenExams } = await import(dataUrl('goethe-a2-hoeren.js'));
const { goetheB1HoerenExams } = await import(dataUrl('goethe-b1-hoeren.js'));
const { goetheB2HoerenExams } = await import(dataUrl('goethe-b2-hoeren.js'));
const { goetheC1HoerenExams } = await import(dataUrl('goethe-c1-hoeren.js'));
const { goetheC2HoerenExams } = await import(dataUrl('goethe-c2-hoeren.js'));

const allExams = [
  ...goetheA1HoerenExams,
  ...goetheA2HoerenExams,
  ...goetheB1HoerenExams,
  ...goetheB2HoerenExams,
  ...goetheC1HoerenExams,
  ...goetheC2HoerenExams,
];

// ── TTS helper ──────────────────────────────────────────────────────
async function generateTTS(transcript, voice) {
  const res = await fetch('https://api.openai.com/v1/audio/speech', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: TTS_MODEL,
      input: transcript,
      voice,
      response_format: 'mp3',
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`OpenAI TTS API error (${res.status}): ${errText}`);
  }

  return Buffer.from(await res.arrayBuffer());
}

// ── Collect all audio tasks ─────────────────────────────────────────
/**
 * Each task: { examId, fileId, transcript, outputPath, audioUrlPath }
 *   - fileId: used for the filename (partId or questionId)
 *   - audioUrlPath: the web-accessible path, e.g. /audio/pruefungen/...
 */
const tasks = [];

for (const exam of allExams) {
  for (const part of exam.parts) {
    if (part.context?.transcript) {
      // Part-level audio (context.transcript)
      const fileId = part.id; // e.g. "teil-2"
      const relPath = `/audio/pruefungen/${exam.id}/${fileId}.mp3`;
      tasks.push({
        examId: exam.id,
        fileId,
        transcript: part.context.transcript,
        outputPath: path.join(AUDIO_BASE, exam.id, `${fileId}.mp3`),
        audioUrlPath: relPath,
        isContext: true,
        partId: part.id,
      });
    }

    if (part.questions) {
      for (const q of part.questions) {
        if (q.audio?.transcript) {
          // Per-question audio
          const fileId = q.id; // e.g. "h1-1"
          const relPath = `/audio/pruefungen/${exam.id}/${fileId}.mp3`;
          tasks.push({
            examId: exam.id,
            fileId,
            transcript: q.audio.transcript,
            outputPath: path.join(AUDIO_BASE, exam.id, `${fileId}.mp3`),
            audioUrlPath: relPath,
            isContext: false,
            partId: part.id,
            questionId: q.id,
          });
        }
      }
    }
  }
}

console.log(`Found ${tasks.length} audio transcripts to generate across ${allExams.length} exams.\n`);

// ── Generate audio files ────────────────────────────────────────────
const results = []; // { task, success, error? }

for (let i = 0; i < tasks.length; i++) {
  const task = tasks[i];
  const voice = nextVoice();
  const dir = path.dirname(task.outputPath);

  // Ensure directory exists
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }

  // Skip if file already exists
  if (existsSync(task.outputPath)) {
    console.log(`[${i + 1}/${tasks.length}] SKIP (exists): ${task.audioUrlPath}`);
    results.push({ task, success: true, skipped: true });
    continue;
  }

  const truncated = task.transcript.slice(0, 60).replace(/\n/g, ' ');
  console.log(`[${i + 1}/${tasks.length}] Generating: ${task.audioUrlPath}  (voice: ${voice})  "${truncated}..."`);

  try {
    const mp3Buffer = await generateTTS(task.transcript, voice);
    await writeFile(task.outputPath, mp3Buffer);
    console.log(`  -> Saved (${(mp3Buffer.length / 1024).toFixed(1)} KB)`);
    results.push({ task, success: true });
  } catch (err) {
    console.error(`  -> ERROR: ${err.message}`);
    results.push({ task, success: false, error: err.message });
  }

  // Small delay to avoid rate limiting
  if (i < tasks.length - 1) {
    await new Promise((r) => setTimeout(r, 500));
  }
}

// ── Summary ─────────────────────────────────────────────────────────
const succeeded = results.filter((r) => r.success).length;
const failed = results.filter((r) => !r.success).length;
const skipped = results.filter((r) => r.skipped).length;
console.log(`\nDone! ${succeeded} succeeded (${skipped} skipped), ${failed} failed.`);

if (failed > 0) {
  console.log('\nFailed tasks:');
  for (const r of results.filter((r) => !r.success)) {
    console.log(`  - ${r.task.audioUrlPath}: ${r.error}`);
  }
}

// ── Output mapping for audioUrl updates ─────────────────────────────
// Print a JSON mapping that can be used to update the data files
const mapping = {};
for (const r of results.filter((r) => r.success && !r.skipped)) {
  if (!mapping[r.task.examId]) mapping[r.task.examId] = {};
  mapping[r.task.examId][r.task.fileId] = r.task.audioUrlPath;
}

console.log('\n--- Audio URL Mapping ---');
console.log(JSON.stringify(mapping, null, 2));
