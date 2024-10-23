import React from 'react';

import { Box, Flex } from '@chakra-ui/react';

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
      borderRadius="3xl"
      bg="gray.100"
      shadow="md"
      w="945px"
    >
      <Box display="flex" flexDirection="column" w="full">
        <MainContent />
      </Box>
    </Box>
  </Flex>
);

export default BoomerangBoard;
