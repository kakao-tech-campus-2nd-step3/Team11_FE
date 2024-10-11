import React from 'react';

import { QuestionText } from '@/components/commons/QuestionText';
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import cryinFace from '@images/cryingFace.svg';
import thumbsUp from '@images/thumbsUp.svg';

export interface SurveyQuestions {
  title: string;
  subtitle: string;
  type?: 'input' | 'select';
}

const questions: SurveyQuestions[] = [
  {
    title: '전세 보증 보험에 가입이 되어있나요?',
    subtitle: '전세 보증 보험이 무엇인가요?',
    type: 'input',
  },
  {
    title: '전세 보증 보험에 가입이 되어있나요?',
    subtitle: '전세 보증 보험이 무엇인가요?',
    type: 'input',
  },
  {
    title: '전세 보증 보험에 가입이 되어있나요?',
    subtitle: '전세 보증 보험이 무엇인가요?',
    type: 'input',
  },
  {
    title: '전세 보증 보험에 가입이 되어있나요?',
    subtitle: '전세 보증 보험이 무엇인가요?',
    type: 'select',
  },
];

export const QuestionSection: React.FC = () => (
  <VStack pt={35} pb={41} pl={120} pr={120} align="stretch">
    <VStack align="stretch" gap={'35px'}>
      {questions.map((question, index) =>
        question.type === 'input' ? (
          <InputItem key={index} index={index + 1} question={question} />
        ) : (
          <SelectItem key={index} index={index + 1} question={question} />
        )
      )}
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
    >
      다음 단계로 넘어가기
    </Button>
  </VStack>
);

const InputItem: React.FC<{
  index: number;
  question: SurveyQuestions;
}> = ({ index, question }) => (
  <Box>
    <QuestionText index={index} question={question} />
    <Box
      h={131}
      borderRadius={12}
      bg="#E7F4FF"
      border="2px solid rgba(23, 108, 255, 0.69)"
      ml={33}
      mt={'32px'}
      p={5}
    >
      <Textarea
        border="none"
        resize="none"
        _focus={{
          boxShadow: 'none',
        }}
        placeholder="질문에 맞는 텍스트를 입력해주세요."
        _placeholder={{
          color: 'rgba(23, 108, 255, 0.51)',
          fontSize: '20px',
        }}
      />
    </Box>
  </Box>
);

const SelectItem: React.FC<{
  index: number;
  question: SurveyQuestions;
}> = ({ index, question }) => {
  return (
    <Box>
      <QuestionText index={index} question={question} />
      <Flex ml={33} justifyContent="space-between" mt={'32px'}>
        <Button bgColor="#E7F4FF" border="2px solid #176CFF" h={94} p={22}>
          <Image src={thumbsUp} />
          <Text color="#176CFF" fontSize={25} fontWeight="bold" ml={13}>
            네! 가입되어 있어요
          </Text>
        </Button>
        <Button bgColor="#FFCFCF" border="2px solid #FF3939" h={94}>
          <Image src={cryinFace} />
          <Text color="#FF3939" fontSize={25} fontWeight="bold" ml={'10px'}>
            아니요, 아직 안되어있어요
          </Text>
        </Button>
      </Flex>
    </Box>
  );
};
