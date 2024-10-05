import { CommunitySection } from '@components/CommunitySection';
import { ConsultationSection } from '@components/CounsultationSection';
import { HeroSection } from '@components/HeroSection';
import { MainSection } from '@components/MainSection';
import { BasicLayout } from '@components/commons/BasicLayout';

import React from 'react';

import { Box, Spacer, VStack } from '@chakra-ui/react';

export const Home: React.FC = () => {
  return (
    <BasicLayout maxW={1024}>
      <VStack spacing={10} align="stretch">
        <HeroSection h={300} />
        <MainSection h={492} />
        <ConsultationSection h={470} />
        <CommunitySection h={700} />
        <Spacer />
      </VStack>
    </BasicLayout>
  );
};
