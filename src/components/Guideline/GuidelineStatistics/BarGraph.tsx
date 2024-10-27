import { ReactNode } from 'react';

import { BoomerangColors } from '@/utils/colors';
import { Box, Flex, Text } from '@chakra-ui/react';

interface BarGraphProps {
  period: number;
}

export const BarGraphBox: React.FC<{ children: ReactNode; period: number }> = ({
  children,
  period,
}) => (
  <Flex gap={'12.78px'} alignItems={'center'}>
    {children}
    <BarGraph period={period} />
  </Flex>
);

const BarGraph: React.FC<BarGraphProps> = ({ period }) => (
  <Box borderRightRadius={60} bg={'#F7F7F7'} w={'624px'} h={'70px'}>
    <Flex
      bgGradient={'linear(to-r, #B4C1EA 0%, #176CFF 100%)'}
      w={(624 / 4) * period}
      h={'70px'}
      borderRightRadius={60}
      boxShadow="4px 0px 7.2px rgba(0, 0, 0, 0.25)"
      alignItems={'center'}
      justifyContent={'flex-end'}
      pr={'32px'}
    >
      <Text fontSize={'30px'} fontWeight={800} color={BoomerangColors.white}>
        {period}주
      </Text>
    </Flex>
  </Box>
);
