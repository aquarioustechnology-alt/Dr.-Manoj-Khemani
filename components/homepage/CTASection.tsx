'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useAppointment } from '@/context/AppointmentContext'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function CTASection() {
    const { openModal } = useAppointment()
    const [activeClinic, setActiveClinic] = useState(0)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (!sectionRef.current) return

        const ctx = gsap.context(() => {
            gsap.from('.cta-reveal-left', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                x: -100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: 'power3.out',
            })

            gsap.from('.cta-reveal-right', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                x: 100,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

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
            image: '/images/homepage/Healing touch clinic.webp',
            logo: '/images/homepage/main clinic logo.webp',
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
            image: '/images/homepage/Manipal (AMRI) Hospital, Salt Lake.webp',
            logo: '/images/homepage/manipal logo.webp',
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
            image: '/images/homepage/Manipal (AMRI) Hospital, Mukundapur.webp',
            logo: '/images/homepage/manipal logo.webp',
            label: 'Mukundapur'
        }
    ]

    const imageRefs = useRef<(HTMLImageElement | null)[]>([])

    useEffect(() => {
        if (!imageRefs.current.length) return

        imageRefs.current.forEach((img, i) => {
            if (!img) return
            const isActive = i === activeClinic

            if (isActive) {
                gsap.to(img, {
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: 'power2.inOut',
                    autoAlpha: 1,
                    zIndex: 10,
                })
            } else {
                gsap.to(img, {
                    opacity: 0,
                    scale: 1.05,
                    duration: 1.2,
                    ease: 'power2.inOut',
                    autoAlpha: 0,
                    zIndex: 0,
                })
            }
        })
    }, [activeClinic])

    return (
        <section id="pain-free-path" ref={sectionRef} className="pt-[80px] pb-24 lg:pb-32 bg-[#f7faf2] relative overflow-hidden z-20">
            <div className="max-w-7.5xl mx-auto px-6 lg:px-8 relative">

                {/* Header - Centered */}
                <div className="mb-16 cta-reveal-left flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-leaf-600 text-[12px] font-bold tracking-[0.2em] uppercase mb-6">
                        <span className="w-2 h-2 rounded-full bg-leaf-500"></span>
                        Visit Our Clinics
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-[46px] leading-[1.1] font-bold text-[#1A1A1A] tracking-tight">
                        Begin Your Path to <span className="text-leaf-500">Pain-Free Living</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                    {/* Left Column: Clinic Accordion */}
                    <div className="lg:col-span-7 cta-reveal-left">
                        {clinics.map((clinic, index) => {
                            const isActive = activeClinic === index

                            return (
                                <div key={index}>
                                    {/* Clinic Item */}
                                    <div
                                        className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer ${isActive
                                            ? 'bg-white rounded-[20px] shadow-lg shadow-gray-200/50 -mx-2 lg:-mx-4 mb-3'
                                            : 'border-b border-gray-200 hover:bg-white/40'
                                            }`}
                                        onClick={() => setActiveClinic(index)}
                                    >
                                        {/* Header Row */}
                                        <div className={`flex items-center justify-between gap-4 transition-all duration-300 ${isActive ? 'px-6 lg:px-8 pt-7 pb-3' : 'py-6 px-2'
                                            }`}>
                                            <div className="flex items-center gap-4">
                                                <div className={`w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center p-2 transition-all duration-300 ${isActive ? 'scale-110 shadow-sm' : ''}`}>
                                                    <img src={clinic.logo} alt={clinic.name} className="w-full h-full object-contain" />
                                                </div>
                                                <h3 className={`transition-colors duration-200 text-[#1A1A1A] ${isActive ? 'text-xl lg:text-2xl font-bold' : 'text-lg lg:text-xl font-semibold'
                                                    }`}>
                                                    {clinic.name}
                                                </h3>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                {/* Action Icons visible on active */}
                                                {isActive && (
                                                    <div className="flex gap-2">
                                                        <a
                                                            href={clinic.mapLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="w-10 h-10 rounded-full bg-leaf-500 flex items-center justify-center text-white hover:bg-leaf-600 transition-all shadow-md shadow-leaf-500/20"
                                                            title="View on Map"
                                                        >
                                                            <MapPin size={18} strokeWidth={2.5} />
                                                        </a>
                                                        <a
                                                            href={`tel:${clinic.phone.replace(/[^0-9+]/g, '')}`}
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white hover:bg-[#333] transition-all shadow-md shadow-black/10"
                                                            title="Call Now"
                                                        >
                                                            <Phone size={18} strokeWidth={2.5} />
                                                        </a>
                                                    </div>
                                                )}
                                                {/* Timing badge visible on inactive */}
                                                {!isActive && (
                                                    <span className="text-xs text-gray-400 font-medium shrink-0 hidden sm:block">
                                                        {clinic.timings.map(t => t.day).join(' · ')}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Expandable Content */}
                                        <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                                            }`}>
                                            <div className="px-6 lg:px-8 pb-7">
                                                {/* Address */}
                                                <p className="text-[15px] text-gray-500 leading-relaxed mb-1.5 pl-16">
                                                    {clinic.address}
                                                </p>

                                                {/* Phone */}
                                                <p className="text-[15px] text-[#1A1A1A] font-semibold tracking-tight mb-6 pl-16">
                                                    {clinic.phone}
                                                </p>

                                                {/* OPD Timings - Prominent Square Design */}
                                                <div className="flex flex-wrap lg:flex-nowrap items-center gap-3 pl-16">
                                                    {clinic.timings.map((timing, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="flex flex-col items-center min-w-[110px] bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden group hover:border-leaf-200 transition-colors"
                                                        >
                                                            <div className="w-full py-2 bg-leaf-500 flex items-center justify-center">
                                                                <span className="text-[13px] font-bold text-white uppercase tracking-wider">{timing.day}</span>
                                                            </div>
                                                            <div className="w-full py-3 px-3 flex items-center justify-center">
                                                                <span className="text-[14px] text-[#1A1A1A] font-bold whitespace-nowrap">{timing.hours}</span>
                                                            </div>
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
                    <div className="lg:col-span-5 cta-reveal-right">
                        <div className="relative h-[450px] lg:h-full min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group border-[8px] border-white">
                            {clinics.map((clinic, index) => (
                                <img
                                    key={index}
                                    ref={(el) => {
                                        imageRefs.current[index] = el
                                    }}
                                    src={clinic.image}
                                    alt={clinic.name}
                                    className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105"
                                />
                            ))}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20" />

                            <div className="absolute bottom-10 left-10 right-10 text-white z-30">
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
                                <Button onClick={openModal} className="!bg-leaf-500 hover:!bg-leaf-600 !text-white !border-none text-sm font-bold">
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
