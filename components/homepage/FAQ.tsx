'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Plus, Minus } from 'lucide-react'
import Button from '@/components/ui/Button'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const faqItems = [
    {
        question: 'What do orthopedic doctors treat?',
        answer: 'Orthopedic doctors treat and diagnose many types of pain all over the body, including osteoarthritis, hip replacement, Knee Replacement, Osteoporosis, Ligament Injury, Arthroscopy, Frozen Shoulder, Rheumatoid Arthritis, Uric Acid Arthritis, and more. From back pain and arthritis to fractures and sports injuries, get treated for all your issues. Orthopedic doctors also focus on rehabilitation, helping you regain movement, strength, range of motion, and flexibility following an injury or surgery.',
    },
    {
        question: 'When should I see an orthopedic doctor?',
        answer: 'Persistent pain is one of the most common reasons people seek medical help from orthopedic doctors. If you have constant pain lasting more than three months or severe pain that does not subside with home treatment, you should consider making an appointment. If you\'re experiencing a noticeable decrease in your range of motion, can\'t walk without pain or discomfort, have moderate or advanced arthritis, or your daily life is affected by pain, you should see an orthopedic physician as soon as possible.',
    },
    {
        question: 'What types of surgery does Dr. Khemani perform?',
        answer: 'Dr. Khemani performs all types of orthopaedic operations. He is specially trained in Trauma surgery, Knee & Hip replacements, and Arthroscopy ligament surgeries. He is among the early adopters of Augmented Reality (AR)–assisted knee replacement technology in India, focusing on precision, alignment, and long-term mobility outcomes.',
    },
    {
        question: 'Can an orthopedic doctor treat arthritis?',
        answer: 'Yes. Orthopedic surgeons are specially trained in the surgical treatment of bone and joint problems that affect movement, like arthritis. Surgery is not the first line of treatment — orthopedic surgeons typically try more conservative treatments like exercises, physical therapy, and nutritional supplements first. There are several orthopedic procedures for arthritis, including joint replacement and arthroscopy, depending on the condition\'s severity and the patient\'s overall health.',
    },
    {
        question: 'What should I bring when I come for an appointment?',
        answer: 'You should bring all your medical records, investigation reports, X-ray, CT-scan, MRI plates, and previous prescriptions. Dr. Khemani also needs you to provide details of previous operations and any allergies. Bringing a referral letter is not mandatory, but if a physician has referred you, please bring his prescription or referral letter.',
    },
    {
        question: 'Do orthopedists always do surgery?',
        answer: 'Not necessarily. Orthopedic surgeons explore non-surgical options first, such as pain medication or rehabilitation. While there are times when surgery is the best option, an excellent orthopedic surgeon often explores other treatments before determining whether surgery is required. Non-surgical treatments include rest, physical therapy or rehab, medications/injections, and lifestyle changes.',
    },
    {
        question: 'Who is the best orthopedic doctor in Kolkata?',
        answer: 'Dr. Manoj Kumar Khemani is one of the best orthopedic surgeons in Kolkata, India. He has vast experience treating innumerable orthopedic cases over the last 20+ years. He is a highly reputed name, trusted for a wide range of bone and joint-related problems. One of the key reasons is his commitment to provide high-quality treatment at an affordable cost.',
    },
    {
        question: 'Are orthopedic treatments covered under health insurance?',
        answer: 'Yes, most orthopedic treatments including joint replacement surgeries, fracture treatments, and arthroscopic procedures are covered under health insurance policies. However, the extent of coverage may vary depending on your specific insurance plan. We recommend checking with your insurance provider for detailed information about your coverage.',
    },
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (!sectionRef.current) return

        const ctx = gsap.context(() => {
            // Set initial state
            gsap.set('.faq-reveal', { opacity: 1, y: 0 })

            gsap.from('.faq-reveal', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    once: true,
                },
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: 'power2.out',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section ref={sectionRef} className="py-[60px] bg-[#F3F3F3] relative z-20">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">

                {/* Header - Centered */}
                <div className="flex flex-col items-center text-center mb-16 faq-reveal">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-300 bg-white text-gray-600 text-[12px] font-bold tracking-[0.2em] uppercase mb-6">
                        <span className="w-2 h-2 rounded-full bg-leaf-500"></span>
                        FAQ
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-5xl leading-[1.1] font-bold text-[#1A1A1A] tracking-tight mb-6">
                        Frequently Asked <span className="text-leaf-500">Questions</span>
                    </h2>
                    <p className="text-base text-gray-500 leading-relaxed font-medium max-w-2xl">
                        Get answers to common questions about orthopedic care, treatments, and appointments with Dr. Manoj Kumar Khemani.
                    </p>
                </div>

                {/* FAQ Items - Centered */}
                <div className="flex flex-col mb-12">
                    {faqItems.slice(0, 5).map((item, index) => {
                        const isOpen = openIndex === index
                        return (
                            <div
                                key={index}
                                className={`faq-reveal border-b border-gray-300/60 transition-all duration-300 ${isOpen ? 'bg-white rounded-2xl border-transparent shadow-lg shadow-gray-200/50 mb-3 -mx-2 lg:-mx-4' : ''
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className={`w-full flex items-center justify-between gap-6 text-left transition-all duration-300 group ${isOpen ? 'px-6 lg:px-8 pt-7 pb-2' : 'py-6 px-2'
                                        }`}
                                >
                                    <span className={`text-base lg:text-lg font-semibold transition-colors duration-200 ${isOpen ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/80 group-hover:text-[#1A1A1A]'
                                        }`}>
                                        {item.question}
                                    </span>
                                    <div className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                                        ? 'bg-[#E53935] text-white rotate-0'
                                        : 'bg-gray-200 text-[#E53935] group-hover:bg-[#E53935]/10'
                                        }`}>
                                        {isOpen ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                                    </div>
                                </button>

                                {/* Answer with smooth expand */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <p className={`text-gray-600 text-[15px] leading-relaxed font-medium ${isOpen ? 'px-6 lg:px-8 pb-7 pt-2' : 'px-2'}`}>
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* View All Button - Centered */}
                <div className="flex justify-center faq-reveal">
                    <Button
                        href="/faq"
                        className="!bg-[#1A1A1A] hover:!bg-[#333] !h-[52px]"
                        iconClassName="text-black"
                    >
                        View All FAQs
                    </Button>
                </div>
            </div>
        </section>
    )
}
