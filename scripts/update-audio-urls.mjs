/**
 * update-audio-urls.mjs
 *
 * Updates audioUrl: null in all hoeren data files with the correct paths
 * to the generated audio files.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.resolve(__dirname, '..', 'src', 'data', 'pruefungen');

const mapping = {
  'goethe-a1-hoeren.js': {
    'h1-1': '/audio/pruefungen/goethe-a1-hoeren-modellsatz-1/h1-1.mp3',
    'h1-2': '/audio/pruefungen/goethe-a1-hoeren-modellsatz-1/h1-2.mp3',
    'h1-3': '/audio/pruefungen/goethe-a1-hoeren-modellsatz-1/h1-3.mp3',
    'h1-4': '/audio/pruefungen/goethe-a1-hoeren-modellsatz-1/h1-4.mp3',
    'h1-5': '/audio/pruefungen/goethe-a1-hoeren-modellsatz-1/h1-5.mp3',
    'h1-6': '/audio/pruefungen/goethe-a1-hoeren-modellsatz-1/h1-6.mp3',
    'h2-1': '/audio/pruefungen/goethe-a1-hoeren-modellsatz-1/h2-1.mp3',
    'h2-2': '/audio/pruefungen/goethe-a1-hoeren-modellsatz-1/h2-2.mp3',
    'h2-3': '/audio/pruefungen/goethe-a1-hoeren-modellsatz-1/h2-3.mp3',
    'h2-4': '/audio/pruefungen/goethe-a1-hoeren-modellsatz-1/h2-4.mp3',
    'h3-1': '/audio/pruefungen/goethe-a1-hoeren-modellsatz-1/h3-1.mp3',
    'h3-2': '/audio/pruefungen/goethe-a1-hoeren-modellsatz-1/h3-2.mp3',
    'h3-3': '/audio/pruefungen/goethe-a1-hoeren-modellsatz-1/h3-3.mp3',
    'h3-4': '/audio/pruefungen/goethe-a1-hoeren-modellsatz-1/h3-4.mp3',
    'h3-5': '/audio/pruefungen/goethe-a1-hoeren-modellsatz-1/h3-5.mp3',
  },
  'goethe-a2-hoeren.js': {
    'a2h1-1': '/audio/pruefungen/goethe-a2-hoeren-modellsatz-1/a2h1-1.mp3',
    'a2h1-2': '/audio/pruefungen/goethe-a2-hoeren-modellsatz-1/a2h1-2.mp3',
    'a2h1-3': '/audio/pruefungen/goethe-a2-hoeren-modellsatz-1/a2h1-3.mp3',
    'a2h1-4': '/audio/pruefungen/goethe-a2-hoeren-modellsatz-1/a2h1-4.mp3',
    'a2h1-5': '/audio/pruefungen/goethe-a2-hoeren-modellsatz-1/a2h1-5.mp3',
    'a2h2-1': '/audio/pruefungen/goethe-a2-hoeren-modellsatz-1/a2h2-1.mp3',
    'a2h2-2': '/audio/pruefungen/goethe-a2-hoeren-modellsatz-1/a2h2-2.mp3',
    'a2h2-3': '/audio/pruefungen/goethe-a2-hoeren-modellsatz-1/a2h2-3.mp3',
    'a2h2-4': '/audio/pruefungen/goethe-a2-hoeren-modellsatz-1/a2h2-4.mp3',
    'a2h2-5': '/audio/pruefungen/goethe-a2-hoeren-modellsatz-1/a2h2-5.mp3',
    'a2h3-1': '/audio/pruefungen/goethe-a2-hoeren-modellsatz-1/a2h3-1.mp3',
    'a2h3-2': '/audio/pruefungen/goethe-a2-hoeren-modellsatz-1/a2h3-2.mp3',
    'a2h3-3': '/audio/pruefungen/goethe-a2-hoeren-modellsatz-1/a2h3-3.mp3',
    'a2h3-4': '/audio/pruefungen/goethe-a2-hoeren-modellsatz-1/a2h3-4.mp3',
    'a2h3-5': '/audio/pruefungen/goethe-a2-hoeren-modellsatz-1/a2h3-5.mp3',
    'teil-4': '/audio/pruefungen/goethe-a2-hoeren-modellsatz-1/teil-4.mp3',
  },
  'goethe-b1-hoeren.js': {
    'b1h1-1': '/audio/pruefungen/goethe-b1-hoeren-modellsatz-1/b1h1-1.mp3',
    'b1h1-2': '/audio/pruefungen/goethe-b1-hoeren-modellsatz-1/b1h1-2.mp3',
    'b1h1-3': '/audio/pruefungen/goethe-b1-hoeren-modellsatz-1/b1h1-3.mp3',
    'b1h1-4': '/audio/pruefungen/goethe-b1-hoeren-modellsatz-1/b1h1-4.mp3',
    'b1h1-5': '/audio/pruefungen/goethe-b1-hoeren-modellsatz-1/b1h1-5.mp3',
    'teil-2': '/audio/pruefungen/goethe-b1-hoeren-modellsatz-1/teil-2.mp3',
    'teil-3': '/audio/pruefungen/goethe-b1-hoeren-modellsatz-1/teil-3.mp3',
    'teil-4': '/audio/pruefungen/goethe-b1-hoeren-modellsatz-1/teil-4.mp3',
  },
  'goethe-b2-hoeren.js': {
    'b2h1-1': '/audio/pruefungen/goethe-b2-hoeren-modellsatz-1/b2h1-1.mp3',
    'b2h1-2': '/audio/pruefungen/goethe-b2-hoeren-modellsatz-1/b2h1-2.mp3',
    'b2h1-3': '/audio/pruefungen/goethe-b2-hoeren-modellsatz-1/b2h1-3.mp3',
    'b2h1-4': '/audio/pruefungen/goethe-b2-hoeren-modellsatz-1/b2h1-4.mp3',
    'b2h1-5': '/audio/pruefungen/goethe-b2-hoeren-modellsatz-1/b2h1-5.mp3',
    'teil-2': '/audio/pruefungen/goethe-b2-hoeren-modellsatz-1/teil-2.mp3',
    'teil-3': '/audio/pruefungen/goethe-b2-hoeren-modellsatz-1/teil-3.mp3',
    'teil-4': '/audio/pruefungen/goethe-b2-hoeren-modellsatz-1/teil-4.mp3',
  },
  'goethe-c1-hoeren.js': {
    'teil-1': '/audio/pruefungen/goethe-c1-hoeren-modellsatz-1/teil-1.mp3',
    'teil-2': '/audio/pruefungen/goethe-c1-hoeren-modellsatz-1/teil-2.mp3',
    'teil-3': '/audio/pruefungen/goethe-c1-hoeren-modellsatz-1/teil-3.mp3',
  },
  'goethe-c2-hoeren.js': {
    'teil-1': '/audio/pruefungen/goethe-c2-hoeren-modellsatz-1/teil-1.mp3',
    'teil-2': '/audio/pruefungen/goethe-c2-hoeren-modellsatz-1/teil-2.mp3',
  },
};

let totalReplacements = 0;

for (const [filename, idMap] of Object.entries(mapping)) {
  const filePath = path.join(dataDir, filename);
  let content = readFileSync(filePath, 'utf-8');
  let replacements = 0;

  for (const [id, url] of Object.entries(idMap)) {
    // Find the position of this id in the file
    const idPattern = `id: '${id}'`;
    const idIndex = content.indexOf(idPattern);
    if (idIndex === -1) {
      console.log(`  WARNING: id '${id}' not found in ${filename}`);
      continue;
    }

    // Find the next 'audioUrl: null' after this id
    const afterId = content.slice(idIndex);
    const nullPattern = 'audioUrl: null';
    const nullIndex = afterId.indexOf(nullPattern);
    if (nullIndex === -1) {
      console.log(`  WARNING: audioUrl: null not found after id '${id}' in ${filename}`);
      continue;
    }

    const absoluteIndex = idIndex + nullIndex;
    const replacement = `audioUrl: '${url}'`;
    content =
      content.slice(0, absoluteIndex) +
      replacement +
      content.slice(absoluteIndex + nullPattern.length);
    replacements++;
  }

  writeFileSync(filePath, content, 'utf-8');
  console.log(`${filename}: ${replacements} replacements`);
  totalReplacements += replacements;
}

console.log(`\nTotal: ${totalReplacements} audioUrl values updated.`);
