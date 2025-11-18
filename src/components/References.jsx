import { motion } from 'framer-motion'

const refs = [
  { name: 'Bürokomplex Nord', quote: 'Top Ergebnisse, pünktlich und absolut professionell.' },
  { name: 'Glasbau Schmitt', quote: 'Unsere Fassaden glänzen – klare Empfehlung.' },
  { name: 'TechHub City', quote: 'Digitaler Ablauf, transparente Dokumentation, 1A.' },
]

export default function References() {
  return (
    <section id="referenzen" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_70%,rgba(6,182,212,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Referenzen</h2>
          <p className="mt-3 text-blue-100/80">Ein Auszug unserer zufriedenen Kunden.</p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {refs.map((r, i) => (
            <motion.div key={r.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="relative rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6">
              <div className="text-white font-semibold">{r.name}</div>
              <div className="mt-2 text-blue-100/80 text-sm">“{r.quote}”</div>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="mt-3 text-xs text-blue-200/70">Langfristige Betreuung • Qualitätsberichte</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
