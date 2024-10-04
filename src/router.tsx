import React from 'react';
import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom';

import { Guideline } from '@/pages/Guideline';
import { Home } from '@/pages/Home';

export const ROUTER_PATH = {
  ROOT: '/',
  USER: '/user',
  GUIDELINE: '/guideline',
  NOT_FOUND: '*',
} as const;

const PrivateRoute = (): React.ReactElement => {
  const auth = true;
  return auth ? <Outlet /> : <Navigate to={ROUTER_PATH.ROOT} />;
};

export const router = createBrowserRouter([
  { index: true, path: ROUTER_PATH.ROOT, element: <Home /> },
  { path: ROUTER_PATH.GUIDELINE, element: <Guideline /> },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: ROUTER_PATH.USER,
        element: <div>private router</div>,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={ROUTER_PATH.ROOT} />,
  },
]);
