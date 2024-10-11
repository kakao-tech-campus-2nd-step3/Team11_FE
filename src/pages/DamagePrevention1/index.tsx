import React from 'react';
import { useParams } from 'react-router-dom';

import { ProcedureBar } from '@/components/DamagePrevention1/ProgressBar';
import { BasicLayout } from '@/components/commons/BasicLayout';
import { VStack } from '@chakra-ui/react';
import { Step1 } from '@/components/DamagePrevention1/Step1';

export const DamagePrevention1: React.FC = () => {
  const { id } = useParams();
  return (
    <BasicLayout maxW={1024}>
      <VStack
        bgColor="#FFF"
        align="stretch"
        borderRadius={20}
        shadow="0px 0px 4.3px rgba(0,0,0,0.25)"
        mt={'52px'}
      >
        <ProcedureBar percent={15} />
        {id === '1' ? <Step1 /> : null}
      </VStack>
    </BasicLayout>
  );
};
