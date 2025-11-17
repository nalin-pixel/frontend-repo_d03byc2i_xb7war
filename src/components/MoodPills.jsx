import { useState } from 'react'
import { Play } from 'lucide-react'

const moods = [
  { label: 'Anxiety', video: 'https://www.youtube.com/embed/8B6a2v4Xk1s' },
  { label: 'Stress', video: 'https://www.youtube.com/embed/g9j6uPpYhNQ' },
  { label: 'Low mood', video: 'https://www.youtube.com/embed/pjzFZ7N0T94' },
  { label: 'PCOS struggles', video: 'https://www.youtube.com/embed/0n5Yc2oQeG8' },
  { label: 'Relationship stress', video: 'https://www.youtube.com/embed/3iW0gQYbB1E' },
]

export default function MoodPills() {
  const [open, setOpen] = useState(false)
  const [video, setVideo] = useState('')

  const onSelect = (v) => {
    setVideo(v)
    setOpen(true)
  }

  return (
    <section className="py-14 sm:py-16 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-slate-900 text-2xl sm:text-3xl font-bold">What are you feeling today?</h2>
          <span className="hidden sm:inline text-slate-500 text-sm">Guided by Dr Calista</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {moods.map((m) => (
            <button
              key={m.label}
              onClick={() => onSelect(m.video)}
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm text-slate-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <span>{m.label}</span>
              <Play className="h-4 w-4 text-slate-400 group-hover:text-slate-600" />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={video}
                title="Dr Calista"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="flex items-center justify-between p-4 border-t">
              <span className="text-slate-600 text-sm">Guidance by Dr Calista</span>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full px-4 py-2 text-sm font-medium text-white bg-brand-primary shadow-sm hover:shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
