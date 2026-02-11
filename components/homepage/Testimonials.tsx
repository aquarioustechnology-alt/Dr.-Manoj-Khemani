'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const testimonials = [
    {
        id: 1,
        name: 'N. Sharma',
        role: 'Heel Pain Treatment',
        content: 'I am so much benefitted with Dr Manoj kumar’s heel pain treatment, that i am perfectly fine now. He has so much knowledge that for everything my family takes his reference. He is so pleasant to talk to and always ready to answer your doubts.',
        rating: 5,
    },
    {
        id: 2,
        name: 'J. Mukherjee',
        role: 'Knee Health',
        content: 'I felt like I am talking to a long-time friend. Dr Manoj paid full attention and listened to each and every word I had to say. I have never found any doctor having so much patience. Clarified all my small doubts.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Mrs. M. Jain',
        role: 'Knee Replacement Patient',
        content: 'After consulting many doctors I finally got my knees replaced. He was so friendly that 99% of my fear of operation was gone after talking to him. Thanks to him I am completely pain free.',
        rating: 5,
    },
    {
        id: 4,
        name: 'A. Roychoudhury',
        role: 'Trauma Surgery',
        content: 'My brother had a bad accident. His leg bone was broken in 4 pieces. We thought that he would never walk properly again. He started walking in 2 days after operation. Dr. Khemani is undoubtedly the best.',
        rating: 5,
    },
    {
        id: 5,
        name: 'R. Kumar',
        role: 'Orthopaedic Patient',
        content: 'In today’s world it’s difficult to find doctors like Dr. Khemani who not only have a sound operative technique but is equally passionate about his patients well being. I wish there were many more doctors like him.',
        rating: 5,
    },
    {
        id: 6,
        name: 'N. Ghosh',
        role: 'Surgical Excellence',
        content: 'Dr Manoj Khemani is a brilliant, passionate, hard working and a dedicated surgeon, who is not only caring but also humble and polite!!',
        rating: 5,
    }
]

export default function Testimonials() {
    const [current, setCurrent] = useState(0)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length)
        }, 6000)
        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        if (!sectionRef.current) return

        const ctx = gsap.context(() => {
            gsap.from('.testimonial-reveal', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const testimonial = testimonials[current]

    const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length)
    const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

    return (
        <section ref={sectionRef} className="py-24 lg:py-32 bg-[#1c1917] text-white relative overflow-hidden z-20">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }} />
            </div>

            <div className="max-w-7.5xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

                    {/* Left Column: Heading and Testimonial Card */}
                    <div className="lg:col-span-6 flex flex-col justify-between gap-8 h-full">
                        <div className="testimonial-reveal">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80 text-[12px] font-bold tracking-[0.2em] uppercase mb-6">
                                Patient Success Stories
                            </div>
                            <h2 className="text-4xl sm:text-5xl lg:text-5xl leading-[1.1] font-bold tracking-tight mb-8">
                                Unique Approach To Your <br />
                                <span className="text-leaf-400">Health Needs</span>
                            </h2>
                        </div>

                        {/* Testimonial Card */}
                        <div className="testimonial-reveal bg-[#A6CB3B]/10 border border-[#A6CB3B]/20 rounded-[18px] p-8 lg:p-10 relative flex flex-col justify-between h-full min-h-[320px]">
                            <div>
                                <Quote size={48} className="text-[#A6CB3B] opacity-40 mb-6" />
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-base lg:text-lg text-white/90 leading-relaxed font-medium">
                                    "{testimonial.content}"
                                </p>
                            </div>

                            <div className="mt-12 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-leaf-500/20 border border-leaf-500 flex items-center justify-center text-leaf-500 font-medium text-xl uppercase">
                                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <span className="block font-bold text-white text-lg">{testimonial.name}</span>
                                        <span className="text-white/50 text-sm">{testimonial.role}</span>
                                    </div>
                                </div>

                                {/* Navigation Arrows */}
                                <div className="flex gap-3">
                                    <button
                                        onClick={prevSlide}
                                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#A6CB3B] hover:border-[#A6CB3B] hover:text-white transition-all duration-300 group"
                                    >
                                        <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#A6CB3B] hover:border-[#A6CB3B] hover:text-white transition-all duration-300 group"
                                    >
                                        <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Two Side-by-Side Columns */}
                    <div className="lg:col-span-6 grid grid-cols-2 gap-3 lg:gap-4">
                        {/* Left Sub-Column: Image (70%) + Google Rating (30%) */}
                        <div className="flex flex-col gap-3 lg:gap-4 testimonial-reveal">
                            {/* Top: Image (70% height) */}
                            <div className="relative rounded-[18px] overflow-hidden group shadow-2xl" style={{ flex: '8 1 0%' }}>
                                <img
                                    src="/homepage/Dr Image 5.webp"
                                    alt="Doctor Consultation"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            </div>
                            {/* Bottom: Google Rating (30% height) */}
                            <div className="bg-white text-[#1c1917] rounded-[18px] p-6 lg:p-8 flex flex-col justify-center" style={{ flex: '2 1 0%' }}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="inline-flex items-center justify-center w-10 h-10 shrink-0">
                                        <img src="/homepage/Google icon.png" alt="Google" className="w-full h-full object-contain" />
                                    </div>
                                    {/* Circular Patient Avatars */}
                                    <div className="flex -space-x-2">
                                        <img src="/homepage/Dr Image 15.webp" alt="Patient" className="w-9 h-9 rounded-full object-cover border-2 border-white" />
                                        <img src="/homepage/Dr Image 16.webp" alt="Patient" className="w-9 h-9 rounded-full object-cover border-2 border-white" />
                                        <img src="/homepage/Dr Image 18.webp" alt="Patient" className="w-9 h-9 rounded-full object-cover border-2 border-white" />
                                        <img src="/homepage/Dr Image 19.webp" alt="Patient" className="w-9 h-9 rounded-full object-cover border-2 border-white" />
                                    </div>
                                </div>
                                <h3 className="text-4xl lg:text-5xl font-extrabold mb-1 tracking-tight">4.9</h3>
                                <p className="text-base font-medium opacity-60">Google Ratings</p>
                            </div>
                        </div>

                        {/* Right Sub-Column: Happy Patients (20%) + Image (80%) */}
                        <div className="flex flex-col gap-3 lg:gap-4 testimonial-reveal">
                            {/* Top: 25K+ Happy Patients (20% height) */}
                            <div className="bg-[#A6CB3B] text-[#1c1917] rounded-[18px] p-6 lg:p-8 flex flex-col justify-center" style={{ flex: '2 1 0%' }}>
                                <div className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center mb-3">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 9.05v-.1"></path><path d="M16 9.05v-.1"></path><path d="M7.5 15a5.5 5.5 0 0 0 9 0"></path></svg>
                                </div>
                                <h3 className="text-4xl lg:text-5xl font-extrabold mb-1 tracking-tight">25K+</h3>
                                <p className="text-base font-medium opacity-70">Happy Patients</p>
                            </div>
                            {/* Bottom: Image (80% height) */}
                            <div className="relative rounded-[18px] overflow-hidden group shadow-xl" style={{ flex: '8 1 0%' }}>
                                <img
                                    src="/homepage/Dr Image 4.webp"
                                    alt="Medical Excellence"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
