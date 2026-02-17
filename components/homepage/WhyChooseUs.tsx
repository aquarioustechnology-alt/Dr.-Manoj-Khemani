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
    { value: 2, suffix: 'k+', label: 'Successful Surgeries' }, // Dynamic value will override
    { value: 98, suffix: '%', label: 'Patient Satisfaction' },
]

const trustPoints = [
    "AR-VR Guided Surgical Precision for accurate implant positioning",
    "Robotic Joint Replacement Expertise",
    "Advanced Trauma & Fracture Management",
    "Comprehensive post-operative care and rehabilitation",
]

const doctorImages = [
    "/images/homepage/Dr Image 1.webp",
    "/images/homepage/Dr Image 3.webp",
    "/images/homepage/Dr Image 7.webp",
    "/images/homepage/Dr Image 11.webp",
    "/images/homepage/Dr Image 14.webp",
    "/images/homepage/Dr Image 17.webp",
    "/images/homepage/Dr Image 20.webp",
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

    // Calculate dynamic stats
    const calculateStats = () => {
        const startYear = 2004 // Base year for experience
        const years = new Date().getFullYear() - startYear

        // For Surgeries, user requested "2k+". Keeping it simple/static 2 for now to match strict request, 
        // as incrementing "2" by "1" daily would result in "3k+", "4k+" which is wrong scale.
        const surgeries = 2

        return [years, surgeries, 98]
    }

    // Counter animation
    useEffect(() => {
        if (!sectionRef.current) return

        const targetStats = calculateStats()

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true
                    targetStats.forEach((targetValue, index) => {
                        let start = 0
                        const end = targetValue
                        const duration = 2000 // 2 seconds
                        const startTime = performance.now()

                        const animate = (currentTime: number) => {
                            const elapsed = currentTime - startTime
                            const progress = Math.min(elapsed / duration, 1)
                            const easeOut = 1 - Math.pow(1 - progress, 3) // Cubic ease out

                            const currentCount = Math.floor(start + (end - start) * easeOut)

                            setCounts(prev => {
                                const newCounts = [...prev]
                                newCounts[index] = currentCount
                                return newCounts
                            })

                            if (progress < 1) {
                                requestAnimationFrame(animate)
                            } else {
                                // Ensure final value is set exact
                                setCounts(prev => {
                                    const newCounts = [...prev]
                                    newCounts[index] = end
                                    return newCounts
                                })
                            }
                        }

                        requestAnimationFrame(animate)
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

                {/* Two Column Layout - Swapped */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

                    {/* Left Column: Auto-Sliding Image Gallery (Moved from Right) */}
                    <div className="why-content relative order-2 lg:order-1 h-full">
                        <div className="relative h-full min-h-[450px] rounded-[20px] overflow-hidden shadow-2xl">
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

                    {/* Right Column: Content (Moved from Left) */}
                    <div className="order-1 lg:order-2">
                        {/* Badge */}
                        <div className="why-content inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-600 text-xs font-semibold tracking-widest uppercase mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#EC1D24]"></span>
                            Why Choose Us
                        </div>

                        {/* Heading */}
                        <h2 className="why-content text-4xl sm:text-5xl lg:text-5xl leading-[1.1] font-bold text-[#1A1A1A] tracking-tight mb-6">
                            Why Dr. Khemani is <br />
                            <span className="text-leaf-500">Most Trusted Amongst Patients</span>
                        </h2>

                        {/* Paragraph */}
                        <p className="why-content text-[15px] text-gray-600 leading-relaxed font-medium mb-4">
                            With over two decades of orthopaedic expertise, <span className="font-bold text-black">Dr. Manoj Kumar Khemani</span> delivers exceptional surgical outcomes through advanced technology and patient-centered care. His adoption of <span className="font-bold text-black">AR VR guided surgery</span> ensures precision in every procedure.
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
                        <div className="why-content flex flex-nowrap sm:flex-wrap gap-2 sm:gap-8 lg:gap-12 justify-between lg:justify-start">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center sm:text-left flex-1 sm:flex-none">
                                    <span className="block text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A]">
                                        {counts[index]}{stat.suffix}
                                    </span>
                                    <span className="text-[10px] sm:text-sm text-gray-500 font-medium whitespace-nowrap">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
