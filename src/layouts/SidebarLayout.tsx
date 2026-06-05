import { Outlet } from 'react-router-dom';

export function SidebarLayout() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar placeholder */}
      <aside className="hidden w-64 border-r border-gray-200 bg-white lg:block">
        <div className="flex h-16 items-center px-6">
          <h1 className="text-xl font-bold text-indigo-600">AdNode</h1>
        </div>
        <nav className="mt-4 space-y-1 px-3">
          <p className="px-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
            Navigation
          </p>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
