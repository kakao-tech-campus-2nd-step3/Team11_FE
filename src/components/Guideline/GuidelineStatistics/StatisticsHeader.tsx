import { BoomerangColors } from '@/utils/colors';
import { Flex, Text } from '@chakra-ui/react';

export const StatisticsHeader = () => (
  <Flex
    w={'873px'}
    h={'136px'}
    borderRadius={90}
    borderBottomStartRadius={2}
    bg={BoomerangColors.white}
    pl={'82px'}
    mt={'52px'}
    alignItems={'center'}
  >
    <Text color={'#434343'} fontSize={'38px'} fontWeight={700}>
      2단계 임차권 등기 명령 과정에서
      <br />
      <Text color={'#176CFF'} fontWeight={800} as="span">
        부메랑 사용 평균 2주✨
      </Text>
      감소 되었어요!
    </Text>
  </Flex>
);
