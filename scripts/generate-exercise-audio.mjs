/**
 * generate-exercise-audio.mjs
 *
 * Reads all exercise data files, extracts listening exercises,
 * calls OpenAI TTS API to generate MP3 audio, and saves them to
 * public/audio/exercises/{id}.mp3
 *
 * Usage:
 *   OPENAI_API_KEY=sk-... node scripts/generate-exercise-audio.mjs
 *
 * Requires: node >= 18 (uses native fetch)
 */

import { writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

// ── Config ──────────────────────────────────────────────────────────
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const AUDIO_DIR = path.join(PROJECT_ROOT, 'public', 'audio', 'exercises');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.error('ERROR: OPENAI_API_KEY environment variable is not set.');
  console.error('Usage: OPENAI_API_KEY=sk-... node scripts/generate-exercise-audio.mjs');
  process.exit(1);
}

const TTS_MODEL = 'tts-1';
const VOICES = ['alloy', 'nova', 'onyx', 'echo', 'shimmer'];

let voiceIndex = 0;
function nextVoice() {
  const voice = VOICES[voiceIndex % VOICES.length];
  voiceIndex++;
  return voice;
}

// ── Data imports ────────────────────────────────────────────────────
function dataUrl(filename) {
  return pathToFileURL(path.join(PROJECT_ROOT, 'src', 'data', filename)).href;
}

const { A1_EXERCISES } = await import(dataUrl('a1.js'));
const { A2_EXERCISES } = await import(dataUrl('a2.js'));
const { B1_EXERCISES } = await import(dataUrl('b1.js'));
const { B2_EXERCISES } = await import(dataUrl('b2.js'));
const { C1_EXERCISES } = await import(dataUrl('c1.js'));
const { A1_EXTRA_EXERCISES, A2_EXTRA_EXERCISES } = await import(dataUrl('extra-reading-listening-writing.js'));
const { B1_EXTRA_EXERCISES, B2_EXTRA_EXERCISES } = await import(dataUrl('extra-b1b2.js'));
const { C1_EXTRA_EXERCISES } = await import(dataUrl('extra-c1.js'));

// ── Collect all listening exercises ─────────────────────────────────
const allExercises = [
  ...A1_EXERCISES,
  ...A2_EXERCISES,
  ...B1_EXERCISES,
  ...B2_EXERCISES,
  ...C1_EXERCISES,
  ...A1_EXTRA_EXERCISES,
  ...A2_EXTRA_EXERCISES,
  ...B1_EXTRA_EXERCISES,
  ...B2_EXTRA_EXERCISES,
  ...C1_EXTRA_EXERCISES,
];

const listeningExercises = allExercises.filter(e => e.type === 'listening');
console.log(`Found ${listeningExercises.length} listening exercises total.\n`);

// ── Generate audio ──────────────────────────────────────────────────
await mkdir(AUDIO_DIR, { recursive: true });

async function generateTTS(text, voice) {
  const response = await fetch('https://api.openai.com/v1/audio/speech', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: TTS_MODEL,
      voice,
      input: text,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI TTS API error ${response.status}: ${errorText}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let generated = 0;
let skipped = 0;
let failed = 0;

for (const exercise of listeningExercises) {
  const outputPath = path.join(AUDIO_DIR, `${exercise.id}.mp3`);

  if (existsSync(outputPath)) {
    console.log(`  SKIP  ${exercise.id} (already exists)`);
    skipped++;
    continue;
  }

  const voice = nextVoice();
  const textPreview = exercise.audioText.substring(0, 60).replace(/\n/g, ' ');
  console.log(`  GEN   ${exercise.id}  voice=${voice}  "${textPreview}..."`);

  try {
    const audioBuffer = await generateTTS(exercise.audioText, voice);
    await writeFile(outputPath, audioBuffer);
    generated++;
    console.log(`  OK    ${exercise.id}  (${(audioBuffer.length / 1024).toFixed(1)} KB)`);
  } catch (err) {
    failed++;
    console.error(`  FAIL  ${exercise.id}: ${err.message}`);

    // If rate limited, wait and retry once
    if (err.message.includes('429')) {
      console.log('  Rate limited — waiting 30s then retrying...');
      await sleep(30000);
      try {
        const audioBuffer = await generateTTS(exercise.audioText, voice);
        await writeFile(outputPath, audioBuffer);
        generated++;
        failed--;
        console.log(`  OK    ${exercise.id}  (retry succeeded, ${(audioBuffer.length / 1024).toFixed(1)} KB)`);
      } catch (retryErr) {
        console.error(`  FAIL  ${exercise.id} (retry): ${retryErr.message}`);
      }
    }
  }

  // Small delay between requests to avoid rate limits
  await sleep(500);
}

console.log(`\n========================================`);
console.log(`Done! Generated: ${generated}, Skipped: ${skipped}, Failed: ${failed}`);
console.log(`Audio files saved to: ${AUDIO_DIR}`);
