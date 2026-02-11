'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Microscope, HeartHandshake, Clock, ShieldCheck } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const reasons = [
  {
    icon: Microscope,
    title: 'Advanced Technology',
    description: 'State-of-the-art surgical equipment and advanced imaging technology for precise diagnosis and treatment.',
  },
  {
    icon: HeartHandshake,
    title: 'Patient-Centered Care',
    description: 'Every treatment plan is tailored to individual needs, ensuring personalized care and attention.',
  },
  {
    icon: Clock,
    title: 'Rapid Recovery',
    description: 'Minimally invasive techniques and advanced rehabilitation protocols for faster healing.',
  },
  {
    icon: ShieldCheck,
    title: 'Proven Results',
    description: '98% patient satisfaction rate with thousands of successful procedures performed.',
  },
]

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.reason-card', {
        scrollTrigger: {
          trigger: '.reasons-grid',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-leaf-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-text-primary mt-4 mb-6 leading-tight">
              Excellence in<br />
              <span className="gradient-text">Every Aspect</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              We combine medical expertise with compassionate care to deliver the best possible outcomes 
              for our patients. Our commitment to excellence is reflected in every aspect of our practice.
            </p>
            
            {/* Stats Row */}
            <div className="flex gap-8">
              <div>
                <span className="block text-4xl font-display font-bold text-leaf-600">15k+</span>
                <span className="text-text-muted text-sm">Surgeries</span>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <span className="block text-4xl font-display font-bold text-leaf-600">98%</span>
                <span className="text-text-muted text-sm">Satisfaction</span>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <span className="block text-4xl font-display font-bold text-leaf-600">25+</span>
                <span className="text-text-muted text-sm">Years</span>
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="reasons-grid grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="reason-card group p-6 rounded-2xl bg-offwhite hover:bg-leaf-600 transition-all duration-500 hover:shadow-xl hover:shadow-leaf-200"
              >
                <div className="w-14 h-14 rounded-xl bg-leaf-100 text-leaf-600 flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:text-white transition-all duration-500 group-hover:rotate-[360deg]">
                  <reason.icon size={28} />
                </div>
                <h3 className="text-lg font-display font-bold text-text-primary mb-2 group-hover:text-white transition-colors">
                  {reason.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
