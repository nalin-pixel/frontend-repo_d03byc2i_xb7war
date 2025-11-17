export default function CTA() {
  return (
    <section className="py-16" id="booking">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-brand-offwhite p-8 shadow-sm">
          <div className="pointer-events-none absolute -inset-16 bg-[radial-gradient(400px_200px_at_90%_10%,rgba(106,169,255,0.18),transparent)]" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Take the next step</h3>
              <p className="text-slate-600 mt-1">Book a confidential session at a time that works for you.</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-primary/30 ring-1 ring-brand-primary/30 bg-brand-primary hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Book a session
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
