import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. Manoj Khemani | Orthopedic Surgeon Kolkata',
  description: 'Dr. Manoj Khemani - Expert Orthopedic Surgeon in Kolkata with 25+ years experience in Joint Replacement, Sports Medicine, and Spine Surgery.',
  keywords: 'orthopedic surgeon, knee replacement, hip replacement, spine surgery, sports medicine, Kolkata, Dr Manoj Khemani',
  icons: {
    icon: '/favicon.png',
  },
}

import FloatingActions from '@/components/common/FloatingActions'
import { AppointmentProvider } from '@/context/AppointmentContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <AppointmentProvider>
          {children}
          <FloatingActions />
        </AppointmentProvider>
      </body>
    </html>
  )
}
