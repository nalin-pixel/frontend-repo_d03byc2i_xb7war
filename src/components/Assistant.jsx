import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

const systemPrompt = `A.I. Mental-Health Assistant Prompt\nYou are CALISTA AI, a calm, non-judgmental mental-health assistant.\nProvide supportive, emotionally intelligent responses.\n\nCapabilities:\n• Mood tracking\n• CBT-style reframing\n• Daily affirmations\n• Stress-relief breathing exercises\n• Guidance for anxiety, stress, low mood, relationship issues, and PCOS struggles.\n\nTone:\nCalm, gentle, professional. Never diagnose. Never judge.`

const starterMessages = [
  { role: 'assistant', content: "Hi, I'm Calista AI. How are you feeling today? I can help track your mood, offer CBT-style reframing, and share breathing exercises." },
]

export default function Assistant() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState(starterMessages)
  const [input, setInput] = useState('')
  const endRef = useRef(null)

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, open])

  const onSend = () => {
    if (!input.trim()) return
    const newMessages = [
      ...messages,
      { role: 'user', content: input.trim() },
      { role: 'assistant', content: 'Thanks for sharing. Try this gentle exercise: inhale for 4, hold for 4, exhale for 6. Would you like a CBT-style reframe or an affirmation?' },
    ]
    setMessages(newMessages)
    setInput('')
  }

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setOpen(true)}
          className="relative rounded-full bg-brand-primary p-4 text-white shadow-lg shadow-brand-primary/30 ring-1 ring-brand-primary/30 transition-all hover:shadow-xl hover:-translate-y-0.5"
        >
          <span className="absolute inset-0 rounded-full animate-pulse-soft" />
          <MessageCircle className="relative h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200">
            <div className="flex items-start justify-between p-4 border-b">
              <div>
                <h4 className="text-slate-900 font-semibold">Calista AI</h4>
                <p className="text-slate-500 text-xs">Calm • Supportive • Confidential</p>
              </div>
              <button className="p-2 rounded-lg hover:bg-slate-100" onClick={() => setOpen(false)} aria-label="Close">
                <X className="h-5 w-5 text-slate-600" />
              </button>
            </div>

            <div className="h-80 overflow-y-auto p-4 space-y-3">
              <div className="rounded-lg bg-brand-offwhite p-3 text-[11px] text-slate-600 ring-1 ring-slate-200">{systemPrompt}</div>
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`${m.role === 'assistant' ? 'bg-brand-offwhite ring-slate-200' : 'bg-brand-beige ring-slate-200'} rounded-2xl px-3 py-2 text-slate-800 text-sm max-w-[85%] ring-1 ${m.role === 'assistant' ? '' : 'ml-auto'}`}
                >
                  {m.content}
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <div className="p-3 border-t">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Write a message..."
                  className="flex-1 rounded-full border border-slate-200 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-primary"
                />
                <button onClick={onSend} className="rounded-full bg-brand-primary p-2 text-white shadow">
                  <Send className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-2 text-[11px] text-slate-500">
                Tips: say "track mood", "give an affirmation", or "help me reframe this".
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
