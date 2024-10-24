import { BasicLayout } from '@components/commons/BasicLayout';

import React from 'react';
import { Outlet } from 'react-router-dom';

import { BoomerangColors } from '@/utils/colors';

export const Community: React.FC = () => (
  <BasicLayout maxW={1920} bg={BoomerangColors.white}>
    <Outlet />
  </BasicLayout>
);
