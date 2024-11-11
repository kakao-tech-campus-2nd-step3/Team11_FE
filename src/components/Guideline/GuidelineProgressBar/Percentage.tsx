import React from 'react';

import { Box, Text } from '@chakra-ui/react';

interface IPercentage {
  percentage: number;
}

export const Percentage: React.FC<IPercentage> = ({ percentage }) => (
  <Box pl={4}>
    <Text fontSize={'20px'} fontWeight="bold" color="rgba(255, 255, 255, 0.89)">
      현재 진행 상황도
    </Text>
    <Text fontSize={'45px'} fontWeight={800} color="#FFF" lineHeight={'60px'}>
      {percentage}%
    </Text>
  </Box>
);
