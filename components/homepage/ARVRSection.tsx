'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Target, Cpu } from 'lucide-react'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function ARVRSection() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (!sectionRef.current) return

        const ctx = gsap.context(() => {
            gsap.from('.ar-vr-content-fade', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="relative z-20 py-20 lg:py-24 bg-white overflow-hidden w-full border-t border-gray-50">
            {/* The relative z-20 and bg-white ensure this section covers the sticky hero section below/behind it */}
            <div className="max-w-[1600px] mx-auto px-6 lg:px-20 relative z-30">
                <div className="ar-vr-content-fade flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">

                    {/* Left Side: Image Block */}
                    <div className="lg:w-[45%] flex">
                        <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px] rounded-[2.5rem] overflow-hidden bg-gray-50">
                            <img
                                src="/homepage/AR VR machine image.png"
                                alt="Advanced AR Surgical Guidance"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Side: Content Box (Light Peach/Pink Background) */}
                    <div className="lg:w-[55%] bg-[#FFF9F9] rounded-[3rem] p-10 lg:p-16 flex flex-col justify-between shadow-sm">
                        <div>
                            <h2 className="text-4xl lg:text-[4rem] leading-[1.05] font-bold text-[#1A1A1A] tracking-tight mb-8">
                                One of Kolkata’s Most Advanced AR-Guided <span className="text-leaf-500">Knee Replacement</span> Practices
                            </h2>
                            <p className="text-lg text-gray-600 font-medium leading-relaxed max-w-2xl mb-12 opacity-90">
                                By integrating Augmented Reality (AR)–assisted surgical guidance with decades of orthopaedic expertise, Dr. Manoj Kumar Khemani offers high-precision knee replacement care in Kolkata. This advanced approach supports accurate alignment, controlled execution, and a patient-focused recovery pathway—without compromising safety or proven surgical principles.
                            </p>
                        </div>

                        {/* Two Information Cards */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {/* Card 1 */}
                            <div className="bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100/50">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white shrink-0 shadow-lg">
                                        <Target size={24} />
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 leading-tight">
                                        Precision with <br /> AR
                                    </h4>
                                </div>
                                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                    AR-assisted guidance helps achieve accurate alignment and implant positioning during knee replacement surgery.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100/50">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center text-white shrink-0 shadow-lg">
                                        <Cpu size={24} />
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 leading-tight">
                                        Technology-Driven <br /> Orthopaedics
                                    </h4>
                                </div>
                                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                    Modern AR-enabled techniques integrated with proven surgical principles for reliable, patient-centric outcomes.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
