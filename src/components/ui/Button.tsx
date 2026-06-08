import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus-ring cursor-pointer disabled:pointer-events-none disabled:opacity-50';

  const variants: Record<string, string> = {
    primary: 'bg-accent text-text-inverse hover:bg-accent-hover active:scale-[0.98] shadow-card',
    secondary:
      'border border-border-default bg-surface-overlay text-text-primary hover:bg-surface-hover hover:border-border-subtle',
    ghost: 'text-text-secondary hover:bg-surface-overlay hover:text-text-primary',
  };

  const sizes: Record<string, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
