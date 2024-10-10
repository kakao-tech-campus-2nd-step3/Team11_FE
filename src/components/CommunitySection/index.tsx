import { IndexCommunityBanner } from '@components/CommunitySection/IndexCommunityBanner';
import {
  ICommunityBoardNavBox,
  IndexCommunityBoardNavBox,
} from '@components/CommunitySection/IndexCommunityBoardNavBox';
import { IndexCommunityHeader } from '@components/CommunitySection/IndexCommunityHeader';
import { PropH } from '@components/commons/types';

import React from 'react';

import { BoomerangColors } from '@/utils/colors';
import { Box, Flex } from '@chakra-ui/react';
import free from '@images/free.svg';
import local from '@images/local.svg';
import shush from '@images/shush.svg';
import steps from '@images/steps.svg';

const boards = [
  {
    type: '자유게시판',
    desc: '다른 사람들과 자유롭게\n 소통해요!',
    img: free,
  },
  {
    type: '지역별 게시판',
    desc: '같은 지역의 다른 사람과\n 자유롭게 소통해요!',
    img: local,
  },
  {
    type: '시크릿 게시판',
    desc: '같은 임대인을 갖는 사람들과\n 자유롭게 소통해요!',
    img: shush,
  },
  {
    type: '단계별 게시판',
    desc: '나와 같은 상황과 단계를\n 갖는 사람들과 소통해요!',
    img: steps,
  },
] as ICommunityBoardNavBox[];

export const CommunitySection: React.FC<PropH> = ({ h }) => (
  <Box h={h} bg={BoomerangColors.white} borderRadius={20}>
    <IndexCommunityHeader h={75} />
    <IndexCommunityBanner h={250} />
    <Flex mt={35} pl={8} pr={8} justifyContent="space-between">
      {boards.map((board) => (
        <IndexCommunityBoardNavBox key={board.type} h={283} {...board} />
      ))}
    </Flex>
  </Box>
);
