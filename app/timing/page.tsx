import Link from 'next/link'

export default function Timing() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
            OPD Schedule
          </span>
          <h1 className="text-4xl font-bold text-slate-800 mt-4">
            Clinic <span className="text-blue-600">Timings & Fees</span>
          </h1>
          <p className="text-slate-400 mt-3 text-lg max-w-xl mx-auto">
            Walk-in welcome during OPD hours. WhatsApp se pehle slot book kar lo — waiting kam hogi.
          </p>
        </div>
      </section>

      {/* Timing Table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">OPD Timings</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            {[
              { day: 'Monday', morning: '9:00 AM – 1:00 PM', evening: '5:00 PM – 8:00 PM', open: true },
              { day: 'Tuesday', morning: '9:00 AM – 1:00 PM', evening: '5:00 PM – 8:00 PM', open: true },
              { day: 'Wednesday', morning: '9:00 AM – 1:00 PM', evening: '5:00 PM – 8:00 PM', open: true },
              { day: 'Thursday', morning: '9:00 AM – 1:00 PM', evening: '5:00 PM – 8:00 PM', open: true },
              { day: 'Friday', morning: '9:00 AM – 1:00 PM', evening: '5:00 PM – 8:00 PM', open: true },
              { day: 'Saturday', morning: '9:00 AM – 2:00 PM', evening: 'Closed', open: true },
              { day: 'Sunday', morning: 'Closed', evening: '—', open: false },
            ].map((row, i) => (
              <div
                key={row.day}
                className={`flex items-center justify-between px-6 py-4 ${i !== 6 ? 'border-b border-slate-100' : ''} ${!row.open ? 'bg-slate-50' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full ${row.open ? 'bg-green-400' : 'bg-red-300'}`}></span>
                  <p className="font-medium text-slate-700">{row.day}</p>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-medium ${row.open ? 'text-blue-600' : 'text-slate-400'}`}>{row.morning}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{row.evening}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-4 bg-yellow-50 border border-yellow-100 rounded-xl px-5 py-4 flex gap-3 items-start">
            <span className="text-xl">⚠️</span>
            <p className="text-yellow-800 text-sm leading-relaxed">
              Timings may change on public holidays. WhatsApp karo confirm karne ke liye before visiting.
            </p>
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Consultation Fees</h2>
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            {[
              { type: 'General Consultation', fee: '₹300', note: 'New & follow-up patients' },
              { type: 'Chronic Disease Consultation', fee: '₹400', note: 'Diabetes, BP, Thyroid' },
              { type: 'Health Certificate', fee: '₹200', note: 'Job, school, sports' },
              { type: 'Emergency / Priority Slot', fee: '₹500', note: 'Urgent cases during OPD' },
              { type: 'Senior Citizen Discount', fee: '10% OFF', note: 'Age 60+ on all services' },
            ].map((row, i) => (
              <div
                key={row.type}
                className={`flex items-center justify-between px-6 py-4 ${i !== 4 ? 'border-b border-slate-100' : ''}`}
              >
                <div>
                  <p className="font-medium text-slate-700">{row.type}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{row.note}</p>
                </div>
                <span className="text-blue-600 font-bold text-lg">{row.fee}</span>
              </div>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="mt-6 bg-white rounded-xl border border-slate-100 px-5 py-4">
            <p className="font-semibold text-slate-700 mb-3">💳 Payment Methods Accepted</p>
            <div className="flex flex-wrap gap-3">
              {['💵 Cash', '📱 UPI (GPay, PhonePe)', '🏦 Paytm'].map((method) => (
                <span key={method} className="bg-slate-50 border border-slate-200 text-slate-600 text-sm px-4 py-1.5 rounded-full">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Clinic Location</h2>
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-1">
              <p className="text-slate-700 font-medium text-lg">📍 Dr. Sharma Clinic</p>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                123, Civil Lines, Near Post Office,<br />
                Kanpur, Uttar Pradesh — 208001
              </p>
              <div className="flex flex-col gap-2 mt-4">
                <p className="text-sm text-slate-600">📞 <span className="font-medium">+91 8468087211</span></p>
                <p className="text-sm text-slate-600">💬 WhatsApp: <span className="font-medium">+91 8468087211</span></p>
              </div>
              <a
                href="https://maps.google.com/?q=Civil+Lines+Kanpur"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                🗺️ Open in Google Maps
              </a>
            </div>
            <div className="w-full sm:w-48 h-36 bg-blue-100 rounded-xl flex items-center justify-center text-4xl">
              🏥
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-14 px-4 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to Visit?</h2>
        <p className="text-blue-100 mt-2">WhatsApp karo — slot confirm karo — aao</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a
            href="https://wa.me/919999999999?text=Hello%20Doctor,%20I%20want%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
          >
            💬 Book via WhatsApp
          </a>
          <Link
            href="/contact"
            className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us →
          </Link>
        </div>
      </section>

    </div>
  )
}