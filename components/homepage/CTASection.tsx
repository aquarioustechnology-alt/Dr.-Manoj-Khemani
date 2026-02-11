'use client'

import { useState } from 'react'
import { ChevronDown, Phone, MapPin, Clock } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function CTASection() {
    const [activeClinic, setActiveClinic] = useState(0)

    const clinics = [
        {
            name: 'Healing Touch Clinic',
            location: 'Kolkata',
            address: '59, Bangur Avenue, Block-A, Near Shyam Mandir (Opp. ICICI Bank), Kolkata- 700055',
            phone: '+(91) 8697449191',
            mapLink: 'https://maps.google.com/?q=59+Bangur+Avenue+Block+A+Kolkata+700055',
            timings: [
                { day: 'Mon', hours: '10 AM - 3 PM' },
                { day: 'Tue', hours: '10 AM - 3 PM' },
                { day: 'Fri', hours: '10 AM - 3 PM' },
                { day: 'Sat', hours: '10 AM - 3 PM' }
            ],
            image: '/homepage/Healing touch clinic.webp'
        },
        {
            name: 'Manipal (AMRI) Hospital',
            location: 'Salt Lake, Kolkata',
            address: '5JC – 16 & 17, Salt Lake City, Block-A, Scheme-L11, Salt Lake, Kolkata',
            phone: '9831016037',
            mapLink: 'https://maps.google.com/?q=Manipal+AMRI+Hospital+Salt+Lake+Kolkata',
            timings: [
                { day: 'Tue', hours: '4 PM - 6 PM' },
                { day: 'Thu', hours: '4 PM - 6 PM' }
            ],
            image: '/homepage/Healing touch clinic 2.webp'
        },
        {
            name: 'Manipal (AMRI) Hospital',
            location: 'Mukundapur, Kolkata',
            address: '5230 Barakhola Lane, behind Metro Cash n Carry, Purba Jadavpur, Mukundapur, Kolkata-700099',
            phone: '033 6680 0000',
            mapLink: 'https://maps.google.com/?q=Manipal+AMRI+Hospital+Mukundapur+Kolkata',
            timings: [
                { day: 'Wed', hours: '4 PM - 6 PM' },
                { day: 'Fri', hours: '4 PM - 6 PM' }
            ],
            image: '/homepage/Healing touch clinic 3.webp'
        }
    ]

    return (
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden z-20">
            <div className="max-w-7.5xl mx-auto px-6 lg:px-8 relative">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-leaf-600 text-[12px] font-bold tracking-[0.2em] uppercase mb-6">
                            <span className="w-2 h-2 rounded-full bg-leaf-500"></span>
                            Visit Our Clinics
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
                            Begin Your Path to <br />
                            <span className="text-leaf-500">Pain-Free Living</span>
                        </h2>
                    </div>
                    <div>
                        <p className="text-gray-500 text-lg font-medium max-w-sm">
                            Take the first step towards recovery. Visit us at any of our three convenient locations.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    {/* Left Column: Minimalist Accordion */}
                    <div className="lg:col-span-7 space-y-3">
                        {clinics.map((clinic, index) => {
                            const isActive = activeClinic === index
                            return (
                                <div
                                    key={index}
                                    className={`rounded-3xl transition-all duration-300 ${isActive
                                            ? 'bg-white shadow-lg border border-gray-100'
                                            : 'bg-gray-50/50 border border-transparent hover:bg-gray-50'
                                        }`}
                                >
                                    {/* Accordion Header */}
                                    <button
                                        onClick={() => setActiveClinic(index)}
                                        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                                    >
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-[#1A1A1A] mb-0.5">
                                                {clinic.name}
                                            </h3>
                                            <p className="text-sm text-gray-500 font-medium">
                                                {clinic.location}
                                            </p>
                                        </div>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isActive
                                                ? 'bg-leaf-500 text-white rotate-180'
                                                : 'bg-gray-200 text-gray-500'
                                            }`}>
                                            <ChevronDown size={16} strokeWidth={2.5} />
                                        </div>
                                    </button>

                                    {/* Accordion Content */}
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}>
                                        <div className="px-6 pb-6 pt-2 space-y-5">
                                            {/* Address */}
                                            <div>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Address</p>
                                                <p className="text-sm text-gray-700 leading-relaxed">{clinic.address}</p>
                                            </div>

                                            {/* Contact & Actions */}
                                            <div className="flex items-center justify-between gap-4">
                                                <div className="flex-1">
                                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Contact</p>
                                                    <p className="text-sm text-gray-700 font-semibold">{clinic.phone}</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <a
                                                        href={clinic.mapLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-10 h-10 rounded-full bg-leaf-500 hover:bg-leaf-600 flex items-center justify-center text-white transition-all duration-300 shadow-md hover:shadow-lg"
                                                        title="View on Map"
                                                    >
                                                        <MapPin size={18} strokeWidth={2.5} />
                                                    </a>
                                                    <a
                                                        href={`tel:${clinic.phone.replace(/[^0-9+]/g, '')}`}
                                                        className="w-10 h-10 rounded-full bg-[#EC1D24] hover:bg-[#d01a20] flex items-center justify-center text-white transition-all duration-300 shadow-md hover:shadow-lg"
                                                        title="Call Now"
                                                    >
                                                        <Phone size={18} strokeWidth={2.5} />
                                                    </a>
                                                </div>
                                            </div>

                                            {/* OPD Timings */}
                                            <div>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">OPD Timings</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {clinic.timings.map((timing, idx) => (
                                                        <div key={idx} className="inline-flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-xl border border-gray-100">
                                                            <span className="text-xs font-bold text-gray-900">{timing.day}</span>
                                                            <span className="text-xs text-gray-500">•</span>
                                                            <span className="text-xs text-gray-600">{timing.hours}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Right Column: Dynamic Clinic Image */}
                    <div className="lg:col-span-5 h-full">
                        <div className="relative h-full min-h-[600px] rounded-[3rem] overflow-hidden shadow-2xl group">
                            <img
                                src={clinics[activeClinic].image}
                                alt={clinics[activeClinic].name}
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            <div className="absolute bottom-12 left-12 right-12 text-white">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-leaf-500 flex items-center justify-center">
                                        <MapPin size={24} />
                                    </div>
                                    <p className="text-sm font-bold tracking-widest uppercase">
                                        {clinics[activeClinic].location}
                                    </p>
                                </div>
                                <h4 className="text-3xl font-bold mb-4">{clinics[activeClinic].name}</h4>
                                <p className="text-white/70 text-base leading-relaxed mb-8">
                                    State-of-the-art facilities equipped with modern medical technology to provide the best treatment outcomes.
                                </p>
                                <Button href="/contact" className="!w-full justify-center">
                                    Book a Visit Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
