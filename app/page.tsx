import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Hero from '@/components/homepage/Hero'
import AboutPreview from '@/components/homepage/AboutPreview'
import ServicesSection from '@/components/homepage/ServicesSection'
import ARVRSection from '@/components/homepage/ARVRSection'
import RoboticPioneer from '@/components/homepage/RoboticPioneer'
import Achievements from '@/components/homepage/Achievements'
import WhyChooseUs from '@/components/homepage/WhyChooseUs'
import Testimonials from '@/components/homepage/Testimonials'
import VideoSection from '@/components/homepage/VideoSection'
import FAQ from '@/components/homepage/FAQ'
import Blogs from '@/components/homepage/Blogs'
import SocialMedia from '@/components/homepage/SocialMedia'
import CTASection from '@/components/homepage/CTASection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dr. Manoj Khemani | Best Orthopedic Surgeon & Robotic Joint Replacement Expert in Kolkata',
  description: 'Dr. Manoj Khemani is Kolkata\'s leading expert in Robotic Joint Replacement and AR-VR Knee Replacement technology. 24+ years of surgical excellence in orthopedics.',
  keywords: [
    'Robotic Knee Replacement Kolkata',
    'Best Orthopedic Surgeon Kolkata',
    'Dr. Manoj Khemani',
    'AR VR Knee Replacement technology',
    'Robotic Joint Replacement Surgeon',
    'Knee Pain Treatment Kolkata',
    'Best Hip Replacement Doctor'
  ],
  alternates: {
    canonical: 'https://healmybones.com',
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutPreview />
        <ServicesSection />
        <ARVRSection />
        <Achievements />
        <RoboticPioneer />
        <WhyChooseUs />
        <Testimonials />
        <VideoSection />
        <FAQ />
        <Blogs />
        <CTASection />
        <SocialMedia />
      </main>
      <Footer />
    </>
  )
}


