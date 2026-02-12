'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Milestone, Zap } from 'lucide-react'
import Button from '@/components/ui/Button'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function ARVRSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const [activeCard, setActiveCard] = useState(0)

    useEffect(() => {
        if (!sectionRef.current) return

        const ctx = gsap.context(() => {
            // Image: scale up + clip-path reveal
            gsap.from('.arv-image-reveal', {
                scrollTrigger: {
                    trigger: '.arv-image-reveal',
                    start: 'top 85%',
                },
                scale: 0.85,
                opacity: 0,
                duration: 1.4,
                ease: 'power4.out',
                clearProps: 'all',
            })

            // Badge pill
            gsap.from('.arv-badge', {
                scrollTrigger: {
                    trigger: '.arv-badge',
                    start: 'top 92%',
                },
                x: -30,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                clearProps: 'all',
            })

            // Heading
            gsap.from('.arv-heading', {
                scrollTrigger: {
                    trigger: '.arv-heading',
                    start: 'top 90%',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                clearProps: 'all',
            })

            // Paragraph
            gsap.from('.arv-paragraph', {
                scrollTrigger: {
                    trigger: '.arv-paragraph',
                    start: 'top 92%',
                },
                y: 30,
                opacity: 0,
                duration: 0.9,
                delay: 0.15,
                ease: 'power3.out',
                clearProps: 'all',
            })

            // Cards stagger in from the right
            const cards = gsap.utils.toArray('.arv-card')
            cards.forEach((card: any, i: number) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 93%',
                    },
                    x: 60,
                    opacity: 0,
                    duration: 0.9,
                    delay: i * 0.15,
                    ease: 'back.out(1.4)',
                    clearProps: 'all',
                })
            })

            // Button on the image
            gsap.from('.arv-btn', {
                scrollTrigger: {
                    trigger: '.arv-btn',
                    start: 'top 95%',
                },
                y: 20,
                opacity: 0,
                scale: 0.9,
                duration: 0.8,
                delay: 0.3,
                ease: 'back.out(1.7)',
                clearProps: 'all',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="py-20 lg:py-32 bg-white overflow-hidden relative z-10">
            <div className="max-w-7.5xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">

                    {/* Left Column: Image — covers the entire div */}
                    <div className="arv-image-reveal relative h-full">
                        <div className="relative rounded-[2rem] overflow-hidden h-full">
                            <img
                                src="/homepage/AR VR image.png"
                                alt="AR-Guided Knee Replacement Surgery by Dr. Manoj Khemani"
                                className="w-full h-full object-cover"
                            />
                            {/* Button at bottom-left of image */}
                            <div className="arv-btn absolute bottom-6 left-6 z-20">
                                <Button href="/treatments/ar-knee-replacement">
                                    Know About AR Technology
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content Section */}
                    <div className="flex flex-col gap-6">
                        {/* Heading & Paragraph */}
                        <div className="flex flex-col arv-anim-item">
                            <div className="arv-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-100 bg-gray-50 text-gray-600 text-[11px] font-bold tracking-[0.2em] uppercase mb-8 w-fit shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-leaf-500 animate-pulse"></span>
                                Next-Gen Surgical Precision
                            </div>
                            <h2 className="arv-heading text-4xl sm:text-[2.75rem] lg:text-[3.25rem] leading-[1.05] font-bold text-[#1A1A1A] tracking-tight mb-8">
                                Kolkata's First <span className="text-leaf-500">AR VR Guided</span> Knee Replacement Surgery
                            </h2>
                            <p className="arv-paragraph text-[15px] text-gray-600 leading-relaxed font-medium">
                                Dr. Manoj Khemani has redefined orthopedic excellence by performing Kolkata's First AR & VR Guided Knee Replacement, marking a historic milestone in the city's medical landscape. By pioneering this futuristic technology, he offers patients unprecedented precision—utilizing real-time 3D visualization for exact implant placement. This is not just surgery; it's a revolutionary leap forward, ensuring faster recovery, superior joint alignment, and success rates previously unimagined in the region.
                            </p>
                        </div>

                        {/* Cards — Side by Side */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {/* Card 1 */}
                            <div
                                onMouseEnter={() => setActiveCard(0)}
                                className={`arv-card flex flex-col items-start gap-4 p-6 rounded-[20px] border transition-all duration-300 cursor-pointer ${activeCard === 0
                                    ? 'bg-leaf-500 border-transparent'
                                    : 'bg-white border-gray-200'
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all ${activeCard === 0 ? 'bg-white/20 text-white' : 'bg-leaf-50 text-leaf-600'
                                    }`}>
                                    <Milestone size={24} />
                                </div>
                                <h4 className={`text-lg font-bold transition-colors ${activeCard === 0 ? 'text-white' : 'text-gray-900'}`}>High-Precision Execution</h4>
                                <p className={`text-[14px] leading-relaxed font-medium transition-colors ${activeCard === 0 ? 'text-white/90' : 'text-gray-600'}`}>
                                    AR-assisted guidance enables real-time 3D mapping of your anatomy, ensuring implants are placed with sub-millimeter precision.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div
                                onMouseEnter={() => setActiveCard(1)}
                                className={`arv-card flex flex-col items-start gap-4 p-6 rounded-[20px] border transition-all duration-300 cursor-pointer ${activeCard === 1
                                    ? 'bg-leaf-500 border-transparent'
                                    : 'bg-white border-gray-200'
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all ${activeCard === 1 ? 'bg-white/20 text-white' : 'bg-leaf-50 text-leaf-600'
                                    }`}>
                                    <Zap size={24} />
                                </div>
                                <h4 className={`text-lg font-bold transition-colors ${activeCard === 1 ? 'text-white' : 'text-gray-900'}`}>Intelligence-Backed Care</h4>
                                <p className={`text-[14px] leading-relaxed font-medium transition-colors ${activeCard === 1 ? 'text-white/90' : 'text-gray-600'}`}>
                                    The system provides real-time intraoperative visualization, helping Dr. Khemani make data-driven decisions for superior joint stability.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
