import React from 'react';
import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom';

import { Community } from '@/pages/Community';
import { Guideline } from '@/pages/Guideline';
import { Home } from '@/pages/Home';

export const ROUTER_PATH = {
  ROOT: '/',
  USER: '/user',
  GUIDELINE: '/guideline',
  COMMUNITY: '/community/:type',
  NOT_FOUND: '*',
} as const;

const PrivateRoute = (): React.ReactElement => {
  const auth = true;
  return auth ? <Outlet /> : <Navigate to={ROUTER_PATH.ROOT} />;
};

export const router = createBrowserRouter([
  { index: true, path: ROUTER_PATH.ROOT, element: <Home /> },
  { path: ROUTER_PATH.GUIDELINE, element: <Guideline /> },
  { path: ROUTER_PATH.COMMUNITY, element: <Community /> },
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
