'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const stats = [
    { value: 20, suffix: '+', label: 'Years of Experience' },
    { value: 5000, suffix: '+', label: 'Successful Surgeries' },
    { value: 98, suffix: '%', label: 'Patient Satisfaction' },
]

const trustPoints = [
    "AR-Guided Surgical Precision for accurate implant positioning",
    "Personalized treatment plans tailored to your lifestyle",
    "Minimally invasive techniques for faster recovery",
    "Comprehensive post-operative care and rehabilitation",
]

export default function WhyChooseUs() {
    const sectionRef = useRef<HTMLElement>(null)
    const [counts, setCounts] = useState(stats.map(() => 0))
    const hasAnimated = useRef(false)

    useEffect(() => {
        if (!sectionRef.current) return

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true
                    stats.forEach((stat, index) => {
                        let start = 0
                        const end = stat.value
                        const duration = 2000
                        const stepTime = duration / end
                        const timer = setInterval(() => {
                            start += Math.ceil(end / 50)
                            if (start >= end) {
                                start = end
                                clearInterval(timer)
                            }
                            setCounts(prev => {
                                const newCounts = [...prev]
                                newCounts[index] = start
                                return newCounts
                            })
                        }, stepTime)
                    })
                }
            },
            { threshold: 0.3 }
        )

        observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!sectionRef.current) return

        const ctx = gsap.context(() => {
            gsap.from('.why-content', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="py-[90px] bg-white relative overflow-hidden z-20">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-20">

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Content */}
                    <div>
                        {/* Badge */}
                        <div className="why-content inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-600 text-xs font-semibold tracking-widest uppercase mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#EC1D24]"></span>
                            Why Choose Us
                        </div>

                        {/* Heading */}
                        <h2 className="why-content text-4xl sm:text-5xl lg:text-5xl leading-[1.1] font-bold text-[#1A1A1A] tracking-tight mb-6">
                            Trusted Care, <br />
                            <span className="text-leaf-500">Proven Results</span>
                        </h2>

                        {/* Paragraph */}
                        <p className="why-content text-[15px] text-gray-600 leading-relaxed font-medium mb-10">
                            With over two decades of orthopaedic expertise, <span className="font-bold text-black">Dr. Manoj Kumar Khemani</span> delivers exceptional surgical outcomes through advanced technology and patient-centered care. His adoption of <span className="font-bold text-black">AR-guided surgery</span> ensures precision in every procedure.
                        </p>

                        {/* Trust Points */}
                        <ul className="why-content space-y-4 mb-10">
                            {trustPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="mt-1.5 w-2 h-2 rounded-full bg-leaf-500 shrink-0"></span>
                                    <span className="text-[15px] text-gray-700 font-medium">{point}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Stats Row */}
                        <div className="why-content flex flex-wrap gap-8 lg:gap-12">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <span className="block text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
                                        {counts[index]}{stat.suffix}
                                    </span>
                                    <span className="text-sm text-gray-500 font-medium">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Image Collage */}
                    <div className="why-content relative">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Main Large Image */}
                            <div className="col-span-2 relative aspect-[16/9] rounded-2xl overflow-hidden">
                                <img
                                    src="/homepage/Dr Image 17.webp"
                                    alt="Dr. Khemani in surgery"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Two smaller images */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden">
                                <img
                                    src="/homepage/Dr Image 3.webp"
                                    alt="Dr. Khemani with patient"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="relative aspect-square rounded-2xl overflow-hidden">
                                <img
                                    src="/homepage/Dr Image 11.webp"
                                    alt="Dr. Khemani at conference"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-leaf-100 -z-10"></div>
                        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-leaf-50 -z-10"></div>
                    </div>

                </div>
            </div>
        </section>
    )
}
