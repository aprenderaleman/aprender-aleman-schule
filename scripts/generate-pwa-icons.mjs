// Generates PWA icons from public/logo.svg
// Run with: node scripts/generate-pwa-icons.mjs
import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const logoPath = path.join(root, 'public', 'logo.svg')
const outDir = path.join(root, 'public', 'icons')

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

const svg = fs.readFileSync(logoPath)

// Standard icons (transparent background)
const standardSizes = [
  { size: 192, name: 'icon-192.png' },
  { size: 512, name: 'icon-512.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 32,  name: 'favicon-32.png' },
  { size: 16,  name: 'favicon-16.png' },
]

// Maskable icon: must have safe area (logo at ~70% size, navy background)
async function generateMaskable() {
  const size = 512
  const innerSize = Math.round(size * 0.65) // safe area
  const offset = Math.round((size - innerSize) / 2)

  // Render the logo at smaller size first
  const logoBuffer = await sharp(svg).resize(innerSize, innerSize).png().toBuffer()

  // Composite it on a navy background
  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 15, g: 40, b: 71, alpha: 1 }, // navy #0F2847
    },
  })
    .composite([{ input: logoBuffer, left: offset, top: offset }])
    .png()
    .toFile(path.join(outDir, 'icon-maskable-512.png'))

  console.log('✓ icon-maskable-512.png')
}

async function main() {
  for (const { size, name } of standardSizes) {
    await sharp(svg).resize(size, size).png().toFile(path.join(outDir, name))
    console.log(`✓ ${name}`)
  }
  await generateMaskable()
  console.log('\nAll PWA icons generated in public/icons/')
}

main().catch(err => { console.error(err); process.exit(1) })
