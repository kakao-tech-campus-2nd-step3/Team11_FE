import React from 'react';

import { ConsultingBannerSection } from '@/components/Consulting/ConsultingBannerSection';
import { ConsultingSearchSection } from '@/components/Consulting/ConsultingSearchSection';
import { ExpertSection } from '@/components/Consulting/ExpertSection';
import { MentorSection } from '@/components/Consulting/MentorSection';
import { BasicLayout } from '@/components/commons/BasicLayout';
import { Box } from '@chakra-ui/react';

export const Consulting: React.FC = () => {
  return (
    <BasicLayout maxW={1024}>
      <Box mb="179px">
        <ConsultingSearchSection />
        <ExpertSection />
        <ConsultingBannerSection />
        <MentorSection />
      </Box>
    </BasicLayout>
  );
};
