import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const brand = {
  primary: '#6AA9FF',
  offwhite: '#F8F9FA',
}

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
    <header className="w-full sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl" style={{ background: brand.primary }} />
            <span className="text-slate-900 font-semibold tracking-tight">Calista Care</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="text-slate-600 hover:text-slate-900 transition-colors">
                {l.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <a href="#booking" className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white shadow-sm hover:shadow-md transition-shadow" style={{ background: brand.primary }}>
              Book a session
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="space-y-2 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
              {links.map((l) => (
                <a key={l.name} href={l.href} className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50" onClick={() => setOpen(false)}>
                  {l.name}
                </a>
              ))}
              <a href="#booking" className="block text-center rounded-full px-4 py-2 text-sm font-medium text-white shadow-sm" style={{ background: brand.primary }} onClick={() => setOpen(false)}>
                Book a session
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
