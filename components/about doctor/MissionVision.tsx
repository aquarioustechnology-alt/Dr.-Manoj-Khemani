'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Target, Eye } from 'lucide-react'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function MissionVision() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.mv-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="py-20 bg-gray-50">
            <div className="max-w-7.5xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Mission */}
                    <div className="mv-card bg-white rounded-[2rem] p-8 lg:p-12 shadow-xl shadow-gray-100/50 hover:shadow-2xl transition-shadow duration-300 border border-leaf-100/50">
                        <div className="w-16 h-16 rounded-2xl bg-leaf-100 flex items-center justify-center text-leaf-600 mb-8">
                            <Target size={32} />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            As a <span className="font-bold text-gray-900">Top Leading Orthopedic Specialist in Kolkata</span>, Dr. Manoj Kumar Khemani strives to offer not just superior quality treatment but also a personalized experience for every patient. At <span className="font-semibold text-leaf-600">Healing Touch Clinic</span>, our mission is to deliver world-class care with an indomitable track record of success. We pledge to stay true to our core mission of restoring mobility and enhancing lives through precision and empathy.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="mv-card bg-leaf-600 rounded-[2rem] p-8 lg:p-12 shadow-xl shadow-leaf-200/50 hover:shadow-2xl transition-shadow duration-300 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-8 backdrop-blur-sm">
                                <Eye size={32} />
                            </div>
                            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                            <p className="text-white/90 leading-relaxed text-lg">
                                We envision a future where healthcare is accessible to all, irrespective of financial constraints. Dr. Khemani envisions a society where <span className="font-bold text-white">Health is a fundamental human right</span>. We aim to inspire the medical community to serve every section of society with dedication. Our goal is to make high-quality orthopedic treatment affordable and available to even the most economically disadvantaged.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
