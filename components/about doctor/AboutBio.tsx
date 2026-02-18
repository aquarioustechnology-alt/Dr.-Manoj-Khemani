'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Award, CheckCircle2 } from 'lucide-react'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function AboutBio() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Image Column
            gsap.from('.bio-images', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
                x: -50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            })

            // Animate Content Column
            gsap.from('.bio-content', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
                x: 50,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                ease: 'power3.out'
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="pt-20 pb-24 lg:pt-32 lg:pb-32 bg-white relative z-20 rounded-t-[3rem] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="max-w-7.5xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

                    {/* Left Column: Image with Experience Card */}
                    <div className="bio-images relative">
                        {/* Green Experience Card - Floating Top Left */}
                        <div className="absolute top-10 -left-6 z-30 bg-leaf-500 text-white w-[180px] h-[180px] rounded-[15px] shadow-2xl flex flex-col items-start justify-center text-left p-6 animate-float">
                            <div className="mb-2">
                                <Award className="w-8 h-8 text-white" />
                            </div>
                            <span className="text-4xl font-bold leading-none mb-1">24+</span>
                            <span className="text-sm font-medium leading-tight opacity-90">years of<br />experience</span>
                        </div>

                        {/* Main Image */}
                        <div className="relative z-10 w-[85%] overflow-hidden img-shine rounded-3xl">
                            <img
                                src="/images/homepage/About%20us%20section%20image.png"
                                alt="Dr. Manoj Khemani"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Decorative Blur */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-leaf-50/30 rounded-full blur-3xl -z-10"></div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="bio-content lg:pl-6 pt-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-600 text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-leaf-500"></span>
                            ABOUT DR. MANOJ KHEMANI
                        </div>

                        <h2 className="text-4xl lg:text-[46px] font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
                            Top Leading Joint Replacement Surgeon in Kolkata
                        </h2>

                        <div className="text-[15px] text-gray-600 leading-relaxed font-medium mb-8 text-justify">
                            Dr. Manoj Khemani is widely regarded as one of the <span className="font-bold text-black">best orthopaedic surgeons in Kolkata</span>, with extensive expertise in <span className="font-bold text-black">joint replacement</span>, <span className="font-bold text-black">trauma surgery</span>, and <span className="font-bold text-black">arthroscopy</span>. He is recognized as a <span className="font-bold text-black">pioneer</span> and one of the early adopters of <span className="font-bold text-black">robotic and AI-assisted joint replacement surgery</span> in Kolkata. By integrating modern surgical technology with strong clinical expertise, Dr. Khemani delivers precise implant alignment, improved joint balance, and long-term functional outcomes.
                        </div>

                        {/* Specialization Section */}
                        <div className="mt-8">
                            <h4 className="text-[20px] font-bold text-gray-900 mb-6">
                                His specialization includes:
                            </h4>
                            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-4">
                                {[
                                    "Robotic Joint & Hip Replacement",
                                    "Complex Trauma & Fracture Surgery",
                                    "AR-VR Knee Replacement",
                                    "Arthroscopy & Sports Injury",
                                    "Advanced Arthritis Treatment",
                                    "Ligament Repairs & Reconstructions"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-4 text-gray-800 group">
                                        <div className="mt-0.5 shrink-0 flex items-center justify-center">
                                            <div className="w-6 h-6 rounded-full bg-leaf-50 flex items-center justify-center border border-leaf-200 group-hover:bg-leaf-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                                <CheckCircle2 size={14} className="text-leaf-600 group-hover:text-white" />
                                            </div>
                                        </div>
                                        <span className="text-[15px] font-medium leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
