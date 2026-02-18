'use client'

import { useState, useEffect } from 'react'

export default function TopStrip() {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            // Hide the strip as soon as user scrolls down more than 5px
            if (window.scrollY > 5) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className={`w-full h-auto min-h-[31px] md:h-[31px] py-1 md:py-0 bg-[#1c1917] text-white flex items-center justify-center z-[60] fixed top-0 left-0 transition-all duration-300 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
                }`}
        >
            <div className="max-w-7.5xl mx-auto flex items-center justify-center text-[11px] sm:text-xs font-medium tracking-wider uppercase text-center">
                <p>
                    <span className="block md:inline text-leaf-400 font-bold whitespace-nowrap mb-0.5 md:mb-0">Robotic Joint Replacement</span>
                    <span className="hidden md:inline mx-2 text-white/30">•</span>
                    Knee
                    <span className="mx-2 text-white/30">•</span>
                    Hip
                    <span className="mx-2 text-white/30">•</span>
                    Trauma
                    <span className="mx-2 text-white/30">•</span>
                    Arthroscopy
                    <span className="mx-2 text-white/30">|</span>
                    <span className="text-white/80">Kolkata</span>
                </p>
            </div>
        </div>
    )
}
