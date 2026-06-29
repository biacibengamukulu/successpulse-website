import React from 'react';

interface HeroSectionProps {
  badge?: string;
  title: string;
  subtitle: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  badge,
  title,
  subtitle,
  gradientFrom = 'from-slate-900',
  gradientTo = 'to-blue-950',
}) => {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-b ${gradientFrom} ${gradientTo} text-white py-20 lg:py-28 border-b border-slate-800`}>
      {/* Dynamic background shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        {/* Fine grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {badge && (
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
            {badge}
          </span>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          {title}
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-slate-350 max-w-2xl mx-auto font-light leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
