import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Assistant from '../components/Assistant'

export default function About() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-900">About</h1>
        <p className="mt-4 text-slate-600">We provide calm, professional support with evidence-based approaches. This page contains placeholder content for now.</p>
      </main>
      <Footer />
      <Assistant />
    </div>
  )
}
