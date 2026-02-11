'use client'

import Link from 'next/link'
import { ArrowRight, Phone, MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function CTASection() {
    return (
        <section className="py-24 lg:py-32 bg-offwhite relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-leaf-200 rounded-full blur-[100px] opacity-30" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-leaf-300 rounded-full blur-[100px] opacity-20" />
            </div>

            <div className="max-w-7.5xl mx-auto px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                        <span className="text-leaf-600 font-semibold text-sm uppercase tracking-wider">Start Your Journey</span>
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-text-primary mt-4 mb-6 leading-tight">
                            Begin Your Path to<br />
                            <span className="gradient-text">Pain-Free Living</span>
                        </h2>
                        <p className="text-text-secondary text-lg leading-relaxed mb-8">
                            Take the first step towards recovery. Schedule a consultation with Dr. Khemani
                            and discover personalized treatment options tailored to your condition.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button href="/contact">
                                Book Appointment
                            </Button>
                            <Button href="tel:+913312345678" variant="secondary" icon={Phone}>
                                +91 33 1234 5678
                            </Button>
                        </div>
                    </div>

                    {/* Info Cards */}
                    <div className="relative">
                        <div className="grid gap-6">
                            {/* Location Card */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-100 flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-leaf-100 flex items-center justify-center text-leaf-600 flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-display font-semibold text-text-primary mb-1">Visit Our Clinic</h3>
                                    <p className="text-text-muted text-sm">
                                        Apollo Hospitals, 58 Canal Circular Road<br />
                                        Kolkata - 700054, West Bengal
                                    </p>
                                </div>
                            </div>

                            {/* Hours Card */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-100">
                                <h3 className="font-display font-semibold text-text-primary mb-4">Consultation Hours</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-text-muted">Monday - Friday</span>
                                        <span className="text-text-primary font-medium">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-text-muted">Saturday</span>
                                        <span className="text-text-primary font-medium">9:00 AM - 2:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-text-muted">Sunday</span>
                                        <span className="text-red-500 font-medium">Closed</span>
                                    </div>
                                </div>
                            </div>

                            {/* Emergency Card */}
                            <div className="bg-leaf-600 rounded-2xl p-6 text-white">
                                <h3 className="font-display font-semibold mb-2">Emergency Contact</h3>
                                <p className="text-white/80 text-sm mb-3">
                                    For urgent orthopedic emergencies, please call our emergency line.
                                </p>
                                <a href="tel:+913312345678" className="text-xl font-display font-bold hover:text-leaf-200 transition-colors">
                                    +91 33 1234 5678
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
