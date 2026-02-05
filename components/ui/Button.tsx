'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
    href?: string
    onClick?: () => void
    children: React.ReactNode
    variant?: 'primary' | 'secondary'
    className?: string
    icon?: React.ElementType
}

export default function Button({
    href,
    onClick,
    children,
    variant = 'primary',
    className = '',
    icon: Icon = ArrowRight
}: ButtonProps) {

    const BaseButton = ({ children: btnChildren, ...props }: any) => {
        if (href) {
            return <Link href={href} {...props}>{btnChildren}</Link>
        }
        return <button onClick={onClick} {...props}>{btnChildren}</button>
    }

    if (variant === 'primary') {
        return (
            <BaseButton
                className={`group relative inline-flex items-center bg-leaf-500 text-white rounded-full transition-all duration-300 hover:bg-leaf-600 hover:shadow-lg hover:-translate-y-0.5 pl-1 pr-6 py-1 ${className}`}
            >
                {/* Icon Container - White Circle on Left */}
                <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-full text-leaf-500 transition-all duration-300 group-hover:bg-transparent group-hover:text-white shrink-0 mr-3">
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                {/* Text on Right */}
                <span className="font-bold text-base sm:text-lg tracking-wide text-left">
                    {children}
                </span>
            </BaseButton>
        )
    }

    // Secondary Variant
    return (
        <BaseButton
            className={`group relative inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-leaf-500 text-leaf-600 rounded-full overflow-hidden transition-all duration-300 hover:bg-leaf-50 hover:border-leaf-600 ${className}`}
        >
            <span className="relative z-10 font-semibold text-lg transition-colors duration-300">
                {children}
            </span>
        </BaseButton>
    )
}
