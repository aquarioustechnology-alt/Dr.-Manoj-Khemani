'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const AFFILIATIONS = [
    {
        name: "East Zone Orthopaedic Association",
        logo: "/images/about us/East Zone Orthopaedic association.webp"
    },
    {
        name: "Indian Arthroplasty Association",
        logo: "/images/about us/Indian Arthroplasty Association.png"
    },
    {
        name: "Indian Arthroscopy Society",
        logo: "/images/about us/Indian Arthroscopy Society.png"
    },
    {
        name: "Indian Orthopedic Association",
        logo: "/images/about us/Indian Orthopedic Association.png"
    },
    {
        name: "Indian Society of Hip & Knee Surgeons",
        logo: "/images/about us/Indian Society of Hip & Knee Surgeons.jpg"
    },
    {
        name: "Kolkata Arthroscopy & Sports Surgery Society",
        logo: "/images/about us/Kolkata Arthroscopy & Sports Surgery Society.webp"
    },
    {
        name: "Indian Medical Association",
        logo: "/images/about us/Life Member of Indian Medical Association.jpg"
    },
    {
        name: "Trauma Society of India",
        logo: "/images/about us/Trauma Society of India.webp"
    },
    {
        name: "West Bengal Arthroplasty Society",
        logo: "/images/about us/West Bengal Arthroplasty Society.png"
    },
    {
        name: "West Bengal Orthopaedic Association",
        logo: "/images/about us/West Bengal Orthopaedic Association.webp"
    }
]

export default function Affiliations() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.affiliation-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out'
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="py-20 lg:py-24 bg-leaf-900 relative z-20">
            <div className="max-w-7.5xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-bold tracking-[0.2em] uppercase mb-6">
                        Professional Affiliations
                    </div>
                    <h2 className="text-3xl lg:text-[34px] xl:text-[46px] font-bold text-white leading-tight">
                        Dr. Khemani's Professional Affiliations
                    </h2>
                </div>

                {/* First Row: 6 items */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 justify-items-center mb-10 lg:mb-12">
                    {AFFILIATIONS.slice(0, 6).map((item, index) => (
                        <div key={index} className="affiliation-card flex flex-col items-center text-center group w-full max-w-[160px]">
                            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-white flex items-center justify-center p-4 shadow-lg mb-4 transition-transform duration-300 group-hover:scale-105">
                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <p className="text-white font-medium text-[11px] lg:text-[13px] leading-tight opacity-90 group-hover:opacity-100 transition-opacity">
                                <span className="block opacity-75 mb-1 text-[10px] uppercase tracking-wide">Life Member of</span>
                                <span className="font-semibold block min-h-[2.5em] flex items-center justify-center">{item.name}</span>
                            </p>
                        </div>
                    ))}
                </div>

                {/* Second Row: 4 items */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center max-w-5xl mx-auto">
                    {AFFILIATIONS.slice(6, 10).map((item, index) => (
                        <div key={index + 6} className="affiliation-card flex flex-col items-center text-center group w-full max-w-[160px]">
                            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-white flex items-center justify-center p-4 shadow-lg mb-4 transition-transform duration-300 group-hover:scale-105">
                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <p className="text-white font-medium text-[11px] lg:text-[13px] leading-tight opacity-90 group-hover:opacity-100 transition-opacity">
                                <span className="block opacity-75 mb-1 text-[10px] uppercase tracking-wide">Life Member of</span>
                                <span className="font-semibold block min-h-[2.5em] flex items-center justify-center">{item.name}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
