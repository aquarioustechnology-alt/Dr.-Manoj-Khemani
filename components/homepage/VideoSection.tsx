'use client'

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Youtube, ChevronLeft, ChevronRight, MoreVertical } from 'lucide-react'
import { motion } from 'framer-motion'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const videoData = [
    {
        id: 'can_uAc-ato',
        title: 'Successful Leg Surgery Story',
        subtitle: 'Patient Testimonial (Bengali)',
        description: 'A heartfelt journey of recovery and mobility restoration through expert surgical care.',
    },
    {
        id: '-QA0z48FAsI',
        title: 'Mira Debnath’s Recovery Journey',
        subtitle: 'Pain-Free Life',
        description: 'How specialized orthopedic treatment transformed chronic pain into a life of relief.',
    },
    {
        id: 'UgyS4iTLomg',
        title: 'Knee Pain Relief Experience',
        subtitle: 'Successful Treatment',
        description: 'Understanding the path to recovery for severe knee conditions and joint health.',
    },
    {
        id: 'a4TlJ6d-vVc',
        title: 'Rakesh’s ACL Surgery Experience',
        subtitle: 'Sports Medicine',
        description: 'A detailed look at ACL reconstruction and the journey back to an active lifestyle.',
    },
]

export default function VideoSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [playingVideoId, setPlayingVideoId] = useState<string | null>(null)
    const [isSmallDevice, setIsSmallDevice] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    // Check for mobile/tablet screen size (< 768px for 1 video view)
    useEffect(() => {
        const handleResize = () => {
            // Tailwind 'md' is 768px. Below that is 1 column.
            setIsSmallDevice(window.innerWidth < 768)
        }

        handleResize() // Set initial
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const videosPerView = isSmallDevice ? 1 : 2
    const maxIndex = videoData.length - videosPerView

    // Clamp index if screen size changes and index is out of bounds
    useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex)
        }
    }, [maxIndex, currentIndex])



    useEffect(() => {
        if (!sectionRef.current) return

        const ctx = gsap.context(() => {
            gsap.from('.video-reveal-left', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                x: -100,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
            })

            gsap.from('.video-reveal-right', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                opacity: 0,
                scale: 0.95,
                duration: 1.2,
                ease: 'power3.out',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const goNext = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex))
    const goPrev = () => setCurrentIndex(prev => Math.max(prev - 1, 0))



    return (
        <section ref={sectionRef} className="py-24 lg:py-32 bg-white relative overflow-hidden z-20">
            <div className="max-w-7.5xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">

                    <div className="lg:col-span-4 video-reveal-left flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-600 text-[12px] font-bold tracking-[0.2em] uppercase mb-6">
                            <span className="w-2 h-2 rounded-full bg-leaf-500"></span>
                            Patient Stories
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-[46px] leading-[1.1] font-bold text-[#1A1A1A] tracking-tight mb-6">
                            See Advanced Orthopaedic <span className="text-leaf-500">Care in Action</span>
                        </h2>
                        <p className="text-base text-gray-500 leading-relaxed font-medium mb-6 lg:mb-10 max-w-sm">
                            Experience Dr. Khemani&apos;s expertise through real patient journeys, surgical insights, and life-changing recoveries.
                        </p>

                        <div className="hidden lg:flex items-center gap-3">
                            <button
                                onClick={goPrev}
                                disabled={currentIndex === 0}
                                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-transparent ${currentIndex === 0
                                    ? 'text-gray-300 cursor-not-allowed'
                                    : 'text-[#1A1A1A] hover:bg-leaf-500 hover:!border-leaf-500 hover:text-white'
                                    }`}
                                style={{ border: currentIndex === 0 ? '1.5px solid #e5e7eb' : '1.5px solid rgba(0,0,0,0.8)' }}
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={goNext}
                                disabled={currentIndex >= maxIndex}
                                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-transparent ${currentIndex >= maxIndex
                                    ? 'text-gray-300 cursor-not-allowed'
                                    : 'text-[#1A1A1A] hover:bg-leaf-500 hover:!border-leaf-500 hover:text-white'
                                    }`}
                                style={{ border: currentIndex >= maxIndex ? '1.5px solid #e5e7eb' : '1.5px solid rgba(0,0,0,0.8)' }}
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-8 video-reveal-right">
                        <div className="relative overflow-hidden">
                            <div
                                className="flex transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]"
                                style={{ transform: `translateX(-${currentIndex * (100 / videosPerView)}%)` }}
                            >
                                {videoData.map((video) => (
                                    <div key={video.id} className="w-full md:w-1/2 flex-shrink-0 px-3 lg:px-4 text-left group">
                                        <div
                                            className="relative aspect-[4/3.1] rounded-[15px] overflow-hidden cursor-pointer shadow-xl shadow-gray-200/40 bg-black img-glass"
                                        >
                                            {playingVideoId === video.id ? (
                                                <iframe
                                                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                                                    className="w-full h-full border-0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                />
                                            ) : (
                                                <div
                                                    className="relative w-full h-full"
                                                    onClick={() => setPlayingVideoId(video.id)}
                                                >
                                                    <img
                                                        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                                                        alt={video.title}
                                                        className="w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-115"
                                                    />

                                                    {/* YouTube Style Top Overlay */}
                                                    <div className="absolute top-0 left-0 right-0 p-3 flex items-start justify-between bg-gradient-to-b from-black/70 via-black/20 to-transparent opacity-100 transition-opacity duration-300 z-10">
                                                        <div className="flex items-center gap-2.5 overflow-hidden pr-4">
                                                            <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20 bg-white shrink-0 shadow-lg p-1">
                                                                <img
                                                                    src="/images/homepage/main clinic logo.webp"
                                                                    alt="Heal My Bones"
                                                                    className="w-full h-full object-contain"
                                                                />
                                                            </div>
                                                            <span className="text-white text-[15px] font-medium truncate drop-shadow-lg leading-tight">
                                                                {video.title}
                                                            </span>
                                                        </div>
                                                        <div className="text-white p-1 hover:bg-white/10 rounded-full transition-colors shrink-0">
                                                            <MoreVertical size={20} />
                                                        </div>
                                                    </div>

                                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-all duration-500" />
                                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                        <div className="w-12 h-12 lg:w-16 lg:h-16 transition-all duration-300 group-hover:scale-125 drop-shadow-2xl">
                                                            <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" fill="#FF0000" />
                                                                <path d="M9.545 15.568l6.273-3.568-6.273-3.568v7.136z" fill="#FFFFFF" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div
                                            className="mt-6 space-y-2 px-1 cursor-pointer"
                                            onClick={() => setPlayingVideoId(video.id)}
                                        >
                                            <h3 className="text-xl lg:text-2xl font-bold text-[#1A1A1A] group-hover:text-leaf-600 transition-colors duration-300 leading-tight">
                                                {video.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed font-medium italic">
                                                &quot;{video.description}&quot;
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile/Tablet Arrows */}
                        <div className="flex lg:hidden items-center justify-center gap-3 mt-8">
                            <button
                                onClick={goPrev}
                                disabled={currentIndex === 0}
                                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-transparent ${currentIndex === 0
                                    ? 'text-gray-300 cursor-not-allowed'
                                    : 'text-[#1A1A1A] hover:bg-leaf-500 hover:!border-leaf-500 hover:text-white'
                                    }`}
                                style={{ border: currentIndex === 0 ? '1.5px solid #e5e7eb' : '1.5px solid rgba(0,0,0,0.8)' }}
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={goNext}
                                disabled={currentIndex >= maxIndex}
                                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-transparent ${currentIndex >= maxIndex
                                    ? 'text-gray-300 cursor-not-allowed'
                                    : 'text-[#1A1A1A] hover:bg-leaf-500 hover:!border-leaf-500 hover:text-white'
                                    }`}
                                style={{ border: currentIndex >= maxIndex ? '1.5px solid #e5e7eb' : '1.5px solid rgba(0,0,0,0.8)' }}
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}
