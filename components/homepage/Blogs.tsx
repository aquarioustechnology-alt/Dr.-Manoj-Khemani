'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronLeft, ChevronRight, ArrowUpRight, Calendar } from 'lucide-react'
import Link from 'next/link'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const blogs = [
    {
        id: 1,
        title: '4 Benefits of Advanced Robotic Knee Replacement',
        excerpt: 'As a joint replacement surgeon, I often meet patients who are curious about the latest advancements in knee surgery. Robotic knee replacement is transforming outcomes with unprecedented precision.',
        image: '/homepage/Dr Image 11.webp',
        date: 'Jan 15, 2025',
        category: 'Knee Replacement',
        link: 'https://www.healmybones.com/advanced-robotic-knee-replacement/',
    },
    {
        id: 2,
        title: 'Augmented Reality (AR) Technology in Knee Replacement Surgery',
        excerpt: 'In the realm of knee replacement surgery, Augmented Reality represents a groundbreaking advancement that enhances surgical precision and improves patient outcomes significantly.',
        image: '/homepage/Dr Image 12.webp',
        date: 'Dec 28, 2024',
        category: 'Technology',
        link: 'https://www.healmybones.com/augmented-reality-ar-technology-in-knee-replacement-surgery/',
    },
    {
        id: 3,
        title: 'Gout Diet: What to Eat and What Not',
        excerpt: 'Gout, a type of inflammatory arthritis, occurs due to excessive uric acid in the body. Learn about the dietary changes that can help manage and prevent gout flare-ups effectively.',
        image: '/homepage/Dr Image 13.webp',
        date: 'Dec 10, 2024',
        category: 'Nutrition',
        link: 'https://www.healmybones.com/gout-diet-what-to-eat-and-what-not-best-gout-treatment/',
    },
    {
        id: 4,
        title: 'Play Sports? You\'re at Greater Risk for Arthritis',
        excerpt: 'Keeping fit and active through sports is fantastic for overall health, but certain sports activities can increase your risk of developing arthritis later in life.',
        image: '/homepage/Dr Image 17.webp',
        date: 'Nov 22, 2024',
        category: 'Sports Injury',
        link: 'https://www.healmybones.com/play-sports-youre-at-greater-risk-for-arthritis/',
    },
    {
        id: 5,
        title: 'Post-Arthroscopy Rehabilitation: 5 Tips for More Effective Recovery',
        excerpt: 'Arthroscopy can be a game-changer for people dealing with joint issues. Here are five essential tips to ensure a smooth and effective recovery after your procedure.',
        image: '/homepage/Dr Image 20.webp',
        date: 'Nov 5, 2024',
        category: 'Recovery',
        link: 'https://www.healmybones.com/post-arthroscopy-rehabilitation-5-tips-for-more-effective-recovery/',
    },
    {
        id: 6,
        title: 'Common Reasons Knee Replacement Surgeries Fail',
        excerpt: 'Knee pain can be frustrating, affecting one\'s mobility and quality of life. Understanding common reasons for failure can help ensure better outcomes for your surgery.',
        image: '/homepage/Dr Image 21.webp',
        date: 'Oct 18, 2024',
        category: 'Knee Replacement',
        link: 'https://www.healmybones.com/common-reasons-knee-replacement-surgeries-fail/',
    },
    {
        id: 7,
        title: 'Is Your Sedentary Lifestyle Destroying Your Hip?',
        excerpt: 'In today\'s fast-paced, technology-driven world, a sedentary lifestyle has become increasingly common. Discover how prolonged sitting affects your hip health and what you can do.',
        image: '/homepage/Dr Image 8.webp',
        date: 'Oct 2, 2024',
        category: 'Hip Care',
        link: 'https://www.healmybones.com/is-your-sedentary-lifestyle-destroying-your-hip/',
    },
    {
        id: 8,
        title: 'Physical Therapy After Orthopedic Surgery: All You Need to Know',
        excerpt: 'Physical therapy is a crucial aspect of the recovery process after orthopedic surgery. It helps restore movement, build strength, and get you back to your daily activities.',
        image: '/homepage/Dr Image 7.webp',
        date: 'Sep 15, 2024',
        category: 'Rehabilitation',
        link: 'https://www.healmybones.com/physical-therapy-after-orthopedic-surgery-all-you-need-to-know/',
    },
    {
        id: 9,
        title: 'Hip Pain in Young Adults: All You Need to Know',
        excerpt: 'Hip problems aren\'t just reserved for the elders. Especially with modern sedentary lifestyles, young adults are increasingly experiencing hip pain and mobility issues.',
        image: '/homepage/Dr Image 2.webp',
        date: 'Aug 30, 2024',
        category: 'Hip Care',
        link: 'https://www.healmybones.com/hip-pain-in-young-adults-all-you-need-to-know/',
    },
]

const CARDS_PER_VIEW = 3

export default function Blogs() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const sectionRef = useRef<HTMLElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)

    const maxIndex = blogs.length - CARDS_PER_VIEW

    useEffect(() => {
        if (!sectionRef.current) return

        const ctx = gsap.context(() => {
            gsap.from('.blog-reveal', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const goNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
    }

    const goPrev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0))
    }

    return (
        <section ref={sectionRef} className="py-20 bg-white relative z-20 overflow-hidden">
            <div className="max-w-7.5xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 blog-reveal">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-600 text-[12px] font-bold tracking-[0.2em] uppercase mb-6">
                            <span className="w-2 h-2 rounded-full bg-leaf-500"></span>
                            Blog & Insights
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-5xl leading-[1.1] font-bold text-[#1A1A1A] tracking-tight">
                            Latest from <span className="text-leaf-500">Our Blog</span>
                        </h2>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-4 p-2 rounded-full border border-gray-100 bg-gray-50/50">
                        <button
                            onClick={goPrev}
                            disabled={currentIndex === 0}
                            className={`w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${currentIndex === 0
                                ? 'border-gray-100 text-gray-200 cursor-not-allowed'
                                : 'border-gray-200 text-[#1A1A1A] hover:bg-leaf-500 hover:border-leaf-500 hover:text-white'
                                }`}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={goNext}
                            disabled={currentIndex >= maxIndex}
                            className={`w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${currentIndex >= maxIndex
                                ? 'border-gray-100 text-gray-200 cursor-not-allowed'
                                : 'border-gray-200 text-[#1A1A1A] hover:bg-leaf-500 hover:border-leaf-500 hover:text-white'
                                }`}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Blog Cards Carousel */}
                <div className="overflow-hidden blog-reveal">
                    <div
                        ref={trackRef}
                        className="flex transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / CARDS_PER_VIEW)}%)`,
                        }}
                    >
                        {blogs.map((blog) => (
                            <div
                                key={blog.id}
                                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                            >
                                <Link href={blog.link} target="_blank" className="group block">
                                    <div className="bg-white rounded-[18px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-500 h-full flex flex-col">

                                        {/* Image */}
                                        <div className="relative h-[240px] overflow-hidden">
                                            <img
                                                src={blog.image}
                                                alt={blog.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            {/* Category Badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className="inline-block px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold text-[#1A1A1A] tracking-wide shadow-sm">
                                                    {blog.category}
                                                </span>
                                            </div>

                                            {/* Arrow icon on hover */}
                                            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-sm">
                                                <ArrowUpRight size={18} className="text-[#1A1A1A]" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-1">
                                            {/* Date */}
                                            <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                                                <Calendar size={14} />
                                                <span className="font-medium">{blog.date}</span>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-lg font-bold text-[#1A1A1A] mb-3 leading-snug group-hover:text-leaf-600 transition-colors duration-300 line-clamp-2">
                                                {blog.title}
                                            </h3>

                                            {/* Excerpt */}
                                            <p className="text-sm text-gray-500 leading-relaxed font-medium line-clamp-3 flex-1">
                                                {blog.excerpt}
                                            </p>

                                            {/* Read More */}
                                            <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-between">
                                                <span className="text-sm font-bold text-[#1A1A1A] group-hover:text-leaf-600 transition-colors">
                                                    Read Article
                                                </span>
                                                <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-leaf-500 flex items-center justify-center transition-all duration-300">
                                                    <ArrowUpRight size={14} className="text-gray-500 group-hover:text-white transition-colors" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Progress Dots */}
                <div className="flex items-center justify-center gap-2 mt-10 blog-reveal">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${currentIndex === i
                                ? 'w-8 bg-leaf-500'
                                : 'w-3 bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
