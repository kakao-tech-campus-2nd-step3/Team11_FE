import { BasicLayout } from '@components/commons/BasicLayout';
import { PropH } from '@components/commons/types';

import React from 'react';

import { BoomerangColors } from '@/utils/colors';
import { Box, Button, Flex, Spacer, Text, VStack } from '@chakra-ui/react';
import ProgressBg from '@images/progressBg.svg?react';

import styles from './index.module.css';

export const Guideline = () => (
  <BasicLayout maxW={1015}>
    <VStack spacing={10} align="stretch" mb={40}>
      <Spacer />
      <GuidelineProgressBar h={264} />
      <GuidelineSaveButton h={85} />
      <GuidelineChecklist h={972} />
      <Flex h={422} justifyContent="space-between">
        <GuidelineWarning h={422} />
        <GuidelineNavHelp h={422} />
      </Flex>
      <GuidelineStatistics h={652} />
      <GuidelineCloseBanner h={302} />
    </VStack>
  </BasicLayout>
);

const GuidelineProgressBar: React.FC<PropH> = ({ h }) => (
  <Box
    className={styles.guideline}
    h={h}
    bg={BoomerangColors.deepBlue}
    borderRadius={22}
  >
    <ProgressBg opacity={0.12} />
  </Box>
);

const GuidelineSaveButton: React.FC<PropH> = ({ h }) => (
  <Button
    w={266}
    bg={BoomerangColors.deepBlue}
    borderRadius={8}
    h={h}
    // TODO: transform 속성이 안먹힘
    ml={`calc(100% - ${266}px)`}
  >
    <Text color={BoomerangColors.white} fontWeight={700} fontSize={'35px'}>
      저장하기
    </Text>
  </Button>
);

const GuidelineChecklist: React.FC<PropH> = ({ h }) => (
  <Box boxShadow="xl" h={h} bg={BoomerangColors.white} borderRadius={38}>
    <Box bg={'#2D79FF'} h={139} lineHeight={`${139}px`} borderTopRadius={36}>
      <Text textAlign="center" fontSize="40px" color={BoomerangColors.white}>
        전세사기 대응을 위한 필요서류들을 확인해주세요!
      </Text>
    </Box>
  </Box>
);

const GuidelineWarning: React.FC<PropH> = ({ h }) => (
  <Box
    borderRadius={38}
    bg={BoomerangColors.white}
    w={493}
    h={h}
    boxShadow="xl"
  >
    주의사항
  </Box>
);

const GuidelineNavHelp: React.FC<PropH> = ({ h }) => (
  <Box
    borderRadius={38}
    bg={BoomerangColors.white}
    w={493}
    h={h}
    boxShadow="xl"
  >
    그래도 잘 모르겠다면?
  </Box>
);

const GuidelineStatistics: React.FC<PropH> = ({ h }) => (
  <Box bg={BoomerangColors.white} h={h} borderRadius={45}>
    2단계 임차권 등기 명령 과정에서 부메랑 사용 평균 2주 감소 되었어요!
  </Box>
);

const GuidelineCloseBanner: React.FC<PropH> = ({ h }) => (
  <Flex
    bg={'#2D79FF'}
    borderRadius={13}
    h={h}
    justifyContent="center"
    flexDirection="column"
    pl={16}
  >
    <Text
      whiteSpace="pre-line"
      color={BoomerangColors.white}
      fontSize="48px"
      fontWeight={900}
    >
      당신은 혼자가 아닙니다,
      <br />
      부메랑과 함께라면 해결할 수 있어요!
    </Text>
    <Text fontSize="32px" color={'#8FB8FF'}>
      전세금을 지키고 되찾는 길, 부메랑이 함께해요.
    </Text>
  </Flex>
);
