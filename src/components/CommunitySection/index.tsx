import { IndexCommunityBanner } from '@components/CommunitySection/IndexCommunityBanner';
import {
  ICommunityBoardNavBox,
  IndexCommunityBoardNavBox,
} from '@components/CommunitySection/IndexCommunityBoardNavBox';
import { IndexCommunityHeader } from '@components/CommunitySection/IndexCommunityHeader';
import { PropH } from '@components/commons/types';

import React from 'react';

import { BoomerangColors } from '@/utils/colors';
import { boards } from '@/utils/statics';
import { Box, Flex } from '@chakra-ui/react';

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
