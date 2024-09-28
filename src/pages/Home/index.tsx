import { HeroSection } from '@components/HeroSection';
import { BasicLayout } from '@components/commons/BasicLayout';
import { RoundedBox } from '@components/commons/RoundedBox';

import React from 'react';

import { Box, Flex, Spacer, VStack } from '@chakra-ui/react';

// TODO: 각 섹션 컴포넌트로

const MainSection: React.FC = () => (
  <Flex h={492}>
    <VStack flex={1.15} align="stretch" justify="space-between">
      <RoundedBox bg="white">전세 피해 예방</RoundedBox>
      <RoundedBox bg="white">전세 사기 대비 가이드라인</RoundedBox>
      <RoundedBox bg="white">집이 경매에 넘어갔다면</RoundedBox>
    </VStack>
    <Box flex={1.9} ml={25} borderRadius={20} bg="white">
      최신 후기
    </Box>
  </Flex>
);

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
