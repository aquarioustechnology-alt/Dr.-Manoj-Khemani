import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react'

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
    return (
        <footer className="bg-[#1A1A1A] text-white pt-20">
            {/* Main Footer Content */}
            <div className="max-w-7.5xl mx-auto px-6 lg:px-8 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

                    {/* Brand & Contact Information */}
                    <div className="lg:col-span-4 space-y-8">
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

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group cursor-default">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-leaf-500 shrink-0 group-hover:bg-leaf-500 group-hover:text-white transition-all duration-300">
                                    <MapPin size={20} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-bold text-white uppercase tracking-wider">Address</p>
                                    <p className="text-white/70 text-[15px] leading-relaxed">
                                        Healing Touch Clinic, 59, Bangur Avenue,<br />
                                        Block A (Near Shyam Mandir),<br />
                                        Kolkata, West Bengal 700055
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-leaf-500 shrink-0 group-hover:bg-leaf-500 group-hover:text-white transition-all duration-300">
                                    <Phone size={20} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-bold text-white uppercase tracking-wider">Contact No</p>
                                    <div className="flex flex-col gap-1">
                                        <a href="tel:+918697449191" className="text-white/70 hover:text-leaf-400 transition-colors text-[15px]">
                                            +(91) 8697449191
                                        </a>
                                        <a href="https://wa.me/918820250803" className="text-white/70 hover:text-leaf-400 transition-colors text-[15px] flex items-center gap-2">
                                            +(91) 8820250803 <span className="text-[11px] px-2 py-0.5 bg-green-500/10 text-green-500 rounded-full border border-green-500/20 font-bold">WhatsApp</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-leaf-500 shrink-0 group-hover:bg-leaf-500 group-hover:text-white transition-all duration-300">
                                    <Mail size={20} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-bold text-white uppercase tracking-wider">Email Address</p>
                                    <a href="mailto:info@healmybones.com" className="text-white/70 hover:text-leaf-400 transition-colors text-[15px]">
                                        info@healmybones.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-white/50 hover:bg-leaf-500 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Columns Wrapper */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                            {/* Treatments */}
                            <div className="space-y-8">
                                <div className="relative">
                                    <h4 className="text-lg font-bold text-white uppercase tracking-wider pb-4 border-b border-white/10">Treatments</h4>
                                    <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-leaf-500" />
                                </div>
                                <ul className="space-y-4">
                                    {treatments.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="group flex items-center gap-3 text-white/60 hover:text-leaf-400 transition-all duration-300 text-[15px]"
                                            >
                                                <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                                <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Quick Links */}
                            <div className="space-y-8">
                                <div className="relative">
                                    <h4 className="text-lg font-bold text-white uppercase tracking-wider pb-4 border-b border-white/10">Quick Links</h4>
                                    <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-leaf-500" />
                                </div>
                                <ul className="space-y-4">
                                    {quickLinks.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="group flex items-center gap-3 text-white/60 hover:text-leaf-400 transition-all duration-300 text-[15px]"
                                            >
                                                <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                                <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Appointments */}
                            <div className="space-y-8">
                                <div className="relative">
                                    <h4 className="text-lg font-bold text-white uppercase tracking-wider pb-4 border-b border-white/10">Appointments</h4>
                                    <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-leaf-500" />
                                </div>
                                <ul className="space-y-4">
                                    {appointments.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="group flex items-center gap-3 text-white/60 hover:text-leaf-400 transition-all duration-300 text-[15px]"
                                            >
                                                <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                                <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 bg-black/20">
                <div className="max-w-7.5xl mx-auto px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-white/40 text-sm font-medium">
                            &copy; {new Date().getFullYear()} <span className="text-white/60">Dr. Manoj Khemani- All Rights Reserved.</span> Designed with care.
                        </p>
                        <div className="flex items-center gap-8">
                            <Link href="#" className="text-white/40 hover:text-leaf-400 text-sm font-medium transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-white/40 hover:text-leaf-400 text-sm font-medium transition-colors">
                                Terms of Service
                            </Link>
                            <div className="w-1 h-1 bg-white/10 rounded-full" />
                            <p className="text-white/40 text-sm font-medium italic">Orthopedic Excellence</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

