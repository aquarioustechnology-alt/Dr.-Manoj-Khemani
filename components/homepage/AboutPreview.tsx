'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Activity, Award, UserCheck, Building2 } from 'lucide-react'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function AboutPreview() {
    const sectionRef = useRef<HTMLElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!sectionRef.current || !containerRef.current) return

        const ctx = gsap.context(() => {
            // Animate Heading
            gsap.from('.about-heading-char', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                y: 50,
                opacity: 0,
                rotate: 10,
                stagger: 0.05,
                duration: 0.8,
                ease: 'back.out(1.7)',
            })

            // Animate Cards Stagger
            gsap.from('.info-card', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                },
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
            })

            // Image Parallax
            gsap.to('.about-main-image', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                },
                y: 100,
                ease: 'none'
            })

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const stats = [
        { icon: Award, value: '25+', label: 'Years Experience', bg: 'bg-leaf-50', text: 'text-leaf-600' },
        { icon: UserCheck, value: '15k+', label: 'Successful Surgeries', bg: 'bg-blue-50', text: 'text-blue-600' },
        { icon: Building2, value: 'Apollo', label: 'Senior Consultant', bg: 'bg-orange-50', text: 'text-orange-600' },
    ]

    return (
        <section ref={sectionRef} className="py-24 lg:py-32 bg-gray-50 relative z-10 overflow-hidden shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.1)] rounded-t-[3rem]">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Header Section */}
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-leaf-100 text-leaf-700 text-sm font-semibold uppercase tracking-wider mb-6">
                        <Activity size={16} />
                        <span>Meet The Expert</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
                        {'Dedicated to Your Health & Wellness'.split(' ').map((word, i) => (
                            <span key={i} className="inline-block whitespace-pre mr-2">
                                {word.split('').map((char, j) => (
                                    <span key={j} className="about-heading-char inline-block">{char}</span>
                                ))}
                            </span>
                        ))}
                    </h2>

                    <p className="text-lg text-gray-6000 leading-relaxed max-w-2xl mx-auto">
                        Combining over two decades of surgical excellence with a compassionate, patient-first approach to restore your mobility.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div ref={containerRef} className="grid lg:grid-cols-12 gap-8 items-start">

                    {/* Left Column: Main Image (Spans 5 cols) */}
                    <div className="lg:col-span-5 relative group">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] transform transition-transform duration-500 group-hover:scale-[1.01]">
                            <img
                                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
                                alt="Dr. Manoj Khemani"
                                className="about-main-image w-full h-[120%] object-cover object-top -mt-[10%]"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

                            {/* Floating Name Card */}
                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-white/40">
                                <h3 className="text-2xl font-bold text-gray-900">Dr. Manoj Khemani</h3>
                                <p className="text-leaf-600 font-medium">MBBS, MS (Orthopedics)</p>
                            </div>
                        </div>

                        {/* Decorative Circle Behind */}
                        <div className="absolute -z-10 top-10 -left-10 w-40 h-40 bg-leaf-400/20 rounded-full blur-3xl"></div>
                    </div>

                    {/* Right Column: Info Cards & Stats (Spans 7 cols) */}
                    <div className="lg:col-span-7 flex flex-col gap-6">

                        {/* Bio Card */}
                        <div className="info-card p-8 md:p-10 bg-white rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                "My philosophy is simple: treat every patient like family. Whether it's a complex joint replacement or a sports injury, I believe in personalized care that targets the root cause, not just the symptoms."
                            </p>
                            <div className="h-1 w-20 bg-leaf-500 rounded-full"></div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Large Primary Stat */}
                            <div className="info-card p-8 bg-leaf-600 text-white rounded-[2rem] shadow-lg shadow-leaf-900/10 flex flex-col justify-between min-h-[200px] group cursor-pointer hover:bg-leaf-700 transition-colors">
                                <div className="p-3 bg-white/20 w-fit rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform">
                                    <Award size={28} className="text-white" />
                                </div>
                                <div>
                                    <span className="block text-5xl font-bold mb-1">25+</span>
                                    <span className="text-leaf-100 font-medium text-lg">Years of Medical Excellence</span>
                                </div>
                            </div>

                            {/* Secondary Stats Vertical Stack */}
                            <div className="flex flex-col gap-6">
                                <div className="info-card flex-1 p-6 bg-white rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-5 hover:border-leaf-200 transition-colors">
                                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                        <UserCheck size={28} />
                                    </div>
                                    <div>
                                        <span className="block text-2xl font-bold text-gray-900">15,000+</span>
                                        <span className="text-gray-500 font-medium">Surgeries Performed</span>
                                    </div>
                                </div>

                                <div className="info-card flex-1 p-6 bg-white rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-5 hover:border-leaf-200 transition-colors">
                                    <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                                        <Building2 size={28} />
                                    </div>
                                    <div>
                                        <span className="block text-lg font-bold text-gray-900">Senior Consultant</span>
                                        <span className="text-gray-500 font-medium">at Apollo Hospitals</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Row */}
                        <div className="info-card mt-2 flex justify-end">
                            <Link href="/about" className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold transition-all hover:bg-gray-800 hover:gap-5">
                                Learn More About Experience
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                    <ArrowUpRight size={18} />
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
