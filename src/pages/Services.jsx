import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Assistant from '../components/Assistant'

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-900">Services</h1>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
              <h3 className="font-semibold text-slate-900">Service {i}</h3>
              <p className="text-sm text-slate-600 mt-2">Professional, evidence-based care to support your wellbeing. Placeholder description.</p>
              <a href="#booking" className="mt-4 inline-flex text-sm text-[#6AA9FF]">Book a session →</a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
      <Assistant />
    </div>
  )
}
