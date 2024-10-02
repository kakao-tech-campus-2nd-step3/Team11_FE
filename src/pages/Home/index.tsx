import { HeroSection } from '@components/HeroSection';
import { MainSection } from '@components/MainSection';
import { BasicLayout } from '@components/commons/BasicLayout';

import React from 'react';

import { Box, Spacer, VStack } from '@chakra-ui/react';

// TODO: 각 섹션 컴포넌트로

const ConsultationSection: React.FC = () => (
  <Box bg="white" h={470}>
    전문가와 상담
  </Box>
);

const CommunitySection: React.FC = () => (
  <Box h={700} bg={'white'}>
    커뮤니티
  </Box>
);

export const Home: React.FC = () => {
  return (
    <BasicLayout>
      <VStack spacing={10} align="stretch">
        <HeroSection />
        <MainSection />
        <ConsultationSection />
        <CommunitySection />
        <Spacer />
      </VStack>
    </BasicLayout>
  );
};
