import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-4xl font-bold text-slate-800 mt-4">
            Contact <span className="text-blue-600">Dr. Sharma Clinic</span>
          </h1>
          <p className="text-slate-400 mt-3 text-lg max-w-xl mx-auto">
            Appointment book karo, query pucho, ya seedha clinic aa jao — hum yahan hain.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: '💬',
                title: 'WhatsApp',
                desc: 'Sabse fast — appointment book karo ya query pucho',
                action: 'Chat Now',
                href: 'https://wa.me/8468087211?text=Hello%20Doctor,%20I%20want%20to%20book%20an%20appointment',
                color: 'bg-green-500 hover:bg-green-600',
                external: true,
              },
              {
                icon: '📞',
                title: 'Call Us',
                desc: 'Mon–Sat, 9am–8pm pe call karo',
                action: '+91 8468087211',
                href: 'tel:+918468087211',
                color: 'bg-blue-600 hover:bg-blue-700',
                external: false,
              },
              {
                icon: '📍',
                title: 'Visit Clinic',
                desc: '123, Civil Lines, Kanpur — 208001',
                action: 'Get Directions',
                href: 'https://maps.google.com/?q=Civil+Lines+Kanpur',
                color: 'bg-slate-700 hover:bg-slate-800',
                external: true,
              },
            ].map((card) => (
              <div key={card.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center flex flex-col items-center gap-3">
                <span className="text-5xl">{card.icon}</span>
                <h3 className="font-bold text-slate-800 text-lg">{card.title}</h3>
                <p className="text-slate-400 text-sm">{card.desc}</p>
                <a
                  href={card.href}
                  target={card.external ? '_blank' : '_self'}
                  rel={card.external ? 'noopener noreferrer' : ''}
                  className={`mt-2 ${card.color} text-white px-6 py-2 rounded-xl text-sm font-semibold transition-colors`}
                >
                  {card.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form + Info */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm />

          {/* Clinic Info */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Clinic Information</h2>
            <div className="flex flex-col gap-5">
              {[
                { icon: '📍', label: 'Address', value: '123, Civil Lines, Near Post Office, Kanpur, UP — 208001' },
                { icon: '📞', label: 'Phone', value: '+91 8468087211' },
                { icon: '💬', label: 'WhatsApp', value: '+91 8468087211' },
                { icon: '🕐', label: 'Mon–Fri', value: '9:00 AM – 1:00 PM  |  5:00 PM – 8:00 PM' },
                { icon: '🕐', label: 'Saturday', value: '9:00 AM – 2:00 PM' },
                { icon: '❌', label: 'Sunday', value: 'Closed' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-slate-100">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">{item.label}</p>
                    <p className="text-slate-700 font-medium text-sm mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="px-4 pb-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Find Us on Map</h2>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.9!2d80.3319!3d26.4499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sCivil%20Lines%2C%20Kanpur!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-14 px-4 text-center text-white">
        <h2 className="text-3xl font-bold">Appointment Book Karna Hai?</h2>
        <p className="text-blue-100 mt-2">WhatsApp fastest way hai — 2 minute mein confirm</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a
            href="https://wa.me/8468087211?text=Hello%20Doctor,%20I%20want%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors"
          >
            💬 WhatsApp Now
          </a>
          <Link
            href="/services"
            className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            View Services →
          </Link>
        </div>
      </section>

    </div>
  )
}
