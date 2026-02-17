'use client'

import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { Phone, Play, Star, X, ArrowUpRight } from 'lucide-react'

import { useAppointment } from '@/context/AppointmentContext'

gsap.registerPlugin(ScrollTrigger)

const HERO_IMAGES = [
    "/images/homepage/Dr Image 2.webp",
    "/images/homepage/Dr Image 6.webp",
    "/images/homepage/Dr Image 10.webp",
    "/images/homepage/Dr Image 20.webp"
]

export default function Hero() {
    const { openModal } = useAppointment()
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isVideoOpen, setIsVideoOpen] = useState(false)
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
        <section className={`sticky top-0 z-0 w-full min-h-[600px] p-[10px] bg-white transition-all duration-300 ${isVideoOpen ? 'z-[60]' : 'z-0'}`}>
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

                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 via-45% to-transparent to-65% z-20" />
                </div>

                {/* Content Layer - Unified Flex Structure */}
                <div ref={contentRef} className="relative z-30 flex items-center px-6 lg:px-20 pt-[180px] pb-[100px]">
                    <div className="max-w-7.5xl mx-auto w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-0">

                        {/* Left Side Content */}
                        <div className="max-w-3xl text-left">
                            {/* Subheading */}
                            <div className="hero-content-item mb-4">
                                <span className="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-sm font-medium tracking-wider uppercase">
                                    Kolkata's Leading Orthopedic Surgeon
                                </span>
                            </div>

                            {/* Heading */}
                            <h1 className="hero-content-item text-[46px] sm:text-[60px] lg:text-[80px] 2xl:text-8xl font-bold text-white mb-6 leading-[1.1] drop-shadow-sm">
                                Get Back to Life with <span className="text-leaf-400">Dr. Manoj Khemani</span>
                            </h1>

                            <p className="hero-content-item text-lg text-gray-200 mb-10 max-w-xl leading-relaxed">
                                Expert care for joint replacements and fractures.
                                Personalized treatment plans designed to restore your mobility and freedom.
                            </p>

                            <div className="hero-content-item flex flex-wrap gap-4 justify-start">
                                <Button
                                    onClick={openModal}
                                    className="w-full sm:w-auto !h-[56px] !bg-[#95BF1B] !text-white !font-medium hover:!bg-[#85AF0B]"
                                    iconClassName="!text-[#95BF1B] group-hover:!text-white"
                                >
                                    Schedule Appointment
                                </Button>

                                <button
                                    onClick={() => setIsVideoOpen(true)}
                                    className="w-full sm:w-auto group inline-flex items-center justify-center sm:justify-start gap-3 pl-1 pr-6 py-1.5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-medium text-sm transition-all hover:bg-white hover:text-black hover:border-white"
                                >
                                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-leaf-500 group-hover:text-white transition-colors">
                                        <Play size={20} className="fill-current" />
                                    </div>
                                    Watch Video
                                </button>
                            </div>
                        </div>

                        {/* Google Reviews - Refined Design */}
                        <div className="hero-content-item block pb-1">
                            <div className="flex flex-col bg-black/40 backdrop-blur-[30px] border border-white/20 rounded-[20px] overflow-hidden shadow-2xl transition-all w-fit max-w-[320px] sm:max-w-md"
                                style={{ boxShadow: 'inset 0 6px 0 0 rgba(255, 255, 255, 0.05)' }}
                            >
                                {/* Top Row: Review Info */}
                                <a
                                    href="https://www.google.com/search?q=Dr.+Manoj+Khemani"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col gap-4 px-4 sm:px-6 py-4 border-b border-white/10 hover:bg-white/5 transition-all group/review"
                                >
                                    {/* Top: Avatars */}
                                    <div className="flex -space-x-2.5 sm:-space-x-3">
                                        {[
                                            "/images/homepage/img 1.webp",
                                            "/images/homepage/img 2.webp",
                                            "/images/homepage/img 3.webp",
                                            "/images/homepage/img 4.webp"
                                        ].map((url, i) => (
                                            <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-[1.5px] border-white overflow-hidden relative shrink-0 aspect-square" style={{ zIndex: 10 - i }}>
                                                <img src={url} alt="Patient" className="object-cover w-full h-full" />
                                            </div>
                                        ))}
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-[1.5px] border-white bg-[#95BF1B] flex items-center justify-center relative shrink-0 z-0">
                                            <span className="text-white text-[9px] sm:text-[11px] font-bold leading-none">2k+</span>
                                        </div>
                                    </div>

                                    {/* Bottom: Star Rating + Trust Text */}
                                    <div className="flex flex-col items-start gap-1">
                                        <div className="flex gap-0.5">
                                            {[1, 2, 3, 4, 5].map((_, i) => (
                                                <Star key={i} size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
                                            ))}
                                        </div>
                                        <span className="text-white font-medium text-[10px] sm:text-xs tracking-wide">Trusted by 20,000+ Patients</span>
                                    </div>
                                </a>

                                {/* Bottom Row: Clinic CTA */}
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-between gap-3 px-4 sm:px-6 py-2.5 sm:py-3 hover:bg-white/5 transition-all group/cta"
                                >
                                    <span className="text-white text-xs sm:text-sm font-medium">Visit Healing Touch Clinic</span>
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-leaf-500 flex items-center justify-center text-white shrink-0 aspect-square group-hover:translate-x-1 transition-transform">
                                        <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

            </div >

            {/* Video Modal */}
            {
                isVideoOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-6 right-6 text-white hover:text-leaf-400 transition-colors"
                        >
                            <X size={40} />
                        </button>
                        <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
                            <video
                                src="/images/homepage/Dr Khemani Video.mp4"
                                controls
                                autoPlay
                                className="w-full h-full object-contain"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                )
            }
        </section >
    )
}
