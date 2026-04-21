// Helper script to execute commands on VPS via SSH
import { Client } from 'ssh2'

const HOST = '77.42.22.34'
const USER = 'tVpbJq8AP0eVvfD9'
const PASS = process.env.VPS_PASS || process.argv[2]

if (!PASS) {
  console.error('Usage: node deploy/ssh-exec.mjs <password> "<command>"')
  process.exit(1)
}

const command = process.argv[3] || 'echo "Connected OK" && whoami && uname -a'

const conn = new Client()
conn.on('ready', () => {
  console.log('[SSH] Connected successfully')
  conn.exec(command, (err, stream) => {
    if (err) { console.error('Exec error:', err); conn.end(); return }
    let output = ''
    stream.on('close', (code) => {
      console.log(output)
      if (code !== 0) console.error(`Exit code: ${code}`)
      conn.end()
    })
    stream.on('data', (data) => { output += data.toString() })
    stream.stderr.on('data', (data) => { output += data.toString() })
  })
}).on('error', (err) => {
  console.error('SSH connection error:', err.message)
  console.error('Auth methods attempted - trying keyboard-interactive...')
  process.exit(1)
}).on('keyboard-interactive', (name, instructions, instructionsLang, prompts, finish) => {
  console.log('[SSH] Keyboard-interactive auth triggered')
  finish([PASS])
}).connect({
  host: HOST,
  port: 22,
  username: USER,
  password: PASS,
  readyTimeout: 15000,
  tryKeyboard: true,
  authHandler: ['password', 'keyboard-interactive'],
})
