import React from 'react';

import { BoomerangColors } from '@/utils/colors';
import { Flex, Text } from '@chakra-ui/react';
import CommunityIcon from '@images/community.svg?react';
import Note from '@images/note.svg?react';

import styles from './index.module.css';

export const CommunityHeader = () => (
  <Flex
    bg={BoomerangColors.blue}
    h={75}
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
    <Note />
  </Flex>
);
