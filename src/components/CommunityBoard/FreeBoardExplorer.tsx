import React from 'react';

import { Box, Text } from '@chakra-ui/react';

const FreeBoardExplorer: React.FC = () => (
  <Box
    mt={{ base: 10, md: 14 }}
    ml={{ base: 2.59, md: 10 }}
    w={{ base: 'full', md: '732px' }}
  >
    <Text fontSize="3xl" fontWeight="extrabold" color="#202020">
      🔍 자유게시판 탐색하기
    </Text>
    <Text mt={2} fontSize="lg" color="#878787" lineHeight="short">
      전세사기에 대한 고민과 경험을 자유롭게 나누고, 유용한 정보와 조언을
      얻어가세요.
      <br />
      함께 더 안전한 선택을 만들어가요!
    </Text>
  </Box>
);

export default FreeBoardExplorer;
