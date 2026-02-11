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
            // Main Reveal Animation for the entire content wrapper
            gsap.from('.ar-vr-reveal', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: 'power4.out',
            })

            // Staggered reveal for heading and text
            gsap.from('.ar-vr-text-anim', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
            })

            // Card reveal with a slight scale-up effect
            gsap.from('.ar-vr-card-anim', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                y: 40,
                scale: 0.95,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'back.out(1.7)',
            })

            // Floating micro-animation for the image
            gsap.to('.ar-vr-image-float', {
                y: -15,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="relative z-20 py-12 lg:py-16 bg-white overflow-hidden w-full border-t border-gray-50">
            <div className="max-w-7.5xl mx-auto px-6 lg:px-8 relative z-30">
                <div className="ar-vr-reveal flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">

                    {/* Left Side: Image Block with Floating Animation */}
                    <div className="lg:w-[45%] flex">
                        <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px] rounded-[2.5rem] overflow-hidden bg-white border border-gray-100/50 flex items-center justify-center">
                            <img
                                src="/homepage/AR VR machine image.png"
                                alt="Advanced AR Surgical Guidance"
                                className="ar-vr-image-float w-full h-full object-contain p-4 lg:p-8 drop-shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Right Side: Content Box with Reveal Animations */}
                    <div className="lg:w-[55%] bg-[#FFF9F9] rounded-[3rem] p-10 lg:p-16 flex flex-col justify-between shadow-sm">
                        <div>
                            <h2 className="ar-vr-text-anim text-4xl sm:text-5xl lg:text-5xl leading-[1.1] font-bold text-[#1A1A1A] tracking-tight mb-8">
                                Advanced <span className="text-leaf-500">AR-Guided Knee Replacement</span> in Kolkata
                            </h2>
                            <div className="ar-vr-text-anim text-[15px] text-gray-600 leading-relaxed mb-12 font-medium">
                                By integrating <span className="font-bold text-black">Augmented Reality (AR)–assisted surgical guidance</span> with decades of orthopaedic expertise, <span className="font-bold text-black">Dr. Manoj Kumar Khemani</span> offers <span className="font-bold text-black">high-precision knee replacement care</span> in Kolkata. This advanced approach supports accurate alignment, controlled execution, and a patient-focused recovery pathway—without compromising safety or proven surgical principles.
                            </div>
                        </div>

                        {/* Two Information Cards with Hover and Reveal Effects */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {/* Card 1 */}
                            <div className="ar-vr-card-anim group bg-white rounded-2xl p-6 shadow-sm border border-gray-100/30 transition-all duration-300 hover:border-leaf-500 hover:bg-leaf-50/30 hover:scale-[1.02]">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-[#EC1D24] flex items-center justify-center text-white shrink-0 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                                        <Target size={24} />
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 leading-tight">
                                        Precision with <br /> AR
                                    </h4>
                                </div>
                                <p className="text-sm text-black font-medium leading-relaxed">
                                    AR-assisted guidance helps achieve accurate alignment and implant positioning during knee replacement surgery.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="ar-vr-card-anim group bg-white rounded-2xl p-6 shadow-sm border border-gray-100/30 transition-all duration-300 hover:border-leaf-500 hover:bg-leaf-50/30 hover:scale-[1.02]">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-[#EC1D24] flex items-center justify-center text-white shrink-0 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                                        <Cpu size={24} />
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 leading-tight">
                                        Technology-Driven <br /> Orthopaedics
                                    </h4>
                                </div>
                                <p className="text-sm text-black font-medium leading-relaxed">
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
