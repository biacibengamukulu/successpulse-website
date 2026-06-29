import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'span';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  as = 'button',
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-250 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 border border-blue-700/20',
    secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200',
    outline: 'bg-transparent hover:bg-blue-50/50 text-blue-600 border border-blue-200 hover:border-blue-300',
    ghost: 'bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-900',
    white: 'bg-white hover:bg-slate-50 text-blue-600 shadow-md shadow-slate-200/50 hover:shadow-lg border border-slate-100',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3.5 text-base',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (as === 'span') {
    return <span className={classes}>{children}</span>;
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
