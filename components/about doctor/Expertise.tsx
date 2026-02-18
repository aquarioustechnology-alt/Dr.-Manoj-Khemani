'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Bot, Accessibility, Activity, Bone, ShieldPlus, HelpingHand, Link as LinkIcon, Snowflake } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const treatments = [
    { label: 'Robotic Joint Replacement', icon: Bot },
    { label: 'AR VR Knee Replacement', icon: Accessibility },
    { label: 'Hip Replacement', icon: Activity },
    { label: 'Bone Fracture Treatment', icon: Bone },
    { label: 'Osteoporosis Treatment', icon: ShieldPlus },
    { label: 'Arthritis Treatment', icon: HelpingHand },
    { label: 'Ligament Injuries', icon: LinkIcon },
    { label: 'Frozen Shoulder Treatment', icon: Snowflake },
]

const sliderImages = [
    "/images/homepage/Dr Image 8-Picsart-AiImageEnhancer.webp",
    "/images/homepage/Dr Image 6-Picsart-AiImageEnhancer.webp",
    "/images/homepage/Dr Image 20-Picsart-AiImageEnhancer.webp",
    "/images/homepage/Dr Image 12-Picsart-AiImageEnhancer.webp"
]

export default function ExpertiseAndAffiliations() {
    const containerRef = useRef(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // Auto-scroll images
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    useGSAP(() => {
        gsap.from('.expertise-item', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
            },
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out'
        })
    }, { scope: containerRef })

    return (
        <section className="py-20 lg:py-24 bg-white relative z-20 overflow-hidden">
            <div ref={containerRef} className="max-w-7.5xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Content */}
                    <div>
                        {/* Badge */}
                        <div className="mb-6">
                            <div className="inline-block px-4 py-1.5 rounded-full border border-leaf-200 bg-leaf-50 text-leaf-600 text-xs font-bold tracking-[0.2em] uppercase">
                                CLINICAL EXCELLENCE
                            </div>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.1] mb-6">
                            Areas of Expertise
                        </h2>

                        <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
                            Dr. Khemani specializes in a wide spectrum of orthopedic treatments, utilizing cutting-edge technology for superior outcomes.
                        </p>

                        {/* Treatment Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {treatments.map((item, index) => (
                                <div
                                    key={index}
                                    className="expertise-item flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-leaf-200 transition-all duration-300 group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:bg-leaf-500 group-hover:text-white transition-colors border border-gray-100">
                                        <item.icon className="w-5 h-5 text-leaf-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="font-semibold text-gray-800 text-[15px] group-hover:text-leaf-700 transition-colors">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Image Slider */}
                    <div className="relative">
                        <div className="relative h-[500px] lg:h-[600px] w-full overflow-hidden shadow-2xl"
                            style={{ borderRadius: '10px 80px 10px 10px' }}>

                            {sliderImages.map((src, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                        }`}
                                >
                                    <Image
                                        src={src}
                                        alt={`Dr. Manoj Khemani Expertise ${index + 1}`}
                                        fill
                                        className="object-cover object-top"
                                        priority={index === 0}
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                            ))}

                            {/* Slider Indicators */}
                            <div className="absolute bottom-6 left-6 flex gap-2 z-20">
                                {sliderImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-leaf-50 rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute right-[-20px] top-10 pointer-events-none">
                            <div className="w-3 h-3 bg-leaf-400 rounded-full opacity-60"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
