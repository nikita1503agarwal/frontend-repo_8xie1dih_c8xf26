import { motion } from 'framer-motion'
import { Sparkles, Building2, GlassWater, Leaf, ShieldCheck, Clock } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Gebäudereinigung',
    desc: 'Ganzheitliche Reinigungslösungen für Büro- und Gewerbeflächen – hygienisch, strukturiert, zuverlässig.',
  },
  {
    icon: GlassWater,
    title: 'Glas- & Fassadenreinigung',
    desc: 'Streifenfreie Glasflächen, saubere Fassaden und ein repräsentativer Außenauftritt – in jeder Höhe.',
  },
  { icon: Leaf, title: 'Nachhaltige Pflege', desc: 'Schonende Reinigungsmittel und effiziente Prozesse – für Umwelt und Gesundheit.' },
  { icon: ShieldCheck, title: 'Qualität & Sicherheit', desc: 'Geschultes Fachpersonal, geprüfte Abläufe und dokumentierte Ergebnisse.' },
  { icon: Clock, title: 'Flexibel & pünktlich', desc: 'Wir arbeiten nach Ihrem Rhythmus – zuverlässig und termingerecht.' },
  { icon: Sparkles, title: 'Sonderreinigung', desc: 'Bau-, Grund- und Feinreinigung – wir bringen alles auf Hochglanz.' },
]

export default function Services() {
  return (
    <section id="leistungen" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_10%_10%,rgba(59,130,246,0.12),transparent),radial-gradient(700px_400px_at_90%_20%,rgba(6,182,212,0.1),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Unsere Leistungen</h2>
          <p className="mt-3 text-blue-100/80">Effektiv, modern und auf Ihre Anforderungen zugeschnitten.</p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group relative rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 overflow-hidden">
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-3xl" />
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-[0_10px_30px_rgba(59,130,246,0.4)]">
                <s.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-blue-100/80">{s.desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="mt-4 text-xs text-blue-200/70">Zertifiziert • Dokumentiert • Transparent</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
