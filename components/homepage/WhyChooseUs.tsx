'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle2 } from 'lucide-react'

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

const doctorImages = [
    "/homepage/Dr Image 1.webp",
    "/homepage/Dr Image 3.webp",
    "/homepage/Dr Image 7.webp",
    "/homepage/Dr Image 11.webp",
    "/homepage/Dr Image 14.webp",
    "/homepage/Dr Image 17.webp",
    "/homepage/Dr Image 20.webp",
]

export default function WhyChooseUs() {
    const sectionRef = useRef<HTMLElement>(null)
    const [counts, setCounts] = useState(stats.map(() => 0))
    const hasAnimated = useRef(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // Auto-slide images
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % doctorImages.length)
        }, 3500)
        return () => clearInterval(interval)
    }, [])

    // Counter animation
    useEffect(() => {
        if (!sectionRef.current) return

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true
                    stats.forEach((stat, index) => {
                        let start = 0
                        const end = stat.value
                        const increment = Math.ceil(end / 60)
                        const timer = setInterval(() => {
                            start += increment
                            if (start >= end) {
                                start = end
                                clearInterval(timer)
                            }
                            setCounts(prev => {
                                const newCounts = [...prev]
                                newCounts[index] = start
                                return newCounts
                            })
                        }, 30)
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
            <div className="max-w-7.5xl mx-auto px-6 lg:px-8">

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
                        <p className="why-content text-[15px] text-gray-600 leading-relaxed font-medium mb-8">
                            With over two decades of orthopaedic expertise, <span className="font-bold text-black">Dr. Manoj Kumar Khemani</span> delivers exceptional surgical outcomes through advanced technology and patient-centered care. His adoption of <span className="font-bold text-black">AR-guided surgery</span> ensures precision in every procedure.
                        </p>

                        {/* Trust Points - Matching About Section Style */}
                        <ul className="why-content space-y-2 mb-10">
                            {trustPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-4 text-gray-800 group">
                                    <div className="mt-1 shrink-0 flex items-center justify-center">
                                        <div className="w-6 h-6 rounded-full bg-leaf-50 flex items-center justify-center border border-leaf-200 group-hover:bg-leaf-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                            <CheckCircle2 size={14} className="text-leaf-600 group-hover:text-white" />
                                        </div>
                                    </div>
                                    <span className="text-[15px] font-medium leading-relaxed pt-0.5">{point}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Stats Row with Counter Animation */}
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

                    {/* Right Column: Auto-Sliding Image Gallery */}
                    <div className="why-content relative">
                        <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
                            {doctorImages.map((img, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentImageIndex
                                        ? 'opacity-100 scale-100 z-10'
                                        : 'opacity-0 scale-105 z-0'
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt="Dr. Manoj Khemani"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-20"></div>

                            {/* Image Indicators */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                                {doctorImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                                            ? 'bg-white w-8'
                                            : 'bg-white/40 w-2 hover:bg-white/70'
                                            }`}
                                        aria-label={`View image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-leaf-100 -z-10"></div>
                        <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-leaf-50 -z-10"></div>
                    </div>

                </div>
            </div>
        </section>
    )
}
