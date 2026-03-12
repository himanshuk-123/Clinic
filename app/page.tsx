import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="flex-1">
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
              ✅ 15+ Years Experience
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mt-4 leading-tight">
              Your Trusted <br />
              <span className="text-blue-600">Family Doctor</span> <br />
              in Kanpur
            </h1>
            <p className="text-slate-500 mt-4 text-lg leading-relaxed">
              Dr. Rajesh Sharma provides compassionate, expert care for patients of all ages. 
              Book your appointment instantly via WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href="https://wa.me/919999999999?text=Hello%20Doctor,%20I%20want%20to%20book%20an%20appointment"
                target="_blank"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold text-center transition-colors"
              >
                💬 Book via WhatsApp
              </a>
              <Link
                href="/services"
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold text-center transition-colors"
              >
                View Services →
              </Link>
            </div>
          </div>

          {/* Right — Doctor Card */}
          <div className="flex-1 flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-6 w-72 text-center border border-slate-100">
              <div className="w-28 h-28 bg-blue-100 rounded-full mx-auto flex items-center justify-center text-5xl">
                👨‍⚕️
              </div>
              <h2 className="font-bold text-slate-800 text-xl mt-4">Dr. Rajesh Sharma</h2>
              <p className="text-blue-600 text-sm font-medium">MBBS, MD — General Physician</p>
              <div className="border-t border-slate-100 mt-4 pt-4 flex justify-around text-center">
                <div>
                  <p className="font-bold text-slate-800 text-lg">15+</p>
                  <p className="text-xs text-slate-400">Years Exp.</p>
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-lg">5000+</p>
                  <p className="text-xs text-slate-400">Patients</p>
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-lg">4.9⭐</p>
                  <p className="text-xs text-slate-400">Rating</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-blue-600 py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { num: '15+', label: 'Years Experience' },
            { num: '5000+', label: 'Happy Patients' },
            { num: '6', label: 'Days a Week' },
            { num: '100%', label: 'Trusted Care' },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-bold">{item.num}</p>
              <p className="text-blue-100 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center">Our Services</h2>
          <p className="text-slate-400 text-center mt-2">Expert care for all your health needs</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: '🩺', title: 'General Checkup', desc: 'Complete health examination and consultation' },
              { icon: '🤒', title: 'Fever & Infections', desc: 'Fast diagnosis and treatment for common illnesses' },
              { icon: '💊', title: 'Chronic Disease', desc: 'Diabetes, BP, thyroid management' },
              { icon: '🧒', title: 'Child Healthcare', desc: 'Vaccination and pediatric care' },
              { icon: '🩸', title: 'Lab Tests', desc: 'Blood tests and health screening' },
              { icon: '📋', title: 'Health Certificates', desc: 'Fitness and medical certificates' },
            ].map((s) => (
              <div key={s.title} className="bg-slate-50 rounded-xl p-6 hover:shadow-md transition-shadow border border-slate-100">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-slate-800">{s.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/services" className="text-blue-600 font-medium hover:underline">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Timing Preview */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800">OPD Timings</h2>
          <p className="text-slate-400 mt-2">Walk-in or book via WhatsApp</p>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 mt-8 overflow-hidden">
            {[
              { day: 'Monday – Friday', time: '9:00 AM – 1:00 PM', eve: '5:00 PM – 8:00 PM' },
              { day: 'Saturday', time: '9:00 AM – 2:00 PM', eve: 'Closed' },
              { day: 'Sunday', time: 'Closed', eve: '—' },
            ].map((row, i) => (
              <div key={row.day} className={`flex justify-between items-center px-6 py-4 ${i !== 2 ? 'border-b border-slate-100' : ''}`}>
                <p className="font-medium text-slate-700">{row.day}</p>
                <div className="text-right">
                  <p className="text-sm text-blue-600 font-medium">{row.time}</p>
                  <p className="text-xs text-slate-400">{row.eve}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
          >
            💬 Book Appointment Now
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center">What Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { name: 'Priya Verma', review: 'Doctor ne bahut achhe se treat kiya. Fever 1 din mein theek ho gaya. Highly recommended!', rating: '⭐⭐⭐⭐⭐' },
              { name: 'Rakesh Gupta', review: 'Very experienced doctor. Explains everything clearly. Fees bhi reasonable hain.', rating: '⭐⭐⭐⭐⭐' },
              { name: 'Sunita Devi', review: 'Meri poori family yahaan aati hai. Bahut caring aur professional hain Dr. Sharma.', rating: '⭐⭐⭐⭐⭐' },
            ].map((t) => (
              <div key={t.name} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <p className="text-slate-600 text-sm leading-relaxed">&ldquo;{t.review}&rdquo;</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                  <span className="text-xs">{t.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-600 py-14 px-4 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to Book Your Appointment?</h2>
        <p className="text-blue-100 mt-2 text-lg">WhatsApp karo — 2 minute mein appointment confirm</p>
        <a
          href="https://wa.me/919999999999?text=Hello%20Doctor,%20I%20want%20to%20book%20an%20appointment"
          target="_blank"
          className="inline-block mt-6 bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
        >
          💬 WhatsApp Now
        </a>
      </section>

    </div>
  )
}