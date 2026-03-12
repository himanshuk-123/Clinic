'use client'

import { FormEvent, useState } from 'react'

const webhookUrl = 'https://script.google.com/macros/s/AKfycbzYs1eG3S1TiMwg2VM_uDYOkDMp-tyybkorWX1qx2dYW2wJWhRKWI8ngKqdW7o808affA/exec'
const whatsappNumber = '8468087211'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '').trim()
    const phone = String(formData.get('phone') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    if (!name || !phone || !message) {
      setStatusMessage('Please fill in all fields before sending your message.')
      return
    }

    const whatsappText = `Hello Doctor, mera naam ${name} hai. Phone: ${phone}. Query: ${message}`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`

    setIsSubmitting(true)
    setStatusMessage('')

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
          mode: 'no-cors', // yeh add kar

        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, message }),
      })

      if (!response.ok) {
        throw new Error('Webhook request failed')
      }

      form.reset()
      setStatusMessage('Message sent. Opening WhatsApp conversation...')
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    } catch {
      setStatusMessage('Message could not be sent. You can still contact the clinic on WhatsApp directly.')
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h2>
      <form id="contact-form" className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="text-sm font-medium text-slate-600 mb-1 block">Your Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Aapka naam"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-600 mb-1 block">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="+91 XXXXXXXXXX"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-600 mb-1 block">Message / Query</label>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Aapki query ya appointment detail..."
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
        >
          {isSubmitting ? 'Sending...' : 'Send Message →'}
        </button>
        <p className="text-xs text-slate-400">
          Form submit hone ke baad WhatsApp automatically open hoga.
        </p>
        {statusMessage ? <p className="text-sm text-slate-600">{statusMessage}</p> : null}
      </form>
    </div>
  )
}