'use client'

import { useState } from 'react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { ChevronDown, MessageCircle } from 'lucide-react'

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What conditions do you treat?',
        a: 'We treat a wide range of orthopedic conditions including joint pain, arthritis, sports injuries, fractures, spinal disorders, ligament tears, and degenerative bone diseases. Our comprehensive approach ensures that every patient receives personalized care for their specific condition.',
      },
      {
        q: 'How do I book an appointment?',
        a: 'You can book an appointment through our website by filling out the contact form, calling our clinic directly at +91 33 1234 5678, or visiting our reception at Apollo Hospitals, Kolkata. We recommend booking in advance to secure your preferred time slot.',
      },
      {
        q: 'Do you offer online consultations?',
        a: 'Yes, we offer online video consultations for follow-up appointments and initial assessments. However, for first-time patients or complex cases, we recommend an in-person visit for a thorough examination.',
      },
    ],
  },
  {
    category: 'Treatment',
    questions: [
      {
        q: 'How long is the recovery after joint replacement?',
        a: 'Recovery time varies by individual and procedure. Most patients can walk with assistance within 24 hours after surgery. Full recovery typically takes 6-12 weeks for knee replacement and 4-8 weeks for hip replacement. Our advanced minimally invasive techniques help speed up recovery.',
      },
      {
        q: 'Do you offer minimally invasive surgery options?',
        a: 'Yes, we specialize in minimally invasive and arthroscopic procedures whenever possible. These techniques result in smaller incisions, less pain, reduced scarring, and faster recovery times compared to traditional open surgery.',
      },
      {
        q: 'What is arthroscopy?',
        a: 'Arthroscopy is a minimally invasive surgical procedure that allows doctors to examine and treat joint problems using a small camera called an arthroscope. It requires only small incisions, resulting in less pain and faster recovery compared to traditional surgery.',
      },
    ],
  },
  {
    category: 'Insurance & Payment',
    questions: [
      {
        q: 'What insurance plans do you accept?',
        a: 'We accept all major insurance plans and can assist with cashless hospitalization procedures. Our administrative team will help you understand your coverage and guide you through the insurance process before your treatment begins.',
      },
      {
        q: 'What payment methods are accepted?',
        a: 'We accept cash, credit/debit cards, UPI, and bank transfers. For insured patients, we offer cashless facilities with major insurance providers. EMI options are also available for certain treatments.',
      },
    ],
  },
  {
    category: 'Preparation',
    questions: [
      {
        q: 'How do I prepare for surgery?',
        a: 'Before surgery, you\'ll have a pre-operative consultation where we discuss all preparations. This includes medical evaluations, medication adjustments, and lifestyle recommendations. We provide detailed pre-surgery instructions tailored to your specific procedure.',
      },
      {
        q: 'What should I bring for my first visit?',
        a: 'Please bring your ID proof, previous medical records, current medications list, insurance card (if applicable), and any recent X-rays or MRI reports related to your condition. This helps us provide the most accurate diagnosis and treatment plan.',
      },
    ],
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  return (
    <>
      <Navigation />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-offwhite">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-leaf-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-text-primary mt-4 mb-6">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h1>
              <p className="text-text-secondary text-lg">
                Find answers to commonly asked questions about our services, treatments, and procedures.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="space-y-12">
              {faqs.map((category, catIndex) => (
                <div key={catIndex}>
                  <h2 className="text-xl font-display font-bold text-text-primary mb-6 pb-2 border-b border-gray-100">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, qIndex) => {
                      const index = `${catIndex}-${qIndex}`
                      const isOpen = openIndex === index

                      return (
                        <div
                          key={qIndex}
                          className="border border-gray-100 rounded-2xl overflow-hidden hover:border-leaf-200 transition-colors"
                        >
                          <button
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            className="w-full flex items-center justify-between p-6 text-left"
                          >
                            <span className="font-display font-semibold text-text-primary pr-4">
                              {faq.q}
                            </span>
                            <ChevronDown
                              size={20}
                              className={`text-leaf-600 flex-shrink-0 transition-transform duration-300 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              isOpen ? 'max-h-96' : 'max-h-0'
                            }`}
                          >
                            <p className="px-6 pb-6 text-text-secondary leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Still have questions */}
            <div className="mt-16 p-8 bg-leaf-50 rounded-3xl text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-leaf-100 rounded-full flex items-center justify-center">
                <MessageCircle size={32} className="text-leaf-600" />
              </div>
              <h3 className="text-xl font-display font-bold text-text-primary mb-2">
                Still have questions?
              </h3>
              <p className="text-text-muted mb-6">
                Can&apos;t find the answer you&apos;re looking for? Please reach out to our team.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-leaf-600 text-white font-semibold rounded-full hover:bg-leaf-700 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
