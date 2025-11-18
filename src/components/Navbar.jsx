import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Leistungen', href: '#leistungen' },
    { label: 'Über uns', href: '#about' },
    { label: 'Referenzen', href: '#referenzen' },
    { label: 'Kontakt', href: '#kontakt' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(59,130,246,0.25)]">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#top" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500 shadow-[0_0_30px_rgba(59,130,246,0.7)]" />
              <div className="leading-tight">
                <div className="text-white font-bold tracking-tight text-lg">AS-CleanTech</div>
                <div className="text-xs text-blue-200/80">Gebäude- & Glasreinigung</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} className="text-blue-100/80 hover:text-white transition-colors">
                  {n.label}
                </a>
              ))}
              <a href="#kontakt" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-white shadow-[0_8px_30px_rgba(59,130,246,0.45)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.65)] transition-shadow">
                <Phone size={16} /> Angebot anfragen
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4">
              <div className="flex flex-col gap-4">
                {navItems.map((n) => (
                  <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="text-blue-100/90">
                    {n.label}
                  </a>
                ))}
                <a href="#kontakt" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-white">
                  <Mail size={16} /> Kontakt
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
