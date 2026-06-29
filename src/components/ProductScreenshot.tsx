import React from 'react';

interface ProductScreenshotProps {
  src: string;
  alt: string;
  label?: string;
  className?: string;
}

export const ProductScreenshot: React.FC<ProductScreenshotProps> = ({ src, alt, label, className = '' }) => {
  return (
    <figure className={`rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl shadow-blue-950/30 overflow-hidden ${className}`}>
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </div>
        {label && (
          <figcaption className="rounded-full bg-blue-600/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-300">
            {label}
          </figcaption>
        )}
      </div>
      <div className="bg-slate-900 p-2 sm:p-3">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] w-full rounded-2xl object-cover object-top"
        />
      </div>
    </figure>
  );
};
