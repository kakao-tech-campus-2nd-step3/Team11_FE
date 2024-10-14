import React from 'react';

import { Box, Flex, Text } from '@chakra-ui/react';
import progressBarBg from '@images/progressBarBg.png';

export const ProcedureBar: React.FC<{ percent: number }> = ({ percent }) => (
  <Flex
    h={165}
    bgColor="#176CFF"
    borderTopRadius={15}
    justifyContent="center"
    alignItems="center"
    bgImage={progressBarBg}
    bgSize="1024px 165px"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
  >
    <Box>
      <Text
        fontSize={'19px'}
        fontWeight="bold"
        color="rgba(255, 255, 255, 0.78)"
      >
        현재 진행 상황도
      </Text>
      <Text fontSize={'40px'} fontWeight={800} color="#FFF">
        {percent}%
      </Text>
      <Box h={25} w={804} bgColor="#F1F1F1" borderRadius={199.8}>
        <Box
          h={25}
          w={percent * 8.04}
          borderRadius={65}
          bgColor="#0042B6"
          position="absolute"
        />
        <Flex justifyContent="center" alignItems="center" gap={180} h={25}>
          {Array.from({ length: 4 }, (_, index) => (
            <Box
              zIndex={3}
              key={index}
              bgColor="#C5DFFF"
              borderRadius={50}
              width={'22.5px'}
              height={'22.5px'}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  </Flex>
);
