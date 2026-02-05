'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Award, UserCheck, Activity, PlusSquare, Dumbbell, Move, CheckCircle2 } from 'lucide-react'

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
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 mb-8 lg:mb-12 items-start">

                    {/* Left: Badge + Heading */}
                    <div className="lg:w-3/5 about-top-content">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-600 text-xs font-semibold tracking-widest uppercase mb-6">
                            <span className="w-2 h-2 rounded-full bg-leaf-500"></span>
                            About Dr. Khemani
                        </div>
                        <h2 ref={headingRef} className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] font-bold text-[#1A1A1A] tracking-tight">
                            Precision-Led <br /> Orthopaedic Care, <br />
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
                {/* --- Bottom Row: Three Columns --- */}
                <div className="about-grid grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch pt-0">

                    {/* Left Column: Services Pills */}
                    <div className="lg:col-span-4 flex flex-col justify-center gap-5 about-bottom-col order-2 lg:order-1">
                        {[
                            { icon: <Activity size={24} />, text: "Knee Replacement", link: "/knee-replacement" },
                            { icon: <PlusSquare size={24} />, text: "Arthritis Treatment", link: "/arthritis-treatment" },
                            { icon: <Dumbbell size={24} />, text: "Sports Injuries / ACL", link: "/sports-injuries" },
                            { icon: <Move size={24} />, text: "Joint Pain & Mobility Issues", link: "/joint-pain" }
                        ].map((item, index) => (
                            <Link key={index} href={item.link} className="group rounded-full p-2 flex items-center gap-4 transition-all hover:bg-gray-50">
                                <div className="w-12 h-12 shrink-0 rounded-full bg-leaf-600 text-white flex items-center justify-center transition-transform group-hover:scale-110">
                                    {item.icon}
                                </div>
                                <span className="text-lg font-semibold text-gray-800 group-hover:text-leaf-600 transition-colors">{item.text}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Middle Column: Hero Image */}
                    <div className="lg:col-span-4 about-bottom-col relative h-[400px] lg:h-auto order-1 lg:order-2">
                        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
                                alt="Dr. Manoj Khemani Portrait"
                                className="w-full h-full object-cover"
                            />
                            {/* Subtle Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                    </div>

                    {/* Right Column: Memberships Card */}
                    <div className="lg:col-span-4 about-bottom-col bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100 flex flex-col justify-center order-3">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <Award className="text-leaf-500" /> Professional Memberships
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Life Member of Kolkata Arthroscopy & Sports Surgery Society",
                                "Life Member of West Bengal Orthopaedic Association",
                                "Life Member of Indian Medical Association",
                                "Life Member of West Bengal Arthroplasty Society",
                                "Life Member of Indian Society of Hip & Knee Surgeons"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-600">
                                    <CheckCircle2 size={20} className="text-leaf-500 shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    )
}
