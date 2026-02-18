'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle2, Award } from 'lucide-react'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const EXPERTISE = [
    "Robotic Joint Replacements",
    "Augmented Reality Knee Replacement",
    "Arthroscopy (Key-hole Surgery)",
    "Total Knee Replacement",
    "Hip Replacement Surgery",
    "Complex Fracture Treatment",
    "Sports Injuries Management",
    "Ligament Repairs (ACL/PCL)",
    "Minimally Invasive Surgery",
    "Osteoporosis Treatment"
]

const AFFILIATIONS = [
    "Life Member of Indian Medical Association",
    "Life Member of Indian Orthopedic Association",
    "Life Member of West Bengal Orthopaedic Association",
    "Life Member of Kolkata Arthroscopy & Sports Surgery Society",
    "Life Member of Trauma Society of India",
    "Life Member of Indian Arthroplasty Association",
    "Life Member of Indian Society of Hip & Knee Surgeons",
    "Life Member of Indian Arthroscopy Society"
]

export default function ExpertiseAndAffiliations() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.expertise-item', {
                scrollTrigger: {
                    trigger: '.expertise-grid',
                    start: 'top 85%',
                },
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out'
            })

            gsap.from('.affiliation-item', {
                scrollTrigger: {
                    trigger: '.affiliations-list',
                    start: 'top 85%',
                },
                x: -20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out'
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="py-20 lg:py-24 bg-white overflow-hidden relative z-20">
            <div className="max-w-7.5xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Expertise Section */}
                    <div>
                        <div className="mb-8">
                            <span className="text-leaf-500 font-bold uppercase tracking-widest text-sm">Clinical Excellence</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">Areas of Expertise</h2>
                        </div>
                        <p className="text-gray-600 mb-8 text-lg">
                            Dr. Khemani specializes in a wide spectrum of orthopedic treatments, utilizing cutting-edge technology for superior outcomes.
                        </p>
                        <div className="expertise-grid grid sm:grid-cols-2 gap-4">
                            {EXPERTISE.map((item, index) => (
                                <div key={index} className="expertise-item flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-leaf-200 hover:bg-leaf-50 transition-colors group">
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-leaf-500 shadow-sm group-hover:bg-leaf-500 group-hover:text-white transition-colors">
                                        <CheckCircle2 size={16} />
                                    </div>
                                    <span className="font-semibold text-gray-800 text-sm md:text-base">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Affiliations Section */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-leaf-50/50 rounded-[3rem] -rotate-3 scale-105 -z-10"></div>
                        <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-xl border border-gray-100 h-full">
                            <div className="mb-8">
                                <span className="text-leaf-500 font-bold uppercase tracking-widest text-sm">Professional Standing</span>
                                <h2 className="text-3xl font-bold text-gray-900 mt-3">Memberships & Affiliations</h2>
                            </div>
                            <ul className="affiliations-list space-y-4">
                                {AFFILIATIONS.map((item, index) => (
                                    <li key={index} className="affiliation-item flex items-start gap-4">
                                        <Award className="text-leaf-500 shrink-0 mt-1" size={20} />
                                        <span className="text-gray-700 font-medium text-lg leading-relaxed">{item}</span>
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
