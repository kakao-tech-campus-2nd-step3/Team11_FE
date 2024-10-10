import React from 'react';

import { BannerSection } from '@/components/Survey/BannerSection';
import { QuestionSection } from '@/components/Survey/QuestionSection';
import { BasicLayout } from '@/components/commons/BasicLayout';
import { Box } from '@chakra-ui/react';

export const Survey: React.FC = () => {
  return (
    <BasicLayout maxW={1024}>
      <Box bg="#FFF">
        <BannerSection />
        <QuestionSection />
      </Box>
    </BasicLayout>
  );
};
