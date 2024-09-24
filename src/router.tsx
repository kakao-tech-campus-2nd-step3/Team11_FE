import { Navigate, Outlet } from 'react-router';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';

export const ROUTER_PATH = Object.freeze({
  ROOT: '/',
  USER: '/user',
  NOT_FOUND: '*',
});

const PrivateRoute = (): React.ReactElement => {
  const auth = true;
  return auth ? <Outlet /> : <Navigate to={ROUTER_PATH.ROOT} />;
};

export const router = createBrowserRouter([
  { index: true, path: ROUTER_PATH.ROOT, element: <App /> },
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
