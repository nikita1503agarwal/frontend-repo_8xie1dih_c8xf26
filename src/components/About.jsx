import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_20%_60%,rgba(59,130,246,0.1),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Über AS-CleanTech</h2>
          <p className="mt-4 text-blue-100/80">
            Wir kombinieren moderne Technik mit präziser Handarbeit. Unsere Prozesse sind digital dokumentiert, transparent und auf höchste Qualität ausgelegt.
          </p>
          <ul className="mt-6 space-y-3 text-blue-100/80">
            <li>• Geschultes Fachpersonal und zertifizierte Verfahren</li>
            <li>• Nachhaltige Produkte und ressourcenschonende Methoden</li>
            <li>• Klare Kommunikation und verlässliche Terminplanung</li>
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-1 lg:order-2">
          <div className="relative rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-1">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-600/30">
              <div className="absolute inset-0 bg-[radial-gradient(300px_200px_at_30%_30%,rgba(255,255,255,0.25),transparent)]" />
              <div className="absolute inset-0 mix-blend-overlay opacity-40" style={{ backgroundImage: 'url("/noise.png")' }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
