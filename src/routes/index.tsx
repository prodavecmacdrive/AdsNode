import { createBrowserRouter } from 'react-router-dom';
import { SidebarLayout } from '@/layouts/SidebarLayout';
import { ClientLayout } from '@/layouts/ClientLayout';
import { LoginPage } from '@/pages/LoginPage';
import { ClientEntryPage } from '@/pages/ClientEntryPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { ProjectPage } from '@/pages/ProjectPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/client/:token',
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <ClientEntryPage />,
      },
    ],
  },
  {
    element: <SidebarLayout />,
    children: [
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
      {
        path: '/project/:id',
        element: <ProjectPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
