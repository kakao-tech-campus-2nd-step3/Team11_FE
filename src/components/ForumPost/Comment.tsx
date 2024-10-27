import React from 'react';

import { StarIcon } from '@chakra-ui/icons';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';

export interface CommentProps {
  content: string;
  author: string;
  location: string;
  timestamp: string;
  likes: number;
}

export const Comment: React.FC<CommentProps> = ({
  content,
  author,
  location,
  timestamp,
  likes,
}) => (
  <Box bg="white" p={5} borderRadius="md" shadow="sm">
    <Flex justify="space-between">
      <Text fontSize="xl" color="gray.700">
        {content}
      </Text>
      <Flex align="center" gap={2}>
        <Icon as={StarIcon} w={5} h={5} color="blue.500" />
        <Text>{likes}</Text>
      </Flex>
    </Flex>
    <Text fontSize="sm" color="gray.500" mt={2}>
      {author} / {location} {timestamp}
    </Text>
  </Box>
);
