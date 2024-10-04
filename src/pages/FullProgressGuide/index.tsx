import React from 'react';

import { ProcedureSection } from '@/components/FullProgressGuide/ProcedureSection';
import { ProgressBarSection } from '@/components/FullProgressGuide/ProgressBarSection';
import { BasicLayout } from '@/components/commons/BasicLayout';
import { VStack } from '@chakra-ui/react';

export const FullProgressGuide: React.FC = () => {
  return (
    <BasicLayout maxW={1024}>
      <VStack mt="125px" mb="80px" align="stretch">
        <ProgressBarSection />
        <ProcedureSection />
      </VStack>
    </BasicLayout>
  );
};
