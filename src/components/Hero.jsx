import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_30%_20%,rgba(59,130,246,0.25),transparent),radial-gradient(800px_500px_at_80%_30%,rgba(6,182,212,0.2),transparent)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl px-3 py-1 text-xs text-blue-100/80">
            Premium Service • Nachhaltig • Zuverlässig
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(59,130,246,0.55)]">
            Glänzende Ergebnisse für Gebäude und Glas
          </h1>
          <p className="mt-4 text-blue-100/90 text-lg">
            AS-CleanTech ist Ihr Partner für professionelle Gebäudereinigung, Glas- und Fassadenpflege. Modern, effizient und nachhaltig – damit Ihr Auftritt beeindruckt.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#kontakt" className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 text-white font-medium shadow-[0_12px_40px_rgba(59,130,246,0.5)] hover:shadow-[0_12px_50px_rgba(59,130,246,0.7)] transition-shadow">
              Angebot anfordern
            </a>
            <a href="#leistungen" className="rounded-xl border border-white/15 bg-white/10 backdrop-blur-xl px-6 py-3 text-white/90 hover:text-white">
              Leistungen entdecken
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-40 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-[50%] bg-gradient-to-b from-transparent to-slate-900" />
      </div>
    </section>
  )
}
