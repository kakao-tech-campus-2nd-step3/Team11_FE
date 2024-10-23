import BoomerangBoard from '@components/CommunityBoard/BoomerangBoard';
import { BasicLayout } from '@components/commons/BasicLayout';

import React from 'react';

const Community: React.FC = () => (
  <BasicLayout maxW={1920} bg="white">
    <BoomerangBoard />
  </BasicLayout>
);

export default Community;
