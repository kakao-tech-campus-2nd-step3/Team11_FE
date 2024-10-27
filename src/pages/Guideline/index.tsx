import { BasicLayout } from '@components/commons/BasicLayout';

import React from 'react';

import { GuidelineChecklist } from '@/components/Guideline/GuidelineChecklist/index';
import { GuidelineCloseBanner } from '@/components/Guideline/GuidelineCloseBanner/index';
import { GuidelineNavHelp } from '@/components/Guideline/GuidelineNavHelp/index';
import { GuidelineProgressBar } from '@/components/Guideline/GuidelineProgressBar/index';
import { GuidelineSaveButton } from '@/components/Guideline/GuidelineSaveButton/index';
import { GuidelineStatistics } from '@/components/Guideline/GuidelineStatistics/index';
import { GuidelineWarning } from '@/components/Guideline/GuidelineWarning/index';
import { Flex, VStack } from '@chakra-ui/react';

export const Guideline: React.FC = () => (
  <BasicLayout maxW={1015}>
    <VStack spacing={'39px'} align="stretch" mb={'66px'}>
      <GuidelineProgressBar h={195} percent={16} />
      <GuidelineSaveButton h={49} />
      <Flex gap={'40px'}>
        <GuidelineChecklist h={667} />
        <VStack h={667} justifyContent="space-between">
          <GuidelineWarning h={361} />
          <GuidelineNavHelp h={278} />
        </VStack>
      </Flex>
      <GuidelineStatistics h={530} />
      <GuidelineCloseBanner h={274} />
    </VStack>
  </BasicLayout>
);
