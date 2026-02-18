import type { Metadata } from 'next'
import './globals.css'
import FloatingActions from '@/components/common/FloatingActions'
import { AppointmentProvider } from '@/context/AppointmentContext'
import TopStrip from '@/components/common/TopStrip'

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
        <AppointmentProvider>
          <TopStrip />
          {children}
          <FloatingActions />
        </AppointmentProvider>
      </body>
    </html>
  )
}
