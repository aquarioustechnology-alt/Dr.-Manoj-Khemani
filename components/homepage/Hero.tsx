'use client'

import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { Phone, Play, Star, X, ArrowRight, Bone, Activity, Cpu } from 'lucide-react'

import { useAppointment } from '@/context/AppointmentContext'

gsap.registerPlugin(ScrollTrigger)

const HERO_IMAGES = [
    "/images/homepage/Dr Image 2-Picsart-AiImageEnhancer.webp",
    "/images/homepage/Dr Image 20-Picsart-AiImageEnhancer.webp",
    "/images/homepage/Dr Image 10-Picsart-AiImageEnhancer.webp",
    "/images/homepage/Dr Image 6-Picsart-AiImageEnhancer.webp"
]

const BADGE_CONTENT = [
    {
        icon: Bone,
        line1: "Best Orthopaedic",
        line2: "Surgeon in Kolkata"
    },
    {
        icon: Activity,
        line1: "The Future of",
        line2: "Complete Orthopaedic Care"
    },
    {
        icon: Cpu,
        line1: "Advanced Robotic",
        line2: "Joint Replacement"
    }
]

export default function Hero() {
    const { openModal } = useAppointment()
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [currentBadgeIndex, setCurrentBadgeIndex] = useState(0)
    const [isVideoOpen, setIsVideoOpen] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)

    // Image Slider Effect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBadgeIndex((prev) => (prev + 1) % BADGE_CONTENT.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    // Animations
    useEffect(() => {
        if (!contentRef.current) return

        const ctx = gsap.context(() => {
            gsap.fromTo('.hero-content-item',
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out', delay: 0.5 }
            )
            gsap.fromTo('.hero-image-shape',
                { x: 80, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
            )
        }, contentRef)

        return () => ctx.revert()
    }, [])

    return (
        <section className={`relative lg:sticky top-0 z-0 w-full bg-[#f8faf5] transition-all duration-300 lg:overflow-visible 2xl:overflow-hidden ${isVideoOpen ? 'z-[60]' : 'z-0'}`}>
            <div ref={contentRef} className="relative min-h-[600px] md:min-h-[650px] lg:min-h-[600px] xl:min-h-[650px] 2xl:min-h-[850px] flex flex-col lg:block">

                {/* Right Side - Doctor Image (absolute, flush top-right, 200px bottom-left curve) */}
                <div
                    className="hero-image-shape hidden lg:block absolute top-0 right-0 w-[42%] xl:w-[40%] 2xl:w-[38%] h-[85%] overflow-hidden z-0 img-glass"
                    style={{ borderRadius: '0 0 0 200px' }}
                >
                    {HERO_IMAGES.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        >
                            <img
                                src={img}
                                alt="Dr. Manoj Khemani Orthopedic Care"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    ))}
                    <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-black/15 to-transparent z-20" />

                    {/* Slide indicators */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                        {HERO_IMAGES.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`rounded-full transition-all duration-300 ${index === currentImageIndex
                                    ? 'w-8 h-2.5 bg-leaf-500'
                                    : 'w-2.5 h-2.5 bg-white/70 hover:bg-white'
                                    }`}
                            />
                        ))}
                    </div>

                </div>

                {/* Mobile / Tablet Image */}
                <div className="lg:hidden relative w-[92%] mx-auto h-[300px] sm:h-[400px] md:h-[450px] rounded-[30px] overflow-hidden order-2 lg:order-none mb-8 lg:mb-0 img-glass">
                    {HERO_IMAGES.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        >
                            <img
                                src={img}
                                alt="Dr. Manoj Khemani Orthopedic Care"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    ))}
                    <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-black/15 to-transparent z-20" />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                        {HERO_IMAGES.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`rounded-full transition-all duration-300 ${index === currentImageIndex
                                    ? 'w-8 h-2.5 bg-leaf-500'
                                    : 'w-2.5 h-2.5 bg-white/70 hover:bg-white'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Mobile Reviews Overlay - Scaled up for Tablets */}
                    <div className="absolute bottom-4 left-4 z-40 max-w-[85%] sm:max-w-md">
                        <div className="flex flex-col bg-white/95 backdrop-blur-sm border border-white/20 rounded-[16px] overflow-hidden shadow-lg transition-all w-fit scale-125 origin-bottom-left sm:scale-125 md:scale-135">
                            <a
                                href="https://www.google.com/search?q=Dr.+Manoj+Khemani"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col gap-2 px-3 py-2.5 border-b border-gray-100/50 hover:bg-white/50 transition-all group/review"
                            >
                                <div className="flex -space-x-2">
                                    {[
                                        "/images/homepage/img 1.webp",
                                        "/images/homepage/img 2.webp",
                                        "/images/homepage/img 3.webp",
                                        "/images/homepage/img 4.webp"
                                    ].map((url, i) => (
                                        <div key={i} className="w-7 h-7 rounded-full border-[1.5px] border-white overflow-hidden relative shrink-0 aspect-square" style={{ zIndex: 10 - i }}>
                                            <img src={url} alt="Patient" className="object-cover w-full h-full" />
                                        </div>
                                    ))}
                                    <div className="w-7 h-7 rounded-full border-[1.5px] border-white bg-[#95BF1B] flex items-center justify-center relative shrink-0 z-0">
                                        <span className="text-white text-[8px] font-bold leading-none">2k+</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start gap-0.5">
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map((_, i) => (
                                            <Star key={i} size={12} className="fill-[#F59E0B] text-[#F59E0B]" />
                                        ))}
                                    </div>
                                    <span className="text-text-primary font-bold text-[10px] tracking-wide leading-tight">Trusted by 20k+ Patients</span>
                                </div>
                            </a>
                            <Link
                                href="#pain-free-path"
                                className="hidden sm:flex items-center justify-between gap-3 px-3 py-2.5 sm:px-4 hover:bg-leaf-50/50 transition-all group/cta border-t border-gray-100/50"
                            >
                                <span className="text-text-primary text-[10px] sm:text-xs font-medium">Visit Healing Touch Clinic</span>
                                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-leaf-500 flex items-center justify-center text-white shrink-0 aspect-square group-hover:rotate-90 transition-transform duration-300">
                                    <ArrowRight size={13} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 max-w-7.5xl mx-auto px-3 lg:px-5 pt-44 lg:pt-[105px] xl:pt-[115px] 2xl:pt-[180px] pb-8 lg:pb-[30px] xl:pb-[40px] 2xl:pb-[90px] order-1 lg:order-none flex flex-col items-center lg:block lg:text-left text-center">
                    <div className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-[55%] xl:max-w-[58%] 2xl:max-w-[58%] w-full">
                        {/* Badge */}
                        <div className="hero-content-item mb-4 sm:mb-5">
                            <span className="inline-block py-1.5 px-4 border border-leaf-200 rounded-full bg-leaf-50 text-leaf-700 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                                Kolkata's Leading Robotic Orthopaedic Care
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="hero-content-item text-[32px] sm:text-[42px] md:text-[50px] lg:text-[32px] xl:text-[38px] 2xl:text-[80px] font-bold text-text-primary mb-2 sm:mb-6 leading-[1.05] mx-auto lg:mx-0">
                            Kolkata’s Leading Robotic Joint Replacement Expert, <span className="text-leaf-500 2xl:whitespace-nowrap">Dr. Manoj Khemani</span>
                        </h1>

                        <p className="hero-content-item text-[15px] sm:text-base lg:text-lg text-black mb-8 sm:mb-10 max-w-md lg:max-w-xl leading-relaxed mx-auto lg:mx-0">
                            Delivering precision-driven robotic joint replacement, trauma surgery, and arthroscopic care with a focus on long-term mobility and safe recovery.
                        </p>

                        <div className="hero-content-item flex flex-nowrap gap-2 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto">
                            <Button
                                onClick={openModal}
                                className="flex-1 sm:flex-none w-0 sm:w-auto !h-[56px] !bg-[#95BF1B] !text-white !font-medium hover:!bg-[#85AF0B] !pl-1 !pr-2 sm:!pr-6 whitespace-nowrap"
                                iconClassName="!text-[#95BF1B] group-hover:!text-white"
                            >
                                <span className="text-[11px] sm:text-base">Schedule Appointment</span>
                            </Button>

                            <button
                                onClick={() => setIsVideoOpen(true)}
                                className="flex-1 sm:flex-none w-0 sm:w-auto group inline-flex items-center justify-start gap-2 sm:gap-3 pl-1 pr-2 sm:pr-6 py-1.5 bg-white text-text-primary rounded-full font-medium transition-all hover:bg-leaf-50 h-[56px]"
                                style={{ border: '1px solid #95BF1B' }}
                            >
                                <div className="w-11 h-11 sm:w-11 sm:h-11 rounded-full bg-leaf-100 flex items-center justify-center group-hover:bg-leaf-500 group-hover:text-white transition-colors text-leaf-600 shrink-0">
                                    <Play size={20} className="fill-current" />
                                </div>
                                <span className="whitespace-nowrap overflow-hidden text-ellipsis text-[11px] sm:text-sm">Watch Video</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Orthopaedic Badge - Floating above reviews */}
                <div className="hero-content-item hidden lg:flex absolute bottom-[48%] lg:bottom-[54%] xl:bottom-[50%] 2xl:bottom-[38%] left-[60%] xl:left-[63%] 2xl:left-[60%] z-20 items-center gap-4 bg-white/95 backdrop-blur-sm rounded-[20px] pl-2 pr-8 py-2 shadow-xl ring-1 ring-leaf-200/50 transition-all duration-500">
                    <div className="w-14 h-14 rounded-[10px] bg-leaf-500 flex items-center justify-center shrink-0 transition-transform duration-500">
                        {(() => {
                            const Icon = BADGE_CONTENT[currentBadgeIndex].icon
                            return <Icon size={28} className="text-white" />
                        })()}
                    </div>
                    <div className="flex flex-col transition-opacity duration-500">
                        <span className="text-text-primary text-sm font-bold leading-tight whitespace-nowrap">{BADGE_CONTENT[currentBadgeIndex].line1}</span>
                        <span className="text-text-primary text-sm font-semibold leading-tight whitespace-nowrap">{BADGE_CONTENT[currentBadgeIndex].line2}</span>
                    </div>
                </div>

                {/* Google Reviews - Desktop: positioned at bottom-right area near image curve */}
                <div className="hero-content-item hidden lg:block absolute bottom-[18%] lg:bottom-[22%] xl:bottom-[20%] 2xl:bottom-[10%] left-[60%] xl:left-[63%] 2xl:left-[60%] z-20">
                    <div className="flex flex-col bg-white rounded-[20px] overflow-hidden shadow-2xl transition-all w-fit max-w-[330px] ring-1 ring-leaf-200/60" style={{ boxShadow: '0 8px 40px rgba(149, 191, 27, 0.15), 0 4px 20px rgba(0,0,0,0.08)' }}>
                        {/* Green accent bar */}
                        <div className="h-1 w-full bg-gradient-to-r from-leaf-400 via-leaf-500 to-leaf-400" />
                        <a
                            href="https://www.google.com/search?q=Dr.+Manoj+Khemani"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col gap-3 px-5 py-4 border-b border-gray-100 hover:bg-leaf-50/50 transition-all group/review"
                        >
                            <div className="flex -space-x-2.5">
                                {[
                                    "/images/homepage/img 1.webp",
                                    "/images/homepage/img 2.webp",
                                    "/images/homepage/img 3.webp",
                                    "/images/homepage/img 4.webp"
                                ].map((url, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-[1.5px] border-white overflow-hidden relative shrink-0 aspect-square" style={{ zIndex: 10 - i }}>
                                        <img src={url} alt="Patient" className="object-cover w-full h-full" />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-[1.5px] border-white bg-[#95BF1B] flex items-center justify-center relative shrink-0 z-0">
                                    <span className="text-white text-[10px] font-bold leading-none">2k+</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 shrink-0 bg-white rounded-full p-1 border border-gray-100 shadow-sm flex items-center justify-center">
                                    <img src="/images/homepage/Google icon.png" alt="Google" className="w-full h-full object-contain" />
                                </div>
                                <div className="flex flex-col items-start gap-0.5">
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map((_, i) => (
                                            <Star key={i} size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
                                        ))}
                                    </div>
                                    <span className="text-text-primary font-medium text-sm tracking-wide">Trusted by 20,000+ Patients</span>
                                </div>
                            </div>
                        </a>
                        <Link
                            href="#pain-free-path"
                            className="flex items-center justify-between gap-3 px-5 py-2.5 hover:bg-leaf-50/50 transition-all group/cta"
                        >
                            <span className="text-text-primary text-sm font-medium">Visit Healing Touch Clinic</span>
                            <div className="w-7 h-7 rounded-full bg-leaf-500 flex items-center justify-center text-white shrink-0 aspect-square group-hover:rotate-90 transition-transform duration-300">
                                <ArrowRight size={14} />
                            </div>
                        </Link>
                    </div>
                </div>


            </div>

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
