import React from 'react';

import { Box, Flex } from '@chakra-ui/react';
import back from '@images/Comback2.svg';

import MainContent from './MainContent';

const BoomerangBoard: React.FC = () => (
  <Flex
    overflow="hidden"
    flexDirection="column"
    alignItems="center"
    px={{ base: 5, md: 20 }}
    bg="white"
  >
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      maxW="full"
      bg="#F3F3F3"
      shadow="md"
      w="945.46px"
      h="1800px"
      overflow="hidden"
      backgroundImage={`url(${back})`}
      backgroundSize="1004.23px 1606.92px"
      backgroundRepeat="no-repeat"
    >
      <Box display="flex" flexDirection="column" w="full">
        <MainContent />
      </Box>
    </Box>
  </Flex>
);

export default BoomerangBoard;
