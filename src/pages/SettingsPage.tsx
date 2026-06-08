import { useState } from 'react';
import { mockClients, mockGames } from '@/data/mock';
import type { Client } from '@/types';
import { Button } from '@/components/ui/Button';

/* ── Inline sub-components ───────────────────────────── */

function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="text-text-muted flex items-center gap-2 text-sm">
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-2">
          {i > 0 && <span className="text-text-muted/40">/</span>}
          {item.href ? (
            <a href={item.href} className="hover:text-accent transition-colors">
              {item.label}
            </a>
          ) : (
            <span className={i === items.length - 1 ? 'text-text-secondary' : ''}>
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}

function Badge({
  children,
  variant = 'default',
}: {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'danger';
}) {
  const colors: Record<string, string> = {
    default: 'bg-surface-overlay text-text-secondary border border-border-subtle',
    success: 'bg-success-muted text-success border border-success/20',
    danger: 'bg-danger-muted text-danger border border-danger/20',
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium ${colors[variant]}`}
    >
      {children}
    </span>
  );
}

function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="animate-fade-in absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="bg-surface-raised border-border-default shadow-modal animate-scale-in relative mx-4 w-full max-w-lg rounded-xl border">
        {/* Header */}
        <div className="border-border-default flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-text-primary text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-text-muted hover:text-text-secondary hover:bg-surface-overlay rounded-md p-1 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  );
}

function Input({
  label,
  className = '',
  ...props
}: {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <label className="text-text-secondary mb-1.5 block text-sm font-medium">{label}</label>
      <input
        className="border-border-default bg-surface-overlay text-text-primary placeholder:text-text-muted focus:ring-accent/40 focus:border-accent w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:ring-2 focus:outline-none"
        {...props}
      />
    </div>
  );
}

function ToggleSwitch({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className={`focus:ring-accent/40 relative inline-flex h-6 w-10 items-center rounded-full transition-colors duration-200 focus:ring-2 focus:outline-none ${
        checked ? 'bg-accent' : 'bg-surface-overlay'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-200 ${
          checked ? 'translate-x-5' : 'translate-x-1'
        }`}
      />
    </button>
  );
}

/* ── Main Settings Page ──────────────────────────────── */

export function SettingsPage() {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [showAddClient, setShowAddClient] = useState(false);

  return (
    <div className="animate-fade-in mx-auto max-w-5xl px-6 py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/dashboard' },
          { label: 'Settings' },
          { label: 'Client Management' },
        ]}
      />

      {/* Header */}
      <div className="mt-6 mb-6 flex items-center justify-between">
        <h1 className="text-text-primary text-2xl font-bold">Client Management</h1>
        <Button variant="primary" onClick={() => setShowAddClient(true)}>
          Add Client
        </Button>
      </div>

      {/* Client Table */}
      <div className="bg-surface-raised border-border-default overflow-hidden rounded-xl border">
        {/* Table Header */}
        <div className="bg-surface-overlay text-text-muted grid grid-cols-4 px-6 py-3 text-xs font-medium tracking-wider uppercase">
          <span>Company</span>
          <span>Projects</span>
          <span>Status</span>
          <span>Actions</span>
        </div>

        {/* Table Body */}
        {mockClients.map((client) => (
          <div
            key={client.id}
            className="border-border-default hover:bg-surface-overlay/50 grid grid-cols-4 items-center border-t px-6 py-4 transition-colors"
          >
            {/* Company */}
            <div className="flex flex-col">
              <span className="text-text-primary text-sm font-medium">{client.companyName}</span>
              <span className="text-text-muted text-xs">{client.contactEmail}</span>
            </div>

            {/* Projects */}
            <div>
              <Badge>{client.gameIds.length} games</Badge>
            </div>

            {/* Status */}
            <div>
              <Badge variant={client.status === 'active' ? 'success' : 'danger'}>
                {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
              </Badge>
            </div>

            {/* Actions */}
            <div>
              <Button variant="ghost" size="sm" onClick={() => setSelectedClient(client)}>
                Manage
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* ── Client Profile Modal ──────────────────────── */}
      <Modal
        open={!!selectedClient}
        onClose={() => setSelectedClient(null)}
        title={selectedClient?.companyName ?? ''}
      >
        <div className="space-y-6">
          {/* Block A — Magic Link */}
          <div>
            <label className="text-text-muted mb-2 block text-xs font-medium tracking-wider uppercase">
              Magic Link
            </label>
            <div className="bg-surface-overlay flex items-center gap-3 rounded-lg px-4 py-3">
              <span className="text-accent flex-1 truncate font-mono text-sm">
                {selectedClient?.magicLink}
              </span>
              <button
                className="text-text-muted hover:text-text-primary hover:bg-surface-base rounded p-1 transition-colors"
                title="Copy link"
              >
                📋
              </button>
              <button
                className="text-text-muted hover:text-text-primary hover:bg-surface-base rounded p-1 transition-colors"
                title="Regenerate link"
              >
                🔄
              </button>
            </div>
            <p className="text-text-muted mt-2 text-xs">
              Share this link with the client for secure access. Regenerating will invalidate the
              previous link.
            </p>
          </div>

          {/* Block B — Game Permissions */}
          <div>
            <label className="text-text-muted mb-2 block text-xs font-medium tracking-wider uppercase">
              Game Permissions
            </label>
            <div>
              {mockGames.map((game) => {
                const isEnabled = selectedClient?.gameIds.includes(game.id) ?? false;

                return (
                  <div
                    key={game.id}
                    className="border-border-default flex items-center justify-between border-b py-3 last:border-0"
                  >
                    {/* Left */}
                    <div className="flex items-center gap-3">
                      <img src={game.iconUrl} alt={game.title} className="h-8 w-8 rounded-lg" />
                      <span className="text-text-primary text-sm">{game.title}</span>
                    </div>

                    {/* Right — Toggle */}
                    <ToggleSwitch
                      checked={isEnabled}
                      onChange={() => {
                        /* toggle permission — no-op for now */
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Modal>

      {/* ── Add Client Modal ─────────────────────────── */}
      <Modal open={showAddClient} onClose={() => setShowAddClient(false)} title="Add New Client">
        <div>
          <Input label="Company Name" placeholder="e.g., Acme Corp" />
          <Input label="Contact Email" placeholder="hello@company.com" className="mt-4" />
          <div className="mt-6 flex justify-end gap-3">
            <Button variant="ghost" onClick={() => setShowAddClient(false)}>
              Cancel
            </Button>
            <Button variant="primary">Create Client</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
