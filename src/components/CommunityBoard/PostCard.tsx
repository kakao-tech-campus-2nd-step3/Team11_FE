// src/components/CommunityBoard/PostCard.tsx
import React from 'react';

import { ChatIcon, StarIcon } from '@chakra-ui/icons';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';

interface PostCardProps {
  title: string;
  content: string;
  likes: number;
  comments: number;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  content,
  likes,
  comments,
}) => (
  <Box
    as="article"
    px={8}
    pt={5}
    pb={3}
    mt={4}
    bg="white"
    borderRadius="xl"
    shadow="sm"
  >
    <Box>
      <Text fontSize="xl" fontWeight="extrabold" color="gray.800">
        {title}
      </Text>
      <Text mt={3} fontSize="lg" color="gray.700">
        {content}
      </Text>
    </Box>
    <Flex mt={4} alignItems="center" color="blue.500">
      <Flex alignItems="center" mr={4}>
        <Icon as={StarIcon} mr={1} />
        <Text>{likes}</Text>
      </Flex>
      <Flex alignItems="center">
        <Icon as={ChatIcon} mr={1} />
        <Text>{comments}</Text>
      </Flex>
    </Flex>
  </Box>
);

export default PostCard;
