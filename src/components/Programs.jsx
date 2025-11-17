import { HeartHandshake, BookOpen, Users } from 'lucide-react'

const items = [
  {
    title: 'Therapy',
    desc: '1-on-1 sessions tailored to your needs with a licensed therapist.',
    icon: HeartHandshake,
    color: 'from-brand-beige/80 to-white'
  },
  {
    title: 'Courses',
    desc: 'Self-paced programs for anxiety, stress, and mood support.',
    icon: BookOpen,
    color: 'from-white to-brand-offwhite'
  },
  {
    title: 'Workshops',
    desc: 'Live group workshops to learn coping tools and connect.',
    icon: Users,
    color: 'from-brand-offwhite to-white'
  },
]

export default function Programs() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Programs</h2>
          <a href="#booking" className="hidden sm:inline text-sm text-brand-primary">See all →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ title, desc, icon: Icon, color }) => (
            <div
              key={title}
              className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br ${color} p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5`}
            >
              <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-brand-primary/5 blur-2xl" />
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-beige/70 ring-1 ring-slate-200">
                <Icon className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
              <a href="#booking" className="mt-4 inline-flex text-sm text-brand-primary">Book now →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
