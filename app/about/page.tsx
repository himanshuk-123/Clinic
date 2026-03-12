import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Doctor Card */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-72 text-center border border-slate-100">
              <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto flex items-center justify-center text-6xl">
                👨‍⚕️
              </div>
              <h2 className="font-bold text-slate-800 text-xl mt-4">Dr. Rajesh Sharma</h2>
              <p className="text-blue-600 text-sm font-medium">MBBS, MD</p>
              <p className="text-slate-400 text-xs mt-1">General Physician</p>
              <div className="mt-4 flex flex-col gap-2">
                <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">✅ Reg. No: MCI-12345</span>
                <span className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full">🏥 GSVM Medical College</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
              About The Doctor
            </span>
            <h1 className="text-4xl font-bold text-slate-800 mt-4 leading-tight">
              15+ Years of <span className="text-blue-600">Trusted Care</span>
            </h1>
            <p className="text-slate-500 mt-4 leading-relaxed">
              Dr. Rajesh Sharma is a highly experienced General Physician based in Kanpur, 
              dedicated to providing compassionate and evidence-based medical care to patients 
              of all ages. With over 15 years of clinical experience, he has treated thousands 
              of patients across Kanpur and surrounding areas.
            </p>
            <p className="text-slate-500 mt-3 leading-relaxed">
              His approach combines modern medicine with a personal touch — he believes in 
              listening to patients carefully and explaining treatment plans in simple language.
            </p>
            <a
              href="https://wa.me/919999999999?text=Hello%20Doctor,%20I%20want%20to%20book%20an%20appointment"
              target="_blank"
              className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              💬 Book Appointment
            </a>
          </div>

        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center">Qualifications & Training</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {[
              { icon: '🎓', title: 'MBBS', sub: 'GSVM Medical College, Kanpur — 2005' },
              { icon: '🎓', title: 'MD — General Medicine', sub: 'King George Medical University, Lucknow — 2009' },
              { icon: '🏥', title: 'Senior Resident', sub: 'Lala Lajpat Rai Hospital, Kanpur — 2009–2012' },
              { icon: '📜', title: 'Registered Practitioner', sub: 'Medical Council of India — Reg. No: MCI-12345' },
            ].map((q) => (
              <div key={q.title} className="flex items-start gap-4 bg-slate-50 rounded-xl p-5 border border-slate-100">
                <span className="text-2xl">{q.icon}</span>
                <div>
                  <p className="font-semibold text-slate-800">{q.title}</p>
                  <p className="text-slate-400 text-sm mt-1">{q.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center">Why Patients Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: '⏱️', title: 'No Long Waits', desc: 'Book via WhatsApp, minimal waiting time at clinic' },
              { icon: '💬', title: 'Clear Communication', desc: 'Treatment explained in simple Hindi & English' },
              { icon: '💰', title: 'Affordable Fees', desc: 'Quality care at reasonable consultation charges' },
              { icon: '🧪', title: 'Lab Tie-ups', desc: 'Discounted rates at partner diagnostic centers' },
              { icon: '📱', title: 'WhatsApp Support', desc: 'Follow-up queries answered on WhatsApp' },
              { icon: '👨‍👩‍👧', title: 'Family Care', desc: 'Treating entire families for generations' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-semibold text-slate-800 mt-3">{item.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-14 px-4 text-center text-white">
        <h2 className="text-3xl font-bold">Meet Dr. Sharma in Person</h2>
        <p className="text-blue-100 mt-2">Book your appointment today — Mon to Sat</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
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