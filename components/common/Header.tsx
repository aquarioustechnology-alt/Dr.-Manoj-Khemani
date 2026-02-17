'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone, Calendar, Bone, Activity, Accessibility, HelpingHand, Snowflake, Link as LinkIcon, ShieldPlus } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useAppointment } from '@/context/AppointmentContext'

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Doctor' },
    {
        href: '#',
        label: 'Treatments',
        isDropdown: true,
        items: [
            { href: '/services/knee-replacement', label: 'Knee Replacement', icon: Accessibility, description: 'Advanced robotic & traditional surgery' },
            { href: '/services/hip-replacement', label: 'Hip Replacement', icon: Activity, description: 'Minimally invasive joint restoration' },
            { href: '/services/fracture-care', label: 'Bone Fracture Treatment', icon: Bone, description: 'Complex trauma & fracture management' },
            { href: '/services/osteoporosis', label: 'Osteoporosis Treatment', icon: ShieldPlus, description: 'Bone density preservation & care' },
            { href: '/services/arthritis', label: 'Arthritis Treatment', icon: HelpingHand, description: 'Comprehensive joint pain solutions' },
            { href: '/services/ligament-injuries', label: 'Ligament Injuries', icon: LinkIcon, description: 'ACL/PCL reconstruction & repair' },
            { href: '/services/frozen-shoulder', label: 'Frozen Shoulder Treatment', icon: Snowflake, description: 'restore range of motion pain-free' },
        ]
    },
    { href: '/success-stories', label: 'Success Stories' },
]

export default function Header() {
    const { openModal } = useAppointment()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 31)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <header
                className={`z-50 transition-[width,max-width,border-radius,background-color,box-shadow,border-color] duration-500 ease-in-out ${isScrolled
                    ? 'fixed top-[31px] left-0 right-0 w-full bg-white/95 backdrop-blur-xl shadow-md py-3'
                    : 'absolute top-[31px] left-0 right-0 mx-auto w-[calc(100%-30px)] max-w-7.5xl rounded-full bg-white/90 backdrop-blur-lg shadow-xl shadow-leaf-900/5 border border-white/50 py-3'
                    }`}
                style={{ backfaceVisibility: 'hidden', perspective: 1000 }}
            >
                <div className={`flex items-center justify-between px-3 lg:px-5 ${isScrolled ? 'max-w-7.5xl mx-auto' : ''}`}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 relative z-10">
                        <div className={`relative transition-all duration-300 ${isScrolled ? 'h-10 w-40' : 'h-[52px] w-[190px]'}`}>
                            <Image
                                src="/images/homepage/logo.png"
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
                            <div key={link.label} className="relative group px-3 py-2">
                                {link.isDropdown ? (
                                    <>
                                        <button className="flex items-center gap-1 text-[15px] font-medium text-black group-hover:text-leaf-600 transition-colors">
                                            {link.label}
                                            <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                                        </button>

                                        {/* Mega Menu Dropdown */}
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                                            <div className="w-[660px] bg-white rounded-2xl shadow-2xl shadow-leaf-900/10 border border-white/50 p-6 overflow-hidden ring-1 ring-black/5">
                                                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                                                    <div className="w-1 h-6 bg-leaf-500 rounded-full" />
                                                    <h3 className="font-bold text-gray-900 text-sm tracking-wide uppercase">Specialized Orthopedic Care</h3>
                                                </div>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {link.items?.map((item) => (
                                                        <Link
                                                            key={item.href}
                                                            href={item.href}
                                                            className="flex items-start gap-4 p-3 rounded-xl hover:bg-leaf-50/50 hover:shadow-sm border border-transparent hover:border-leaf-100 transition-all duration-300 group/item"
                                                        >
                                                            <div className="w-11 h-11 rounded-xl bg-leaf-50 flex items-center justify-center text-leaf-600 group-hover/item:bg-leaf-500 group-hover/item:text-white transition-all duration-300 shadow-sm group-hover/item:shadow-leaf-500/30">
                                                                {item.icon && <item.icon size={22} className="stroke-[1.5]" />}
                                                            </div>
                                                            <div className="flex-1 space-y-0.5 group-hover/item:translate-x-1 transition-transform duration-300">
                                                                <span className="block text-[15px] font-bold text-gray-900 group-hover/item:text-leaf-700 transition-colors">
                                                                    {item.label}
                                                                </span>
                                                                <span className="block text-xs font-medium text-gray-500 group-hover/item:text-gray-600">
                                                                    {item.description}
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
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

                    <div className="hidden lg:flex items-center gap-5">
                        <a href="tel:+918697449191" className="flex items-center gap-2 group">
                            <Phone size={18} className="text-black group-hover:text-leaf-600 transition-colors" />
                            <span className="font-medium text-sm text-black group-hover:text-leaf-600 transition-colors">
                                +(91) 8697449191
                            </span>
                        </a>
                        <Button
                            onClick={openModal}
                            className="!h-[48px] !text-[15px] !font-semibold !bg-[#EC1D26] hover:!bg-[#EC1D26]/90 !pl-1 !pr-5"
                            icon={Calendar}
                            iconClassName="!text-[#EC1D26] group-hover:!text-white !w-9 !h-9"
                        >
                            Book Appointment
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="lg:hidden p-2.5 bg-leaf-50 text-leaf-600 rounded-full hover:bg-leaf-100 transition-colors"
                    >
                        <Menu size={22} />
                    </button>
                </div>
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
                                src="/images/homepage/logo.png"
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
                            onClick={() => {
                                setIsMobileMenuOpen(false)
                                openModal()
                            }}
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
