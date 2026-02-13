'use client'

import { useState } from 'react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Apollo Hospitals', '58 Canal Circular Road', 'Kolkata - 700054'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 33 1234 5678', '+91 98765 43210'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['dr.khemani@example.com', 'appointments@drkhemani.com'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM'],
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-offwhite">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-leaf-600 font-semibold text-sm uppercase tracking-wider">Contact</span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-text-primary mt-4 mb-6">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-text-secondary text-lg">
                Ready to start your journey to better health? Schedule a consultation or reach out to us for any questions.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                  Book an Appointment
                </h2>

                {submitted ? (
                  <div className="bg-leaf-50 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-leaf-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 size={32} className="text-leaf-600" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-text-primary mb-2">
                      Appointment Requested!
                    </h3>
                    <p className="text-text-muted">
                      We&apos;ll contact you shortly to confirm your appointment.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-semibold text-text-secondary uppercase tracking-wider mb-1 px-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200/60 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-200 outline-none transition-all font-normal text-text-primary text-[13px] placeholder:text-[13px] placeholder:font-normal"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-[12px] font-semibold text-text-secondary uppercase tracking-wider mb-1 px-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200/60 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-200 outline-none transition-all font-normal text-text-primary text-[13px] placeholder:text-[13px] placeholder:font-normal"
                          placeholder="Your phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-semibold text-text-secondary uppercase tracking-wider mb-1 px-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200/60 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-200 outline-none transition-all font-normal text-text-primary text-[13px] placeholder:text-[13px] placeholder:font-normal"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-semibold text-text-secondary uppercase tracking-wider mb-1 px-1">
                          Service Required
                        </label>
                        <select
                          className="w-full px-4 py-3 rounded-xl border border-gray-200/60 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-200 outline-none transition-all bg-white font-normal text-text-primary text-[13px]"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        >
                          <option value="">Select a service</option>
                          <option value="joint">Joint Replacement</option>
                          <option value="arthroscopy">Arthroscopy</option>
                          <option value="sports">Sports Medicine</option>
                          <option value="spine">Spine Surgery</option>
                          <option value="general">General Consultation</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[12px] font-semibold text-text-secondary uppercase tracking-wider mb-1 px-1">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200/60 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-200 outline-none transition-all font-normal text-text-primary text-[13px]"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[12px] font-semibold text-text-secondary uppercase tracking-wider mb-1 px-1">
                        Message / Symptoms
                      </label>
                      <textarea
                        rows={2}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200/60 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-200 outline-none transition-all resize-none font-normal text-text-primary text-[13px] placeholder:text-[13px] placeholder:font-normal"
                        placeholder="Briefly describe your condition or symptoms"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-leaf-600 text-white font-semibold rounded-xl hover:bg-leaf-700 transition-all duration-300 hover:shadow-lg hover:shadow-leaf-200"
                    >
                      Request Appointment
                      <Send size={18} />
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-display font-bold text-text-primary mb-6">
                  Contact Information
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="p-6 bg-offwhite rounded-2xl">
                      <div className="w-12 h-12 rounded-xl bg-leaf-100 flex items-center justify-center text-leaf-600 mb-4">
                        <item.icon size={24} />
                      </div>
                      <h3 className="font-display font-semibold text-text-primary mb-2">{item.title}</h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-text-muted text-sm">{detail}</p>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="mt-8 rounded-2xl overflow-hidden h-64 bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.073384404!2d88.3936!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzIxLjQiTiA4OMKwMjMnMzcuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
