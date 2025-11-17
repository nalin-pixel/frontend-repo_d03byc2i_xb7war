const brand = { primary: '#6AA9FF' }

export default function CTA() {
  return (
    <section className="py-16" id="booking">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-white to-[#F8F9FA] p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Take the next step</h3>
              <p className="text-slate-600 mt-1">Book a confidential session at a time that works for you.</p>
            </div>
            <a href="#" className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md" style={{ background: brand.primary }}>
              Book a session
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
