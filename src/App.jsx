import Layout from './components/Layout'
import Hero from './components/Hero'
import MoodPills from './components/MoodPills'
import Programs from './components/Programs'
import CTA from './components/CTA'

export default function App() {
  return (
    <Layout>
      <Hero />
      <MoodPills />
      <Programs />
      <CTA />
    </Layout>
  )
}
