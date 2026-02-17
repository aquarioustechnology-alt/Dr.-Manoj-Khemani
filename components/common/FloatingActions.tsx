'use client'

import { useState, useEffect, useRef } from 'react'
import { Phone, Calendar, X, Send, ChevronDown, Check, ArrowUp } from 'lucide-react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useAppointment } from '@/context/AppointmentContext'

// Clinic Data sourced from CTASection
const clinics = [
    {
        name: 'Healing Touch Clinic',
        timings: [
            { day: 'Mon', hours: '10 AM – 3 PM' },
            { day: 'Tue', hours: '10 AM – 3 PM' },
            { day: 'Fri', hours: '10 AM – 3 PM' },
            { day: 'Sat', hours: '10 AM – 3 PM' }
        ]
    },
    {
        name: 'Manipal (AMRI) Hospital, Salt Lake',
        timings: [
            { day: 'Tue', hours: '4 PM – 6 PM' },
            { day: 'Thu', hours: '4 PM – 6 PM' }
        ]
    },
    {
        name: 'Manipal (AMRI) Hospital, Mukundapur',
        timings: [
            { day: 'Wed', hours: '4 PM – 6 PM' },
            { day: 'Fri', hours: '4 PM – 6 PM' }
        ]
    }
]

// Custom Dropdown Component
function CustomSelect({ label, options, value, onChange, placeholder, icon: Icon }: any) {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="space-y-1.5" ref={containerRef}>
            <label className="text-[12px] font-semibold text-[#1A1A1A] uppercase tracking-wider ml-1">{label}</label>
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-full h-[46px] px-5 bg-gray-50 border border-solid rounded-xl flex items-center justify-between transition-all duration-300 group
                        ${isOpen ? 'border-leaf-500 ring-2 ring-leaf-500/20 bg-white' : 'border-gray-200/60 hover:border-leaf-400 hover:bg-white'}
                    `}
                >
                    <span className={`text-[13px] font-normal truncate ${value ? 'text-[#1A1A1A]' : 'text-gray-400'}`}>
                        {value || placeholder}
                    </span>
                    <ChevronDown
                        size={18}
                        className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-leaf-500' : 'group-hover:text-gray-600'}`}
                    />
                </button>

                {/* Dropdown Menu */}
                <div
                    className={`absolute top-[calc(100%+8px)] left-0 right-0 bg-white border border-gray-100 rounded-xl shadow-xl shadow-leaf-900/5 z-50 overflow-hidden transition-all duration-200 origin-top
                        ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'}
                    `}
                >
                    <div className="max-h-[240px] overflow-y-auto py-1 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                        {options.map((option: string, idx: number) => (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => {
                                    onChange(option)
                                    setIsOpen(false)
                                }}
                                className="w-full text-left px-5 py-2.5 text-[13px] font-normal text-gray-600 hover:bg-leaf-50 hover:text-leaf-700 transition-colors flex items-center justify-between group"
                            >
                                <span>{option}</span>
                                {value === option && <Check size={16} className="text-leaf-500" />}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function FloatingActions() {
    const { isModalOpen, toggleModal, closeModal } = useAppointment()
    const [scrolled, setScrolled] = useState(false)

    // Form State
    const [loading, setLoading] = useState(false)
    const [selectedClinic, setSelectedClinic] = useState('')
    const [selectedTime, setSelectedTime] = useState('')
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)

    // Derived Time Options
    const timeOptions = selectedClinic
        ? clinics.find(c => c.name === selectedClinic)?.timings.map(t => `${t.day}: ${t.hours}`) || []
        : []

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 300)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setLoading(false)
        closeModal()
    }

    return (
        <>
            <style jsx global>{`
                .react-datepicker-wrapper {
                    width: 100%;
                }
                .react-datepicker {
                    font-family: inherit;
                    border: 1px solid #f1f5f9;
                    border-radius: 1rem;
                    shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
                    overflow: hidden;
                }
                .react-datepicker__header {
                    background-color: #f8fafc;
                    border-bottom: 1px solid #f1f5f9;
                }
                .react-datepicker__day--selected {
                    background-color: #A8CA3D !important;
                }
                .react-datepicker__day:hover {
                    background-color: #f1f8e9 !important;
                }
            `}</style>
            {/* Floating Buttons Container */}
            <div className={`fixed bottom-8 right-8 z-[100] flex flex-col gap-4 transition-all duration-500 transform ${scrolled ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none max-lg:translate-y-0 max-lg:opacity-100 max-lg:pointer-events-auto'}`}>





                {/* Scroll To Top Button */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="w-14 h-14 bg-white text-leaf-500 border border-leaf-100 rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:bg-leaf-50 transition-all duration-300 group"
                    title="Scroll to Top"
                >
                    <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>

            {/* Side Sticky Buttons Container */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[90] flex flex-col gap-3 items-end">

                {/* Book Appointment Button */}
                <button
                    onClick={toggleModal}
                    className="bg-black text-white py-6 px-4 rounded-l-[20px] shadow-2xl flex flex-col items-center gap-3 transition-all duration-300 group border-l-[4px] border-[#EC1D24] hover:border-black overflow-hidden relative"
                >
                    <div className="absolute inset-0 bg-white translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 z-0"></div>
                    <span
                        className="relative z-10 font-bold text-[13px] tracking-wide whitespace-nowrap group-hover:text-black transition-colors duration-300"
                        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
                    >
                        Book an Appointment
                    </span>
                    <div className="relative z-10 w-5 h-5 shrink-0">
                        <img
                            src="/images/homepage/Calendar icon.png"
                            alt="Calendar"
                            className="w-full h-full object-contain brightness-0 invert group-hover:brightness-0 group-hover:invert-0 transition-all duration-300"
                        />
                    </div>
                </button>

                {/* Call Button */}
                <a
                    href="tel:+918697449191"
                    className="bg-leaf-500 text-white py-4 px-4 rounded-l-[20px] shadow-2xl flex flex-col items-center justify-center gap-3 transition-all duration-300 group overflow-hidden relative"
                >
                    <div className="absolute inset-0 bg-white translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 z-0"></div>
                    <Phone size={24} className="relative z-10 text-white group-hover:text-leaf-500 transition-colors duration-300" />
                </a>
            </div>

            {/* Appointment Modal Overlay */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 lg:p-6 animate-in fade-in duration-300">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={closeModal}
                    />

                    {/* Modal Content - Adjusted Width */}
                    <div className="relative w-full max-w-5xl bg-white rounded-[2rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col lg:flex-row max-h-[90vh] lg:h-auto">

                        {/* Left Side: Visual Image Div (Reduced width to 32%) */}
                        <div className="hidden lg:block lg:w-[32%] bg-gray-50 relative p-[8px]">
                            <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative">
                                <img
                                    src="/images/homepage/hero_new_2.jpg"
                                    alt="Medical Care"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <div className="w-10 h-10 rounded-lg bg-leaf-500 flex items-center justify-center mb-4 shadow-lg shadow-leaf-900/20">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-bold leading-tight mb-2">Patient-First Care</h3>
                                    <p className="text-xs text-white/80 font-medium leading-relaxed">Personalized treatment plans tailored to your specific needs and recovery goals.</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form (Expanded width) */}
                        <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
                            <button
                                onClick={closeModal}
                                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-30"
                            >
                                <X className="w-6 h-6 text-gray-400" />
                            </button>

                            <div className="mb-4 lg:px-6">
                                <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] leading-[1.15] mb-2">
                                    Don’t put up with pain! <span className="text-leaf-500">Make an appointment</span>
                                </h2>
                                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                    Please fill out the form below and we&apos;ll get back to you shortly.
                                </p>
                            </div>

                            <form className="space-y-4 lg:px-6 max-w-3xl mx-auto" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Row 1: Name & Phone */}
                                    <div className="space-y-1.5">
                                        <label className="text-[12px] font-semibold text-[#1A1A1A] uppercase tracking-wider ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full h-[46px] px-5 bg-gray-50 border border-gray-200/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-leaf-500/20 focus:border-leaf-500 hover:border-leaf-400 hover:bg-white transition-all text-[13px] font-normal text-[#1A1A1A] placeholder:text-gray-400 placeholder:text-[13px] placeholder:font-normal"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[12px] font-semibold text-[#1A1A1A] uppercase tracking-wider ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 00000 00000"
                                            className="w-full h-[46px] px-5 bg-gray-50 border border-gray-200/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-leaf-500/20 focus:border-leaf-500 hover:border-leaf-400 hover:bg-white transition-all text-[13px] font-normal text-[#1A1A1A] placeholder:text-gray-400 placeholder:text-[13px] placeholder:font-normal"
                                        />
                                    </div>

                                    {/* Row 2: Email Address and Select Clinic */}
                                    <div className="space-y-1.5">
                                        <label className="text-[12px] font-semibold text-[#1A1A1A] uppercase tracking-wider ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="w-full h-[46px] px-5 bg-gray-50 border border-gray-200/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-leaf-500/20 focus:border-leaf-500 hover:border-leaf-400 hover:bg-white transition-all text-[13px] font-normal text-[#1A1A1A] placeholder:text-gray-400 placeholder:text-[13px] placeholder:font-normal"
                                        />
                                    </div>
                                    <CustomSelect
                                        label="Select Clinic"
                                        placeholder="Choose Clinic Location"
                                        value={selectedClinic}
                                        onChange={(val: string) => {
                                            setSelectedClinic(val)
                                            setSelectedTime('') // Reset time when clinic changes
                                        }}
                                        options={clinics.map(c => c.name)}
                                    />

                                    {/* Row 3: Select Date and Consultation Time */}
                                    <div className="space-y-1.5">
                                        <label className="text-[12px] font-semibold text-[#1A1A1A] uppercase tracking-wider ml-1">Select Date</label>
                                        <div className="relative">
                                            <DatePicker
                                                selected={selectedDate}
                                                onChange={(date: Date | null) => setSelectedDate(date)}
                                                placeholderText="Choose Appointment Date"
                                                className="w-full h-[46px] px-5 bg-gray-50 border border-gray-200/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-leaf-500/20 focus:border-leaf-500 hover:border-leaf-400 hover:bg-white transition-all text-[13px] font-normal text-[#1A1A1A] placeholder:text-gray-400 placeholder:text-[13px] placeholder:font-normal"
                                                dateFormat="MMMM d, yyyy"
                                                minDate={new Date()}
                                            />
                                            <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                        </div>
                                    </div>
                                    <CustomSelect
                                        label="Consultation Time"
                                        placeholder={selectedClinic ? "Select Preferred Time" : "Select Clinic First"}
                                        value={selectedTime}
                                        onChange={setSelectedTime}
                                        options={timeOptions}
                                    />

                                    {/* Row 4: Message (Full Width) */}
                                    <div className="space-y-1.5 md:col-span-2">
                                        <label className="text-[12px] font-semibold text-[#1A1A1A] uppercase tracking-wider ml-1">Your Message</label>
                                        <textarea
                                            rows={2}
                                            placeholder="Briefly describe your condition..."
                                            className="w-full px-5 py-3 bg-gray-50 border border-gray-200/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-leaf-500/20 focus:border-leaf-500 hover:border-leaf-400 hover:bg-white transition-all text-[13px] font-normal text-[#1A1A1A] resize-none shadow-sm placeholder:text-gray-400 placeholder:text-[13px] placeholder:font-normal"
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group relative inline-flex items-center bg-leaf-500 text-white rounded-full transition-all duration-300 hover:bg-leaf-600 hover:shadow-lg hover:-translate-y-0.5 pl-1 pr-8 py-1.5 mx-auto mt-2 disabled:opacity-70 disabled:cursor-not-allowed block mx-auto"
                                >
                                    <div className="relative flex items-center justify-center w-11 h-11 bg-white rounded-full transition-all duration-300 group-hover:bg-transparent group-hover:text-white shrink-0 mr-4 text-leaf-500 border-2 border-transparent group-hover:border-white/20">
                                        <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </div>
                                    <span className="font-bold text-sm tracking-widest text-left uppercase">
                                        {loading ? 'Confirming...' : 'Confirm Appointment'}
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
