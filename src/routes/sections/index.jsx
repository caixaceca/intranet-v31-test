import { lazy } from 'react';
import { Navigate } from 'react-router';

import { CONFIG } from 'src/global-config';

import { mainRoutes } from './main';
import { dashboardRoutes } from './dashboard';

// ----------------------------------------------------------------------

const Page404 = lazy(() => import('src/pages/error/404'));

export const routesSection = [
  {
    path: '/',
    element: <Navigate to={CONFIG.auth.redirectPath} replace />,
  },

  // Dashboard
  ...dashboardRoutes,

  // Main
  ...mainRoutes,

  // No match
  { path: '*', element: <Page404 /> },
];
