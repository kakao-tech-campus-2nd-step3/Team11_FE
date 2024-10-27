import { PropH } from '@/components/commons/types';
import { BoomerangColors } from '@/utils/colors';
import { Flex, Image, Text } from '@chakra-ui/react';
import heart from '@images/heart.svg';

export const GuidelineCloseBanner: React.FC<PropH> = ({ h }) => (
  <Flex bg={'#2D79FF'} borderRadius={13} h={h} pl={16} alignItems="flex-end">
    <Image src={heart} w={256} h={249} />
    <Flex flexDir={'column'} mb={'48px'}>
      <Text
        whiteSpace="pre-line"
        color={BoomerangColors.white}
        fontSize="45px"
        fontWeight={800}
        lineHeight={'54px'}
      >
        당신은 혼자가 아닙니다,
        <br />
        <Text as="span" color="#22387B">
          부메랑
        </Text>
        과 함께라면 해결할 수 있어요!
      </Text>
      <Text
        fontSize="31px"
        fontWeight={700}
        color={'#8FB8FF'}
        lineHeight={'59px'}
      >
        전세금을 지키고 되찾는 길, 부메랑이 함께해요.
      </Text>
    </Flex>
  </Flex>
);
