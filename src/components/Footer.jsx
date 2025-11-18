export default function Footer() {
  return (
    <footer className="relative py-10">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_0%,rgba(255,255,255,0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-blue-200/80 text-sm">© {new Date().getFullYear()} AS-CleanTech • Alle Rechte vorbehalten</div>
        <div className="flex items-center gap-6 text-sm text-blue-200/70">
          <a href="#top" className="hover:text-white">Nach oben</a>
          <a href="#kontakt" className="hover:text-white">Kontakt</a>
          <a href="#" className="hover:text-white">Datenschutz</a>
          <a href="#" className="hover:text-white">Impressum</a>
        </div>
      </div>
    </footer>
  )
}
