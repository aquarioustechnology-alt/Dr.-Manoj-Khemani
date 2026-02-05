'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ArrowRight, Award, Users, TrendingUp } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current || !textRef.current) return

    const ctx = gsap.context(() => {
      // Animate hero text
      gsap.from('.hero-word', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
        delay: 0.3,
      })

      gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: 'power3.out',
      })

      gsap.from('.hero-cta', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 1,
        ease: 'power3.out',
      })

      gsap.from('.hero-stat', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 1.2,
        ease: 'power3.out',
      })

      gsap.from('.hero-image', {
        scale: 1.1,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
        ease: 'power3.out',
      })

      // Parallax on scroll
      gsap.to('.organic-blob-1', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-offwhite">
      {/* Abstract Background Shapes */}
      <div className="organic-blob-1 absolute top-20 right-0 w-[600px] h-[600px] bg-leaf-300 rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-leaf-200 rounded-full blur-[100px] opacity-30" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(to right, #5c7f52 1px, transparent 1px),
                          linear-gradient(to bottom, #5c7f52 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div ref={textRef} className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-leaf-100 mb-8">
              <Award size={16} className="text-leaf-600" />
              <span className="text-sm font-medium text-text-secondary">25+ Years of Excellence</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-text-primary leading-[1.1] mb-6">
              <span className="hero-word inline-block">Restoring</span>{' '}
              <span className="hero-word inline-block">Mobility,</span>
              <br />
              <span className="hero-word inline-block gradient-text">Renewing</span>{' '}
              <span className="hero-word inline-block gradient-text">Lives</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-lg text-text-secondary max-w-xl mb-8 leading-relaxed">
              Experience world-class orthopedic care with Dr. Manoj Khemani. 
              Advanced surgical expertise combined with compassionate, patient-centered 
              treatment for optimal recovery.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta flex flex-wrap gap-4 mb-12">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-leaf-600 text-white font-semibold rounded-full hover:bg-leaf-700 transition-all duration-300 hover:shadow-xl hover:shadow-leaf-200 hover:-translate-y-1"
              >
                Book Consultation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-text-primary font-semibold rounded-full border border-gray-200 hover:border-leaf-300 hover:text-leaf-700 transition-all duration-300"
              >
                Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="hero-stat flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-leaf-100 flex items-center justify-center">
                  <Users size={24} className="text-leaf-600" />
                </div>
                <div>
                  <span className="block text-2xl font-display font-bold text-text-primary">15k+</span>
                  <span className="text-sm text-text-muted">Patients Treated</span>
                </div>
              </div>
              <div className="hero-stat flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-leaf-100 flex items-center justify-center">
                  <TrendingUp size={24} className="text-leaf-600" />
                </div>
                <div>
                  <span className="block text-2xl font-display font-bold text-text-primary">98%</span>
                  <span className="text-sm text-text-muted">Success Rate</span>
                </div>
              </div>
              <div className="hero-stat flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-leaf-100 flex items-center justify-center">
                  <Award size={24} className="text-leaf-600" />
                </div>
                <div>
                  <span className="block text-2xl font-display font-bold text-text-primary">25+</span>
                  <span className="text-sm text-text-muted">Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="hero-image relative">
              {/* Main Image Container with organic shape */}
              <div className="relative mx-auto lg:ml-auto max-w-md lg:max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-leaf-400 to-leaf-600 rounded-[3rem] rotate-3 opacity-20 blur-2xl" />
                <div className="relative overflow-hidden rounded-[3rem] shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80"
                    alt="Dr. Manoj Khemani - Orthopedic Surgeon"
                    className="w-full h-[500px] lg:h-[600px] object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Floating Card - Experience */}
                <div className="absolute -left-8 bottom-24 glass rounded-2xl p-4 shadow-xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-leaf-500 flex items-center justify-center text-white">
                      <Award size={24} />
                    </div>
                    <div>
                      <span className="block text-2xl font-display font-bold text-text-primary">25+</span>
                      <span className="text-sm text-text-muted">Years Exp.</span>
                    </div>
                  </div>
                </div>

                {/* Floating Card - Rating */}
                <div className="absolute -right-4 top-1/3 glass rounded-2xl p-4 shadow-xl animate-float-slow">
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-text-primary">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
