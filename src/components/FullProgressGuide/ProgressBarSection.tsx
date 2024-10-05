import React from 'react';

import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';
import homeIcon from '@images/homeIcon.svg';
import progressBanner from '@images/progressBanner.svg';

export const ProgressBarSection: React.FC = () => (
  <VStack
    h={283}
    borderRadius={22}
    bg="#176CFF"
    alignItems="center"
    justifyContent="center"
  >
    <Text color="#fff" fontSize={40} fontWeight={800}>
      전체 진행과정 확인하기
    </Text>
    <Flex
      w={924.1}
      h={37.46}
      borderRadius={199.8}
      bg="#fff"
      alignItems="center"
      mt={18}
    >
      <Image src={homeIcon} alt="현재 진행도" w={139} h={99} ml={2} />
      <Box
        bg="#C5DFFF"
        w={17.5}
        h={17.5}
        borderRadius={50}
        border="5px solid"
        borderColor="#C5DFFF"
        ml={141}
      />
      <Box
        bg="#C5DFFF"
        w={17.5}
        h={17.5}
        borderRadius={50}
        border="5px solid"
        borderColor="#C5DFFF"
        ml={141}
      />
      <Box
        bg="#C5DFFF"
        w={17.5}
        h={17.5}
        borderRadius={50}
        border="5px solid"
        borderColor="#C5DFFF"
        ml={141}
      />
      <Box
        bg="#C5DFFF"
        w={17.5}
        h={17.5}
        borderRadius={50}
        border="5px solid"
        borderColor="#C5DFFF"
        ml={141}
      />
    </Flex>
    <Flex fontSize={18} fontWeight={800} color="#76A8FF" w={924.1} mt={5}>
      <Text color="#FFF" w={172} textAlign="center">
        계약 해지통지서
      </Text>
      <Text w={172} textAlign="center">
        임차권 등기명령 신청
      </Text>
      <Text w={172} textAlign="center">
        전세사기 피해자 센터 신청
      </Text>
      <Text w={172} textAlign="center">
        보증 이행 청구서류 준비
      </Text>
      <Text w={172} textAlign="center">
        보증 이행 센터
        <br />
        방문
      </Text>
    </Flex>
    <Image
      src={progressBanner}
      alt="progress banner"
      position="absolute"
      h={283}
      w={998}
    />
  </VStack>
);
