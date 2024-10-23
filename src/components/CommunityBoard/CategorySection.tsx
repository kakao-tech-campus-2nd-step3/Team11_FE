import React from 'react';

import { Box, Flex, Image, Text } from '@chakra-ui/react';

const CategorySection: React.FC = () => (
  <Box
    as="section"
    display="flex"
    position="relative"
    flexDirection="column"
    maxW="full"
    w={{ base: 'full', md: '732px' }}
  >
    <Flex
      gap={1.5}
      alignItems="center"
      fontSize="3xl"
      fontWeight="extrabold"
      letterSpacing="wide"
      lineHeight="none"
      color="blue.600"
    >
      <Image
        loading="lazy"
        src="path/to/icon.png"
        objectFit="contain"
        flexShrink={0}
        boxSize="60px"
        alt=""
      />
      <Text flex="1" my="auto">
        부메랑 게시판 카테고리
      </Text>
    </Flex>
    <Flex
      flexDirection="column"
      pt={{ base: 24, md: 48 }}
      pb={3}
      mt={2.5}
      bg="blue.500"
      borderRadius="xl"
    >
      <Box flexShrink={0} bg="whiteAlpha.500" h="5px" w="full" />
    </Flex>
  </Box>
);

export default CategorySection;
