'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { CheckCircle2, Clock, ArrowRight } from 'lucide-react'
import { useAppointment } from '@/context/AppointmentContext'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AnimatedCounter = ({ end, suffix = '', duration = 2 }: { end: number, suffix?: string, duration?: number }) => {
    const [count, setCount] = useState(0)
    const countRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const proxy = { value: 0 }
            gsap.to(proxy, {
                value: end,
                duration: duration,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: countRef.current,
                    start: 'top bottom',
                    once: true,
                },
                onUpdate: () => {
                    setCount(Math.ceil(proxy.value))
                }
            })
        })
        return () => ctx.revert()
    }, [end, duration])

    return (
        <span ref={countRef}>
            {count}{suffix}
        </span>
    )
}

export default function AboutHero() {
    const heroRef = useRef(null)
    const { openModal } = useAppointment()

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-badge', { y: 20, opacity: 0, duration: 0.6, delay: 0.2 })
            gsap.from('.hero-title', { y: 30, opacity: 0, duration: 0.8, delay: 0.3 })
            gsap.from('.hero-credentials', { y: 20, opacity: 0, duration: 0.6, delay: 0.5 })
            gsap.from('.hero-features', { y: 20, opacity: 0, duration: 0.6, delay: 0.6 })
            gsap.from('.hero-actions', { y: 20, opacity: 0, duration: 0.6, delay: 0.7 })
            gsap.from('.hero-image', { x: 40, opacity: 0, duration: 1, delay: 0.4 })
            gsap.from('.stat-card', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1, delay: 0.8 })
        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={heroRef} className="relative lg:sticky top-0 z-0 pt-[160px] pb-24 lg:pt-[100px] lg:pb-10 xl:pt-[110px] xl:pb-16 2xl:pt-[140px] 2xl:pb-24 bg-gradient-to-b from-[#f8faf5] to-white lg:overflow-visible 2xl:overflow-hidden">
            <div className="max-w-7.5xl mx-auto px-4 lg:px-5">
                <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-16 lg:gap-16 items-start lg:items-center">

                    {/* Left Content */}
                    <div className="relative z-10 pt-4 flex flex-col items-center text-center lg:items-start lg:text-left order-1 lg:order-1">
                        {/* Badge */}
                        <div className="hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-leaf-50 border border-leaf-200 text-leaf-700 text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-leaf-500 animate-pulse"></span>
                            Kolkata’s Leading Orthopaedic Expert
                        </div>

                        {/* Heading */}
                        <h1 className="hero-title text-[38px] sm:text-[48px] md:text-[54px] lg:text-[48px] xl:text-[60px] 2xl:text-[60px] font-bold leading-[1.1] mb-3 sm:mb-6">
                            <span className="text-leaf-500">Meet Dr. Manoj Khemani,</span> <br className="hidden lg:block text-gray-900" />
                            <span className="text-gray-900">Leading Orthopaedic Surgeons in Kolkata</span>
                        </h1>

                        {/* Credentials List */}
                        <div className="hero-credentials flex flex-col gap-1 mb-2.5 lg:mb-3 xl:mb-6 border-l-0 lg:border-l-4 lg:border-red-500 lg:pl-6 py-0.5 pl-0">
                            <h3 className="text-xl lg:text-[13px] xl:text-lg 2xl:text-2xl font-bold text-gray-800 mb-0">Robotic Joint Replacement & Orthopaedic Surgeon</h3>
                            <p className="text-gray-600 font-medium text-[13px] xl:text-base">MS in Orthopedics, Texila American University</p>
                            <p className="text-gray-600 font-medium text-[13px] xl:text-base">Mch. Ortho degree, University of Seychelles</p>
                        </div>

                        {/* Feature Pills */}
                        <div className="hero-features flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 mb-3 xl:mb-8">
                            {[
                                "High success rates",
                                "Expert specialists",
                                "Experienced Surgeon"
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 whitespace-nowrap">
                                    <div className="w-5 h-5 xl:w-6 xl:h-6 rounded-full bg-leaf-500 flex items-center justify-center shadow-sm shrink-0">
                                        <CheckCircle2 size={10} className="text-white xl:hidden stroke-[3]" />
                                        <CheckCircle2 size={12} className="text-white hidden xl:block stroke-[3]" />
                                    </div>
                                    <span className="font-medium text-gray-700 text-[13px] xl:text-[15px] tracking-wide">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="hero-actions flex flex-wrap justify-center lg:justify-start gap-3 xl:gap-4 items-center w-full lg:w-auto">
                            <button
                                className="group inline-flex items-center justify-start gap-3 xl:gap-4 pl-1 pr-5 xl:pr-7 py-1.5 bg-[#95BF1B] text-white rounded-full font-medium transition-all hover:bg-[#85AF0B] h-[46px] xl:h-[54px] shadow-lg shadow-leaf-500/30"
                                onClick={openModal}
                            >
                                <div className="w-8 h-8 xl:w-11 xl:h-11 rounded-full bg-white flex items-center justify-center group-hover:bg-leaf-50 transition-colors text-leaf-600 shrink-0">
                                    <ArrowRight size={16} className="xl:hidden stroke-[1.5]" />
                                    <ArrowRight size={20} className="hidden xl:block stroke-[1.5]" />
                                </div>
                                <span className="whitespace-nowrap text-sm">Book a Consultation</span>
                            </button>

                            <button
                                className="group inline-flex items-center justify-start gap-3 xl:gap-4 pl-1 pr-5 xl:pr-7 py-1.5 bg-white text-gray-900 rounded-full font-medium transition-all hover:bg-leaf-50 h-[46px] xl:h-[54px]"
                                style={{ border: '1.5px solid #95BF1B' }}
                            >
                                <div className="w-8 h-8 xl:w-11 xl:h-11 rounded-full bg-leaf-100 flex items-center justify-center group-hover:bg-leaf-500 group-hover:text-white transition-colors text-leaf-600 shrink-0">
                                    <Clock size={16} className="xl:hidden stroke-[2.5]" />
                                    <Clock size={20} className="hidden xl:block stroke-[2.5]" />
                                </div>
                                <span className="whitespace-nowrap text-sm">Clinic Timings</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="hero-image relative flex items-center justify-center mt-12 lg:mt-0 order-2 lg:order-2 w-full">
                        <div className="relative w-full max-w-[420px] lg:max-w-[260px] xl:max-w-[320px] 2xl:max-w-[460px] aspect-[1/1] lg:aspect-[0.9/1] rounded-[2rem] lg:rounded-3xl overflow-hidden border-[6px] border-white bg-white shadow-2xl img-glass">
                            <img
                                src="/images/homepage/Doctor Headshot 2.png"
                                alt="Dr. Manoj Khemani - Leading Orthopedic Surgeon"
                                className="w-full h-full object-cover object-top"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>

                            {/* Floating Stats Cards */}
                            <div className="absolute bottom-4 lg:bottom-10 xl:bottom-8 2xl:bottom-10 left-3 right-3 grid grid-cols-3 gap-2 xl:gap-3">
                                <div className="stat-card bg-white p-2 xl:p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-center border border-gray-50 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="text-leaf-500 font-bold text-lg lg:text-xl xl:text-3xl mb-0.5 xl:mb-1 flex justify-center">
                                        <AnimatedCounter end={24} suffix="+" />
                                    </div>
                                    <div className="text-[9px] xl:text-[11px] font-bold text-gray-900 uppercase tracking-tight xl:tracking-wider leading-tight">Years<br />Exp.</div>
                                </div>
                                <div className="stat-card bg-white p-2 xl:p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-center border border-gray-50 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="text-leaf-500 font-bold text-lg lg:text-xl xl:text-3xl mb-0.5 xl:mb-1 flex justify-center">
                                        <AnimatedCounter end={25} suffix="K+" />
                                    </div>
                                    <div className="text-[9px] xl:text-[11px] font-bold text-gray-900 uppercase tracking-tight xl:tracking-wider leading-tight">Happy<br />Patients</div>
                                </div>
                                <div className="stat-card bg-white p-2 xl:p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-center border border-gray-50 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="text-leaf-500 font-bold text-lg lg:text-xl xl:text-3xl mb-0.5 xl:mb-1 flex justify-center">
                                        <AnimatedCounter end={5} suffix="K+" />
                                    </div>
                                    <div className="text-[9px] xl:text-[11px] font-bold text-gray-900 uppercase tracking-tight xl:tracking-wider leading-tight">Success<br />Surg.</div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative background element */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] bg-leaf-100/40 rounded-full blur-3xl opacity-60"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
