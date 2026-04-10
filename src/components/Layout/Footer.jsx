import React from 'react'
import { Mail, Instagram, Youtube, ExternalLink } from 'lucide-react'

// TikTok icon (not in lucide-react)
function TikTokIcon({ size = 20, className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.svg" alt="Schule Logo" className="w-10 h-10" />
              <span className="font-extrabold text-orange-400 text-lg">Schule</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Dein Online-Klassenraum zum Deutschlernen mit künstlicher Intelligenz.
            </p>
            <p className="text-xs text-gray-500 mt-3">
              Ein Produkt von{' '}
              <a
                href="https://aprender-aleman.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 font-semibold hover:text-orange-300 transition-colors inline-flex items-center gap-1"
              >
                Aprender-Aleman.de <ExternalLink size={10} />
              </a>
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-3 text-sm uppercase tracking-wide">Kontakt</h3>
            <a
              href="mailto:info@aprender-aleman.de"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors"
            >
              <Mail size={16} />
              info@aprender-aleman.de
            </a>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-white mb-3 text-sm uppercase tracking-wide">Folge uns</h3>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/aprender.aleman.de/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 text-gray-300 hover:text-white flex items-center justify-center transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@aprenderalemande?reload=9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-red-600 text-gray-300 hover:text-white flex items-center justify-center transition-all"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@aprenderaleman.de1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-black hover:border hover:border-pink-500 text-gray-300 hover:text-white flex items-center justify-center transition-all"
              >
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            © {year} <strong className="text-gray-400">Schule - Dein Online-Klassenraum</strong> · Eigentum von{' '}
            <a
              href="https://aprender-aleman.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              Aprender-Aleman.de
            </a>
          </p>
          <p className="text-gray-600">Mit ❤️ gemacht</p>
        </div>
      </div>
    </footer>
  )
}
