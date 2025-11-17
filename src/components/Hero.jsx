import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0 -z-0">
          <div className="h-[560px] w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_20%_-10%,rgba(106,169,255,0.25),transparent)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
              >
                Your mental wellbeing matters
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-5 text-slate-300 text-lg max-w-prose"
              >
                Get support at your own pace with evidence‑based tools and caring professionals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-8 flex items-center gap-4"
              >
                <a
                  href="#booking"
                  className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-primary/30 ring-1 ring-brand-primary/30 bg-brand-primary hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  Book a session
                </a>
                <span className="text-slate-300/90 text-sm">Professional • Caring • Confidential</span>
              </motion.div>
            </div>

            <div className="relative h-[400px]">
              <div className="absolute inset-0 rounded-[28px] overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-t from-brand-primary/20 via-transparent to-transparent blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,117.3C672,107,768,117,864,106.7C960,96,1056,64,1152,58.7C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  )
}
