'use client'

import Button from '@/components/ui/Button'
import { Phone, Calendar } from 'lucide-react'

export default function CTA() {
    return (
        <section className="py-20 bg-leaf-900 relative z-20 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] bg-repeat opacity-20"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-leaf-500 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-leaf-400 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Ready to reclaim your <span className="text-leaf-400">active life?</span>
                </h2>
                <p className="text-xl text-leaf-100 mb-10 max-w-2xl mx-auto">
                    Consult with Kolkata&apos;s Best Orthopedic Surgeon today. Advanced technology meets compassionate care at Healing Touch Clinic.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        href="/contact"
                        className="!bg-leaf-500 hover:!bg-leaf-400 text-white !h-14 px-8 text-lg w-full sm:w-auto shadow-xl shadow-leaf-900/20"
                        icon={Calendar}
                    >
                        Book Appointment
                    </Button>
                    <Button
                        href="tel:+918697449191"
                        variant="secondary"
                        className="border-2 border-white text-white hover:bg-white hover:text-leaf-900 !h-14 px-8 text-lg w-full sm:w-auto"
                    >
                        <span className="flex items-center gap-2">
                            <Phone className="w-5 h-5" />
                            +91 86974 49191
                        </span>
                    </Button>
                </div>
            </div>
        </section>
    )
}
