'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Award, UserCheck, Activity } from 'lucide-react'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function AboutPreview() {
    const sectionRef = useRef<HTMLElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        if (!sectionRef.current) return

        const ctx = gsap.context(() => {
            // Animate Top Row
            gsap.from('.about-top-content', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
            })

            // Animate Bottom Columns
            gsap.from('.about-bottom-col', {
                scrollTrigger: {
                    trigger: '.about-grid',
                    start: 'top 75%',
                },
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
            })

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="py-20 lg:pt-[80px] lg:pb-24 bg-[#F9F9F9] relative z-10 rounded-t-[3rem] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.05)]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* --- Top Row: Header & Intro --- */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-16 lg:mb-24 items-start">

                    {/* Left: Badge + Heading */}
                    <div className="lg:w-3/5 about-top-content">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-600 text-xs font-semibold tracking-widest uppercase mb-6">
                            <span className="w-2 h-2 rounded-full bg-leaf-500"></span>
                            About Dr. Khemani
                        </div>
                        <h2 ref={headingRef} className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] font-bold text-[#1A1A1A] tracking-tight">
                            Precision-Led Orthopaedic Care, <br />
                            <span className="text-leaf-500">Backed by Experience.</span>
                        </h2>
                    </div>

                    {/* Right: Mission Text */}
                    <div className="lg:w-2/5 about-top-content pt-2">
                        <p className="text-base text-black leading-relaxed">
                            <span className="font-bold">Dr. Manoj Kumar Khemani</span> is a senior Orthopaedic Surgeon based in Kolkata, India, with <span className="font-bold">over 20 years of clinical experience</span> in Joint Replacement, Trauma & Fracture Surgery, and Arthroscopy. He is known for his expertise in knee and hip joint replacement, complex fracture management, and minimally invasive arthroscopic procedures. Dr. Khemani is among the early adopters of <span className="font-bold">Augmented Reality (AR)</span> assisted knee replacement technology in India, focusing on precision, alignment, and long-term mobility outcomes.
                        </p>
                    </div>
                </div>

                {/* --- Bottom Row: Content Card & Image --- */}
                <div className="about-grid grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

                    {/* Left Column: White Content Card */}
                    <div className="about-bottom-col bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col justify-between">
                        <div>
                            {/* Avatar/Stats Graphic */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="flex -space-x-4">
                                    <div className="w-12 h-12 rounded-full border-2 border-white bg-leaf-100 flex items-center justify-center text-leaf-600">
                                        <Award size={20} />
                                    </div>
                                    <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-blue-600">
                                        <UserCheck size={20} />
                                    </div>
                                    <div className="w-12 h-12 rounded-full border-2 border-white bg-orange-100 flex items-center justify-center text-orange-600">
                                        <Activity size={20} />
                                    </div>
                                </div>
                                <div className="text-sm">
                                    <span className="block font-bold text-gray-900">Excellence in Care</span>
                                    <span className="text-gray-500">25+ Years Experience</span>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Patient-Centered Philosophy</h3>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                "My philosophy is simple: treat every patient like family. Whether it's a complex joint replacement or a sports injury, I believe in personalized care that targets the root cause, not just the symptoms."
                            </p>
                        </div>

                        {/* Button */}
                        <div>
                            <Link href="/about" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B45309] text-white rounded-full font-semibold transition-all hover:bg-[#92400e] hover:shadow-lg w-full sm:w-auto">
                                Learn More About Dr. Khemani
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Hero Image */}
                    <div className="about-bottom-col relative h-full min-h-[500px] lg:min-h-0">
                        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
                                alt="Dr. Manoj Khemani Portrait"
                                className="w-full h-full object-cover"
                            />

                            {/* Subtle Overlay */}
                            <div className="absolute inset-0 bg-black/10"></div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
