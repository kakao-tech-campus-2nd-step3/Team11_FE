import React from 'react';

import { MoreInfoSection } from '@/components/PreventionResult/MoreInfoSection';
import { ReportResultSection } from '@/components/PreventionResult/ReportResultSection';
import { BasicLayout } from '@/components/commons/BasicLayout';
import { Box } from '@chakra-ui/react';

export const PreventionResult: React.FC = () => {
  return (
    <BasicLayout maxW={1024}>
      <Box bg="#FFF" borderRadius={20}>
        <ReportResultSection />
        <MoreInfoSection />
      </Box>
    </BasicLayout>
  );
};
