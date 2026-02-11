'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.about-image', {
        scrollTrigger: {
          trigger: '.about-image',
          start: 'top 80%',
        },
        x: -60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })

      gsap.from('.about-content > *', {
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const highlights = [
    'MBBS, MS (Orthopedics)',
    '25+ Years Experience',
    '15,000+ Surgeries',
    'Senior Consultant at Apollo Hospitals',
  ]

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-leaf-50/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="about-image relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-47ba1ba5a424?w=800&q=80"
                  alt="Dr. Manoj Khemani in consultation"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              {/* Secondary Image */}
              <div className="absolute -bottom-8 -right-8 w-2/3 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20">
                <img
                  src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80"
                  alt="Medical procedure"
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-6 -left-6 z-30 bg-leaf-600 text-white rounded-2xl p-6 shadow-xl">
                <span className="block text-4xl font-display font-bold">25+</span>
                <span className="text-sm opacity-90">Years of<br/>Excellence</span>
              </div>

              {/* Decorative shape */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-leaf-100 rounded-full opacity-50 blur-3xl" />
            </div>
          </div>

          {/* Content Side */}
          <div className="about-content">
            <span className="text-leaf-600 font-semibold text-sm uppercase tracking-wider">About Dr. Khemani</span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-text-primary mt-4 mb-6 leading-tight">
              Dedicated to Your<br />
              <span className="gradient-text">Health & Wellness</span>
            </h2>
            
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Dr. Manoj Khemani is a distinguished orthopedic surgeon with over 25 years of experience 
              in transforming lives through advanced surgical interventions. Based in Kolkata, he 
              specializes in joint replacement, sports medicine, and complex spine surgeries.
            </p>
            
            <p className="text-text-muted leading-relaxed mb-8">
              His patient-first philosophy combines cutting-edge medical technology with personalized 
              treatment plans, ensuring optimal outcomes for every individual who walks through his doors.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-leaf-600 flex-shrink-0" />
                  <span className="text-text-secondary text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-leaf-600 font-semibold hover:text-leaf-700 transition-colors group"
            >
              Learn More About Dr. Khemani
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
