'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { Phone, Mail, MapPin, Calendar } from 'lucide-react'
import Button from '@/components/ui/Button'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function FirstCTA() {
    const containerRef = useRef(null)

    useGSAP(() => {
        // Entrance animation
        gsap.from('.cta-content-item', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out'
        })
    }, { scope: containerRef })

    return (
        <section className="pt-0 pb-16 lg:pb-24 bg-gray-50 px-4 lg:px-8 relative z-20">
            <div
                ref={containerRef}
                className="max-w-7.5xl mx-auto bg-leaf-900 rounded-3xl overflow-hidden relative shadow-2xl shadow-leaf-900/20 text-white min-h-[500px] lg:min-h-[450px] flex items-center"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] bg-repeat opacity-20"></div>
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-leaf-500 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-leaf-400 rounded-full blur-3xl"></div>
                </div>

                {/* Doctor Image (Right Side Blend) */}
                <div className="absolute right-0 bottom-0 top-0 w-full lg:w-3/5 h-full pointer-events-none">
                    <Image
                        src="/images/homepage/Dr Image 2-Picsart-AiImageEnhancer.webp"
                        alt="Dr. Manoj Khemani"
                        fill
                        className="object-cover object-top lg:object-right-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Solid Gradient Overlay for seamless blending */}
                    <div className="absolute inset-0 bg-gradient-to-r from-leaf-900 via-leaf-900/60 to-transparent"></div>
                </div>

                <div className="relative z-10 w-full lg:w-2/3 p-8 lg:p-16 flex flex-col justify-center h-full">

                    {/* Badge */}
                    <div className="cta-content-item mb-6">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-bold tracking-[0.2em] uppercase">
                            CONSULT TODAY
                        </div>
                    </div>

                    {/* Heading */}
                    <h2 className="cta-content-item text-4xl lg:text-5xl font-bold leading-[1.2] mb-6 text-white">
                        Take the First Step Toward a <br className="hidden lg:block" />
                        <span className="text-leaf-400">Pain-Free Life</span>
                    </h2>

                    {/* Contact Grid */}
                    <div className="cta-content-item flex flex-col md:flex-row gap-8 md:gap-0 mb-8 border-t border-white/10 pt-6">
                        {/* Phone */}
                        <div className="group border-b md:border-b-0 md:border-r border-white/40 pb-6 md:pb-0 md:pr-8 w-full md:w-auto">
                            <div className="flex items-center gap-3 mb-2 text-white/60 text-sm font-medium uppercase tracking-wide">
                                <Phone size={16} /> Call Now:
                            </div>
                            <a href="tel:+918697449191" className="text-lg font-semibold hover:text-leaf-400 transition-colors duration-300">
                                +91 86974 49191
                            </a>
                        </div>

                        {/* Email */}
                        <div className="group border-b md:border-b-0 md:border-r border-white/40 pb-6 md:pb-0 md:px-8 w-full md:w-auto">
                            <div className="flex items-center gap-3 mb-2 text-white/60 text-sm font-medium uppercase tracking-wide">
                                <Mail size={16} /> E-mail:
                            </div>
                            <a href="mailto:info@healmybones.com" className="text-lg font-semibold hover:text-leaf-400 transition-colors duration-300">
                                info@healmybones.com
                            </a>
                        </div>

                        {/* Visit */}
                        <div className="group md:pl-8 w-full md:w-auto">
                            <div className="flex items-center gap-3 mb-2 text-white/60 text-sm font-medium uppercase tracking-wide">
                                <MapPin size={16} /> Visit Us:
                            </div>
                            <p className="text-lg font-semibold leading-snug">
                                Healing Touch, Bangur Avenue
                            </p>
                        </div>
                    </div>

                    {/* CTA Button and Arrow */}
                    <div className="cta-content-item flex items-center gap-6 relative">
                        <Button
                            href="/contact"
                            icon={Calendar}
                            className="!h-[56px] !pl-1.5 !pr-8 !text-lg"
                            iconClassName="!w-11 !h-11 !text-leaf-500"
                        >
                            Consult Today
                        </Button>

                        {/* Curly Arrow Image */}
                        <div className="absolute left-[220px] lg:left-[240px] bottom-3 pointer-events-none animate-bounce-horizontal">
                            <div className="relative w-14 h-14 lg:w-16 lg:h-16">
                                <Image
                                    src="/images/about us/Arrow icon.png"
                                    alt="Arrow pointing to button"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
