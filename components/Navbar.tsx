'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">+</span>
          </div>
          <div>
            <p className="font-bold text-slate-800 text-sm leading-none">Dr. Sharma Clinic</p>
            <p className="text-xs text-slate-400">General Physician</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['/', '/about', '/services', '/timing', '/contact'].map((href, i) => {
            const labels = ['Home', 'About', 'Services', 'Timing', 'Contact']
            return (
              <Link key={href} href={href} className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium">
                {labels[i]}
              </Link>
            )
          })}
        </div>

        {/* CTA Button */}
        <a
          href="https://wa.me/918468087211?text=Hello%20Doctor,%20I%20want%20to%20book%20an%20appointment"
          target="_blank"
          className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          📅 Book Appointment
        </a>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-700 text-2xl">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-4">
          {['/', '/about', '/services', '/timing', '/contact'].map((href, i) => {
            const labels = ['Home', 'About', 'Services', 'Timing', 'Contact']
            return (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="text-slate-700 font-medium">
                {labels[i]}
              </Link>
            )
          })}
          <a         
            href="https://wa.me/918468087211"
            target="_blank"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center"
          >
            📅 Book Appointment
          </a>
        </div>
      )}
    </nav>
  )
}