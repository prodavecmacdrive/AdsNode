import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className = '', id, ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-text-secondary text-sm font-medium">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`border-border-subtle bg-surface-overlay text-text-primary placeholder:text-text-muted focus:border-accent focus:ring-accent/30 w-full rounded-lg border px-3 py-2 text-sm transition-colors outline-none focus:ring-1 ${className}`}
        {...props}
      />
    </div>
  );
}
