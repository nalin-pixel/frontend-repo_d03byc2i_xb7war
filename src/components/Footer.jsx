export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-brand-primary/90 ring-1 ring-brand-primary/30" />
            <span className="text-slate-700 text-sm">© {new Date().getFullYear()} Calista Care. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-slate-600 text-sm">
            <a className="hover:text-slate-900" href="#">Privacy</a>
            <a className="hover:text-slate-900" href="#">Terms</a>
            <a className="hover:text-slate-900" href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
