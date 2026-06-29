import React, { useEffect, useRef, useState } from 'react';

interface CountUpMetricProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export const CountUpMetric: React.FC<CountUpMetricProps> = ({ value, prefix = '', suffix = '', label }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const duration = 900;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplayValue(Math.round(value * progress));

      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
      }
    };

    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current !== null) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, [value]);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 transition-transform duration-300 hover:-translate-y-1">
      <div className="text-3xl font-bold text-white">
        {prefix}
        {displayValue}
        {suffix}
      </div>
      <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-300">{label}</p>
    </div>
  );
};
