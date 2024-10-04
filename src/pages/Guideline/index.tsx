import { BasicLayout } from '@components/commons/BasicLayout';

import React from 'react';

import { BoomerangColors } from '@/utils/colors';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import ProgressBg from '@images/progressBg.svg?react';

import styles from './index.module.css';

export const Guideline = () => (
  <BasicLayout maxW={1015}>
    <GuidelineProgressBar mt={10} h={264} />
    <GuidelineSaveButton w={266} h={85} m="28px 0 28px calc(100% - 266px)" />
    <GuidelineChecklist h={972} mb={7} />
    <Flex h={422} justifyContent="space-between" mb={10}>
      <GuidelineWarning w={493} h={422} />
      <GuidelineNavHelp w={493} h={422} />
    </Flex>
    <GuidelineStatistics h={652} mb={8} />
    <GuidelineCloseBanner h={302} mb={24} />
  </BasicLayout>
);

const GuidelineProgressBar: React.FC<{ mt: number; h: number }> = ({
  mt,
  h,
}) => (
  <Box
    className={styles.guideline}
    mt={mt}
    h={h}
    bg={'#176CFF'}
    borderRadius={22}
  >
    <ProgressBg opacity={0.12} />
  </Box>
);

const GuidelineSaveButton: React.FC<{
  w: number;
  h: number;
}> = ({ w, h, m }) => (
  <Button bg={'#176CFF'} borderRadius={8} w={w} h={h} m={m}>
    <Text color={BoomerangColors.white} fontWeight={700} fontSize={'35px'}>
      저장하기
    </Text>
  </Button>
);

const GuidelineChecklist: React.FC<{ h: number; mb: number }> = ({ h, mb }) => (
  <Box
    boxShadow={'xl'}
    h={h}
    mb={mb}
    bg={BoomerangColors.white}
    borderRadius={38}
  >
    전세사기 대응을 위한 필요서류들을 확인해주세요
  </Box>
);

const GuidelineWarning: React.FC<{ w: number; h: number }> = ({ w, h }) => (
  <Box
    borderRadius={38}
    bg={BoomerangColors.white}
    w={w}
    h={h}
    boxShadow={'xl'}
  >
    주의사항
  </Box>
);

const GuidelineNavHelp: React.FC<{ w: number; h: number }> = ({ w, h }) => (
  <Box
    borderRadius={38}
    bg={BoomerangColors.white}
    w={w}
    h={h}
    boxShadow={'xl'}
  >
    그래도 잘 모르겠다면?
  </Box>
);

const GuidelineStatistics: React.FC<{ h: number; mb: number }> = ({
  h,
  mb,
}) => (
  <Box bg={BoomerangColors.white} h={h} borderRadius={45} mb={mb}>
    2단계 임차권 등기 명령 과정에서 부메랑 사용 평균 2주 감소 되었어요!
  </Box>
);

const GuidelineCloseBanner: React.FC<{ h: number; mb: number }> = ({
  h,
  mb,
}) => (
  <Box bg={BoomerangColors.white} borderRadius={13} h={h} mb={mb}>
    당신은 혼자가 아닙니다, 부메랑과 함께라면 해결할 수 있어요!
  </Box>
);
