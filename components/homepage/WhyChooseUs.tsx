'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Microscope, HeartHandshake, Clock, ShieldCheck, Award, Users, Target, Stethoscope } from 'lucide-react'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

// Doctor images for the auto-sliding gallery
const doctorImages = [
    "/homepage/Dr Image 1.webp",
    "/homepage/Dr Image 3.webp",
    "/homepage/Dr Image 7.webp",
    "/homepage/Dr Image 11.webp",
    "/homepage/Dr Image 14.webp",
    "/homepage/Dr Image 17.webp",
]

const reasons = [
    {
        icon: Microscope,
        title: 'AR-Guided Precision',
        description: 'Augmented Reality technology for superior surgical accuracy and implant positioning.',
    },
    {
        icon: HeartHandshake,
        title: 'Patient-First Approach',
        description: 'Personalized treatment plans designed around your lifestyle, goals, and recovery needs.',
    },
    {
        icon: Clock,
        title: 'Faster Recovery',
        description: 'Minimally invasive techniques and advanced protocols for quicker return to normal life.',
    },
    {
        icon: ShieldCheck,
        title: 'Proven Excellence',
        description: 'Consistent outcomes backed by 20+ years of clinical experience and patient trust.',
    },
]

const stats = [
    { value: 20, suffix: '+', label: 'Years Experience', icon: Award },
    { value: 5000, suffix: '+', label: 'Successful Surgeries', icon: Target },
    { value: 98, suffix: '%', label: 'Patient Satisfaction', icon: Users },
    { value: 15, suffix: '+', label: 'Professional Awards', icon: Stethoscope },
]

// Counter animation hook
function useCounter(end: number, duration: number = 2, startOnView: boolean = true) {
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    const hasAnimated = useRef(false)

    useEffect(() => {
        if (!ref.current || hasAnimated.current) return

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true
                    let startTime: number
                    const animate = (currentTime: number) => {
                        if (!startTime) startTime = currentTime
                        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
                        setCount(Math.floor(progress * end))
                        if (progress < 1) {
                            requestAnimationFrame(animate)
                        }
                    }
                    requestAnimationFrame(animate)
                }
            },
            { threshold: 0.5 }
        )

        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [end, duration])

    return { count, ref }
}

export default function WhyChooseUs() {
    const sectionRef = useRef<HTMLElement>(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // Auto-slide images
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % doctorImages.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (!sectionRef.current) return

        const ctx = gsap.context(() => {
            gsap.from('.why-reveal', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
            })

            gsap.from('.reason-card', {
                scrollTrigger: {
                    trigger: '.reasons-grid',
                    start: 'top 80%',
                },
                y: 40,
                opacity: 0,
                duration: 0.7,
                stagger: 0.1,
                ease: 'power3.out',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="py-[90px] bg-white relative overflow-hidden z-20">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-20">

                {/* Top Section: Badge + Heading + Content */}
                <div className="text-center mb-16 why-reveal">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-600 text-xs font-semibold tracking-widest uppercase mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#EC1D24]"></span>
                        Why Choose Us
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-5xl leading-[1.1] font-bold text-[#1A1A1A] tracking-tight mb-6">
                        Trust Built on <span className="text-leaf-500">Experience & Excellence</span>
                    </h2>
                    <p className="text-[15px] text-gray-600 leading-relaxed font-medium max-w-3xl mx-auto">
                        Dr. Manoj Kumar Khemani combines decades of orthopaedic expertise with cutting-edge technology to deliver exceptional patient outcomes. Here's why thousands of patients trust their mobility to his care.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Side: Auto-Sliding Image Gallery */}
                    <div className="why-reveal relative">
                        <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                            {doctorImages.map((img, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt="Dr. Manoj Khemani"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-20"></div>

                            {/* Image indicators */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                                {doctorImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
                                            }`}
                                        aria-label={`View image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-white rounded-2xl shadow-xl p-6 z-40 border border-gray-100/50">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-leaf-500 flex items-center justify-center text-white">
                                    <Award size={28} />
                                </div>
                                <div>
                                    <span className="block text-3xl font-bold text-[#1A1A1A]">20+</span>
                                    <span className="text-sm text-gray-500 font-medium">Years of Excellence</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Reasons Grid */}
                    <div>
                        <div className="reasons-grid grid sm:grid-cols-2 gap-5">
                            {reasons.map((reason, index) => (
                                <div
                                    key={index}
                                    className="reason-card group p-6 rounded-2xl bg-[#F9F9F9] hover:bg-leaf-500 transition-all duration-500 border border-gray-100/50 hover:border-leaf-500"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-leaf-100 text-leaf-600 flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:text-white transition-all duration-500 group-hover:rotate-[360deg]">
                                        <reason.icon size={28} />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-white transition-colors">
                                        {reason.title}
                                    </h3>
                                    <p className="text-[14px] text-gray-500 leading-relaxed group-hover:text-white/80 transition-colors font-medium">
                                        {reason.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Section with Animated Counters */}
                <div className="mt-20 why-reveal">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {stats.map((stat, index) => {
                            const { count, ref } = useCounter(stat.value, 2.5)
                            return (
                                <div
                                    key={index}
                                    ref={ref}
                                    className="text-center p-8 rounded-2xl bg-[#F9F9F9] border border-gray-100/50 group hover:bg-leaf-50 transition-all duration-300"
                                >
                                    <div className="w-14 h-14 mx-auto rounded-full bg-leaf-100 text-leaf-600 flex items-center justify-center mb-4 group-hover:bg-leaf-500 group-hover:text-white transition-all duration-300">
                                        <stat.icon size={28} />
                                    </div>
                                    <span className="block text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-2">
                                        {count}{stat.suffix}
                                    </span>
                                    <span className="text-[14px] text-gray-500 font-medium">{stat.label}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </section>
    )
}
