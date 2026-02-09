'use client'

import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '@/components/ui/Button'
import { Phone, Play, Star, X } from 'lucide-react'

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
        <section className={`sticky top-0 w-full h-screen min-h-[750px] p-[15px] bg-white transition-all duration-300 ${isVideoOpen ? 'z-[60]' : 'z-0'}`}>
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
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 via-35% to-transparent to-50% z-20" />
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
                                <Button
                                    href="/contact"
                                    className="!h-[56px] !bg-[#95BF1B] !text-white !font-medium hover:!bg-[#85AF0B]"
                                    iconClassName="!text-[#95BF1B] group-hover:!text-white"
                                >
                                    Schedule Appointment
                                </Button>

                                <button
                                    onClick={() => setIsVideoOpen(true)}
                                    className="group inline-flex items-center gap-3 pl-1 pr-6 py-1.5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-medium text-sm transition-all hover:bg-white hover:text-black hover:border-white"
                                >
                                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-leaf-500 group-hover:text-white transition-colors">
                                        <Play size={20} className="fill-current" />
                                    </div>
                                    Watch Video
                                </button>
                            </div>
                        </div>

                        {/* Google Reviews - Updated Design */}
                        <div className="hero-content-item hidden lg:block pb-1">
                            <a
                                href="https://www.google.com/search?sca_esv=ec04cb20b49346cc&rlz=1C1CHBF_enIN1200IN1200&sxsrf=ANbL-n5rzJ1uMMjHbrUOsXZVPxqBQR2O5g:1770612528391&q=Dr.+Manoj+Khemani&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3jljrY5CkLlk8Dq3IvwBz-SiiHLMuwmCQZ7DqSL8AQqoJuAtjtegtdjEPKu9tUSpBEYyfYP2fz4cnCC1qzcZxqegTjm-9Z7zSARwuWeikrR-6huVZB4afx26jop4w_AoC7H5HW1kakDkl-Kg9CL30eb_soZjsRmQ21-CAgUWIIm_zNyzUmt70bPCaa99gE_vD7oJIEs&sa=X&ved=2ahUKEwibo6jWzcuSAxUdVmwGHVxlEnoQ0pQJegQIDxAB&biw=1536&bih=695&dpr=1.25#lrd=0x3a0275f9be75d203:0x221fc85cb7257132,1,,,,"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-6 px-6 py-5 bg-white/10 backdrop-blur-[30px] border border-white/20 rounded-3xl shadow-2xl hover:bg-white/20 transition-all cursor-pointer group/review"
                                style={{ boxShadow: 'inset 0 6px 0 0 rgba(255, 255, 255, 0.1), 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
                            >
                                {/* Left Side: Avatars + Text */}
                                <div className="flex flex-col gap-3">
                                    <div className="flex -space-x-4">
                                        {[32, 65, 86].map((i) => (
                                            <div key={i} className="w-14 h-14 rounded-full border-2 border-white overflow-hidden relative">
                                                <img
                                                    src={`https://randomuser.me/api/portraits/thumb/men/${i}.jpg`}
                                                    alt="Reviewer"
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-white text-sm font-medium whitespace-nowrap">Happy Patients</span>
                                </div>

                                {/* Divider */}
                                <div className="w-[1px] h-16 bg-white/20"></div>

                                {/* Right Side: Google Logo + Rating */}
                                <div className="flex flex-col items-center gap-2">
                                    <img
                                        src="/homepage/google logo with rating.png"
                                        alt="Google Rating"
                                        className="h-14 object-contain"
                                    />
                                    <span className="text-white font-bold text-xl">4.8</span>
                                </div>
                            </a>
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
