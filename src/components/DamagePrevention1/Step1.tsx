import React from 'react';

import { SurveyQuestions } from '@/components/Survey/QuestionSection';
import { QuestionText } from '@/components/commons/QuestionText';
import { Box, Flex, Image, Input, Text, VStack } from '@chakra-ui/react';
import document from '@images/document.svg';
import light from '@images/light.svg';
import message from '@images/message.svg';
import search from '@images/search.svg';

interface SelectBoxProps {
  title: string;
  subtitle: string;
  icon: string;
}

const preventionSurvey: SurveyQuestions[] = [
  {
    title: '집 도로명 주소를 입력해주세요.',
    subtitle: '도로명 주소는 어떻게 작성하나요?',
  },
];

export const Step1: React.FC = () => {
  return (
    <Box pl={71} pr={71} pt={35} pb={43}>
      <QuestionText index={1} question={preventionSurvey[0]} />
      <Search />
      <SelectSection />
    </Box>
  );
};

const Search: React.FC = () => (
  <Flex
    bgColor="#E7F4FF"
    borderRadius={62}
    border="2px solid rgba(23, 108, 255, 0.69)"
    w={887}
    h={67}
    alignItems="center"
    pl={'32px'}
    pr={'32px'}
    mt={'21px'}
  >
    <Input
      border="none"
      _focus={{
        boxShadow: 'none',
      }}
      placeholder="검색어 예)도로명(서울특별시 서초구 반포대로 58), 지번(서울특별시 강남구 삼성동 25)"
      _placeholder={{
        color: 'rgba(23, 108, 255, 0.51)',
        fontSize: '20px',
      }}
    />
    <Image src={search} w={39} h={39} />
  </Flex>
);

const SelectSection: React.FC = () => (
  <Box mt={'32px'}>
    <Flex gap={'20px'}>
      <Image src={light} />
      <Text fontSize={18} fontWeight="bold" color="rgba(116, 134, 144, 0.72)">
        우리 집 등기부등본이 없나요? 부메랑이 쉽게 바로 불러와줄게요!
      </Text>
    </Flex>
    <Flex gap={122} mt={15}>
      <SelectBox
        title="괜찮아요! 이미 발급받았어요"
        subtitle=""
        icon={message}
      />
      <SelectBox
        title="발급이 필요해요!"
        subtitle="* 발급시 수수료가 발생합니다."
        icon={document}
      />
    </Flex>
  </Box>
);

const SelectBox: React.FC<SelectBoxProps> = ({ title, subtitle, icon }) => (
  <VStack
    bgColor="#FAFCFC"
    shadow="0px 0px 12.7px rgba(0,0,0,0.25)"
    borderRadius={27}
    w={275}
    h={266}
    justifyContent="center"
  >
    <Text fontSize={'28px'} fontWeight={800} color="#373737">
      {title}
    </Text>
    <Text fontSize={'16px'} fontWeight="bold" color="FF6C6F">
      {subtitle}
    </Text>
    <Image src={icon} />
  </VStack>
);
