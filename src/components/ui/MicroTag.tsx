import type { ReactNode } from 'react';

interface MicroTagProps {
  children: ReactNode;
  className?: string;
}

export function MicroTag({ children, className = '' }: MicroTagProps) {
  return (
    <span
      className={`bg-accent-muted text-accent hover:bg-accent/20 inline-flex items-center rounded-md px-2 py-0.5 text-[11px] leading-tight font-medium whitespace-nowrap transition-colors ${className}`}
    >
      {children}
    </span>
  );
}
