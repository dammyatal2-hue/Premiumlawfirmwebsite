import { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-[#d4af37] mb-2 font-serif text-sm">Full Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#d4af37]/20 rounded-sm text-white focus:border-[#d4af37]/70 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/10 transition-all text-[15px]"
          placeholder="John Smith"
        />
      </div>

      <div>
        <label className="block text-[#d4af37] mb-2 font-serif text-sm">Email Address *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#d4af37]/20 rounded-sm text-white focus:border-[#d4af37]/70 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/10 transition-all text-[15px]"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label className="block text-[#d4af37] mb-2 font-serif text-sm">Phone Number *</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#d4af37]/20 rounded-sm text-white focus:border-[#d4af37]/70 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/10 transition-all text-[15px]"
          placeholder="+250 786 123 4567"
        />
      </div>

      <div>
        <label className="block text-[#d4af37] mb-2 font-serif text-sm">How can we help? *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#d4af37]/20 rounded-sm text-white focus:border-[#d4af37]/70 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/10 transition-all resize-none text-[15px]"
          placeholder="Tell us about your legal matter..."
        />
      </div>

      <button
        type="submit"
        className="w-full px-8 py-3.5 bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-black font-medium rounded-sm hover:shadow-xl hover:shadow-[#d4af37]/40 transition-all duration-500 flex items-center justify-center gap-2 group hover:scale-[1.01] tracking-wide text-sm"
      >
        <span>Send Message</span>
        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
}