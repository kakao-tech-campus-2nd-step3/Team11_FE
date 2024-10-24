import React from 'react';
import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom';

import { Community } from '@/pages/Community';
import { DamagePrevention1 } from '@/pages/DamagePrevention1';
import { Guideline } from '@/pages/Guideline';
import { Home } from '@/pages/Home';
import { CommunityPosting } from '@/templates/Community/CommunityPosting';
import { CommunityViewer } from '@/templates/Community/CommunityViewer';

export const ROUTER_PATH = {
  ROOT: '/',
  USER: '/user',
  GUIDELINE: '/guideline',
  PREVENT: '/prevent/:id',
  COMMUNITY: '/community/:type',
  POSTING: '/community/posting',
  NOT_FOUND: '*',
} as const;

const PrivateRoute = (): React.ReactElement => {
  const auth = true;
  return auth ? <Outlet /> : <Navigate to={ROUTER_PATH.ROOT} />;
};

export const router = createBrowserRouter([
  { index: true, path: ROUTER_PATH.ROOT, element: <Home /> },
  { path: ROUTER_PATH.GUIDELINE, element: <Guideline /> },
  { path: ROUTER_PATH.PREVENT, element: <DamagePrevention1 /> },
  {
    element: <Community />,
    children: [
      { path: ROUTER_PATH.POSTING, element: <CommunityPosting /> },
      {
        path: ROUTER_PATH.COMMUNITY,
        element: <CommunityViewer />,
      },
    ],
  },
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
