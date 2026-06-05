import { Outlet } from 'react-router-dom';

export function ClientLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Minimal header for client-facing pages */}
      <header className="border-b border-gray-200 bg-white px-6 py-4">
        <h1 className="text-lg font-semibold text-indigo-600">AdNode</h1>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
