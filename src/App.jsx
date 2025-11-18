import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import References from './components/References'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.08),transparent_40%)]" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url("/noise.png")' }} />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <About />
        <References />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
