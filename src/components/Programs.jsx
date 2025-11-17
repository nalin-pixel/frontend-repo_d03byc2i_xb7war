import { HeartHandshake, BookOpen, Users } from 'lucide-react'

const brand = {
  primary: '#6AA9FF',
  sand: '#D9C7A3',
}

const items = [
  {
    title: 'Therapy',
    desc: '1-on-1 sessions tailored to your needs with a licensed therapist.',
    icon: HeartHandshake,
  },
  {
    title: 'Courses',
    desc: 'Self-paced programs for anxiety, stress, and mood support.',
    icon: BookOpen,
  },
  {
    title: 'Workshops',
    desc: 'Live group workshops to learn coping tools and connect.',
    icon: Users,
  },
]

export default function Programs() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Programs</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: '#E3DCC2' }}>
                <Icon className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
