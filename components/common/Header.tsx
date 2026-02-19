'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone, Calendar, Bone, Activity, Accessibility, HelpingHand, Snowflake, Link as LinkIcon, ShieldPlus, Bot, GraduationCap, Stethoscope } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
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
            { href: '/services/robotic-joint-replacement', label: 'Robotic Joint Replacement', icon: Bot, description: 'Precision-driven robotic surgery' },
            { href: '/services/knee-replacement', label: 'AR VR Knee Replacement', icon: Accessibility, description: 'Advanced robotic & traditional surgery' },
            { href: '/services/hip-replacement', label: 'Hip Replacement', icon: Activity, description: 'Minimally invasive joint restoration' },
            { href: '/services/fracture-care', label: 'Bone Fracture Treatment', icon: Bone, description: 'Trauma & injury management' },
            { href: '/services/osteoporosis', label: 'Osteoporosis Treatment', icon: ShieldPlus, description: 'Bone health & preservation' },
            { href: '/services/arthritis', label: 'Arthritis Treatment', icon: HelpingHand, description: 'Comprehensive joint pain solutions' },
            { href: '/services/ligament-injuries', label: 'Ligament Injuries', icon: LinkIcon, description: 'ACL/PCL reconstruction & repair' },
            { href: '/services/frozen-shoulder', label: 'Frozen Shoulder Care', icon: Snowflake, description: 'Restore range of motion' },
            { href: '/services/sports-medicine', label: 'Sports Medicine', icon: Stethoscope, description: 'Athletic injury & performance' },
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
            setIsScrolled(window.scrollY > 5)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <header
                className={`z-50 transition-[width,max-width,border-radius,background-color,box-shadow,border-color,top] duration-500 ease-in-out ${isScrolled
                    ? 'fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-xl shadow-md py-5 md:py-3'
                    : 'absolute top-[41px] left-0 right-0 mx-auto w-[calc(100%-30px)] max-w-7.5xl rounded-full bg-white/90 backdrop-blur-lg shadow-xl shadow-leaf-900/5 border border-white/50 py-3'
                    }`}
                style={{ backfaceVisibility: 'hidden', perspective: 1000 }}
            >
                <div className={`relative flex items-center justify-between px-3 lg:px-5 ${isScrolled ? 'max-w-7.5xl mx-auto' : ''}`}>
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
                    <nav className="static hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <div key={link.label} className={`${link.isDropdown ? 'static' : 'relative'} group px-3 py-2`}>
                                {link.isDropdown ? (
                                    <>
                                        <button className="flex items-center gap-1 text-[15px] font-medium text-black group-hover:text-leaf-600 transition-colors">
                                            {link.label}
                                            <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                                        </button>

                                        {/* Mega Menu Dropdown */}
                                        <AnimatePresence>
                                            <motion.div
                                                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                                className="absolute top-full left-0 right-0 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform pointer-events-none group-hover:pointer-events-auto"
                                            >
                                                <div className="mx-auto w-[900px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 p-6 overflow-hidden relative group/menu pointer-events-auto">
                                                    {/* Decorative background elements */}
                                                    <div className="absolute top-0 right-0 w-48 h-48 bg-leaf-50/30 rounded-full blur-3xl -mr-24 -mt-24 transition-colors group-hover/menu:bg-leaf-100/40 duration-700" />
                                                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-50/20 rounded-full blur-3xl -ml-24 -mb-24 transition-colors group-hover/menu:bg-blue-100/30 duration-700" />

                                                    <div className="relative z-10">
                                                        <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100">
                                                            <div className="flex items-center gap-2.5">
                                                                <div className="w-1 h-6 bg-leaf-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.3)]" />
                                                                <h3 className="font-bold text-gray-900 text-base tracking-tight">Specialized Orthopedic Care</h3>
                                                            </div>
                                                            <Link href="/services" className="text-xs font-bold text-leaf-600 hover:text-leaf-700 flex items-center gap-1 group/link">
                                                                View all
                                                                <span className="group-hover/link:translate-x-0.5 transition-transform">→</span>
                                                            </Link>
                                                        </div>

                                                        <div className="grid grid-cols-3 gap-3.5">
                                                            {link.items?.map((item, idx) => (
                                                                <motion.div
                                                                    key={item.href}
                                                                    initial={{ opacity: 0, y: 10 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    transition={{ delay: idx * 0.04 }}
                                                                >
                                                                    <Link
                                                                        href={item.href}
                                                                        className="flex items-center gap-4 p-3 rounded-2xl hover:bg-leaf-50/30 border border-transparent hover:border-leaf-100/30 transition-all duration-400 group/item"
                                                                    >
                                                                        <div className="w-12 h-12 shrink-0 rounded-xl bg-leaf-100 flex items-center justify-center text-leaf-600 group-hover/item:bg-leaf-500 group-hover/item:text-white transition-all duration-400 shadow-sm">
                                                                            {item.icon && <item.icon size={22} className="stroke-[1.5]" />}
                                                                        </div>
                                                                        <div className="min-w-0 space-y-0.5">
                                                                            <span className="block text-[14.5px] font-bold text-gray-900 group-hover/item:text-leaf-600 transition-colors truncate">
                                                                                {item.label}
                                                                            </span>
                                                                            <span className="block text-[11.5px] font-medium text-gray-500 leading-tight truncate">
                                                                                {item.description}
                                                                            </span>
                                                                        </div>
                                                                    </Link>
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>
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
