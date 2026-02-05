import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { ArrowRight, Bone, ScanLine, Activity, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Bone,
    title: 'Joint Replacement Surgery',
    shortDesc: 'Advanced knee, hip, and shoulder replacement using minimally invasive techniques.',
    fullDesc: 'Our joint replacement program offers state-of-the-art procedures for knee, hip, and shoulder replacements. Using minimally invasive techniques and computer navigation, we ensure precise implant placement, smaller incisions, less pain, and faster recovery. We use the latest implant materials designed for longevity and natural movement.',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
    link: '/services/joint-replacement',
    features: ['Minimally Invasive Surgery', 'Computer Navigation', 'Rapid Recovery Protocol', 'Custom Implants'],
  },
  {
    icon: ScanLine,
    title: 'Arthroscopy',
    shortDesc: 'Minimally invasive diagnostic and surgical procedures for joint conditions.',
    fullDesc: 'Arthroscopy is a minimally invasive surgical procedure that allows us to diagnose and treat joint problems through tiny incisions. Using a miniature camera and specialized instruments, we can repair damaged cartilage, remove loose bodies, and treat various joint conditions with minimal tissue disruption.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    link: '/services/arthroscopy',
    features: ['Keyhole Surgery', 'Day Care Procedures', 'Faster Recovery', 'Minimal Scarring'],
  },
  {
    icon: Activity,
    title: 'Sports Medicine',
    shortDesc: 'Specialized care for athletes and sports-related injuries.',
    fullDesc: 'Our sports medicine program is designed to help athletes of all levels recover from injuries and return to peak performance. From ACL reconstruction to rotator cuff repair, we provide comprehensive care including surgery, rehabilitation, and injury prevention programs.',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80',
    link: '/services/sports-medicine',
    features: ['ACL Reconstruction', 'Rotator Cuff Repair', 'Cartilage Restoration', 'Rehabilitation Programs'],
  },
  {
    icon: Sparkles,
    title: 'Spine Surgery',
    shortDesc: 'Comprehensive spine care including disc replacement and fusion.',
    fullDesc: 'We offer comprehensive spine care for conditions ranging from herniated discs to spinal deformities. Our approach includes both surgical and non-surgical treatments, with expertise in minimally invasive spine surgery, disc replacement, and spinal fusion procedures.',
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=80',
    link: '/services/spine-surgery',
    features: ['Minimally Invasive Spine Surgery', 'Disc Replacement', 'Spinal Fusion', 'Decompression Surgery'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-offwhite">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-leaf-600 font-semibold text-sm uppercase tracking-wider">Services</span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-text-primary mt-4 mb-6">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-text-secondary text-lg">
                Comprehensive orthopedic care tailored to your needs. From diagnosis to recovery, 
                we provide expert treatment for all bone and joint conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[400px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    {/* Icon Badge */}
                    <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-leaf-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
                      <service.icon size={36} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4">
                      {service.title}
                    </h2>
                    <p className="text-text-secondary text-lg leading-relaxed mb-6">
                      {service.fullDesc}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-leaf-500" />
                          <span className="text-text-secondary text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-leaf-600 text-white font-semibold rounded-full hover:bg-leaf-700 transition-all duration-300 hover:shadow-lg hover:shadow-leaf-200"
                    >
                      Learn More
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-leaf-600 text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Schedule a consultation with Dr. Khemani to discuss your condition and find the best treatment option.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-leaf-700 font-semibold rounded-full hover:bg-offwhite transition-colors"
            >
              Book a Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
