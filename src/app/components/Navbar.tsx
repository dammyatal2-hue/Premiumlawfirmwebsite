import { useState, useEffect } from 'react';
import { Scale } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/98 backdrop-blur-lg shadow-xl shadow-[#d4af37]/10 border-b border-[#d4af37]/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="p-2 bg-gradient-to-br from-[#d4af37]/90 to-[#b8941f]/90 rounded-md group-hover:scale-105 transition-transform">
              <Scale className="w-6 h-6 text-black" />
            </div>
            <span className="text-xl font-serif text-[#d4af37] group-hover:text-[#e9c55b] transition-colors">
              Lighthouse Law
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-[#d4af37] transition-colors text-[15px]">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-[#d4af37] transition-colors text-[15px]">
              Why Us
            </button>
            <button onClick={() => scrollToSection('practice-areas')} className="text-gray-300 hover:text-[#d4af37] transition-colors text-[15px]">
              Practice Areas
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-[#d4af37] transition-colors text-[15px]">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-7 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-black font-medium rounded-sm hover:shadow-lg hover:shadow-[#d4af37]/40 transition-all hover:scale-[1.02] text-sm tracking-wide"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}