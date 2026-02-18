'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { Target, Eye } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function MissionVision() {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        // Entrance animations for header
        gsap.fromTo('.mv-header',
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.mv-header',
                    start: 'top 90%',
                }
            }
        )

        // Entrance animations for cards
        gsap.fromTo('.mv-card',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.mv-card',
                    start: 'top 85%',
                }
            }
        )

        // Entrance animations for image
        gsap.fromTo('.mv-image',
            { x: 50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.mv-image',
                    start: 'top 85%',
                }
            }
        )
    }, { scope: containerRef })

    return (
        <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
            <div ref={containerRef} className="max-w-7.5xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Content */}
                    <div>
                        {/* Header */}
                        <div className="mv-header mb-10 opacity-0">
                            <div className="inline-block px-4 py-1.5 rounded-full border border-leaf-200 bg-leaf-50 text-leaf-600 text-xs font-bold tracking-[0.2em] uppercase mb-6">
                                OUR PHILOSOPHY
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                                Committed to Your <br />
                                <span className="text-leaf-600">Mobility & Wellness</span>
                            </h2>
                            <p className="text-lg text-gray-600">
                                Driving excellence in orthopedic care through compassion, innovation, and accessibility.
                            </p>
                        </div>

                        {/* Cards Container */}
                        <div className="grid sm:grid-cols-2 gap-6">

                            {/* Mission Card */}
                            <div className="mv-card group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-all duration-500 overflow-hidden opacity-0">
                                {/* Hover Background Animation (Bottom to Top) */}
                                <div className="absolute inset-0 bg-leaf-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-full bg-leaf-50 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                                        <Target className="w-7 h-7 text-leaf-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                                        Our Mission
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-leaf-50 transition-colors duration-300">
                                        To offer personalized, superior orthopedic treatment with an indomitable track record. We pledge to stay true to our core mission of patient-centric care while achieving new milestones in medical excellence.
                                    </p>
                                </div>
                            </div>

                            {/* Vision Card */}
                            <div className="mv-card group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-all duration-500 overflow-hidden opacity-0">
                                {/* Hover Background Animation (Bottom to Top) */}
                                <div className="absolute inset-0 bg-leaf-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-full bg-leaf-50 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-300">
                                        <Eye className="w-7 h-7 text-leaf-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                                        Our Vision
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-leaf-50 transition-colors duration-300">
                                        Visioning a future where high-quality orthopedic healthcare is affordable and accessible to all. We strive to inspire others and ensure health remains a fundamental right for every section of society.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Image (Doctor) */}
                    <div className="mv-image relative h-[600px] flex items-center justify-center opacity-0">
                        {/* Decorative elements behind */}
                        <div className="absolute top-10 right-0 w-32 h-32 text-leaf-200">
                            <svg viewBox="0 0 100 100" className="w-full h-full fill-current opacity-60">
                                <path d="M50 0 C20 0 0 20 0 50 C0 80 20 100 50 100 C80 100 100 80 100 50 C100 20 80 0 50 0 Z M50 90 C30 90 10 70 10 50 C10 30 30 10 50 10 C70 10 90 30 90 50 C90 70 70 90 50 90 Z" />
                            </svg>
                        </div>
                        <div className="absolute bottom-10 left-0 w-24 h-24 text-leaf-100 rotate-180">
                            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                                <path d="M50 0 C20 0 0 20 0 50 C0 80 20 100 50 100 C80 100 100 80 100 50 C100 20 80 0 50 0 Z M50 90 C30 90 10 70 10 50 C10 30 30 10 50 10 C70 10 90 30 90 50 C90 70 70 90 50 90 Z" />
                            </svg>
                        </div>

                        <div className="relative w-full h-full rounded-t-[100px] rounded-b-3xl overflow-hidden border-4 border-white shadow-none bg-leaf-50">
                            <Image
                                src="/images/homepage/Dr image 37.webp"
                                alt="Dr. Manoj Khemani Vision"
                                fill
                                className="object-cover object-top"
                            />
                            {/* Gradient Overlay at bottom */}
                            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-leaf-900/60 to-transparent"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
