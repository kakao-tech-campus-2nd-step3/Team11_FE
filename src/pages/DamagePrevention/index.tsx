import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { PreventionBtn } from '@/components/DamagePrevention/PreventionBtn';
import { ProcedureBar } from '@/components/DamagePrevention/ProgressBar';
import { Step1 } from '@/components/DamagePrevention/step1';
import { Step2 } from '@/components/DamagePrevention/step2';
import { SurveyQuestions } from '@/components/Survey/QuestionSection';
import { BasicLayout } from '@/components/commons/BasicLayout';
import { ROUTER_PATH } from '@/routerPath';
import { Flex, VStack } from '@chakra-ui/react';

export const preventionSurvey: SurveyQuestions[] = [
  {
    title: '집 도로명 주소를 입력해주세요.',
    subtitle: '도로명 주소는 어떻게 작성하나요?',
  },
  {
    title: '보증금 유형을 선택해주세요.',
    subtitle: '정확히 선택해주셔야 정확한 가이드가 가능합니다.',
  },
];

export const DamagePrevention: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const currentId = id ? parseInt(id) : 1;
  const totalStep = 2;
  const navigate = useNavigate();

  const goToPreviousStep = () => {
    navigate(`/prevent/${currentId - 1}`);
  };

  const goToNextStep = () => {
    if (currentId == totalStep) {
      navigate(ROUTER_PATH.PREVENT_RESULT);
    } else {
      navigate(`/prevent/${currentId + 1}`);
    }
  };

  return (
    <BasicLayout maxW={1024}>
      <VStack
        bgColor="#FFF"
        align="stretch"
        borderRadius={20}
        shadow="0px 0px 4.3px rgba(0,0,0,0.25)"
        mt={'52px'}
      >
        <ProcedureBar nowStep={currentId} totalStep={totalStep} />
        {id === '1' ? <Step1 /> : <Step2 />}
      </VStack>

      <Flex justifyContent="flex-end" mt="41px" gap={'772px'}>
        {currentId != 1 && (
          <PreventionBtn bgColor="#969696" onClick={goToPreviousStep}>
            이전
          </PreventionBtn>
        )}
        <PreventionBtn bgColor="#176CFF" onClick={goToNextStep}>
          다음
        </PreventionBtn>
      </Flex>
    </BasicLayout>
  );
};
