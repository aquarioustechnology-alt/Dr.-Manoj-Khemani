'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const features = [
    {
        title: "Cutting Edge Technology",
        image: "/images/homepage/AR VR machine image.png",
        description: "Achieving accuracy beyond the human eye for perfect alignment."
    },
    {
        title: "3D Surgical Planning",
        image: "/images/homepage/3D Surgical Planning.webp",
        description: "Personalized pre-op planning tailored to your unique anatomy."
    },
    {
        title: "Minimally Invasive",
        image: "/images/homepage/Minimally Invasive.webp",
        description: "Smaller incisions, less tissue damage, and reduced pain."
    },
    {
        title: "Faster Recovery",
        image: "/images/homepage/Faster Recovery image.webp",
        description: "Return to your active lifestyle sooner with advanced care."
    }
]

export default function RoboticPioneer() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (!sectionRef.current) return

        const ctx = gsap.context(() => {
            // Header Animation
            gsap.from('.rp-header-item', {
                scrollTrigger: {
                    trigger: '.rp-header',
                    start: 'top 85%',
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
            })

            // Cards Animation
            gsap.from('.rp-card', {
                scrollTrigger: {
                    trigger: '.rp-grid',
                    start: 'top 75%',
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                clearProps: 'all'
            })

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="py-20 lg:pt-28 lg:pb-12 bg-white relative z-20 overflow-hidden">
            <div className="max-w-7.5xl mx-auto px-6 lg:px-8">

                {/* Header Section */}
                <div className="rp-header flex flex-col items-center text-center max-w-4xl mx-auto mb-16 lg:mb-20">
                    <div className="rp-header-item inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-600 text-[11px] font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-leaf-500"></span>
                        Robotic Excellence
                    </div>

                    <h2 className="rp-header-item text-4xl sm:text-5xl lg:text-[3.375rem] leading-[1.1] font-bold text-[#1A1A1A] tracking-tight mb-6">
                        He is the one who Introduced <span className="text-leaf-500">AR-VR Knee Replacement Surgery</span>
                    </h2>

                    <p className="rp-header-item text-lg text-black italic leading-relaxed max-w-3xl mx-auto mb-10">
                        Dr. Manoj Khemani, recognized as the Best Knee Replacement Surgeon in Kolkata, leverages advanced AR-VR technology to ensure 100% precision in every surgery. With over 24+ years of expertise and 5,000+ successful joint replacements, his pioneering approach minimizes recovery time and maximizes implant longevity, offering patients a life-changing return to mobility.
                    </p>

                    <div className="rp-header-item flex flex-wrap justify-center gap-4 w-full sm:w-auto">
                        <Button
                            href="/services/robotic-joint-replacement"
                            className="bg-leaf-500 hover:bg-leaf-600 border-none text-white shadow-xl shadow-leaf-200/50 w-full sm:w-auto justify-center sm:justify-start !relative pl-14 sm:pl-1 min-h-[52px] sm:min-h-0"
                            iconClassName="!absolute !left-1.5 sm:!static text-leaf-500"
                        >
                            Explore Technology
                        </Button>
                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-gray-200 text-gray-900 font-bold hover:bg-gray-50 transition-colors text-sm w-full sm:w-auto"
                        >
                            Meet Dr. Khemani
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>

                {/* Cards Flex Accordion */}
                <div className="rp-grid flex flex-col md:flex-row gap-4 h-auto md:h-[400px]">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="rp-card group relative flex-1 aspect-square md:aspect-auto md:min-h-0 md:hover:flex-[1.5] transition-[flex-grow] duration-500 ease-out cursor-pointer rounded-[25px] overflow-hidden img-glass"
                        >
                            <img
                                src={feature.image}
                                alt={`Robotic Joint Replacement Technology - ${feature.title} - Dr. Manoj Khemani`}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                                <h3 className="text-white text-xl font-bold leading-tight mb-0 group-hover:mb-2 transition-all duration-300 drop-shadow-md">
                                    {feature.title}
                                </h3>
                                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-out">
                                    <div className="overflow-hidden">
                                        <p className="text-white/90 text-[13px] font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
