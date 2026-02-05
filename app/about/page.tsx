import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Award, GraduationCap, Stethoscope, Users } from 'lucide-react'

const qualifications = [
  { year: '1995', title: 'MBBS', institution: 'Medical College, Kolkata' },
  { year: '2000', title: 'MS (Orthopedics)', institution: 'AIIMS, New Delhi' },
  { year: '2002', title: 'Fellowship in Joint Replacement', institution: 'Mayo Clinic, USA' },
  { year: '2005', title: 'Senior Consultant', institution: 'Apollo Hospitals, Kolkata' },
]

const achievements = [
  { icon: Award, number: '15,000+', label: 'Successful Surgeries' },
  { icon: Users, number: '25+', label: 'Years of Experience' },
  { icon: Stethoscope, number: '50,000+', label: 'Patients Treated' },
  { icon: GraduationCap, number: '98%', label: 'Success Rate' },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-offwhite">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-leaf-600 font-semibold text-sm uppercase tracking-wider">About</span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-text-primary mt-4 mb-6">
                Dr. Manoj Khemani
              </h1>
              <p className="text-text-secondary text-lg">
                Orthopedic Surgeon & Joint Replacement Specialist
              </p>
            </div>
          </div>
        </section>

        {/* Profile Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80"
                    alt="Dr. Manoj Khemani"
                    className="w-full h-[600px] object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-leaf-600 text-white rounded-2xl p-6 shadow-xl">
                  <span className="block text-4xl font-display font-bold">25+</span>
                  <span className="text-sm opacity-90">Years Experience</span>
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-primary mb-6">
                  A Legacy of <span className="gradient-text">Healing & Excellence</span>
                </h2>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    Dr. Manoj Khemani is one of Kolkata&apos;s most renowned orthopedic surgeons, with over 25 years 
                    of experience in treating complex orthopedic conditions. His journey in medicine began at 
                    Medical College, Kolkata, followed by specialized training in orthopedics at AIIMS, New Delhi.
                  </p>
                  <p>
                    After completing his fellowship in Joint Replacement at the prestigious Mayo Clinic in the 
                    USA, Dr. Khemani returned to India with a mission to bring world-class orthopedic care to 
                    his hometown. He has since performed over 15,000 successful surgeries, transforming the 
                    lives of thousands of patients.
                  </p>
                  <p>
                    His expertise spans joint replacement surgery, arthroscopy, sports medicine, and complex 
                    spine surgeries. Dr. Khemani is known for his patient-first approach, combining surgical 
                    precision with compassionate care.
                  </p>
                </div>

                {/* Signature */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="font-display text-2xl text-text-primary italic">Dr. Manoj Khemani</p>
                  <p className="text-text-muted">MBBS, MS (Orthopedics)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 lg:py-24 bg-offwhite">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((item, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-leaf-100 flex items-center justify-center text-leaf-600">
                    <item.icon size={28} />
                  </div>
                  <span className="block text-3xl font-display font-bold text-text-primary mb-1">{item.number}</span>
                  <span className="text-text-muted text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qualifications Timeline */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-leaf-600 font-semibold text-sm uppercase tracking-wider">Education & Career</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-primary mt-4">
                Qualifications & Experience
              </h2>
            </div>

            <div className="space-y-8">
              {qualifications.map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-leaf-600 font-display font-bold">{item.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-leaf-500 mt-2" />
                  <div className="flex-1 pb-8 border-l-2 border-leaf-100 pl-6 -ml-1.5">
                    <h3 className="font-display font-semibold text-text-primary text-lg">{item.title}</h3>
                    <p className="text-text-muted">{item.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="py-16 lg:py-24 bg-text-primary text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-leaf-400 font-semibold text-sm uppercase tracking-wider">Expertise</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mt-4">
                Areas of Specialization
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Joint Replacement Surgery',
                'Arthroscopy & Sports Medicine',
                'Spine Surgery',
                'Trauma & Fracture Management',
                'Pediatric Orthopedics',
                'Bone & Joint Infections',
                'Osteoporosis Treatment',
                'Pain Management',
              ].map((specialty, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <span className="text-white font-medium">{specialty}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
