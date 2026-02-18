'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function MissionVision() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    // First card is active by default if none is hovered
    const activeIndex = hoveredIndex !== null ? hoveredIndex : 0

    useGSAP(() => {
        // Entrance animations
        gsap.fromTo('.mv-header',
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.mv-header',
                    start: 'top 90%',
                }
            }
        )

        gsap.fromTo('.mv-card',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.mv-card',
                    start: 'top 85%',
                }
            }
        )

        gsap.fromTo('.mv-image',
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.mv-image',
                    start: 'top 85%',
                }
            }
        )
    }, { scope: containerRef })

    const cards = [
        {
            title: "Our Mission",
            icon: "/images/about us/Mission icon.png",
            content: "To offer personalized, superior orthopedic treatment with an indomitable track record. We pledge to stay true to our core mission of patient-centric care while achieving new milestones in medical excellence."
        },
        {
            title: "Our Vision",
            icon: "/images/about us/Vision icon.png",
            content: "Visioning a future where high-quality orthopedic healthcare is affordable and accessible to all. We strive to inspire others and ensure health remains a fundamental right for every section of society."
        }
    ]

    return (
        <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
            <div ref={containerRef} className="max-w-7.5xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Side: Image */}
                    <div className="mv-image relative h-[600px] flex items-center justify-center opacity-0 order-2 lg:order-1">
                        <div className="absolute top-10 left-0 w-32 h-32 text-leaf-200">
                            <svg viewBox="0 0 100 100" className="w-full h-full fill-current opacity-60">
                                <path d="M50 0 C20 0 0 20 0 50 C0 80 20 100 50 100 C80 100 100 80 100 50 C100 20 80 0 50 0 Z M50 90 C30 90 10 70 10 50 C10 30 30 10 50 10 C70 10 90 30 90 50 C90 70 70 90 50 90 Z" />
                            </svg>
                        </div>
                        <div className="absolute bottom-10 right-0 w-24 h-24 text-leaf-100 rotate-180">
                            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                                <path d="M50 0 C20 0 0 20 0 50 C0 80 20 100 50 100 C80 100 100 80 100 50 C100 20 80 0 50 0 Z M50 90 C30 90 10 70 10 50 C10 30 30 10 50 10 C70 10 90 30 90 50 C90 70 70 90 50 90 Z" />
                            </svg>
                        </div>

                        <div className="relative w-full h-full rounded-t-[100px] rounded-b-3xl overflow-hidden border-4 border-white bg-leaf-50">
                            <Image
                                src="/images/homepage/Dr image 37.webp"
                                alt="Dr. Manoj Khemani Vision"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-leaf-900/40 to-transparent"></div>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="order-1 lg:order-2">
                        {/* Header */}
                        <div className="mv-header mb-10 opacity-0">
                            <div className="inline-block px-4 py-1.5 rounded-full border border-leaf-200 bg-leaf-50 text-leaf-600 text-xs font-bold tracking-[0.2em] uppercase mb-6">
                                OUR PHILOSOPHY
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                                Committed to Your <br />
                                <span className="text-leaf-600">Mobility & Wellness</span>
                            </h2>
                            <p className="text-lg text-gray-600 font-medium font-manrope">
                                Driving excellence in orthopedic care through compassion, innovation, and accessibility.
                            </p>
                        </div>

                        {/* Cards Container */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className={`mv-card group relative p-7 rounded-2xl border transition-all duration-500 cursor-default opacity-0 overflow-hidden ${activeIndex === index
                                            ? 'border-transparent shadow-xl translate-y-[-4px]'
                                            : 'bg-white border-gray-100 shadow-sm translate-y-0'
                                        }`}
                                >
                                    {/* Bottom-to-Top Fill Animation background */}
                                    <div className={`absolute inset-0 bg-leaf-600 transition-transform duration-500 ease-in-out z-0 ${activeIndex === index ? 'translate-y-0' : 'translate-y-full'
                                        }`}></div>

                                    <div className="relative z-10">
                                        {/* Icon Container */}
                                        <div className="mb-5 relative w-12 h-12">
                                            <Image
                                                src={card.icon}
                                                alt={card.title}
                                                fill
                                                className="object-contain transition-all duration-300"
                                                style={{
                                                    filter: activeIndex === index
                                                        ? 'brightness(0) invert(1)'
                                                        : 'invert(37%) sepia(21%) saturate(1756%) hue-rotate(42deg) brightness(101%) contrast(82%)' // Brand green #86A32E approximation
                                                }}
                                            />
                                        </div>

                                        <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-gray-900'
                                            }`}>
                                            {card.title}
                                        </h3>

                                        <p className={`text-sm leading-relaxed transition-colors duration-300 ${activeIndex === index ? 'text-leaf-50' : 'text-gray-600'
                                            }`}>
                                            {card.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
