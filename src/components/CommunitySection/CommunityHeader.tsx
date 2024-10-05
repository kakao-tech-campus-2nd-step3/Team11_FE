import { PropH } from '@components/commons/types';

import React from 'react';

import { BoomerangColors } from '@/utils/colors';
import { Flex, Text } from '@chakra-ui/react';
import CommunityIcon from '@images/community.svg?react';
import House from '@images/house.svg?react';

import styles from './index.module.css';

export const CommunityHeader: React.FC<PropH> = ({ h }) => (
  <Flex
    bg={BoomerangColors.blue}
    h={h}
    borderTopRadius={11}
    pl="45px"
    mb={30}
    alignItems="center"
    boxShadow="xl"
    className={styles['community--header']}
  >
    <Text fontSize="24px" mr={2} color={BoomerangColors.white}>
      커뮤니티
    </Text>
    <CommunityIcon />
    <House opacity={0.2} />
  </Flex>
);
