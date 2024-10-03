import { CommunityBanner } from '@components/CommunitySection/CommunityBanner';
import {
  CommunityBoardNavBox,
  ICommunityBoardNavBox,
} from '@components/CommunitySection/CommunityBoardNavBox';
import { CommunityHeader } from '@components/CommunitySection/CommunityHeader';

import React from 'react';

import { BoomerangColors } from '@/utils/colors';
import { Box, Flex } from '@chakra-ui/react';
import free from '@images/free.svg';
import local from '@images/local.svg';
import shush from '@images/shush.svg';
import steps from '@images/steps.svg';

const boards: ICommunityBoardNavBox[] = [
  {
    type: '자유게시판',
    desc: '다른 사람들과 자유롭게 소통해요!',
    img: free,
  },
  {
    type: '지역별 게시판',
    desc: '같은 지역의 다른 사람과 자유롭게 소통해요!',
    img: local,
  },
  {
    type: '시크릿 게시판',
    desc: '같은 임대인을 갖는 사람들과 자유롭게 소통해요!',
    img: shush,
  },
  {
    type: '단계별 게시판',
    desc: '나와 같은 상황과 단계를 갖는 사람들과 소통해요!',
    img: steps,
  },
];

export const CommunitySection: React.FC = () => (
  <Box h={700} bg={BoomerangColors.white} borderRadius={20}>
    <CommunityHeader />
    <CommunityBanner />
    <Flex mt={35} pl={8} pr={8} justifyContent="space-between">
      {boards.map((board) => (
        <CommunityBoardNavBox key={board.type} {...board} />
      ))}
    </Flex>
  </Box>
);
