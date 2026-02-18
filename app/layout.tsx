import type { Metadata } from 'next'
import './globals.css'
import FloatingActions from '@/components/common/FloatingActions'
import { AppointmentProvider } from '@/context/AppointmentContext'
import TopStrip from '@/components/common/TopStrip'
import CustomCursor from '@/components/common/CustomCursor'

export const metadata: Metadata = {
  title: 'Dr. Manoj Khemani | Best Orthopedic Surgeon & Robotic Joint Replacement Expert in Kolkata',
  description: 'Dr. Manoj Khemani is Kolkata\'s leading Orthopedic Surgeon specializing in Robotic Joint Replacement, AR-VR Knee Replacement, and Sports Medicine. Book an appointment today.',
  keywords: 'Dr. Manoj Khemani, Orthopedic Surgeon Kolkata, Best Knee Replacement Surgeon Kolkata, Robotic Joint Replacement Kolkata, AR VR Knee Replacement, Hip Replacement Surgeon, Joint Replacement Specialist, Sports Medicine Doctor Kolkata, Orthopedic Doctor Near Me',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://healmybones.com',
    title: 'Dr. Manoj Khemani | Best Orthopedic Surgeon & Robotic Joint Replacement Expert in Kolkata',
    description: 'Dr. Manoj Khemani is Kolkata\'s leading Orthopedic Surgeon specializing in Robotic Joint Replacement, AR-VR Knee Replacement, and Sports Medicine.',
    siteName: 'Heal My Bones - Dr. Manoj Khemani',
    images: [
      {
        url: '/images/homepage/Dr Image 2-Picsart-AiImageEnhancer.webp', // Using a valid image path from previous context
        width: 1200,
        height: 630,
        alt: 'Dr. Manoj Khemani - Orthopedic Surgeon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Manoj Khemani | Best Orthopedic Surgeon & Robotic Joint Replacement Expert in Kolkata',
    description: 'Dr. Manoj Khemani is Kolkata\'s leading Orthopedic Surgeon specializing in Robotic Joint Replacement, AR-VR Knee Replacement, and Sports Medicine.',
    images: ['/images/homepage/Dr Image 2-Picsart-AiImageEnhancer.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Physician',
              'name': 'Dr. Manoj Khemani',
              'url': 'https://healmybones.com',
              'image': 'https://healmybones.com/images/homepage/Dr%20Image%202-Picsart-AiImageEnhancer.webp',
              'telephone': '+918697449191',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': 'Healing Touch Clinic, 59, Bangur Avenue, Block A',
                'addressLocality': 'Kolkata',
                'postalCode': '700055',
                'addressCountry': 'IN'
              },
              'medicalSpecialty': ['Orthopedic Surgery', 'Joint Replacement', 'Sports Medicine'],
              'priceRange': '₹₹',
              'openingHoursSpecification': [
                {
                  '@type': 'OpeningHoursSpecification',
                  'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                  'opens': '10:00',
                  'closes': '20:00'
                }
              ],
              'sameAs': [
                'https://www.facebook.com/healmybonesdrmanojkhemani/',
                'https://www.instagram.com/healmybones/',
                'https://www.youtube.com/@Healmybones-DrKhemani',
                'https://www.linkedin.com/in/dr-manoj-kumar-khemani-162521188/'
              ]
            })
          }}
        />
        <AppointmentProvider>
          <TopStrip />
          {children}
          <FloatingActions />
          <CustomCursor />
        </AppointmentProvider>
      </body>
    </html>
  )
}
