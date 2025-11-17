import Navbar from './Navbar'
import Footer from './Footer'
import Assistant from './Assistant'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
      <Assistant />
    </div>
  )
}
