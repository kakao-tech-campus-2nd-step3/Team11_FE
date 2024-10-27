import styles from '@components/Guideline/index.module.css';

import React from 'react';

import { AverageTime } from '@/components/Guideline/GuidelineProgressBar/AverageTime';
import { Percentage } from '@/components/Guideline/GuidelineProgressBar/Percentage';
import { ProgressBar } from '@/components/Guideline/GuidelineProgressBar/ProgressBar';
import { PropH } from '@/components/commons/types';
import { BoomerangColors } from '@/utils/colors';
import { Box, Flex } from '@chakra-ui/react';
import ProgressBg from '@images/progressBg.svg?react';

export type GuidelineProgressBarProps = {
  percent: number;
};

export const GuidelineProgressBar: React.FC<
  GuidelineProgressBarProps & PropH
> = ({ h, percent }) => (
  <Box
    className={styles.guideline}
    h={h}
    bg={BoomerangColors.deepBlue}
    borderBottomRadius={22}
    pl={'50px'}
    pr={'50px'}
    justifyContent="center"
  >
    <Box position="absolute">
      <ProgressBg />
    </Box>

    <Box position="relative" mt={'36px'}>
      <Flex alignItems="center" justifyContent="space-between">
        <Percentage percent={percent} />
        <AverageTime />
      </Flex>
      <ProgressBar percent={percent} />
    </Box>
  </Box>
);
