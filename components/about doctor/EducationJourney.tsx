'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GraduationCap, Award, MapPin, Users, Stethoscope } from 'lucide-react'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function EducationJourney() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.from('.edu-header', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            })

            // Cards Animation
            gsap.fromTo('.edu-card-wrapper',
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: '.edu-grid',
                        start: 'top 75%',
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out'
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="pt-20 lg:pt-24 pb-16 lg:pb-20 bg-gray-50 relative z-20 overflow-hidden">
            <div className="max-w-7.5xl mx-auto px-6 lg:px-8">

                {/* Header Section */}
                <div className="edu-header flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-16 mb-16 text-center lg:text-left items-center lg:items-end">
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="inline-block px-3 py-1 rounded-full border border-leaf-200 bg-leaf-50 text-leaf-600 text-xs font-bold tracking-widest uppercase mb-4">
                            EDUCATION & PROFESSIONAL JOURNEY
                        </div>
                        <h2 className="text-4xl lg:text-[46px] font-bold text-gray-900 leading-[1.1]">
                            Academic Odyssey & <br />Clinical Mastery
                        </h2>
                    </div>
                    <div className="text-gray-600 text-[15px] leading-relaxed text-center lg:text-justify font-medium max-w-2xl">
                        Dr. Manoj Kumar Khemani is a leading Consultant Orthopaedic Surgeon with extensive experience in joint replacements, trauma surgeries, and arthroscopy. He believes that a strong foundation in medical education combined with continuous learning and specialized training is key to delivering world-class patient care. His journey reflects a relentless pursuit of excellence in the field of orthopaedics.
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="edu-grid grid lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Education Card Wrapper */}
                    <div className="edu-card-wrapper">
                        {/* Education Card (White) */}
                        <div className="edu-card h-full bg-white rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-leaf-200 hover:-translate-y-2 group">
                            <div className="w-16 h-16 rounded-2xl bg-leaf-500 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-leaf-500 border border-transparent group-hover:border-leaf-100 transition-all duration-300 shadow-md">
                                <GraduationCap size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education & Degrees</h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-bold text-leaf-600 uppercase tracking-wide mb-2">Medical College / University</h4>
                                    <p className="text-gray-600 text-[15px] font-medium">Alumni, B. S. Medical College, Calcutta University</p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-leaf-600 uppercase tracking-wide mb-2">Orthopaedic Specialization / Training</h4>
                                    <ul className="space-y-2">
                                        <li className="text-gray-600 text-[15px] font-medium flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-leaf-400 mt-2 shrink-0"></span>
                                            <span>Orthopaedic training, Dr. D. Y. Patil Medical College, Pune</span>
                                        </li>
                                        <li className="text-gray-600 text-[15px] font-medium flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-leaf-400 mt-2 shrink-0"></span>
                                            <span>Specialized training exposure in Mumbai, Hyderabad, and Thailand</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-leaf-600 uppercase tracking-wide mb-2">Postgraduate Degrees</h4>
                                    <ul className="space-y-2">
                                        <li className="text-gray-600 text-[15px] font-medium flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-leaf-400 mt-2 shrink-0"></span>
                                            <span><span className="font-bold text-gray-800">MS (Orthopedics)</span> — Texila American University</span>
                                        </li>
                                        <li className="text-gray-600 text-[15px] font-medium flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-leaf-400 mt-2 shrink-0"></span>
                                            <span><span className="font-bold text-gray-800">MCh (Ortho)</span> — University of Seychelles</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-leaf-600 uppercase tracking-wide mb-2">Certifications & Fellowships</h4>
                                    <ul className="space-y-2">
                                        <li className="text-gray-600 text-[15px] font-medium flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-leaf-400 mt-2 shrink-0"></span>
                                            <span>Advanced Trauma Life Support (ATLS) — AIIMS</span>
                                        </li>
                                        <li className="text-gray-600 text-[15px] font-medium flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-leaf-400 mt-2 shrink-0"></span>
                                            <span>Fellowship in Arthroplasty — Nanavati Hospital, Mumbai</span>
                                        </li>
                                        <li className="text-gray-600 text-[15px] font-medium flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-leaf-400 mt-2 shrink-0"></span>
                                            <span>Fellowship in Arthroplasty — Sunshine Hospital, Hyderabad</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experience Card Wrapper */}
                    <div className="edu-card-wrapper">
                        {/* Experience Card (Green) */}
                        <div className="edu-card h-full bg-leaf-500 rounded-3xl p-6 lg:p-8 shadow-xl shadow-leaf-500/20 hover:shadow-2xl transition-all duration-300 relative overflow-hidden text-white hover:-translate-y-2 group">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors duration-500"></div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-6 backdrop-blur-sm group-hover:bg-white group-hover:text-leaf-500 transition-all duration-300">
                                    <Stethoscope size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-6">Experience & Techniques</h3>

                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-3 flex items-center gap-2">
                                            <Award size={20} /> Clinical Experience & Expertise
                                        </h4>
                                        <ul className="space-y-3">
                                            <li className="text-white text-[15px] font-medium flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></div>
                                                <span className="leading-relaxed">Highly qualified and experienced orthopaedic surgeon with strong clinical expertise.</span>
                                            </li>
                                            <li className="text-white text-[15px] font-medium flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></div>
                                                <span className="leading-relaxed">Proficient in complicated joint replacements.</span>
                                            </li>
                                            <li className="text-white text-[15px] font-medium flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></div>
                                                <span className="leading-relaxed">Expertise includes: <span className="font-bold text-white">Robotic Joint Replacement Surgeries, AR-VR Knee Replacement, Complex Trauma, Arthroscopy, Sports Injuries</span>.</span>
                                            </li>
                                            <li className="text-white text-[15px] font-medium flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></div>
                                                <span className="leading-relaxed">Focus areas also include: <span className="font-bold text-white">General & Elderly Orthopedics, Osteoporosis management</span> and complications.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-3 flex items-center gap-2">
                                            <Users size={20} /> Patient Volume
                                        </h4>
                                        <div className="text-white text-[15px] font-medium flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></div>
                                            <span className="text-[15px]">History of treating <span className="font-bold text-white text-2xl">25,000+</span> patients</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-bold text-white uppercase tracking-wide mb-3 flex items-center gap-2">
                                            <MapPin size={20} /> Clinic / Practice Location
                                        </h4>
                                        <div className="text-white text-[15px] font-medium flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></div>
                                            <span className="text-[15px]">Healing Touch, Bangur Avenue, Kolkata</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
