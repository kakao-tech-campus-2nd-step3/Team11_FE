import React from 'react';

import { SurveyQuestions } from '@/components/Survey/QuestionSection';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import infoIcon from '@images/infoIcon.svg';

export const QuestionText: React.FC<{
  index: number;
  question: SurveyQuestions;
}> = ({ index, question }) => {
  return (
    <Box>
      <Text fontSize={30} fontWeight={800} color="#313131">
        {index}. {question.title}
      </Text>
      <Flex alignItems="center" gap={'6px'} marginLeft={33}>
        <Image src={infoIcon} w={'14px'} h={'14px'} />
        <Text color="#619AFF" fontSize={16}>
          {question.subtitle}
        </Text>
      </Flex>
    </Box>
  );
};
