import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const quickLinks = [
  { href: '/about', label: 'About Dr. Khemani' },
  { href: '/services', label: 'Our Services' },
  { href: '/faq', label: 'FAQs' },
  { href: '/contact', label: 'Contact Us' },
]

const services = [
  { href: '/services/joint-replacement', label: 'Joint Replacement' },
  { href: '/services/arthroscopy', label: 'Arthroscopy' },
  { href: '/services/sports-medicine', label: 'Sports Medicine' },
  { href: '/services/spine-surgery', label: 'Spine Surgery' },
]

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-leaf-400 to-leaf-600 flex items-center justify-center text-white font-bold text-xl">
                MK
              </div>
              <div>
                <span className="block font-display font-semibold text-lg">Dr. Manoj Khemani</span>
                <span className="block text-sm text-white/60">Orthopedic Surgeon</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Restoring mobility and improving quality of life through expert orthopedic care in Kolkata. 25+ years of surgical excellence.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-leaf-600 hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-leaf-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-leaf-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-leaf-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Apollo Hospitals<br />
                  58 Canal Circular Road<br />
                  Kolkata - 700054
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-leaf-400 flex-shrink-0" />
                <a href="tel:+913312345678" className="text-white/70 hover:text-leaf-400 transition-colors text-sm">
                  +91 33 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-leaf-400 flex-shrink-0" />
                <a href="mailto:dr.khemani@example.com" className="text-white/70 hover:text-leaf-400 transition-colors text-sm">
                  dr.khemani@example.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-leaf-400 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Mon - Sat: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} Dr. Manoj Khemani. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
