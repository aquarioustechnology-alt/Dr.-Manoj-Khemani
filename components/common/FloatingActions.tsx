'use client'

import { useState, useEffect } from 'react'
import { Phone, Calendar, X, User, Mail, MessageSquare, Send } from 'lucide-react'
import { gsap } from 'gsap'

export default function FloatingActions() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 300)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
        if (!isModalOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }

    return (
        <>
            {/* Floating Buttons Container */}
            <div className={`fixed bottom-8 right-8 z-[100] flex flex-col gap-4 transition-all duration-500 transform ${scrolled ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>

                {/* Call Button */}
                <a
                    href="tel:+918697449191"
                    className="w-14 h-14 bg-leaf-500 hover:bg-leaf-600 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 group"
                    title="Call Now"
                >
                    <Phone className="w-6 h-6 group-hover:animate-pulse" />
                </a>

                {/* Calendar/Appointment Button */}
                <button
                    onClick={toggleModal}
                    className="w-14 h-14 bg-[#EC1D24] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 group"
                    title="Book Appointment"
                >
                    <Calendar className="w-6 h-6" />
                </button>
            </div>

            {/* Appointment Modal Overlay */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 lg:p-8 animate-in fade-in duration-300">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={toggleModal}
                    />

                    {/* Modal Content - Expanded Width */}
                    <div className="relative w-full max-w-4xl bg-white rounded-[2rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col lg:flex-row max-h-[90vh]">

                        {/* Left Side: Visual Image Div (40% width) */}
                        <div className="hidden lg:block lg:w-[40%] bg-gray-50 relative p-[10px]">
                            <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                                <img
                                    src="/homepage/hero_new_2.jpg"
                                    alt="Medical Care"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                <div className="absolute bottom-10 left-10 right-10 text-white">
                                    <div className="w-10 h-10 rounded-lg bg-leaf-500 flex items-center justify-center mb-4">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-bold leading-tight">Patient-First Care</h3>
                                    <p className="text-sm text-white/80 font-medium">Dr. Khemani provides personalized treatment plans for every patient.</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form (60% width) */}
                        <div className="flex-1 p-8 lg:p-12 overflow-y-auto">
                            <button
                                onClick={toggleModal}
                                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-30"
                            >
                                <X className="w-6 h-6 text-gray-400" />
                            </button>

                            <div className="mb-8">
                                <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] leading-tight mb-3">
                                    Don’t put up with pain! <br />
                                    <span className="text-leaf-500">Make an appointment</span>
                                </h2>
                                <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-md">
                                    Please fill out the form below and we&apos;ll get back to you shortly to confirm your consultation.
                                </p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-leaf-500/20 focus:border-leaf-500 transition-all text-sm font-medium"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-leaf-500/20 focus:border-leaf-500 transition-all text-sm font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 00000 00000"
                                            className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-leaf-500/20 focus:border-leaf-500 transition-all text-sm font-medium"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider ml-1">Select Clinic</label>
                                        <select className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-leaf-500/20 focus:border-leaf-500 transition-all text-sm font-medium appearance-none">
                                            <option>Healing Touch City</option>
                                            <option>Healing Touch Clinic (VIP Rd)</option>
                                            <option>Healing Touch Ultadanga</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider ml-1">Consultation Time</label>
                                    <select className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-leaf-500/20 focus:border-leaf-500 transition-all text-sm font-medium appearance-none">
                                        <option>Morning (10:00 AM - 1:00 PM)</option>
                                        <option>Evening (5:00 PM - 8:00 PM)</option>
                                    </select>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider ml-1">Your Message</label>
                                    <textarea
                                        rows={2}
                                        placeholder="Briefly describe your condition..."
                                        className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-leaf-500/20 focus:border-leaf-500 transition-all text-sm font-medium resize-none shadow-sm"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="group relative inline-flex items-center bg-leaf-500 text-white rounded-full transition-all duration-300 hover:bg-leaf-600 hover:shadow-lg hover:-translate-y-0.5 pl-1 pr-6 py-1 mx-auto mt-4"
                                >
                                    <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-full transition-all duration-300 group-hover:bg-transparent group-hover:text-white shrink-0 mr-3 text-leaf-500">
                                        <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </div>
                                    <span className="font-bold text-sm tracking-wide text-left uppercase">
                                        Confirm Appointment
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
