'use client'

import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { Phone, Play, Star, X, ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const HERO_IMAGES = [
    "/homepage/Dr Image 5.webp",
    "/homepage/Dr Image 6.webp",
    "/homepage/Dr Image 10.webp",
    "/homepage/Dr Image 20.webp"
]

export default function Hero() {
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
        <section className={`sticky top-0 w-full p-[15px] bg-white transition-all duration-300 ${isVideoOpen ? 'z-[60]' : 'z-0'}`}>
            {/* Main Rounded Container */}
            <div ref={containerRef} className="relative w-full rounded-3xl overflow-hidden shadow-2xl">

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
                <div ref={contentRef} className="relative z-30 flex items-center px-6 lg:px-20 pt-[180px] pb-[120px]">
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
                                    href="/contact"
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
                            <div className="flex flex-col bg-black/40 backdrop-blur-[30px] border border-white/20 rounded-[32px] overflow-hidden shadow-2xl transition-all w-fit max-w-[320px] sm:max-w-md"
                                style={{ boxShadow: 'inset 0 6px 0 0 rgba(255, 255, 255, 0.05)' }}
                            >
                                {/* Top Row: Review Info */}
                                <a
                                    href="https://www.google.com/search?sca_esv=ec04cb20b49346cc&rlz=1C1CHBF_enIN1200IN1200&sxsrf=ANbL-n5rzJ1uMMjHbrUOsXZVPxqBQR2O5g:1770612528391&q=Dr.+Manoj+Khemani&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3jljrY5CkLlk8Dq3IvwBz-SiiHLMuwmCQZ7DqSL8AQqoJuAtjtegtdjEPKu9tUSpBEYyfYP2fz4cnCC1qzcZxqegTjm-9Z7zSARwuWeikrR-6huVZB4afx26jop4w_AoC7H5HW1kakDkl-Kg9CL30eb_soZjsRmQ21-CAgUWIIm_zNyzUmt70bPCaa99gE_vD7oJIEs&sa=X&ved=2ahUKEwibo6jWzcuSAxUdVmwGHVxlEnoQ0pQJegQIDxAB&biw=1536&bih=695&dpr=1.25#lrd=0x3a0275f9be75d203:0x221fc85cb7257132,1,,,,"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between gap-4 sm:gap-8 px-5 sm:px-8 py-5 sm:py-6 border-b border-white/10 hover:bg-white/5 transition-all group/review"
                                >
                                    {/* Left: Avatars + Text */}
                                    <div className="flex flex-col gap-3 sm:gap-4">
                                        <div className="flex -space-x-3 sm:-space-x-4">
                                            {[
                                                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop", // Indian female
                                                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop", // Multi-ethnic male
                                                "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=200&auto=format&fit=crop"  // South Asian male
                                            ].map((url, i) => (
                                                <div key={i} className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-white overflow-hidden relative shrink-0 aspect-square">
                                                    <img src={url} alt="Patient" className="object-cover w-full h-full" />
                                                </div>
                                            ))}
                                        </div>
                                        <span className="text-white text-base sm:text-lg font-semibold whitespace-nowrap">Happy Patients</span>
                                    </div>

                                    {/* Divider */}
                                    <div className="w-[1px] h-14 sm:h-20 bg-white/20 shrink-0"></div>

                                    {/* Right: Google Logo + Rating */}
                                    <div className="flex flex-col items-center gap-0 shrink-0">
                                        <img
                                            src="/homepage/google logo with rating.png"
                                            alt="Google Rating"
                                            className="h-12 sm:h-20 object-contain"
                                        />
                                        <span className="text-white font-bold text-xl sm:text-3xl mt-[-2px] sm:mt-[-8px]">4.8</span>
                                    </div>
                                </a>

                                {/* Bottom Row: Clinic CTA */}
                                <Link
                                    href="/contact"
                                    className="flex items-center justify-between gap-4 px-5 sm:px-8 py-4 sm:py-5 hover:bg-white/5 transition-all group/cta"
                                >
                                    <span className="text-white text-sm sm:text-lg font-medium">Visit Healing Touch Clinic</span>
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-leaf-500 flex items-center justify-center text-white shrink-0 aspect-square group-hover:translate-x-1 transition-transform">
                                        <ArrowUpRight size={18} className="sm:w-6 sm:h-6" />
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
                                src="/homepage/Dr Khemani Video.mp4"
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
