import React from 'react';

import { BoomerangColors } from '@/utils/colors';
import { Flex, Text } from '@chakra-ui/react';
import CommunityIcon from '@images/community.svg?react';

export const CommunityHeader = () => (
  <Flex
    bg={BoomerangColors.blue}
    h={75}
    borderTopRadius={11}
    pl="45px"
    mb={30}
    alignItems="center"
    boxShadow="xl"
  >
    <Text fontSize="24px" mr={2} color={BoomerangColors.white}>
      커뮤니티
    </Text>
    <CommunityIcon />
  </Flex>
);
