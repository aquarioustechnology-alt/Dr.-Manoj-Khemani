'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const followerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (typeof window === 'undefined') return

        const cursor = cursorRef.current
        const follower = followerRef.current

        if (!cursor || !follower) return

        // Initial setup
        gsap.set(cursor, { xPercent: -50, yPercent: -50 })
        gsap.set(follower, { xPercent: -50, yPercent: -50 })

        const moveCursor = (e: MouseEvent) => {
            // Instant move for the main dot
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power3.out'
            })
            // Smooth trail for the follower
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.6,
                ease: 'power3.out'
            })
        }

        window.addEventListener('mousemove', moveCursor)

        const onHover = () => {
            gsap.to(cursor, { scale: 0.5, duration: 0.3 })
            gsap.to(follower, { scale: 2, opacity: 0.4, backgroundColor: '#A8CA3D', duration: 0.3 })
        }

        const onUnhover = () => {
            gsap.to(cursor, { scale: 1, duration: 0.3 })
            gsap.to(follower, { scale: 1, opacity: 0.6, backgroundColor: 'transparent', borderColor: '#A8CA3D', duration: 0.3 })
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.closest('a, button, .cursor-hover')) {
                onHover()
            }
        }

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.closest('a, button, .cursor-hover')) {
                onUnhover()
            }
        }

        document.addEventListener('mouseover', handleMouseOver)
        document.addEventListener('mouseout', handleMouseOut)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            document.removeEventListener('mouseover', handleMouseOver)
            document.removeEventListener('mouseout', handleMouseOut)
        }
    }, [])

    return (
        <>
            {/* Main Dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-3 h-3 bg-[#A8CA3D] rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
            ></div>
            {/* Follower Ring */}
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-10 h-10 border border-[#A8CA3D] rounded-full pointer-events-none z-[9998] transition-opacity duration-300 opacity-60 hidden lg:block"
            ></div>
        </>
    )
}
