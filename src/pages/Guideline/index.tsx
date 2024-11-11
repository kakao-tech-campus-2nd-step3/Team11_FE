import { MainStep, ProgressResponse } from '@apis/guideline/types';

import { GuidelineChecklist } from '@components/Guideline/GuidelineChecklist';
import { GuidelineCloseBanner } from '@components/Guideline/GuidelineCloseBanner';
import { GuidelineNavHelp } from '@components/Guideline/GuidelineNavHelp';
import { GuidelineProgressBar } from '@components/Guideline/GuidelineProgressBar';
import { GuidelineStatistics } from '@components/Guideline/GuidelineStatistics';
import { GuidelineWarning } from '@components/Guideline/GuidelineWarning';
import { BasicLayout } from '@components/commons/BasicLayout';

import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { Flex, VStack } from '@chakra-ui/react';

export const Guideline: React.FC = () => {
  const data = useLoaderData() as ProgressResponse;
  const {
    main_step_list: mainStepList,
    current_main_step: currentMainStep,
    sub_step_list: subStepList,
  } = data;

  const currIdx = mainStepList.findIndex(
    (mainStep: MainStep) => mainStep.main_step_name === currentMainStep
  );

  return (
    <BasicLayout maxW={1015}>
      <VStack spacing={'39px'} align="stretch" mb={'66px'}>
        <GuidelineProgressBar
          h={195}
          currMainIdx={currIdx}
          mainStepList={mainStepList}
        />
        <Flex gap={'40px'} h={'max-content'}>
          <GuidelineChecklist
            h={667}
            subStepList={subStepList}
            mainStep={currentMainStep}
          />
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
};
