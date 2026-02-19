import type { Metadata } from 'next'
import './globals.css'
import FloatingActions from '@/components/common/FloatingActions'
import { AppointmentProvider } from '@/context/AppointmentContext'
import TopStrip from '@/components/common/TopStrip'
import CustomCursor from '@/components/common/CustomCursor'

export const metadata: Metadata = {
  metadataBase: new URL('https://healmybones.com'),
  title: {
    default: 'Dr. Manoj Khemani | Best Orthopedic Surgeon & Robotic Joint Replacement Expert in Kolkata',
    template: '%s | Dr. Manoj Khemani'
  },
  description: 'Dr. Manoj Khemani is Kolkata\'s leading Orthopedic Surgeon specializing in Robotic Joint Replacement, AR-VR Knee Replacement, and Sports Medicine. 24+ Years of Excellence.',
  keywords: [
    'Dr. Manoj Khemani',
    'Orthopedic Surgeon Kolkata',
    'Best Knee Replacement Surgeon Kolkata',
    'Robotic Joint Replacement Kolkata',
    'AR VR Knee Replacement technology',
    'Hip Replacement Surgeon Kolkata',
    'Joint Replacement Specialist',
    'Sports Medicine Doctor Kolkata',
    'Orthopedic Doctor Near Me',
    'Best Orthopedic Surgeon for Robotic Surgery'
  ],
  authors: [{ name: 'Dr. Manoj Khemani' }],
  creator: 'Dr. Manoj Khemani',
  publisher: 'Dr. Manoj Khemani',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
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
        url: '/images/homepage/Dr Image 2-Picsart-AiImageEnhancer.webp',
        width: 1200,
        height: 630,
        alt: 'Dr. Manoj Khemani - Leading Orthopedic Surgeon in Kolkata',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Manoj Khemani | Best Orthopedic Surgeon & Robotic Joint Replacement Expert in Kolkata',
    description: 'Dr. Manoj Khemani is Kolkata\'s leading Orthopedic Surgeon specializing in Robotic Joint Replacement, AR-VR Knee Replacement, and Sports Medicine.',
    images: ['/images/homepage/Dr Image 2-Picsart-AiImageEnhancer.webp'],
  },
  alternates: {
    canonical: 'https://healmybones.com',
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
      <body className="antialiased font-sans overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Physician',
                'name': 'Dr. Manoj Khemani',
                'url': 'https://healmybones.com',
                'image': 'https://healmybones.com/images/homepage/Dr%20Image%202-Picsart-AiImageEnhancer.webp',
                'telephone': '+918697449191',
                'description': 'Dr. Manoj Khemani is a leading Orthopedic Surgeon in Kolkata specializing in Robotic Joint Replacement and AR-VR Knee Replacement with 24+ years of experience.',
                'address': [
                  {
                    '@type': 'PostalAddress',
                    'streetAddress': 'Healing Touch Clinic, 59, Bangur Avenue, Block A',
                    'addressLocality': 'Kolkata',
                    'postalCode': '700055',
                    'addressCountry': 'IN'
                  },
                  {
                    '@type': 'PostalAddress',
                    'streetAddress': 'Manipal Hospital, Salt Lake',
                    'addressLocality': 'Kolkata',
                    'postalCode': '700091',
                    'addressCountry': 'IN',
                    'name': 'Manipal Hospital'
                  }
                ],
                'geo': {
                  '@type': 'GeoCoordinates',
                  'latitude': '22.6078',
                  'longitude': '88.4067'
                },
                'medicalSpecialty': [
                  'OrthopedicSurgery',
                  'JointReplacement',
                  'SportsMedicine',
                  'RoboticSurgery'
                ],
                'knowsAbout': [
                  'Robotic Joint Replacement',
                  'AR VR Knee Replacement',
                  'Partial Knee Replacement',
                  'Total Hip Replacement',
                  'Sports Injury Treatment',
                  'Arthroscopic Surgery'
                ],
                'priceRange': '₹₹',
                'openingHoursSpecification': [
                  {
                    '@type': 'OpeningHoursSpecification',
                    'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                    'opens': '11:00',
                    'closes': '20:00'
                  }
                ],
                'sameAs': [
                  'https://www.facebook.com/healmybonesdrmanojkhemani/',
                  'https://www.instagram.com/healmybones/',
                  'https://www.youtube.com/@Healmybones-DrKhemani',
                  'https://www.linkedin.com/in/dr-manoj-kumar-khemani-162521188/',
                  'https://twitter.com/drkhemani'
                ]
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                'url': 'https://healmybones.com',
                'name': 'Dr. Manoj Khemani | Best Orthopedic Surgeon Kolkata',
                'publisher': {
                  '@type': 'Physician',
                  'name': 'Dr. Manoj Khemani'
                }
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                'name': 'Dr. Manoj Khemani - Heal My Bones',
                'url': 'https://healmybones.com',
                'logo': 'https://healmybones.com/images/homepage/logo.png',
                'contactPoint': {
                  '@type': 'ContactPoint',
                  'telephone': '+918697449191',
                  'contactType': 'Appointment Desk',
                  'areaServed': 'Kolkata',
                  'availableLanguage': ['English', 'Hindi', 'Bengali']
                }
              }
            ])
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
