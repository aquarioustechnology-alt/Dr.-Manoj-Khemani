'use client'

import { useState } from 'react'
import { Phone, MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function CTASection() {
    const [activeClinic, setActiveClinic] = useState(0)

    const clinics = [
        {
            name: 'Healing Touch Clinic',
            address: '59, Bangur Avenue, Block-A, Near Shyam Mandir (Opp. ICICI Bank), Kolkata- 700055',
            phone: '+(91) 8697449191',
            mapLink: 'https://maps.google.com/?q=59+Bangur+Avenue+Block+A+Kolkata+700055',
            timings: [
                { day: 'Mon', hours: '10 AM – 3 PM' },
                { day: 'Tue', hours: '10 AM – 3 PM' },
                { day: 'Fri', hours: '10 AM – 3 PM' },
                { day: 'Sat', hours: '10 AM – 3 PM' }
            ],
            image: '/homepage/Healing touch clinic.webp',
            label: 'Kolkata'
        },
        {
            name: 'Manipal (AMRI) Hospital, Salt Lake',
            address: '5JC – 16 & 17, Salt Lake City, Block-A, Scheme-L11, Salt Lake, Kolkata',
            phone: '9831016037',
            mapLink: 'https://maps.google.com/?q=Manipal+AMRI+Hospital+Salt+Lake+Kolkata',
            timings: [
                { day: 'Tue', hours: '4 PM – 6 PM' },
                { day: 'Thu', hours: '4 PM – 6 PM' }
            ],
            image: '/homepage/Healing touch clinic 2.webp',
            label: 'Salt Lake'
        },
        {
            name: 'Manipal (AMRI) Hospital, Mukundapur',
            address: '5230 Barakhola Lane, behind Metro Cash n Carry, Purba Jadavpur, Mukundapur, Kolkata-700099',
            phone: '033 6680 0000',
            mapLink: 'https://maps.google.com/?q=Manipal+AMRI+Hospital+Mukundapur+Kolkata',
            timings: [
                { day: 'Wed', hours: '4 PM – 6 PM' },
                { day: 'Fri', hours: '4 PM – 6 PM' }
            ],
            image: '/homepage/Healing touch clinic 3.webp',
            label: 'Mukundapur'
        }
    ]

    return (
        <section className="pt-[80px] pb-24 lg:pb-32 bg-[#f7faf2] relative overflow-hidden z-20">
            <div className="max-w-7.5xl mx-auto px-6 lg:px-8 relative">

                {/* Header */}
                <div className="mb-10">
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
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                    {/* Left Column: Clinic Accordion */}
                    <div className="lg:col-span-7">
                        {clinics.map((clinic, index) => {
                            const isActive = activeClinic === index

                            return (
                                <div key={index}>
                                    {/* Clinic Item */}
                                    <div
                                        className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer ${isActive
                                            ? 'bg-white rounded-2xl shadow-lg shadow-gray-200/50 -mx-2 lg:-mx-4 mb-3'
                                            : 'border-b border-gray-200'
                                            }`}
                                        onClick={() => setActiveClinic(index)}
                                    >
                                        {/* Header Row */}
                                        <div className={`flex items-center justify-between gap-4 transition-all duration-300 ${isActive ? 'px-6 lg:px-8 pt-7 pb-3' : 'py-6 px-2'
                                            }`}>
                                            <h3 className={`transition-colors duration-200 ${isActive ? 'text-2xl lg:text-[28px] font-bold text-[#1A1A1A]' : 'text-lg lg:text-xl font-semibold text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
                                                }`}>
                                                {clinic.name}
                                            </h3>
                                            {/* Timing badge visible on inactive */}
                                            {!isActive && (
                                                <span className="text-xs text-gray-400 font-medium shrink-0 hidden sm:block">
                                                    {clinic.timings.map(t => t.day).join(' · ')}
                                                </span>
                                            )}
                                        </div>

                                        {/* Expandable Content */}
                                        <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                            }`}>
                                            <div className="px-6 lg:px-8 pb-7">
                                                {/* Address */}
                                                <p className="text-[15px] text-gray-500 leading-relaxed mb-1.5">
                                                    {clinic.address}
                                                </p>

                                                {/* Phone */}
                                                <p className="text-[15px] text-[#1A1A1A] font-semibold tracking-tight mb-4">
                                                    {clinic.phone}
                                                </p>

                                                {/* OPD Timings - Prominent */}
                                                <div className="flex flex-wrap items-center gap-2 mb-5">
                                                    {clinic.timings.map((timing, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="inline-flex items-center gap-3 px-4 py-2.5 bg-leaf-50 border border-leaf-200/60 rounded-xl"
                                                        >
                                                            <span className="text-[15px] font-bold text-[#1A1A1A]">{timing.day}</span>
                                                            <span className="w-px h-4 bg-gray-300"></span>
                                                            <span className="text-[15px] text-[#1A1A1A] font-semibold">{timing.hours}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Action Icons */}
                                                <div className="flex gap-2.5">
                                                    <a
                                                        href={clinic.mapLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="w-10 h-10 rounded-full bg-leaf-500 flex items-center justify-center text-white hover:bg-leaf-600 transition-colors"
                                                        title="View on Map"
                                                    >
                                                        <MapPin size={18} strokeWidth={2} />
                                                    </a>
                                                    <a
                                                        href={`tel:${clinic.phone.replace(/[^0-9+]/g, '')}`}
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-[#333] transition-colors"
                                                        title="Call Now"
                                                    >
                                                        <Phone size={18} strokeWidth={2} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Right Column: Dynamic Clinic Image */}
                    <div className="lg:col-span-5">
                        <div className="relative h-full rounded-[2rem] overflow-hidden shadow-2xl group">
                            {clinics.map((clinic, index) => (
                                <img
                                    key={index}
                                    src={clinic.image}
                                    alt={clinic.name}
                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${activeClinic === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                                        }`}
                                />
                            ))}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            <div className="absolute bottom-10 left-10 right-10 text-white">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 rounded-full bg-leaf-500 flex items-center justify-center">
                                        <MapPin size={20} />
                                    </div>
                                    <p className="text-xs font-bold tracking-[0.2em] uppercase opacity-80">
                                        {clinics[activeClinic]?.label}
                                    </p>
                                </div>
                                <h4 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight">
                                    {clinics[activeClinic]?.name}
                                </h4>
                                <p className="text-white/60 text-sm leading-relaxed mb-7">
                                    State-of-the-art facilities equipped with modern medical technology for the best treatment outcomes.
                                </p>
                                <Button href="/contact">
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
