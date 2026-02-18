'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Award, UserCheck, Activity, PlusSquare, Dumbbell, Move, CheckCircle2, Cpu } from 'lucide-react'
import Button from '@/components/ui/Button'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function AboutPreview() {
    const sectionRef = useRef<HTMLElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        if (!sectionRef.current) return

        const ctx = gsap.context(() => {
            // Animate content
            gsap.from('.about-top-content', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
            })

            gsap.from('.about-bottom-col', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
            })

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="pt-20 pb-12 lg:pt-[100px] lg:pb-20 bg-[#F9F9F9] relative z-20 rounded-t-[3rem] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.05)]">
            <div className="w-full max-w-7.5xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* --- LEFT SIDE (7/12 width) --- */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-[1fr_1.8fr] gap-8 items-end">
                        {/* Extreme Left: Services List */}
                        <div className="flex flex-col gap-4 about-bottom-col pb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 w-fit rounded-full bg-leaf-50 text-leaf-700 text-[12px] font-bold tracking-widest uppercase mb-2">
                                # Specialized Treatments
                            </div>
                            {[
                                { icon: <Cpu size={20} />, text: "Robotic Joint Replacement Surgery", link: "/services/robotic-joint-replacement" },
                                { icon: <Activity size={20} />, text: "Knee Replacement", link: "/services/knee-replacement" },
                                { icon: <PlusSquare size={20} />, text: "Arthritis Treatment", link: "/services/arthritis-treatment" },
                                { icon: <Dumbbell size={20} />, text: "Sports Injuries / ACL", link: "/services/sports-injuries" }
                            ].map((item, index) => (
                                <Link key={index} href={item.link} className="group flex items-center gap-4 p-3 -ml-3 rounded-2xl transition-all hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 border border-transparent hover:border-gray-50">
                                    <div className="w-12 h-12 shrink-0 rounded-full bg-leaf-600 text-white flex items-center justify-center transition-transform group-hover:scale-110">
                                        {item.icon}
                                    </div>
                                    <span className="text-base font-bold text-gray-800 group-hover:text-leaf-600 transition-colors leading-tight">{item.text}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Beside: Doctor Image (Reverted height) */}
                        <div className="about-bottom-col relative h-[600px] sm:h-[650px] lg:h-[700px]">
                            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-8 border-white group img-glass">
                                <img
                                    src="/images/homepage/Doctor Headshot 2.png"
                                    alt="Dr. Manoj Khemani Portrait"
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                                {/* Doctor Info Container */}
                                <div className="absolute bottom-6 left-6 right-6 z-20">
                                    <div className="bg-white/95 backdrop-blur-md p-6 rounded-[20px] shadow-2xl border border-white/50 w-fit animate-in fade-in slide-in-from-bottom-4 duration-700 flex flex-col gap-6">
                                        <div className="flex flex-col gap-1.5">
                                            <h4 className="text-gray-900 font-bold text-[22px] leading-tight">Dr. Manoj Kumar Khemani</h4>
                                            <p className="text-leaf-600 font-bold text-[14px] leading-tight mt-0.5">Robotic Joint Replacement & Orthopaedic Surgeon</p>
                                            <p className="text-black font-medium text-[14px] leading-tight mt-1">MS in Orthopedics, Texila American University</p>
                                            <p className="text-black font-medium text-[14px] leading-tight text-opacity-80">Mch. Ortho degree, University of Seychelles</p>
                                        </div>
                                        <Button
                                            href="/about"
                                            className="!h-[48px] w-full sm:w-fit shadow-xl !bg-black hover:!bg-gray-900"
                                            iconClassName="text-black !w-[38px] !h-[38px] sm:!w-[42px] sm:!h-[42px]"
                                        >
                                            Know Dr. Khemani
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT SIDE (5/12 width) --- */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-600 text-xs font-semibold tracking-widest uppercase mb-6 about-top-content">
                                <span className="w-2 h-2 rounded-full bg-leaf-500"></span>
                                ABOUT DR. MANOJ KHEMANI
                            </div>
                            <h2 ref={headingRef} className="text-4xl sm:text-5xl lg:text-[46px] leading-[1.1] font-bold text-[#1A1A1A] tracking-tight about-top-content mb-8">
                                One of Kolkata’s Best <br />
                                <span className="text-leaf-500">Orthopaedic Surgeons</span>
                            </h2>
                            <div className="text-[15px] text-gray-600 leading-relaxed about-top-content mb-10 font-medium">
                                <span className="font-bold text-black border-b-2 border-leaf-200">Dr. Manoj Khemani</span> stands among Kolkata’s leading robotic joint replacement surgeons, bringing AI-assisted precision and advanced surgical technology to knee and hip replacement care. He has <span className="font-bold text-black underline decoration-leaf-300 decoration-2 underline-offset-4">over 20 years of clinical experience</span> in Joint Replacement, Trauma & Fracture Surgery, and Arthroscopy. Dr. Khemani is among the early adopters of <span className="font-bold text-black border-b-2 border-leaf-200">Augmented Reality (AR)–assisted knee replacement technology</span> in India, focusing on precision, alignment, and long-term mobility outcomes.
                            </div>

                            {/* Membership Card */}
                            <div className="about-bottom-col bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-100/50 border border-gray-100">
                                <h4 className="text-[22px] font-bold text-gray-900 mb-6 font-display">
                                    Professional Leadership & Affiliations
                                </h4>
                                <ul className="space-y-2.5">
                                    {[
                                        "Life Member of Kolkata Arthroscopy & Sports Surgery Society",
                                        "Life Member of West Bengal Orthopaedic Association",
                                        "Life Member of Indian Medical Association",
                                        "Life Member of West Bengal Arthroplasty Society",
                                        "Life Member of Indian Society of Hip & Knee Surgeons"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-4 text-gray-800 group">
                                            <div className="mt-1 shrink-0 flex items-center justify-center">
                                                <div className="w-6 h-6 rounded-full bg-leaf-50 flex items-center justify-center border border-leaf-200 group-hover:bg-leaf-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                                    <CheckCircle2 size={14} className="text-leaf-600 group-hover:text-white" />
                                                </div>
                                            </div>
                                            <span className="text-[15px] font-medium leading-relaxed pt-0.5">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
