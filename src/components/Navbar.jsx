import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Journal', href: '/journal' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="w-full sticky top-0 z-40 border-b border-slate-100/80 bg-white/70 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="group flex items-center gap-3">
            <div className="relative h-9 w-9">
              <span className="absolute inset-0 rounded-xl bg-brand-primary/90 shadow-[0_10px_25px_-10px_rgba(106,169,255,0.9)] ring-1 ring-brand-primary/30" />
              <span className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/5 transition-colors" />
            </div>
            <span className="text-slate-900 font-semibold tracking-tight">Calista Care</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="relative rounded-full px-3 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                <span>{l.name}</span>
                <span className="pointer-events-none absolute inset-x-2 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-brand-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <a
              href="#booking"
              className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white shadow-md shadow-brand-primary/30 ring-1 ring-brand-primary/30 bg-brand-primary hover:shadow-lg transition-all"
            >
              Book a session
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-slate-700 hover:bg-slate-100/80 ring-1 ring-slate-200/70"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="space-y-2 rounded-2xl border border-slate-200/80 bg-white/90 backdrop-blur p-4 shadow-xl shadow-slate-200/50">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  className="block rounded-xl px-3 py-2 text-slate-700 hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {l.name}
                </a>
              ))}
              <a
                href="#booking"
                className="block text-center rounded-full px-4 py-2 text-sm font-medium text-white shadow-md bg-brand-primary"
                onClick={() => setOpen(false)}
              >
                Book a session
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
