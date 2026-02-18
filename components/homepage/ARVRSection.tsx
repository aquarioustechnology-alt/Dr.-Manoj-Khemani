'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Crosshair, ScanLine, HeartPulse, ShieldCheck } from 'lucide-react'
import Button from '@/components/ui/Button'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function ARVRSection() {
    const sectionRef = useRef<HTMLElement>(null)

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

            // Mobile Image Animation
            gsap.from('.arv-image-reveal-mobile', {
                scrollTrigger: {
                    trigger: '.arv-image-reveal-mobile',
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
        <section ref={sectionRef} className="py-20 lg:py-32 bg-white overflow-hidden relative z-20">
            <div className="max-w-7.5xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">

                    {/* Left Column: Image — covers the entire div (Hidden on Mobile/Tablet) */}
                    <div className="arv-image-reveal relative h-full hidden lg:block">
                        <div className="relative rounded-[2rem] overflow-hidden h-full img-glass">
                            <img
                                src="/images/homepage/Dr Image 12-Picsart-AiImageEnhancer.webp"
                                alt="AR-Guided Knee Replacement Surgery by Dr. Manoj Khemani"
                                className="w-full h-full object-cover"
                            />
                            {/* Button at bottom-left of image */}
                            <div className="arv-btn absolute bottom-6 left-6 z-20">
                                <Button href="/treatments/ar-knee-replacement">
                                    Know More
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
                                Dr. Khemani is a Pioneer and one of the Early Adopters of <span className="text-leaf-500">Robotic Joint Replacement</span>
                            </h2>
                            <p className="arv-paragraph text-[15px] text-gray-600 leading-relaxed font-medium">
                                Dr. Manoj Khemani introduced robotic joint replacement technology in Kolkata, setting a new benchmark in orthopaedic surgery. With this advanced system, he delivers greater surgical precision, better joint alignment, and faster recovery outcomes — giving patients access to next-generation joint care right here in the city.
                            </p>
                        </div>

                        {/* Mobile Image (Visible only on Mobile/Tablet) */}
                        <div className="arv-image-reveal-mobile relative w-full h-[400px] rounded-[2rem] overflow-hidden mb-2 block lg:hidden img-glass">
                            <img
                                src="/images/homepage/Dr Image 12-Picsart-AiImageEnhancer.webp"
                                alt="AR-Guided Knee Replacement Surgery by Dr. Manoj Khemani"
                                className="w-full h-full object-cover"
                            />
                            {/* Button at bottom-left of image */}
                            <div className="absolute bottom-6 left-6 z-20">
                                <Button href="/treatments/ar-knee-replacement">
                                    Know More
                                </Button>
                            </div>
                        </div>

                        {/* Cards — Side by Side */}
                        {/* Features Heading */}
                        <h3 className="arv-anim-item text-2xl font-bold text-gray-900 mt-1 mb-2">
                            Why Robotic Joint Replacement Is Better
                        </h3>

                        {/* Features Grid - 2x2 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                            {[
                                {
                                    icon: <Crosshair size={20} />,
                                    title: "Precise Implant Alignment",
                                    desc: "Robotic guidance ensures precise implant positioning for optimal joint balance."
                                },
                                {
                                    icon: <ScanLine size={20} />,
                                    title: "Sub-Millimetre Accuracy",
                                    desc: "Advanced tech enables precise, anatomy-tailored implant fitting."
                                },
                                {
                                    icon: <HeartPulse size={20} />,
                                    title: "Less Tissue Damage, Less Pain",
                                    desc: "Minimal tissue disturbance ensures less pain and faster recovery."
                                },
                                {
                                    icon: <ShieldCheck size={20} />,
                                    title: "Longer Implant Life",
                                    desc: "Superior alignment boosts implant performance and durability."
                                }
                            ].map((item, index) => (
                                <div key={index} className="arv-card flex flex-col items-start bg-white group">
                                    <div className="flex items-center gap-3 mb-1">
                                        <div className="w-10 h-10 rounded-[9px] bg-leaf-50 border border-leaf-100 flex items-center justify-center text-leaf-600 shrink-0 group-hover:bg-leaf-500 group-hover:text-white transition-colors duration-300">
                                            {item.icon}
                                        </div>
                                        <h4 className="text-[17px] font-bold text-gray-900 leading-tight">
                                            {item.title}
                                        </h4>
                                    </div>
                                    <p className="text-[13px] text-black font-normal leading-relaxed pl-[calc(2.5rem+0.75rem)]">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
