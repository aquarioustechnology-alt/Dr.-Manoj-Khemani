'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Play } from 'lucide-react'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const videos = [
    {
        id: 0,
        title: 'Patient Care',
        subtitle: 'Healing Touch',
        src: '/homepage/Dr Khemani Video.mp4',
        poster: '/homepage/Dr Image 3.webp',
    },
    {
        id: 1,
        title: 'Surgery',
        subtitle: 'Precision Led',
        src: '/homepage/Video 1.mp4',
        poster: '/homepage/Dr Image 6.webp',
    },
    {
        id: 2,
        title: 'Recovery',
        subtitle: 'Full Mobility',
        src: '/homepage/Dr Khemani Video.mp4',
        poster: '/homepage/Dr Image 10.webp',
    },
]

export default function VideoSection() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [playing, setPlaying] = useState<number | null>(null)
    const sectionRef = useRef<HTMLElement>(null)
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

    useEffect(() => {
        if (!sectionRef.current) return

        const ctx = gsap.context(() => {
            gsap.from('.video-section-reveal', {
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

    const handlePlay = (index: number) => {
        const video = videoRefs.current[index]
        if (!video) return

        if (playing === index) {
            video.pause()
            setPlaying(null)
        } else {
            // Pause all other videos
            videoRefs.current.forEach((v, i) => {
                if (v && i !== index) v.pause()
            })
            video.play()
            setPlaying(index)
        }
    }

    const handleColumnClick = (index: number) => {
        if (activeIndex === index) return
        setActiveIndex(index)
        setPlaying(null)
        // Pause all videos when switching
        videoRefs.current.forEach((v) => {
            if (v) v.pause()
        })
    }

    return (
        <section ref={sectionRef} className="py-24 lg:py-32 bg-[#F9F9F9] relative overflow-hidden z-20">
            <div className="max-w-7.5xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                    {/* Left Side: Heading */}
                    <div className="lg:col-span-4 video-section-reveal">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-600 text-[12px] font-bold tracking-[0.2em] uppercase mb-6">
                            <span className="w-2 h-2 rounded-full bg-leaf-500"></span>
                            Video Gallery
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-5xl leading-[1.1] font-bold text-[#1A1A1A] tracking-tight mb-6">
                            Understanding Your Treatment <span className="text-leaf-500">Before You Decide</span>
                        </h2>
                        <p className="text-base text-gray-500 leading-relaxed font-medium mb-8 max-w-sm">
                            Experience Dr. Khemani&apos;s expertise through patient stories, surgical procedures, and recovery journeys.
                        </p>

                        {/* Video indicators */}
                        <div className="flex items-center gap-3">
                            {videos.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleColumnClick(i)}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === i
                                        ? 'w-10 bg-leaf-500'
                                        : 'w-4 bg-gray-300 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Accordion Video Columns */}
                    <div className="lg:col-span-8 video-section-reveal">
                        <div className="flex gap-3 lg:gap-4 h-[450px] sm:h-[500px] lg:h-[550px]">
                            {videos.map((video, index) => {
                                const isActive = activeIndex === index

                                return (
                                    <div
                                        key={video.id}
                                        onClick={() => handleColumnClick(index)}
                                        className={`relative rounded-[18px] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] group ${isActive ? 'flex-[5]' : 'flex-[1]'
                                            }`}
                                    >
                                        {/* Video */}
                                        <video
                                            ref={(el) => { videoRefs.current[index] = el }}
                                            src={video.src}
                                            poster={video.poster}
                                            muted
                                            loop
                                            playsInline
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />

                                        {/* Overlay gradient */}
                                        <div className={`absolute inset-0 transition-all duration-500 ${isActive
                                            ? 'bg-gradient-to-t from-black/60 via-transparent to-transparent'
                                            : 'bg-black/40'
                                            }`} />

                                        {/* Expanded State Content */}
                                        {isActive && (
                                            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                                                {/* Play Button */}
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        handlePlay(index)
                                                    }}
                                                    className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm ${playing === index
                                                        ? 'bg-white/30 border-2 border-white/50'
                                                        : 'bg-white/20 border-2 border-white/40 hover:bg-white/40 hover:scale-110'
                                                        }`}
                                                >
                                                    {playing === index ? (
                                                        <div className="flex gap-1.5">
                                                            <div className="w-1.5 h-6 bg-white rounded-full"></div>
                                                            <div className="w-1.5 h-6 bg-white rounded-full"></div>
                                                        </div>
                                                    ) : (
                                                        <Play size={28} className="text-white fill-white ml-1" />
                                                    )}
                                                </button>
                                            </div>
                                        )}

                                        {/* Bottom info for active panel */}
                                        {isActive && (
                                            <div className="absolute bottom-6 left-6 right-6 z-10">
                                                <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-1">{video.subtitle}</p>
                                                <h3 className="text-white text-2xl lg:text-3xl font-bold">{video.title}</h3>
                                            </div>
                                        )}

                                        {/* Collapsed State - Vertical Title */}
                                        {!isActive && (
                                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                                <div className="flex flex-col items-center gap-3">
                                                    <span
                                                        className="text-white font-bold text-base lg:text-lg tracking-wider uppercase"
                                                        style={{
                                                            writingMode: 'vertical-rl',
                                                            textOrientation: 'mixed',
                                                        }}
                                                    >
                                                        {video.title}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
