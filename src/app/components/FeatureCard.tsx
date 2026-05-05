import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative p-7 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-sm border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-500 hover:shadow-xl hover:shadow-[#d4af37]/10 hover:-translate-y-1">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-full blur-3xl group-hover:bg-[#d4af37]/10 transition-all duration-500" />

      <div className="relative">
        <div className="inline-flex p-3.5 bg-gradient-to-br from-[#d4af37]/90 to-[#b8941f]/90 rounded-md mb-5 group-hover:scale-105 transition-transform duration-300">
          <Icon className="w-6 h-6 text-black" />
        </div>

        <h3 className="text-xl font-serif text-[#d4af37] mb-3.5 group-hover:text-[#e9c55b] transition-colors">
          {title}
        </h3>

        <p className="text-gray-400 leading-relaxed text-[15px]">
          {description}
        </p>
      </div>
    </div>
  );
}