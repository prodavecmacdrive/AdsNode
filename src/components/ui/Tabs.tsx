import { useCallback } from 'react';

export interface Tab {
  id: string;
  label: string;
  disabled?: boolean;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
}

export function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  const handleClick = useCallback(
    (tabId: string, disabled?: boolean) => {
      if (!disabled) onChange(tabId);
    },
    [onChange],
  );

  return (
    <div className="border-border-default bg-surface-raised flex border-b px-6">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            onClick={() => handleClick(tab.id, tab.disabled)}
            disabled={tab.disabled}
            className={`relative px-4 py-3 text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'text-text-secondary hover:text-text-primary'} ${tab.disabled ? 'cursor-not-allowed opacity-40' : 'cursor-pointer'} `}
          >
            {tab.label}
            {isActive && (
              <span className="bg-accent animate-scale-in absolute right-0 bottom-0 left-0 h-0.5 rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}
