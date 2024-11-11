import { setGuidelineType } from '@apis/guideline';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { QuestionText } from '@/components/commons/QuestionText';
import { ROUTER_PATH } from '@/routerPath';
import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react';
import cryinFace from '@images/cryingFace.svg';
import thumbsUp from '@images/thumbsUp.svg';

export interface SurveyQuestions {
  title: string;
  subtitle: string;
  options?: [string, boolean][];
}

const LeaseType = {
  type1: '전세권',
  type2: '임대차',
} as const;

const questions: SurveyQuestions[] = [
  {
    title: '전세권 설정을 하셨나요?',
    subtitle: '전세권 설정이 무엇인가요?',
    options: [
      [LeaseType.type1, true],
      [LeaseType.type2, false],
    ],
  },
  {
    title: '보증 보험에 가입 되어있나요 ?',
    subtitle: '보증 보험이 무엇인가요?',
    options: [
      ['네! 가입되어 있어요', true],
      ['아니요, 아직 안되어있어요', false],
    ],
  },
];

export const QuestionSection: React.FC = () => {
  const [leaseType, setLeaseType] = useState<boolean>(true);
  const [isInsured, setIsInsured] = useState<boolean>(false);
  const navigate = useNavigate();

  const [question1, question2] = questions;

  const sendType = () => {
    if (leaseType === null) {
      alert('전세권 설정 여부를 선택해주세요.');
      return;
    }
    if (leaseType && isInsured === null) {
      alert('보험 여부를 선택해주세요.');
      return;
    }

    setGuidelineType(
      isInsured,
      leaseType ? LeaseType.type1 : LeaseType.type2
    ).then(() => {
      navigate(ROUTER_PATH.GUIDELINE);
    });
  };

  return (
    <VStack pt={35} pb={41} pl={120} pr={120} align="stretch">
      <VStack align="stretch" gap={'35px'}>
        <SurveyQuestionLeaseField
          index={1}
          question={question1}
          value={leaseType}
          setValue={setLeaseType}
        />
        <SurveyQuestionInsuranceField
          index={2}
          key={question2.title}
          question={question2}
          isActive={leaseType}
          value={isInsured}
          setValue={setIsInsured}
        />
      </VStack>
      <Button
        mt={'67px'}
        w="415px"
        h="113px"
        borderRadius="8px"
        bg="#176CFF"
        color="#fff"
        fontSize="35px"
        fontWeight={800}
        alignSelf="center"
        onClick={sendType}
      >
        다음 단계로 넘어가기
      </Button>
    </VStack>
  );
};

const SurveyQuestionLeaseField: React.FC<{
  question: SurveyQuestions;
  index: number;
  value: boolean;
  setValue: (value: boolean) => void;
}> = ({ index, question, value, setValue }) => {
  const { options } = question;
  if (!options || options.length < 2) {
    return <div>선택할 옵션이 주어지지 않았습니다.</div>;
  }

  const [option1, option2] = options;

  return (
    <Box>
      <QuestionText index={index} question={question} />
      <Flex ml={33} justifyContent="space-between" mt={'32px'}>
        <SurveyButton
          isActive={value === option1[1]}
          onClick={() => setValue(option1[1])}
          label={option1[0]}
          bgColorActive="#176CFF"
          bgColorInactive="#gray"
          textColorActive="#FFF"
          textColorInactive="#176CFF"
        />
        <SurveyButton
          isActive={value === option2[1]}
          onClick={() => setValue(option2[1])}
          label={option2[0]}
          bgColorActive="#176CFF"
          bgColorInactive="#gray"
          textColorActive="#FFF"
          textColorInactive="#176CFF"
        />
      </Flex>
    </Box>
  );
};

const SurveyQuestionInsuranceField: React.FC<{
  index: number;
  question: SurveyQuestions;
  isActive: boolean;
  value: boolean;
  setValue: (value: boolean) => void;
}> = ({ index, question, isActive, value, setValue }) => {
  const { options } = question;
  if (!options || options.length < 2) {
    return <div>선택할 옵션이 주어지지 않았습니다.</div>;
  }

  const [option1, option2] = options;

  return (
    <Box>
      <QuestionText index={index} question={question} />
      <Flex ml={33} justifyContent="space-between" mt={'32px'}>
        <SurveyButton
          isActive={isActive && value === option1[1]}
          onClick={() => setValue(option1[1])}
          imageSrc={thumbsUp}
          label={option1[0]}
          bgColorActive={isActive ? '#176CFF' : 'gray'}
          bgColorInactive={'#F5F5F5'}
          textColorActive={'#FFF'}
          textColorInactive={isActive ? '#176CFF' : 'gray'}
        />
        <SurveyButton
          isActive={isActive && value === option2[1]}
          onClick={() => setValue(option2[1])}
          imageSrc={cryinFace}
          label={option2[0]}
          bgColorActive={isActive ? '#FF3939' : 'gray'}
          bgColorInactive={'#F5F5F5'}
          textColorActive={'#FFF'}
          textColorInactive={isActive ? '#FF3939' : 'gray'}
        />
      </Flex>
    </Box>
  );
};

const SurveyButton: React.FC<{
  isActive: boolean;
  onClick: () => void;
  label: string;
  bgColorActive: string;
  bgColorInactive: string;
  textColorActive: string;
  textColorInactive: string;
  imageSrc?: string;
}> = ({
  isActive,
  onClick,
  imageSrc,
  label,
  bgColorActive,
  bgColorInactive,
  textColorActive,
  textColorInactive,
}) => {
  return (
    <Button
      bgColor={isActive ? bgColorActive : bgColorInactive}
      border={`2px solid ${bgColorActive}`}
      h={94}
      p={22}
      _hover={{
        bgColor: isActive ? bgColorActive : bgColorInactive,
      }}
      onClick={onClick}
    >
      {imageSrc && <Image src={imageSrc} />}
      <Text
        color={isActive ? textColorActive : textColorInactive}
        fontSize={25}
        fontWeight="bold"
        ml={13}
      >
        {label}
      </Text>
    </Button>
  );
};
