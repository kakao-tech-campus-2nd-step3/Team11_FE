import { PropH } from '@components/commons/types';

import React from 'react';

import { BoomerangColors } from '@/utils/colors';
import { Box, Flex, Text } from '@chakra-ui/react';
import CommentBubble from '@images/commentBubble.svg?react';
import Speaker from '@images/speaker.svg?react';

import styles from './index.module.css';

export const IndexCommunityBanner: React.FC<PropH> = ({ h }) => (
  <Flex
    bg={BoomerangColors.deepBlue}
    h={h}
    pl={70}
    alignItems="center"
    className={styles['community--banner']}
  >
    <Box mr="130px">
      <Text
        pb={30}
        fontSize="36px"
        color={BoomerangColors.white}
        fontWeight={600}
      >
        부메랑 커뮤니티 게시판
      </Text>
      <Text color={'#BCD4FF'} fontSize={20} fontWeight={700}>
        전세사기 피해자들의 목소리를 한곳에,
        <br />
        함께 나누는 해결의 길
      </Text>
    </Box>
    <Box h="100%">
      <Speaker />
      <CommentBubble />
    </Box>
  </Flex>
);
