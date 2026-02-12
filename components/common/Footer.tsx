'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useAppointment } from '@/context/AppointmentContext'

const quickLinks = [
    { href: '/about', label: 'About Dr. Khemani' },
    { href: '/success-stories', label: 'Success Stories' },
    { href: '/faq', label: 'FAQs' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/testimonials', label: 'Testimonials' },
]

const treatments = [
    { href: '/services/knee-replacement', label: 'Knee Replacement' },
    { href: '/services/hip-replacement', label: 'Hip Replacement' },
    { href: '/services/fracture-care', label: 'Bone Fracture Treatment' },
    { href: '/services/osteoporosis', label: 'Osteoporosis Treatment' },
    { href: '/services/arthritis', label: 'Arthritis Treatment' },
    { href: '/services/ligament-injuries', label: 'Ligament Injuries' },
    { href: '/services/frozen-shoulder', label: 'Frozen Shoulder Treatment' },
]

const appointments = [
    { href: '/contact', label: 'Book an Appointment' },
    { href: '#', label: 'Clinic Schedule' },
    { href: '#', label: 'Hospital Affiliation' },
]

export default function Footer() {
    const { openModal } = useAppointment()
    return (
        <footer className="bg-[#1A1A1A] text-white pt-20 relative z-20">
            {/* Main Footer Content */}
            <div className="max-w-7.5xl mx-auto px-6 lg:px-8 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

                    {/* Brand & Stats */}
                    <div className="lg:col-span-4 space-y-10">
                        <div className="space-y-6">
                            <Link href="/" className="inline-block bg-white rounded-xl p-3 shadow-lg group transition-all duration-300 hover:scale-105">
                                <div className="relative h-12 w-48">
                                    <Image
                                        src="/homepage/logo.png"
                                        alt="Dr. Manoj Khemani"
                                        fill
                                        className="object-contain object-left"
                                    />
                                </div>
                            </Link>
                            <p className="text-white/60 text-[15px] leading-relaxed max-w-sm">
                                Dr. Manoj Khemani is a senior Orthopedic Surgeon in Kolkata with 22+ years of experience, specializing in advanced joint replacement and sports medicine.
                            </p>

                            {/* Stats Badge */}
                            <div className="flex items-center gap-8 pt-2">
                                <div className="space-y-1">
                                    <p className="text-4xl font-bold text-leaf-500 tracking-tight">22+</p>
                                    <p className="text-[12px] text-white/40 uppercase font-black tracking-widest leading-none">Years Exp.</p>
                                </div>
                                <div className="w-px h-10 bg-white/10" />
                                <div className="space-y-1">
                                    <p className="text-4xl font-bold text-leaf-500 tracking-tight">25k+</p>
                                    <p className="text-[12px] text-white/40 uppercase font-black tracking-widest leading-none">Happy Patients</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-white/50 hover:bg-leaf-500 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg border border-white/5"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Columns Wrapper */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                            {/* Specialized Treatment */}
                            <div className="space-y-8">
                                <div className="relative">
                                    <h4 className="text-lg font-bold text-white uppercase tracking-wider pb-4 border-b border-white/10">Specialized Treatments</h4>
                                    <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-leaf-500" />
                                </div>
                                <ul className="space-y-4">
                                    {treatments.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="block text-white/60 hover:text-leaf-500 transition-all duration-300 text-[15px] font-medium"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Patients Corner */}
                            <div className="space-y-8">
                                <div className="relative">
                                    <h4 className="text-lg font-bold text-white uppercase tracking-wider pb-4 border-b border-white/10">Patients Corner</h4>
                                    <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-leaf-500" />
                                </div>
                                <ul className="space-y-4">
                                    {quickLinks.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="block text-white/60 hover:text-leaf-500 transition-all duration-300 text-[15px] font-medium"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Visit Clinic */}
                            <div className="space-y-8">
                                <div className="relative">
                                    <h4 className="text-lg font-bold text-white uppercase tracking-wider pb-4 border-b border-white/10">Visit Clinic</h4>
                                    <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-leaf-500" />
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-3 group">
                                        <MapPin size={18} className="text-leaf-500 mt-1 shrink-0" />
                                        <p className="text-white/60 text-[14px] leading-relaxed">
                                            Healing Touch Clinic, 59, Bangur Avenue, Block A, Kolkata 700055
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <a href="tel:+918697449191" className="flex items-center gap-3 text-white/60 hover:text-leaf-500 transition-colors">
                                            <Phone size={18} className="text-leaf-500" />
                                            <span className="text-[15px] font-medium">+(91) 86974 49191</span>
                                        </a>
                                        <a href="mailto:info@healmybones.com" className="flex items-center gap-3 text-white/60 hover:text-leaf-500 transition-colors">
                                            <Mail size={18} className="text-leaf-500" />
                                            <span className="text-[15px] font-medium">info@healmybones.com</span>
                                        </a>
                                    </div>
                                    <div className="pt-2">
                                        <Button
                                            onClick={openModal}
                                            className="!pl-1 !pr-5 !py-1 !h-12 shadow-xl shadow-leaf-900/10"
                                            iconClassName="!w-9 !h-9 !text-leaf-600"
                                        >
                                            Book Appointment
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 bg-black/20">
                <div className="max-w-7.5xl mx-auto px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-white/40 text-[13px] font-medium tracking-wide leading-relaxed text-center md:text-left">
                            &copy; {new Date().getFullYear()} <span className="text-white/60">Dr. Manoj Khemani - All Rights Reserved.</span> Designed by <a href="#" className="text-leaf-500/80 hover:text-leaf-500 hover:underline">Aquarious Technology</a>
                        </p>
                        <div className="flex items-center gap-8">
                            <Link href="#" className="text-white/30 hover:text-leaf-500 text-[13px] font-bold transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-white/30 hover:text-leaf-500 text-[13px] font-bold transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

