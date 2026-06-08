import type { ReactNode } from 'react';

interface BadgeProps {
  variant?: 'info' | 'success' | 'warning' | 'danger' | 'neutral';
  size?: 'sm' | 'md';
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<string, string> = {
  info: 'bg-info-muted text-info',
  success: 'bg-success-muted text-success',
  warning: 'bg-warning-muted text-warning',
  danger: 'bg-danger-muted text-danger',
  neutral: 'bg-surface-overlay text-text-secondary',
};

export function Badge({ variant = 'neutral', size = 'sm', children, className = '' }: BadgeProps) {
  const sizeClass = size === 'sm' ? 'px-1.5 py-0.5 text-[10px]' : 'px-2 py-0.5 text-xs';

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full leading-none font-semibold ${variantStyles[variant]} ${sizeClass} ${className}`}
    >
      {children}
    </span>
  );
}
