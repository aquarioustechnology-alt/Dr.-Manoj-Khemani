import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import AboutHero from '@/components/about doctor/Hero'
import AboutBio from '@/components/about doctor/AboutBio'
import EducationJourney from '@/components/about doctor/EducationJourney'
import MissionVision from '@/components/about doctor/MissionVision'
import FirstCTA from '@/components/about doctor/FirstCTA'
import ExpertiseAndAffiliations from '@/components/about doctor/Expertise'
import Affiliations from '@/components/about doctor/Affiliations'
import CTA from '@/components/about doctor/CTA'

export const metadata = {
  title: 'About Dr. Manoj Kumar Khemani | 24+ Years of Orthopedic Excellence in Kolkata',
  description: 'Learn about Dr. Manoj Kumar Khemani, a distinguished Orthopedic Surgeon in Kolkata with over 24 years of experience. Expert in Robotic Knee Replacement, AR-VR Surgery, and complex trauma care.',
  keywords: [
    'Dr. Manoj Kumar Khemani',
    'Orthopedic Surgeon Education',
    'Dr. Manoj Khemani experience',
    'Robotic Surgeon Kolkata',
    'Best Knee Surgeon Kolkata about',
    'Orthopedic expert credentials'
  ],
  alternates: {
    canonical: 'https://healmybones.com/about',
  },
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
        <MissionVision />
        <FirstCTA />
        <ExpertiseAndAffiliations />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

