'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Quote } from 'lucide-react'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function AboutBio() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate top content
            gsap.from('.bio-top-content', {
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

            // Animate bottom content
            gsap.from('.bio-bottom-content', {
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
        <section ref={sectionRef} className="pt-20 pb-20 lg:pt-[100px] lg:pb-20 bg-white relative z-20 rounded-t-[3rem] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.05)]">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12 bio-top-content">
                    <span className="text-leaf-500 font-bold uppercase tracking-widest text-sm">About The Doctor</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">Combining Expertise with Compassion</h2>
                </div>

                <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify">
                    <p className="bio-bottom-content">
                        <span className="font-bold text-gray-900">Dr. Manoj Kumar Khemani</span> is widely recognized as one of the <span className="font-bold text-leaf-600">Best Orthopedic Surgeons in Kolkata</span>, celebrated for his exceptional clinical expertise and patient-centric approach. With profound proficiency in complex joint replacements, he has honed his skills through specialized training in Mumbai, Hyderabad, and Thailand.
                    </p>
                    <p className="bio-bottom-content">
                        A distinguished alumnus of <span className="font-semibold text-gray-800">B. S. Medical College, Calcutta University</span>, Dr. Khemani further advanced his specialization at the esteemed <span className="font-semibold text-gray-800">Dr. D. Y. Patil Medical College, Pune</span>. His relentless pursuit of excellence led him to achieve an <span className="font-bold text-gray-900">MS in Orthopedics</span> from Texila American University and an <span className="font-bold text-gray-900">M.Ch. Ortho</span> degree from the University of Seychelles.
                    </p>
                    <p className="bio-bottom-content">
                        Demonstrating an unwavering commitment to surgical precision, he completed an <span className="font-semibold text-gray-800">Advanced Trauma Life Support course from AIIMS</span> and prestigious <span className="font-semibold text-gray-800">Fellowships in Arthroplasty</span> at Nanavati Hospital (Mumbai) and Sunshine Hospital (Hyderabad).
                    </p>

                    <div className="bio-bottom-content my-10 p-8 bg-leaf-50 rounded-2xl border-l-4 border-leaf-500 relative">
                        <Quote className="absolute top-4 left-4 text-leaf-200 w-12 h-12 -z-10 opacity-50" />
                        <p className="italic text-xl text-gray-800 font-medium">
                            &quot;Dr. Khemani is not just a surgeon but a visionary in orthopedic care, having successfully treated over 25,000 patients and performed 15,000+ surgeries.&quot;
                        </p>
                    </div>

                    <p className="bio-bottom-content">
                        Beyond his clinical practice, Dr. Khemani is a revered figure in the medical community. He frequently delivers lectures at national and regional conferences, sharing his insights on the latest advancements in orthopedics. His dedication extends to community welfare through numerous free medical camps, ensuring that world-class orthopedic care reaches the underprivileged.
                    </p>
                </div>
            </div>
        </section>
    )
}
