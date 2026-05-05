import { Navbar } from './components/Navbar';
import { FeatureCard } from './components/FeatureCard';
import { PracticeAreaCard } from './components/PracticeAreaCard';
import { ContactForm } from './components/ContactForm';
import {
  Scale,
  Users,
  Award,
  DollarSign,
  Heart,
  Gavel,
  FileText,
  Scale as BalanceIcon,
  MessageSquare,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1773544015678-58d09366ad6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydGhvdXNlJTIwY29sdW1ucyUyMGp1c3RpY2UlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc3OTIxNTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Justice architecture"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center p-5 bg-gradient-to-br from-[#d4af37]/90 to-[#b8941f]/90 rounded-full mb-10 shadow-2xl shadow-[#d4af37]/40">
            <Scale className="w-14 h-14 text-black" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.15]">
            Welcome to <span className="text-[#d4af37]">Lighthouse</span>
            <br />
            <span className="text-[#d4af37]">Law Chamber</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-5 max-w-2xl mx-auto leading-relaxed">
            A reliable law firm that provides high-quality legal services to businesses and individuals
          </p>

          <p className="text-xl md:text-2xl font-serif text-[#d4af37] mb-14 italic">
            "Upholding fair and just legal procedure!"
          </p>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-12 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-black text-base font-semibold rounded-sm hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 hover:scale-[1.02] tracking-wide"
          >
            Book Your Consultation
          </button>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce opacity-60">
          <div className="w-5 h-9 border-2 border-[#d4af37] rounded-full p-1">
            <div className="w-1 h-2 bg-[#d4af37] rounded-full mx-auto animate-pulse" />
          </div>
        </div>
      </section>

      {/* Core Message Section */}
      <section id="about" className="py-28 px-6 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1769092992534-f2d0210162b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBsaWJyYXJ5JTIwYm9va3MlMjB3aXNkb218ZW58MXx8fHwxNzc3OTIxNTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Law library"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#d4af37] rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-[#d4af37] rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.3] mb-16">
            The <span className="text-[#d4af37]">Importance</span> of having a solicitor,
            <br />
            just like a <span className="text-[#d4af37]">family doctor</span>.
          </h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="services" className="py-20 px-6 bg-[#0a0a0a] relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1776221307402-9c7134603039?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMG9mZmljZSUyMG1vZGVybiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Nzc5MjE1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professional office"
            className="w-full h-full object-cover opacity-5"
          />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              Why Choose <span className="text-[#d4af37]">Lighthouse Law</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Exceptional legal representation with unwavering commitment to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Scale}
              title="Multi-Area Expertise"
              description="Comprehensive legal knowledge across multiple practice areas to serve all your legal needs effectively."
            />
            <FeatureCard
              icon={Users}
              title="Client-Focused Service"
              description="Personalized attention and tailored strategies designed around your unique circumstances and goals."
            />
            <FeatureCard
              icon={Award}
              title="Proven Success"
              description="Track record of favorable outcomes and satisfied clients across diverse legal matters."
            />
            <FeatureCard
              icon={DollarSign}
              title="Transparent Billing"
              description="Clear, honest pricing with no hidden fees. You'll always know what to expect."
            />
            <FeatureCard
              icon={Heart}
              title="Community Commitment"
              description="Dedicated to serving our community with integrity, compassion, and professional excellence."
            />
            <FeatureCard
              icon={Gavel}
              title="Professional Standards"
              description="Committed to the highest standards of professionalism, ethics, and legal expertise."
            />
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-y border-[#d4af37]/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="p-4 bg-[#d4af37]/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#d4af37] group-hover:to-[#b8941f] transition-all">
                <FileText className="w-10 h-10 text-[#d4af37] group-hover:text-black transition-colors" />
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Legal advice is essential for both <span className="text-[#d4af37] font-semibold">dispute resolution</span> and <span className="text-[#d4af37] font-semibold">avoidance</span>
              </p>
            </div>

            <div className="text-center group">
              <div className="p-4 bg-[#d4af37]/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#d4af37] group-hover:to-[#b8941f] transition-all">
                <Award className="w-10 h-10 text-[#d4af37] group-hover:text-black transition-colors" />
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Committed to the <span className="text-[#d4af37] font-semibold">highest standards</span> of professionalism
              </p>
            </div>

            <div className="text-center group">
              <div className="p-4 bg-[#d4af37]/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#d4af37] group-hover:to-[#b8941f] transition-all">
                <BalanceIcon className="w-10 h-10 text-[#d4af37] group-hover:text-black transition-colors" />
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Expertise in <span className="text-[#d4af37] font-semibold">advocacy, litigation, arbitration</span>, and <span className="text-[#d4af37] font-semibold">consultancy</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="practice-areas" className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1702628771524-25d5174e919b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXZlbCUyMGp1ZGdlJTIwZGVzayUyMGxlZ2FsfGVufDF8fHx8MTc3NzkyMTU0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Legal setting"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              Our <span className="text-[#d4af37]">Practice Areas</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive legal services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <PracticeAreaCard
              icon={Gavel}
              title="Advocacy"
              description="Strong representation in court with persuasive arguments and strategic litigation support to defend your rights and interests."
            />
            <PracticeAreaCard
              icon={FileText}
              title="Litigation"
              description="Expert handling of civil and commercial disputes through all stages of court proceedings with dedication to favorable outcomes."
            />
            <PracticeAreaCard
              icon={BalanceIcon}
              title="Arbitration"
              description="Alternative dispute resolution services providing efficient, confidential, and cost-effective solutions outside traditional court settings."
            />
            <PracticeAreaCard
              icon={MessageSquare}
              title="Legal Consultancy"
              description="Strategic legal advice and counsel for businesses and individuals on compliance, contracts, and risk management."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1696861273647-92dfe8bb697c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc2hha2UlMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHRydXN0fGVufDF8fHx8MTc3NzkyMTU0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professional partnership"
            className="w-full h-full object-cover opacity-5"
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              Get in <span className="text-[#d4af37]">Touch</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Schedule a consultation to discuss your legal needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[#d4af37] mb-2">Phone</h3>
                  <p className="text-gray-300">+250 786 60 5013</p>
                  <p className="text-gray-300">+234 803 300 0415</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[#d4af37] mb-2">Email</h3>
                  <p className="text-gray-300">lighthouselawchamber@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-lg group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[#d4af37] mb-2">Office Hours</h3>
                  <p className="text-gray-300">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8 rounded-lg border border-[#d4af37]/20">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#d4af37]/20 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-lg">
                <Scale className="w-8 h-8 text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-[#d4af37]">Lighthouse Law Chamber & Co. Ltd</h3>
                <p className="text-sm text-gray-400 italic">"Upholding fair and just legal procedure!"</p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">
                <a href="mailto:lighthouselawchamber@gmail.com" className="hover:text-[#d4af37] transition-colors">
                  lighthouselawchamber@gmail.com
                </a>
              </p>
              <p className="text-gray-400">
                <a href="tel:+250786605013" className="hover:text-[#d4af37] transition-colors">
                  +250 786 60 5013
                </a>
                {' | '}
                <a href="tel:+2348033000415" className="hover:text-[#d4af37] transition-colors">
                  +234 803 300 0415
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#d4af37]/10 text-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} Lighthouse Law Chamber & Co. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}