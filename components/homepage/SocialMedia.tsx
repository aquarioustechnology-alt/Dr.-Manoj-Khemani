'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Instagram, Heart, MessageCircle } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '@/components/ui/Button'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const instagramPosts = [
    { id: 1, image: '/homepage/Dr Image 1.webp', likes: '245', comments: '12' },
    { id: 2, image: '/homepage/Dr Image 2.webp', likes: '189', comments: '8' },
    { id: 3, image: '/homepage/Dr Image 3.webp', likes: '312', comments: '24' },
    { id: 4, image: '/homepage/Dr Image 5.webp', likes: '278', comments: '15' },
    { id: 5, image: '/homepage/Dr Image 6.webp', likes: '421', comments: '32' },
    { id: 6, image: '/homepage/Dr Image 7.webp', likes: '156', comments: '5' },
]

export default function SocialMedia() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (!sectionRef.current) return

        const ctx = gsap.context(() => {
            gsap.from('.social-reveal-up', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="pt-20 pb-24 bg-white relative z-20 overflow-hidden">
            <div className="max-w-7.5xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16 social-reveal-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-600 text-[12px] font-bold tracking-[0.2em] uppercase mb-6">
                        <Instagram size={14} className="text-leaf-500" />
                        Instagram Feed
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4">
                        Follow <span className="text-leaf-500">@drmanojkhemani</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
                        Stay updated with orthopedic tips, success stories, and advanced surgical insights directly from Dr. Manoj Khemani.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {instagramPosts.map((post) => (
                        <a
                            key={post.id}
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-200 social-reveal-up"
                        >
                            <Image
                                src={post.image}
                                alt={`Instagram post ${post.id}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay - Bottom to Top Reveal */}
                            <div className="absolute inset-0 bg-[#A6CB3B]/80 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-center justify-center gap-6 z-10">
                                <div className="flex items-center gap-1.5 text-white font-bold">
                                    <Heart size={20} fill="currentColor" />
                                    <span>{post.likes}</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-white font-bold">
                                    <MessageCircle size={20} fill="currentColor" />
                                    <span>{post.comments}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="mt-16 text-center social-reveal-up flex justify-center">
                    <Button
                        href="https://www.instagram.com/"
                        className="!bg-black hover:!bg-leaf-600 shadow-xl shadow-gray-200"
                        icon={Instagram}
                        iconClassName="text-black !w-10 !h-10 sm:!w-11 sm:!h-11"
                    >
                        Follow on Instagram
                    </Button>
                </div>
            </div>
        </section>
    )
}
