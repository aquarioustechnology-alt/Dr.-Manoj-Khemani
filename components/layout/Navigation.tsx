'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-sm py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-leaf-400 to-leaf-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                MK
              </div>
              <div className="hidden sm:block">
                <span className={`block font-display font-semibold text-lg leading-tight transition-colors ${isScrolled ? 'text-text-primary' : 'text-text-primary'}`}>
                  Dr. Manoj Khemani
                </span>
                <span className={`block text-xs transition-colors ${isScrolled ? 'text-text-muted' : 'text-text-secondary'}`}>
                  Orthopedic Surgeon
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors hover:text-leaf-600 group ${
                    isScrolled ? 'text-text-secondary' : 'text-text-secondary'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-leaf-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+913312345678" className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-leaf-600 transition-colors">
                <Phone size={16} />
                <span>+91 33 1234 5678</span>
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 bg-leaf-600 text-white text-sm font-semibold rounded-full hover:bg-leaf-700 transition-all duration-300 hover:shadow-lg hover:shadow-leaf-200 hover:-translate-y-0.5"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-text-primary"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-white" />
        <div className="relative h-full flex flex-col">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-leaf-400 to-leaf-600 flex items-center justify-center text-white font-bold text-lg">
                MK
              </div>
              <span className="font-display font-semibold text-lg">Dr. Manoj Khemani</span>
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
              <X size={24} />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex-1 flex flex-col justify-center px-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-4 text-2xl font-display font-medium text-text-primary border-b border-gray-100 hover:text-leaf-600 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="p-6">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full py-4 bg-leaf-600 text-white text-center font-semibold rounded-full hover:bg-leaf-700 transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
