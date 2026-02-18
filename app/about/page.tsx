import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import AboutHero from '@/components/about doctor/Hero'
import AboutBio from '@/components/about doctor/AboutBio'
import EducationJourney from '@/components/about doctor/EducationJourney'
import FirstCTA from '@/components/about doctor/FirstCTA'
import ExpertiseAndAffiliations from '@/components/about doctor/Expertise'
import Affiliations from '@/components/about doctor/Affiliations'
import CTA from '@/components/about doctor/CTA'

export const metadata = {
  title: 'About Dr. Manoj Kumar Khemani | Best Orthopedic Surgeon in Kolkata',
  description: 'Learn about Dr. Manoj Kumar Khemani, Kolkata\'s leading Orthopedic Surgeon specializing in Robotic Joint Replacement and Sports Medicine. 25+ Years of Excellence.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutBio />
        <Affiliations />
        <EducationJourney />
        <FirstCTA />
        <ExpertiseAndAffiliations />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

