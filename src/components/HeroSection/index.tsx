import { PropH } from '@components/commons/types';

import React from 'react';

import { BoomerangColors } from '@/utils/colors';
import { Box, Text, VStack } from '@chakra-ui/react';
import HeroBannerBg from '@images/heroBg.svg?react';

import styles from './index.module.css';

export const HeroSection: React.FC<PropH> = ({ h }) => {
  return (
    <Box bg={BoomerangColors.blue} h={h} className={styles.hero}>
      <HeroBannerBg viewBox={`0 0 1024 ${h}`} />
      <VStack spacing={5} marginTop={75}>
        <Text color={BoomerangColors.white} fontSize={'20px'}>
          <b>전세사기 대응 가이드라인</b> 저희가 드릴게요!
        </Text>
        <BoomerangLogo />
        <HeroKickBox />
      </VStack>
    </Box>
  );
};

const BoomerangLogo: React.FC = () => (
  <Text color={BoomerangColors.white} fontSize="40px" fontWeight={900}>
    BOOMERANG
    <Text as="sup" fontSize="40px">
      {'<'}
    </Text>
  </Text>
);

const HeroKickBox = () => (
  <Box
    bg={BoomerangColors.white}
    padding={3}
    width={530}
    textAlign="center"
    borderRadius={34}
    borderTopRightRadius={1}
  >
    <Text fontWeight={700} fontSize="30px">
      전세 사기를 당했어요! 어떻게 하죠?😢
    </Text>
  </Box>
);
