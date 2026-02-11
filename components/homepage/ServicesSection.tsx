'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react'
import Button from '@/components/ui/Button'


if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const services = [
    {
        id: 'knee',
        title: 'Knee Replacement',
        heading: 'Advanced Knee Replacement & Surgical Solutions',
        description: 'Empathy-driven care using advanced surgical techniques for faster recovery and long-term joint health.',
        image: '/homepage/knee-replacement.png',
        link: '/treatments/knee-replacement',
    },
    {
        id: 'arthritis',
        title: 'Arthritis Treatment',
        heading: 'Comprehensive Arthritis Pain Management',
        description: 'Focusing on non-surgical treatments first to restore mobility and reduce persistent joint pain effectively.',
        image: '/homepage/arthritis-treatment.png',
        link: '/treatments/arthritis',
    },
    {
        id: 'sports',
        title: 'Sports Injuries / ACL',
        heading: 'Specialized Sports Injury & ACL Rehabilitation',
        description: 'From ACL reconstruction to rotator cuff repair, getting you back in the game with comprehensive rehabilitation.',
        image: '/homepage/sports-injury.png',
        link: '/treatments/sports-injuries',
    },
    {
        id: 'joint',
        title: 'Joint Pain & Mobility Issues',
        heading: 'Restoring Mobility & Independence For Life',
        description: 'Improving quality of life by restoring lost mobility and independence through personalized treatment plans.',
        image: '/homepage/bone-fracture.jpg',
        link: '/treatments/joint-pain',
    },
]

export default function ServicesSection() {
    const [activeTab, setActiveTab] = useState(services[0])
    const sectionRef = useRef<HTMLElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!sectionRef.current) return

        const ctx = gsap.context(() => {
            gsap.from('.services-header-item', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    // Tab change animation
    useEffect(() => {
        if (!contentRef.current) return

        gsap.fromTo('.tab-content-anim',
            { opacity: 0, x: 20 },
            { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
        )
    }, [activeTab])

    return (
        <section ref={sectionRef} className="pt-20 pb-4 bg-white relative overflow-hidden z-20">
            <div className="max-w-7.5xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center w-full mb-16">
                    <div className="services-header-item inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-600 text-xs font-semibold tracking-widest uppercase mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#EC1D24]"></span>
                        Our Services
                    </div>
                    <h2 className="services-header-item text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] font-bold text-[#1A1A1A] tracking-tight whitespace-nowrap">
                        Orthopedic <span className="text-leaf-500">Care</span>
                    </h2>
                </div>

                {/* Main Interactive Section */}
                <div className="relative w-full aspect-[21/8] min-h-[450px] lg:min-h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 w-full h-full">
                        <img
                            src={activeTab.image}
                            alt={activeTab.title}
                            className="w-full h-full object-cover transition-all duration-1000 ease-in-out scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 z-10" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                    </div>

                    {/* Top Right Arrow Trigger */}
                    <a
                        href={activeTab.link}
                        className="absolute top-6 right-6 lg:top-10 lg:right-10 w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center z-30 shadow-lg hover:scale-110 transition-transform duration-300 group"
                        aria-label={`View details for ${activeTab.title}`}
                    >
                        <ArrowUpRight className="w-6 h-6 lg:w-8 lg:h-8 text-leaf-600 group-hover:rotate-45 transition-transform duration-300" />
                    </a>

                    {/* Content Layer */}
                    <div className="relative z-20 h-full w-full flex flex-col justify-end lg:flex-row">
                        {/* Tab Navigation (Stacked Vertical Pills - Bottom Left) */}
                        <div className="lg:absolute lg:bottom-12 lg:left-12 p-8 lg:p-0 flex flex-col gap-3 items-start">
                            {services.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveTab(service)}
                                    className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 whitespace-nowrap min-w-[200px] text-left border ${activeTab.id === service.id
                                        ? 'bg-white text-leaf-600 border-white shadow-xl scale-105 z-10'
                                        : 'bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20'
                                        }`}
                                >
                                    {service.title}
                                </button>
                            ))}
                        </div>

                        {/* Content Area (Bottom Right Align - Text Left Aligned - Pushed to Extreme Edge) */}
                        <div ref={contentRef} className="lg:absolute lg:bottom-12 lg:right-0 lg:w-[45%] p-8 lg:p-0 lg:pr-0 text-white text-left flex flex-col items-start">
                            <h3 className="tab-content-anim text-3xl lg:text-5xl font-bold mb-4 leading-tight">
                                {activeTab.heading}
                            </h3>
                            <p className="tab-content-anim text-base text-gray-100 max-w-md leading-relaxed font-medium opacity-90">
                                {activeTab.description}
                            </p>

                            {/* CTA Actions */}
                            <div className="tab-content-anim mt-8 flex items-center gap-4">
                                <Button
                                    className="bg-leaf-500 hover:bg-leaf-600 text-white border-none"
                                    href={activeTab.link}
                                >
                                    Know More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Consultation Callout Section */}
                <div className="mt-2 services-header-item">
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 py-10">
                        <div className="text-left w-full lg:w-auto">
                            <h3 className="text-2xl lg:text-[2.5rem] font-bold text-gray-900 mb-4 tracking-tight leading-tight">
                                Not sure which treatment you need?
                            </h3>
                            <p className="text-lg lg:text-xl text-gray-600 font-medium">
                                Schedule a consultation with Dr. Khemani for a personalized assessment.
                            </p>
                        </div>

                        <div className="shrink-0">
                            <Link
                                href="/contact"
                                className="group relative flex items-center gap-3 text-black hover:text-leaf-600 transition-colors duration-300 pb-2"
                            >
                                <span className="text-lg lg:text-xl font-bold">Book Consultation</span>
                                <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-2 transition-transform" />
                                {/* Bottom Bold Line */}
                                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-black group-hover:bg-leaf-600 transition-colors duration-300"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
