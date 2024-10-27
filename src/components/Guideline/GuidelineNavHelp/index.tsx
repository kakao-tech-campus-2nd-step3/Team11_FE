import { GuidelineBtn } from '@/components/Guideline/GuidelineNavHelp/GuidelineBtn';
import { PropH } from '@/components/commons/types';
import { BoomerangColors } from '@/utils/colors';
import { Flex, Text, VStack } from '@chakra-ui/react';
import chat from '@images/chat.svg';
import question from '@images/question.svg';
import QuestionMessage from '@images/questionMessage.svg?react';

export const GuidelineNavHelp: React.FC<PropH> = ({ h }) => (
  <VStack
    borderRadius={38}
    bg={BoomerangColors.white}
    w={430}
    h={h}
    pl={'39px'}
    pr={'39px'}
    justifyContent={'center'}
    shadow="0px 0px 8.9px 0px rgba(0, 0, 0, 0.26)"
  >
    <Flex gap={'15px'} alignItems={'center'} w={'100%'}>
      <QuestionMessage />
      <Text color={'#474747'} fontWeight={800} fontSize={'24px'}>
        그래도 잘 모르겠다면?
      </Text>
    </Flex>

    <VStack mt={'21px'} gap={'18px'}>
      <GuidelineBtn bg={'#176CFF'} icon={question}>
        전문가와 상담하러 가기
      </GuidelineBtn>
      <GuidelineBtn bg={'#36A8C4'} icon={chat}>
        커뮤니티에 질문하러 가기
      </GuidelineBtn>
    </VStack>
  </VStack>
);
