const brand = { primary: '#6AA9FF' }

export default function SecondaryCTA() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-xl font-semibold text-slate-900">Take the next step</h3>
            <a href="#booking" className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md" style={{ background: brand.primary }}>
              Book a session
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
