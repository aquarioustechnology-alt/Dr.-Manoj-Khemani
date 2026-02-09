'use client'

import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '@/components/ui/Button'
import { Phone, Play, Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const HERO_IMAGES = [
    "/homepage/Dr Image 3.webp",
    "/homepage/hero_new_1.jpg",
    "/homepage/hero_new_2.jpg",
    "/homepage/Dr Image 8.webp"
]

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    // Image Slider Effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    // Animations
    useEffect(() => {
        if (!contentRef.current) return

        const ctx = gsap.context(() => {
            gsap.fromTo('.hero-content-item',
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out', delay: 0.5 }
            )
        }, contentRef)

        return () => ctx.revert()
    }, [])

    return (
        <section className="sticky top-0 z-0 w-full h-screen min-h-[750px] p-[15px] bg-white">
            {/* Main Rounded Container */}
            <div ref={containerRef} className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">

                {/* Background Images Slider */}
                <div className="absolute inset-0 w-full h-full">
                    {HERO_IMAGES.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                        >
                            <img
                                src={img}
                                alt="Dr. Manoj Khemani Orthopedic Care"
                                className="w-full h-full object-cover object-center scale-105"
                            />
                        </div>
                    ))}

                    {/* Overlay - Left to Right Gradient */}
                    {/* User asked for overlay from left to right. Text is on Right. 
                        Usually text needs contrast. If text is black, we need light overlay. 
                        If text is white, we need dark overlay.
                        Given "Maven Clinic" style (clean, often dark text on light), but "Get Back to Life" implies strong impact.
                        Let's try a dark gradient on the right side to pop the white text, 
                        assuming the user accepts white text for a premium feel. 
                    */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-transparent z-20" />
                </div>

                {/* Content - Left Side */}
                {/* Content Layer - Unified Flex Structure */}
                <div ref={contentRef} className="absolute inset-0 z-30 flex items-center px-8 lg:px-20 pt-20">
                    <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-0">

                        {/* Left Side Content */}
                        <div className="max-w-2xl text-left">
                            {/* Subheading */}
                            <div className="hero-content-item mb-4">
                                <span className="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-sm font-medium tracking-wider uppercase">
                                    Kolkata's Leading Orthopedic Surgeon
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="hero-content-item text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] drop-shadow-sm">
                                Get Back to Life <br />
                                <span className="text-leaf-400">with Dr. Manoj Khemani</span>
                            </h1>

                            <p className="hero-content-item text-lg text-gray-200 mb-10 max-w-xl leading-relaxed">
                                Expert care for joint replacements and fractures.
                                Personalized treatment plans designed to restore your mobility and freedom.
                            </p>

                            <div className="hero-content-item flex flex-wrap gap-4 justify-start">
                                <Button href="/contact" className="!h-[56px]">
                                    Schedule Appointment
                                </Button>

                                <button
                                    onClick={() => { }}
                                    className="group inline-flex items-center gap-3 pl-1 pr-6 py-1.5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold transition-all hover:bg-white hover:text-black hover:border-white"
                                >
                                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-leaf-500 group-hover:text-white transition-colors">
                                        <Play size={20} className="fill-current" />
                                    </div>
                                    Watch Video
                                </button>
                            </div>
                        </div>

                        {/* Right Side - Google Reviews (Now aligned with buttons) */}
                        <div className="hero-content-item hidden lg:block pb-1">
                            <div className="flex items-center gap-4 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative">
                                            <img
                                                src={`https://randomuser.me/api/portraits/men/${i * 10}.jpg`}
                                                alt="Reviewer"
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col text-white">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="font-bold text-lg">Google</span>
                                        <div className="flex items-center gap-0.5">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between gap-4 text-xs font-medium text-white/80">
                                        <span>Happy Patients</span>
                                        <span className="font-bold text-white">5.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}
