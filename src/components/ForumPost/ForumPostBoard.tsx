import React from 'react';

import { Box, Flex } from '@chakra-ui/react';

import ForumPost from '../ForumPost/ForumPost';

const ForumPostBoard: React.FC = () => {
  return (
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
          <ForumPost />
        </Box>
      </Box>
    </Flex>
  );
};

export default ForumPostBoard;
