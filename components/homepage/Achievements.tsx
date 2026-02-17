'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronLeft, ChevronRight, Award } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useAppointment } from '@/context/AppointmentContext'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const achievements = [
    {
        id: 1,
        title: "Hands-on Workshop Faculty",
        description: "Leading the <span class='text-[#A6CB3B]'>Advanced Orthopaedic Workshop</span>, training surgeons in the latest AR-guided knee replacement techniques.",
        image: "/images/homepage/Achievement 1.jpeg"
    },
    {
        id: 2,
        title: "Medical Education Keynote",
        description: "Invited as a guest speaker to share insights on <span class='text-[#A6CB3B]'>precision orthopaedics</span> at a renowned medical institution.",
        image: "/images/homepage/Achievement 2.jpeg"
    },
    {
        id: 3,
        title: "Rural Doctors Association",
        description: "Featured speaker at the <span class='text-[#A6CB3B]'>Annual Rural Doctors Conference</span>, discussing accessible healthcare innovation.",
        image: "/images/homepage/Achievement 3.jpeg"
    },
    {
        id: 4,
        title: "National Orthopaedic Summit",
        description: "Sharing clinical expertise on <span class='text-[#A6CB3B]'>complex joint replacements</span> at a major national medical conference.",
        image: "/images/homepage/Achievement 4.jpeg"
    },
    {
        id: 5,
        title: "Surgical Mentorship Program",
        description: "Actively mentoring junior residents and surgeons in the <span class='text-[#A6CB3B]'>mastery of robotic and digital orthopaedics</span>.",
        image: "/images/homepage/Achievement 5.jpeg"
    }
]

export default function Achievements() {
    const { openModal } = useAppointment()
    const sectionRef = useRef<HTMLElement>(null)
    const carouselRef = useRef<HTMLDivElement>(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (!sectionRef.current) return

        const ctx = gsap.context(() => {
            gsap.from('.achievement-reveal', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    // Auto-Carousel Logic
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 4000) // Change slide every 4 seconds

        return () => clearInterval(interval)
    }, [currentIndex]) // Restart timer on index change

    const nextSlide = () => {
        if (currentIndex < achievements.length - 3) {
            setCurrentIndex(prev => prev + 1)
        } else {
            setCurrentIndex(0) // Loop back to start for auto-play effect
        }
    }

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1)
        }
    }

    return (
        <section ref={sectionRef} className="py-[90px] bg-[#1c1917] text-white overflow-hidden relative z-20">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }} />
            </div>

            <div className="max-w-7.5xl mx-auto px-6 lg:px-8 relative z-10">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
                    <div className="lg:w-1/2 achievement-reveal">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80 text-[12px] font-bold tracking-[0.2em] uppercase mb-6">
                            Academic & Professional Milestones
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] font-bold tracking-tight">
                            Excellence in Action: <br />
                            <span className="text-leaf-400">Medical Engagements</span>
                        </h2>
                    </div>
                    <div className="lg:w-1/3 achievement-reveal">
                        <p className="text-[15px] text-white/70 leading-relaxed font-medium mb-8">
                            Dr. Manoj Kumar Khemani's journey extends beyond the operation theatre, encompassing medical education, academic leadership, and active participation in global orthopaedic communities.
                        </p>

                        {/* Navigation Buttons */}
                        <div className="flex gap-4">
                            <button
                                onClick={prevSlide}
                                disabled={currentIndex === 0}
                                className={`group relative flex items-center justify-center w-12 h-12 transition-all duration-300 ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                                aria-label="Previous slide"
                            >
                                <div className="absolute inset-0 rounded-full border border-white/20 transition-all duration-300 group-hover:bg-leaf-500 group-hover:border-leaf-500" />
                                <ChevronLeft size={24} className="relative z-10 text-white transition-transform duration-300 group-hover:scale-110" />
                            </button>
                            <button
                                onClick={nextSlide}
                                disabled={currentIndex >= achievements.length - 3}
                                className={`group relative flex items-center justify-center w-12 h-12 transition-all duration-300 ${currentIndex >= achievements.length - 3 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                                aria-label="Next slide"
                            >
                                <div className="absolute inset-0 rounded-full border border-white/20 transition-all duration-300 group-hover:bg-leaf-500 group-hover:border-leaf-500" />
                                <ChevronRight size={24} className="relative z-10 text-white transition-transform duration-300 group-hover:scale-110" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Carousel Section - Continuous Scroll */}
                <div className="relative achievement-reveal w-full overflow-hidden">
                    <style jsx>{`
                        @keyframes scroll {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-scroll {
                            display: flex;
                            width: max-content;
                            animation: scroll 80s linear infinite;
                        }
                        .animate-scroll:hover {
                            animation-play-state: paused;
                        }
                    `}</style>

                    <div className="overflow-hidden mb-16 lg:mb-20 mask-gradient-sides">
                        <div
                            className="animate-scroll gap-6 lg:gap-8"
                        >
                            {[...achievements, ...achievements].map((item, index) => (
                                <div
                                    key={`${item.id}-${index}`}
                                    className="w-[300px] sm:w-[350px] lg:w-[400px] flex-shrink-0 group"
                                >
                                    <div className="relative aspect-[3/2] rounded-[22px] overflow-hidden mb-8 border border-white/5 bg-white/5">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Award Icon Overlay */}
                                        <div className="absolute top-6 right-6 w-12 h-12 bg-leaf-500 rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-xl">
                                            <Award size={24} />
                                        </div>
                                    </div>

                                    {/* Content Below Image (Preserved Design) */}
                                    <div className="text-center px-4">
                                        <h4 className="text-xl lg:text-2xl font-bold mb-4 text-white group-hover:text-leaf-400 transition-colors">
                                            {item.title}
                                        </h4>
                                        <p
                                            className="text-[15px] lg:text-base text-white/60 leading-relaxed font-medium transition-colors group-hover:text-white/80"
                                            dangerouslySetInnerHTML={{ __html: item.description }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="flex justify-center achievement-reveal">
                    <Button
                        onClick={openModal}
                        className="!h-[56px] !bg-[#95BF1B] !text-white !font-medium hover:!bg-[#85AF0B]"
                        iconClassName="!text-[#95BF1B] group-hover:!text-white"
                    >
                        Schedule a Consultation
                    </Button>
                </div>

            </div>
        </section>
    )
}
