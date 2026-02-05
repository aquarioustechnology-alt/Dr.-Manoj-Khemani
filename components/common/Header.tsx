'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Doctor' },
    {
        href: '#',
        label: 'Treatments',
        isDropdown: true,
        items: [
            { href: '/services/knee-replacement', label: 'Knee Replacement' },
            { href: '/services/hip-replacement', label: 'Hip Replacement' },
            { href: '/services/arthroscopy', label: 'Arthroscopy' },
            { href: '/services/fracture-care', label: 'Fracture Care' },
        ]
    },
    { href: '/success-stories', label: 'Success Stories' },
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <header
                className={`z-50 transition-all duration-500 ease-in-out flex items-center justify-between px-6 lg:px-10
                    ${isScrolled
                        ? 'fixed top-0 left-0 right-0 w-full rounded-none bg-white/95 backdrop-blur-xl shadow-md py-3'
                        : 'absolute top-[23px] left-[85px] w-[calc(100%-170px)] rounded-full bg-white/90 backdrop-blur-lg shadow-xl shadow-leaf-900/5 border border-white/50 py-3'
                    }`}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 relative z-10">
                    <div className={`relative transition-all duration-300 ${isScrolled ? 'h-10 w-40' : 'h-[52px] w-[190px]'}`}>
                        <Image
                            src="/homepage/logo.png"
                            alt="Dr. Manoj Khemani"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <div key={link.label} className="relative group px-4 py-2">
                            {link.isDropdown ? (
                                <>
                                    <button className="flex items-center gap-1 text-[15px] font-medium text-black group-hover:text-leaf-600 transition-colors">
                                        {link.label}
                                        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                                    </button>

                                    {/* Dropdown Menu */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                                        <div className="w-56 bg-white rounded-2xl shadow-xl border border-leaf-100/50 p-2 overflow-hidden">
                                            {link.items?.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className="block px-4 py-3 text-sm font-medium text-black hover:bg-leaf-50 hover:text-leaf-600 rounded-xl transition-colors"
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="text-[15px] font-medium text-black hover:text-leaf-600 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center">
                    <Button href="/contact" className="!h-[56px] !text-[16px] !font-semibold mr-1">
                        Book An Appointment
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="lg:hidden p-2.5 bg-leaf-50 text-leaf-600 rounded-full hover:bg-leaf-100 transition-colors"
                >
                    <Menu size={22} />
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                <div className="absolute inset-0 bg-white" />
                <div className="relative h-full flex flex-col overflow-y-auto">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-100">
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="relative h-9 w-40">
                            <Image
                                src="/homepage/logo.png"
                                alt="Dr. Manoj Khemani"
                                fill
                                className="object-contain object-left"
                            />
                        </Link>
                        <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-50 rounded-full">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Mobile Links */}
                    <div className="flex-1 px-6 py-8 flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <div key={link.label} className="border-b border-gray-50 last:border-0 pb-4 mb-4 last:mb-0">
                                {link.isDropdown ? (
                                    <div className="space-y-4">
                                        <span className="text-xl font-bold text-text-primary block">{link.label}</span>
                                        <div className="pl-4 border-l-2 border-leaf-100 space-y-3">
                                            {link.items?.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="block text-base font-medium text-text-secondary hover:text-leaf-600"
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-xl font-bold text-text-primary hover:text-leaf-600"
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile CTA */}
                    <div className="p-6 bg-gray-50">
                        <Button
                            href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full !h-[60px]"
                        >
                            Book An Appointment
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
