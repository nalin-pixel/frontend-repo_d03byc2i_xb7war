export default function SecondaryCTA() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-white p-8 border border-slate-200 shadow-sm">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-primary/10 blur-2xl" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-xl font-semibold text-slate-900">Take the next step</h3>
            <a
              href="#booking"
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
