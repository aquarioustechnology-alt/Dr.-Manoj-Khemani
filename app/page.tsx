import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Hero from '@/components/homepage/Hero'
import AboutPreview from '@/components/homepage/AboutPreview'
import ServicesSection from '@/components/homepage/ServicesSection'
import ARVRSection from '@/components/homepage/ARVRSection'
import Achievements from '@/components/homepage/Achievements'
import WhyChooseUs from '@/components/homepage/WhyChooseUs'
import Testimonials from '@/components/homepage/Testimonials'
import VideoSection from '@/components/homepage/VideoSection'
import FAQ from '@/components/homepage/FAQ'
import Blogs from '@/components/homepage/Blogs'
import CTASection from '@/components/homepage/CTASection'

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
        <WhyChooseUs />
        <Testimonials />
        <VideoSection />
        <FAQ />
        <Blogs />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}


