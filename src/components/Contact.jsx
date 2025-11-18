import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="kontakt" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_20%_20%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-10 items-start">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Kontakt & Angebot</h2>
          <p className="mt-3 text-blue-100/80">Senden Sie uns Ihre Anfrage – wir melden uns schnellstmöglich.</p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-blue-100/90"><Phone size={18} className="text-cyan-400" /> +49 123 456789</div>
            <a href="mailto:info@as-cleantech.de" className="flex items-center gap-3 text-blue-100/90 hover:text-white"><Mail size={18} className="text-cyan-400" /> info@as-cleantech.de</a>
            <div className="flex items-center gap-3 text-blue-100/90"><MapPin size={18} className="text-cyan-400" /> München & Umgebung</div>
          </div>
        </motion.div>

        <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-blue-100/80">Vorname</label>
              <input className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Max" />
            </div>
            <div>
              <label className="text-sm text-blue-100/80">Nachname</label>
              <input className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-blue-2 00/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Mustermann" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-blue-100/80">E-Mail</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="max@firma.de" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-blue-100/80">Nachricht</label>
              <textarea rows="5" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Was dürfen wir für Sie reinigen?" />
            </div>
          </div>
          <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 text-white font-medium shadow-[0_12px_40px_rgba(59,130,246,0.5)] hover:shadow-[0_12px_50px_rgba(59,130,246,0.7)] transition-shadow">
            Unverbindlich anfragen
          </button>
          <p className="mt-3 text-xs text-blue-200/70">Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß Datenschutzerklärung zu.</p>
        </motion.form>
      </div>
    </section>
  )
}
