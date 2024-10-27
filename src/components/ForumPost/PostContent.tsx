import React from 'react';

import { Box, Text } from '@chakra-ui/react';

interface PostContentProps {
  title: string;
  location: string;
  date: string;
  content: string;
}

export const PostContent: React.FC<PostContentProps> = ({
  title,
  location,
  date,
  content,
}) => (
  <Box
    bg="white"
    borderRadius="2xl"
    p={{ base: 5, md: 10 }}
    mt={7}
    w={{ base: 'full', md: '867px' }}
  >
    <Text fontSize="3xl" fontWeight="extrabold" color="gray.700">
      {title}
    </Text>
    <Text fontSize="lg" color="gray.400" mt={2}>
      {location} {date}
    </Text>
    <Text fontSize="xl" color="gray.600" mt={9}>
      {content}
    </Text>
  </Box>
);
