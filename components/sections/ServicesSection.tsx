'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Bone, Activity, Sparkles, Scan } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    icon: Bone,
    title: 'Joint Replacement',
    description: 'Advanced knee, hip, and shoulder replacement surgery using minimally invasive techniques for faster recovery and better outcomes.',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80',
    link: '/services/joint-replacement',
  },
  {
    icon: Scan,
    title: 'Arthroscopy',
    description: 'Minimally invasive diagnostic and surgical procedures for joint conditions, ensuring minimal scarring and rapid rehabilitation.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    link: '/services/arthroscopy',
  },
  {
    icon: Activity,
    title: 'Sports Medicine',
    description: 'Specialized care for athletes and active individuals, from ACL reconstruction to rotator cuff repair and sports injury rehabilitation.',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&q=80',
    link: '/services/sports-medicine',
  },
  {
    icon: Sparkles,
    title: 'Spine Surgery',
    description: 'Comprehensive spine care including disc replacement, spinal fusion, and minimally invasive procedures for chronic back conditions.',
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&q=80',
    link: '/services/spine-surgery',
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-offwhite relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-leaf-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-leaf-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-text-primary mt-4 mb-6">
            Comprehensive<br />
            <span className="gradient-text">Orthopedic Care</span>
          </h2>
          <p className="text-text-secondary text-lg">
            From diagnosis to recovery, we provide complete orthopedic care tailored to your unique needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="service-card group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center text-leaf-600 shadow-lg group-hover:bg-leaf-600 group-hover:text-white transition-all duration-300">
                  <service.icon size={24} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-text-primary mb-3 group-hover:text-leaf-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-leaf-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-text-primary font-semibold rounded-full border-2 border-leaf-200 hover:border-leaf-600 hover:text-leaf-700 transition-all duration-300"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
