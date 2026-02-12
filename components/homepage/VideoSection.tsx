'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Play, ChevronLeft, ChevronRight, X } from 'lucide-react'

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
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
    const sectionRef = useRef<HTMLElement>(null)

    const videosPerView = 2
    const maxIndex = videoData.length - videosPerView

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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Side: Content */}
                    <div className="lg:col-span-4 video-reveal-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-600 text-[12px] font-bold tracking-[0.2em] uppercase mb-6">
                            <span className="w-2 h-2 rounded-full bg-leaf-500"></span>
                            Patient Stories
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-5xl leading-[1.1] font-bold text-[#1A1A1A] tracking-tight mb-6">
                            Understanding Your Treatment <span className="text-leaf-500">Before You Decide</span>
                        </h2>
                        <p className="text-base text-gray-500 leading-relaxed font-medium mb-10 max-w-sm">
                            Experience Dr. Khemani&apos;s expertise through real patient journeys, surgical insights, and life-changing recoveries.
                        </p>

                        {/* Navigation Arrows */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={goPrev}
                                disabled={currentIndex === 0}
                                className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 ${currentIndex === 0
                                        ? 'border-gray-100 text-gray-300 cursor-not-allowed'
                                        : 'border-gray-200 text-gray-900 hover:bg-leaf-500 hover:border-leaf-500 hover:text-white shadow-sm'
                                    }`}
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={goNext}
                                disabled={currentIndex >= maxIndex}
                                className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 ${currentIndex >= maxIndex
                                        ? 'border-gray-100 text-gray-300 cursor-not-allowed'
                                        : 'border-gray-200 text-gray-900 hover:bg-leaf-500 hover:border-leaf-500 hover:text-white shadow-sm'
                                    }`}
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Carousel */}
                    <div className="lg:col-span-8 video-reveal-right">
                        <div className="relative overflow-hidden">
                            <div
                                className="flex transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]"
                                style={{ transform: `translateX(-${currentIndex * 50}%)` }}
                            >
                                {videoData.map((video) => (
                                    <div key={video.id} className="w-full md:w-1/2 flex-shrink-0 px-3 lg:px-4 text-left">
                                        <div
                                            onClick={() => setSelectedVideo(video.id)}
                                            className="relative aspect-[16/10] rounded-[2rem] overflow-hidden group cursor-pointer shadow-2xl shadow-gray-200/50"
                                        >
                                            {/* Thumbnail */}
                                            <img
                                                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                                alt={video.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/40 transition-all duration-500" />

                                            {/* Play Icon */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-leaf-500 group-hover:border-leaf-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-leaf-500/50">
                                                    <Play size={32} className="text-white fill-white ml-1 transition-transform duration-300 group-hover:scale-110" />
                                                </div>
                                            </div>

                                            {/* Content Overlay */}
                                            <div className="absolute bottom-6 left-6 right-6">
                                                <span className="inline-block px-3 py-1 bg-leaf-500/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-lg mb-3">
                                                    {video.subtitle}
                                                </span>
                                                <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight">
                                                    {video.title}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="mt-6 px-4">
                                            <p className="text-gray-500 text-sm leading-relaxed font-medium line-clamp-2 italic">
                                                &quot;{video.description}&quot;
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox / Video Modal */}
            {selectedVideo && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-10 animate-in fade-in duration-300">
                    <div
                        className="absolute inset-0 bg-black/95 backdrop-blur-sm shadow-2xl"
                        onClick={() => setSelectedVideo(null)}
                    />
                    <div className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500 ring-1 ring-white/10">
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
                        >
                            <X size={24} />
                        </button>
                        <iframe
                            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </section>
    )
}

