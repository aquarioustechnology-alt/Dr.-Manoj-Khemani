'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronLeft, ChevronRight, Award } from 'lucide-react'
import Button from '@/components/ui/Button'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const achievements = [
    {
        id: 1,
        title: "Best Orthopaedic Surgeon Award",
        description: "Recognized for pioneering work in <span class='text-[#A6CB3B]'>AR-guided knee replacement</span> and surgical innovation in Kolkata.",
        image: "/homepage/Achievement 1.jpeg"
    },
    {
        id: 2,
        title: "Clinical Excellence Recognition",
        description: "Commemorating over <span class='text-[#A6CB3B]'>20 years of exceptional success</span> in complex joint replacement and trauma surgeries.",
        image: "/homepage/Achievement 2.jpeg"
    },
    {
        id: 3,
        title: "Pioneer in Digital Orthopaedics",
        description: "Awarded for early adoption and mastery of <span class='text-[#A6CB3B]'>Augmented Reality technology</span> in daily surgical practices.",
        image: "/homepage/Achievement 3.jpeg"
    },
    {
        id: 4,
        title: "Top Joint Replacement Specialist",
        description: "Ranked among the <span class='text-[#A6CB3B]'>elite surgeons</span> in Eastern India for superior patient outcomes and recovery speeds.",
        image: "/homepage/Achievement 4.jpeg"
    },
    {
        id: 5,
        title: "Healthcare Leadership Award",
        description: "Recognizing significant contributions to <span class='text-[#A6CB3B]'>orthopaedic education</span> and mentoring the next generation of surgeons.",
        image: "/homepage/Achievement 5.jpeg"
    }
]

export default function Achievements() {
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

    const nextSlide = () => {
        if (currentIndex < achievements.length - 3) {
            setCurrentIndex(prev => prev + 1)
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

            <div className="max-w-[1600px] mx-auto px-6 lg:px-20 relative z-10">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
                    <div className="lg:w-1/2 achievement-reveal">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80 text-[12px] font-bold tracking-[0.2em] uppercase mb-6">
                            Awards & Recognitions
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] font-bold tracking-tight">
                            Recognizing Excellence: <br />
                            <span className="text-leaf-400">Awards and Accolades</span>
                        </h2>
                    </div>
                    <div className="lg:w-1/3 achievement-reveal">
                        <p className="text-[15px] text-white/70 leading-relaxed font-medium">
                            Dr. Manoj Kumar Khemani's exceptional contributions to orthopaedics have garnered prestigious awards, affirming his dedication to innovation and patient care.
                        </p>
                    </div>
                </div>

                {/* Carousel Section */}
                <div className="relative achievement-reveal">
                    {/* Navigation Buttons */}
                    <div className="absolute -top-16 lg:-top-20 right-0 flex gap-4">
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-leaf-500 hover:border-leaf-500'}`}
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={currentIndex >= achievements.length - 3}
                            className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all ${currentIndex >= achievements.length - 3 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-leaf-500 hover:border-leaf-500'}`}
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Slides Container */}
                    <div className="overflow-visible mb-16 lg:mb-20">
                        <div
                            ref={carouselRef}
                            className="flex gap-6 lg:gap-8 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                            style={{ transform: `translateX(calc(-${currentIndex * (100 / 3.03)}%))` }}
                        >
                            {achievements.map((item) => (
                                <div
                                    key={item.id}
                                    className="min-w-[85%] sm:min-w-[45%] lg:min-w-[31.5%] group"
                                >
                                    <div className="relative aspect-[3/2] rounded-[2rem] overflow-hidden mb-8 border border-white/5 bg-white/5">
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
                        href="/contact"
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
