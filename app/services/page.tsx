import Link from 'next/link'

export default function Services() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
            What We Offer
          </span>
          <h1 className="text-4xl font-bold text-slate-800 mt-4">
            Our <span className="text-blue-600">Medical Services</span>
          </h1>
          <p className="text-slate-400 mt-3 text-lg max-w-xl mx-auto">
            Comprehensive healthcare for individuals and families — all under one roof.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">General Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: '🩺', title: 'General Checkup', desc: 'Complete physical examination, vitals check, and health assessment for all age groups.', fee: '₹300' },
              { icon: '🤒', title: 'Fever & Infections', desc: 'Diagnosis and treatment of viral, bacterial infections, typhoid, dengue, malaria.', fee: '₹300' },
              { icon: '💊', title: 'Diabetes Management', desc: 'Blood sugar monitoring, medication adjustment, diet counseling for diabetic patients.', fee: '₹400' },
              { icon: '❤️', title: 'Blood Pressure', desc: 'Hypertension diagnosis, medication, and long-term BP management plan.', fee: '₹400' },
              { icon: '🫁', title: 'Respiratory Issues', desc: 'Cough, asthma, bronchitis, breathlessness diagnosis and treatment.', fee: '₹300' },
              { icon: '🧒', title: 'Child Healthcare', desc: 'Pediatric consultations, vaccination guidance, growth monitoring.', fee: '₹300' },
              { icon: '🩸', title: 'Lab Test Referral', desc: 'Blood tests, urine tests, X-ray referrals with discounted rates at partner labs.', fee: 'As per lab' },
              { icon: '📋', title: 'Health Certificate', desc: 'Fitness certificates for job, school, sports, and other official purposes.', fee: '₹200' },
              { icon: '💉', title: 'Vaccinations', desc: 'Adult and child vaccination as per government and travel health guidelines.', fee: 'As per vaccine' },
            ].map((s) => (
              <div key={s.title} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <span className="text-3xl">{s.icon}</span>
                  <h3 className="font-semibold text-slate-800 mt-3 text-lg">{s.title}</h3>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                    Consultation: {s.fee}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Special Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '📱',
                title: 'WhatsApp Consultation',
                desc: 'Send your reports, prescriptions, or queries on WhatsApp. Follow-up consultations available for existing patients.',
                tag: 'Digital Service'
              },
              {
                icon: '🏠',
                title: 'Home Visit',
                desc: 'Home visits available for elderly or bedridden patients within 5km radius. Call to confirm availability.',
                tag: 'On Request'
              },
              {
                icon: '⚡',
                title: 'Emergency Consultation',
                desc: 'Emergency slots available during OPD hours. Call ahead so we can prioritize your case immediately.',
                tag: 'Priority'
              },
              {
                icon: '📊',
                title: 'Health Records',
                desc: 'We maintain your complete medical history for better long-term care and accurate prescriptions.',
                tag: 'Free'
              },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow flex gap-4">
                <span className="text-4xl">{s.icon}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-slate-800">{s.title}</h3>
                    <span className="bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded-full">{s.tag}</span>
                  </div>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Notice */}
      <section className="py-10 px-4 bg-blue-50">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-blue-100 p-6 flex gap-4 items-start">
          <span className="text-3xl">ℹ️</span>
          <div>
            <h3 className="font-semibold text-slate-800">About Consultation Fees</h3>
            <p className="text-slate-500 text-sm mt-2 leading-relaxed">
              Fees mentioned are approximate and may vary based on complexity of the case. 
              Senior citizens get a 10% discount on consultation. 
              We accept cash and UPI payments.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-14 px-4 text-center text-white">
        <h2 className="text-3xl font-bold">Need Any of These Services?</h2>
        <p className="text-blue-100 mt-2">Book your slot via WhatsApp in 2 minutes</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a
            href="https://wa.me/8468087211?text=Hello%20Doctor,%20I%20want%20to%20book%20an%20appointment"
            target="_blank"
            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
          >
            💬 Book via WhatsApp
          </a>
          <Link
            href="/timing"
            className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            View Timings →
          </Link>
        </div>
      </section>

    </div>
  )
}