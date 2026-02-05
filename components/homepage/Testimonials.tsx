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
        name: 'Rajesh Kumar',
        role: 'Knee Replacement Patient',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
        content: 'After 15 years of knee pain, Dr. Khemani\'s total knee replacement gave me a new life. I can walk, climb stairs, and play with my grandchildren without any pain. The care and attention I received was exceptional.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Priya Sharma',
        role: 'Professional Athlete',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
        content: 'As a professional athlete, my ACL tear was devastating. Dr. Khemani\'s arthroscopic surgery and rehabilitation program brought me back to the field stronger than ever. Truly grateful for his expertise.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Amit Sen',
        role: 'Spine Surgery Patient',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
        content: 'My chronic back pain had made life unbearable. The spine surgery performed by Dr. Khemani was life-changing. His expertise and compassionate care made all the difference in my recovery.',
        rating: 5,
    },
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
            gsap.from('.testimonial-content', {
                scrollTrigger: {
                    trigger: '.testimonial-content',
                    start: 'top 80%',
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const testimonial = testimonials[current]

    return (
        <section ref={sectionRef} className="py-24 lg:py-32 bg-text-primary text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-leaf-400 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold mt-4 mb-6">
                        Trusted by Thousands<br />of Patients
                    </h2>
                </div>

                {/* Testimonial Card */}
                <div className="testimonial-content max-w-4xl mx-auto">
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
                        {/* Quote Icon */}
                        <div className="absolute -top-6 left-8 w-12 h-12 bg-leaf-600 rounded-xl flex items-center justify-center">
                            <Quote size={24} className="text-white" />
                        </div>

                        <div className="grid lg:grid-cols-[1fr,auto] gap-8 items-center">
                            {/* Content */}
                            <div>
                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>

                                <blockquote className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-8 font-light">
                                    "{testimonial.content}"
                                </blockquote>

                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full object-cover border-2 border-leaf-400"
                                    />
                                    <div>
                                        <span className="block font-display font-semibold text-white">{testimonial.name}</span>
                                        <span className="text-white/60 text-sm">{testimonial.role}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className="flex lg:flex-col gap-4">
                                <button
                                    onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-leaf-500 transition-colors"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
                                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-leaf-500 transition-colors"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? 'bg-leaf-500 w-8' : 'bg-white/30 hover:bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
