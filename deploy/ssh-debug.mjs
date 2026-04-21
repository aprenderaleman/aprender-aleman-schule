import { Client } from 'ssh2'

// Hetzner typically uses root. Let's try with keyboard-interactive
const combos = [
  { username: 'root', password: 'xGtUxAKG9USDuqj1N2qTROpR7CMIqm6H' },
  { username: 'tVpbJq8AP0eVvfD9', password: 'xGtUxAKG9USDuqj1N2qTROpR7CMIqm6H' },
  { username: 'root', password: 'tVpbJq8AP0eVvfD9' },
]

let idx = 0
function tryNext() {
  if (idx >= combos.length) {
    console.error('All combos failed')
    process.exit(1)
  }
  const { username, password } = combos[idx]
  console.log(`\nTrying: ${username} / ${password.slice(0,4)}...`)
  idx++

  const conn = new Client()
  let done = false
  const timer = setTimeout(() => {
    if (!done) {
      done = true
      console.log('  -> Timeout')
      conn.end()
      tryNext()
    }
  }, 10000)

  conn.on('ready', () => {
    done = true
    clearTimeout(timer)
    console.log(`  -> SUCCESS with ${username}!`)
    conn.exec('whoami && hostname && cat /etc/os-release | head -2', (err, stream) => {
      if (err) { console.error(err); conn.end(); return }
      stream.on('data', d => process.stdout.write(d.toString()))
      stream.stderr.on('data', d => process.stderr.write(d.toString()))
      stream.on('close', () => conn.end())
    })
  }).on('error', (err) => {
    if (!done) {
      done = true
      clearTimeout(timer)
      console.log(`  -> Failed: ${err.message}`)
      tryNext()
    }
  }).on('keyboard-interactive', (name, instructions, lang, prompts, finish) => {
    console.log('  -> keyboard-interactive triggered')
    finish([password])
  }).connect({
    host: '77.42.22.34',
    port: 22,
    username,
    password,
    tryKeyboard: true,
    readyTimeout: 10000,
  })
}

tryNext()
