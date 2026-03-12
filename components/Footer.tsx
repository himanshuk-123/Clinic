import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-2">Dr. Sharma Clinic</h3>
          <p className="text-sm text-slate-400">Trusted healthcare for your family since 2005.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <div className="flex flex-col gap-1 text-sm">
            {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/timing', 'Timing'], ['/contact', 'Contact']].map(([href, label]) => (
              <Link key={href} href={href} className="hover:text-white transition-colors">{label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p className="text-sm">📍 123, Civil Lines, Kanpur</p>
          <p className="text-sm mt-1">📞 +91 8468087211</p>
          <p className="text-sm mt-1">🕐 Mon–Sat: 9am – 7pm</p>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 mt-8">
        © 2024 Dr. Sharma Clinic. Website by <span className="text-blue-400">Dorara.tech</span>
      </div>
    </footer>
  )
}