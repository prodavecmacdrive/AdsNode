import { useThemeStore } from '@/store';

export function ThemeToggle() {
  const { dark, toggle } = useThemeStore();

  return (
    <button
      onClick={toggle}
      className="hover:bg-surface-overlay text-text-muted hover:text-text-primary rounded-lg p-2 transition-colors"
      aria-label="Toggle theme"
    >
      {dark ? (
        <span className="text-base leading-none">☀️</span>
      ) : (
        <span className="text-base leading-none">🌙</span>
      )}
    </button>
  );
}
