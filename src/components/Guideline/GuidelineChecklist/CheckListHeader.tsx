import { BoomerangColors } from '@/utils/colors';
import { Flex, Text } from '@chakra-ui/react';
import Check from '@images/check.svg?react';

export const CheckListHeader = () => (
  <Flex
    bg={'#2D79FF'}
    h={81}
    lineHeight={`${81}px`}
    borderTopRadius={36}
    justifyContent={'center'}
    alignItems={'center'}
    gap={'10px'}
    shadow="0px 4px 8.2px -2px rgba(0, 0, 0, 0.25)"
  >
    <Check />
    <Text textAlign="center" fontSize="23px" color={BoomerangColors.white}>
      전세사기 대응을 위한{' '}
      <Text as="span" color="#0E2E67">
        필요서류
      </Text>
      들을 확인해주세요!
    </Text>
  </Flex>
);
