import { Flex, Text } from '@chakra-ui/react';
import Clock from '@images/clock.svg?react';

export const AverageTime = () => (
  <Flex
    borderRadius={5}
    bgColor="rgba(0,0,0,0.4)"
    color="#FFF"
    p={'12px'}
    h={50}
    gap={'9px'}
    alignItems="center"
  >
    <Clock />
    <Text fontSize={21} fontWeight="bold">
      평균 1~3달 소요
    </Text>
  </Flex>
);
