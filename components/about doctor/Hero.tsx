'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { CheckCircle2, Clock } from 'lucide-react'
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
        <section ref={heroRef} className="relative lg:sticky top-0 z-0 pt-[160px] pb-24 lg:pt-[170px] lg:pb-16 xl:pt-[170px] xl:pb-20 2xl:pt-[170px] 2xl:pb-24 bg-gradient-to-b from-[#f8faf5] to-white lg:overflow-visible 2xl:overflow-hidden">
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
                        <h1 className="hero-title text-[38px] sm:text-[48px] md:text-[54px] lg:text-[54px] xl:text-[60px] 2xl:text-[60px] font-bold leading-[1.1] mb-4 sm:mb-6">
                            <span className="text-leaf-500">Meet Dr. Manoj Khemani,</span> <br className="hidden lg:block text-gray-900" />
                            <span className="text-gray-900">Leading Orthopaedic Surgeons in Kolkata</span>
                        </h1>

                        {/* Credentials List */}
                        <div className="hero-credentials flex flex-col gap-1 mb-4 lg:mb-6 xl:mb-8 border-l-0 lg:border-l-4 lg:border-red-500 lg:pl-6 py-1 pl-0">
                            <h3 className="text-xl lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-gray-800 mb-1">Robotic Joint Replacement & Orthopaedic Surgeon</h3>
                            <p className="text-gray-600 font-medium text-sm xl:text-lg">MS in Orthopedics, Texila American University</p>
                            <p className="text-gray-600 font-medium text-sm xl:text-lg">Mch. Ortho degree, University of Seychelles</p>
                        </div>

                        {/* Feature Pills */}
                        <div className="hero-features flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 lg:gap-y-2 mb-8 xl:mb-10">
                            {[
                                "High success rates",
                                "Expert specialists",
                                "Experienced Surgeon"
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2.5 whitespace-nowrap">
                                    <div className="w-5 h-5 xl:w-6 xl:h-6 rounded-full bg-leaf-500 flex items-center justify-center shadow-sm shrink-0">
                                        <CheckCircle2 size={11} className="text-white xl:hidden stroke-[3]" />
                                        <CheckCircle2 size={13} className="text-white hidden xl:block stroke-[3]" />
                                    </div>
                                    <span className="font-medium text-gray-700 text-sm xl:text-[15px] tracking-wide">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="hero-actions flex flex-wrap justify-center lg:justify-start gap-3 xl:gap-4 items-center">
                            <Button
                                onClick={openModal}
                                className="!bg-[#95BF1B] hover:!bg-[#85AF0B] text-white !h-[50px] xl:!h-[58px] px-8 xl:px-10 text-sm xl:text-base font-bold shadow-lg shadow-leaf-500/30"
                            >
                                Book a Consultation
                            </Button>

                            <button
                                className="group inline-flex items-center justify-start gap-3 xl:gap-4 pl-1 pr-5 xl:pr-7 py-1.5 bg-white text-gray-900 rounded-full font-bold transition-all hover:bg-leaf-50 h-[50px] xl:h-[58px]"
                                style={{ border: '1.5px solid #95BF1B' }}
                            >
                                <div className="w-9 h-9 xl:w-11 xl:h-11 rounded-full bg-leaf-100 flex items-center justify-center group-hover:bg-leaf-500 group-hover:text-white transition-colors text-leaf-600 shrink-0">
                                    <Clock size={18} className="xl:hidden stroke-[2.5]" />
                                    <Clock size={20} className="hidden xl:block stroke-[2.5]" />
                                </div>
                                <span className="whitespace-nowrap text-sm xl:text-base">Clinic Timings</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="hero-image relative flex items-center justify-center mt-12 lg:mt-0 order-2 lg:order-2 w-full">
                        <div className="relative w-full max-w-[420px] lg:max-w-[340px] xl:max-w-[400px] 2xl:max-w-[500px] aspect-[4/5] rounded-[2rem] lg:rounded-3xl overflow-hidden border-[6px] border-white bg-white shadow-2xl img-glass">
                            <img
                                src="/images/homepage/Doctor Headshot 2.png"
                                alt="Dr. Manoj Khemani - Leading Orthopedic Surgeon"
                                className="w-full h-full object-cover object-top"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>

                            {/* Floating Stats Cards */}
                            <div className="absolute bottom-6 lg:bottom-12 xl:bottom-10 2xl:bottom-10 left-4 right-4 grid grid-cols-3 gap-3">
                                <div className="stat-card bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-center border border-gray-50 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="text-leaf-500 font-bold text-2xl lg:text-3xl mb-1 flex justify-center">
                                        <AnimatedCounter end={24} suffix="+" />
                                    </div>
                                    <div className="text-[11px] font-bold text-gray-900 uppercase tracking-wider leading-tight">Years<br />Experience</div>
                                </div>
                                <div className="stat-card bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-center border border-gray-50 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="text-leaf-500 font-bold text-2xl lg:text-3xl mb-1 flex justify-center">
                                        <AnimatedCounter end={25} suffix="K+" />
                                    </div>
                                    <div className="text-[11px] font-bold text-gray-900 uppercase tracking-wider leading-tight">Happy<br />Patients</div>
                                </div>
                                <div className="stat-card bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-center border border-gray-50 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="text-leaf-500 font-bold text-2xl lg:text-3xl mb-1 flex justify-center">
                                        <AnimatedCounter end={5} suffix="K+" />
                                    </div>
                                    <div className="text-[11px] font-bold text-gray-900 uppercase tracking-wider leading-tight">Successful<br />Surgeries</div>
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
