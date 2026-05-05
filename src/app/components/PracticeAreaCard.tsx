import { LucideIcon } from 'lucide-react';

interface PracticeAreaCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function PracticeAreaCard({ icon: Icon, title, description }: PracticeAreaCardProps) {
  return (
    <div className="group relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-sm border border-[#d4af37]/20 hover:border-[#d4af37]/70 transition-all duration-700 hover:shadow-2xl hover:shadow-[#d4af37]/20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/0 to-[#d4af37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative p-8">
        <div className="flex items-center gap-4 mb-5">
          <div className="p-3 bg-[#d4af37]/10 rounded-md group-hover:bg-gradient-to-br group-hover:from-[#d4af37] group-hover:to-[#b8941f] transition-all duration-500">
            <Icon className="w-8 h-8 text-[#d4af37] group-hover:text-black transition-colors duration-500" />
          </div>
          <h3 className="text-2xl font-serif text-white group-hover:text-[#d4af37] transition-colors duration-500">
            {title}
          </h3>
        </div>

        <p className="text-gray-400 leading-relaxed text-[15px]">
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
    </div>
  );
}