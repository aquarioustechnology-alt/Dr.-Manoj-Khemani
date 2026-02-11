'use client'

import Link from 'next/link'
import { ArrowRight, Phone, MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function CTASection() {
    const clinics = [
        {
            name: 'Healing Touch City',
            address: 'P-60, C.I.T. Road, Scheme VI M, Phoolbagan, Kolkata – 700054',
            timing: 'Mon - Sat: 10:00 AM - 1:00 PM',
            phone: '+91 86974 49191'
        },
        {
            name: 'Healing Touch Clinic (VIP Rd)',
            address: '1st Floor, 137, VIP Rd, beside Lake Town, Lake Town, Kolkata – 700089',
            timing: 'Mon - Sat: 5:00 PM - 8:00 PM',
            phone: '+91 86974 49191'
        },
        {
            name: 'Healing Touch Ultadanga',
            address: '1st Floor, 12, Ultadanga Main Rd, Ultadanga, Kolkata – 700067',
            timing: 'By Appointment Only',
            phone: '+91 86974 49191'
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
                    {/* Left Column: Clinic List */}
                    <div className="lg:col-span-7 space-y-6">
                        {clinics.map((clinic, index) => (
                            <div
                                key={index}
                                className="group relative bg-gray-50 rounded-[2rem] p-8 hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all duration-500 border border-transparent hover:border-gray-100"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                                    <div className="flex gap-6">
                                        <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-leaf-500 shadow-sm group-hover:bg-leaf-500 group-hover:text-white transition-all duration-500 shrink-0">
                                            <MapPin size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{clinic.name}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed mb-3 max-w-xs">{clinic.address}</p>
                                            <div className="flex items-center gap-2 text-leaf-600 font-bold text-[13px] uppercase tracking-wider">
                                                <Phone size={14} />
                                                {clinic.phone}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:text-right">
                                        <div className="inline-block px-4 py-2 rounded-xl bg-white border border-gray-100 text-[#1A1A1A] text-sm font-bold shadow-sm">
                                            {clinic.timing}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Clinic Image Card */}
                    <div className="lg:col-span-5 h-full">
                        <div className="relative h-full min-h-[500px] rounded-[3rem] overflow-hidden shadow-2xl group">
                            <img
                                src="/homepage/Healing touch clinic.webp"
                                alt="Healing Touch Clinic"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            <div className="absolute bottom-12 left-12 right-12 text-white">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-leaf-500 flex items-center justify-center">
                                        <MapPin size={24} />
                                    </div>
                                    <p className="text-sm font-bold tracking-widest uppercase">Our Main Branch</p>
                                </div>
                                <h4 className="text-3xl font-bold mb-4">World-Class Orthopaedic Care</h4>
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
