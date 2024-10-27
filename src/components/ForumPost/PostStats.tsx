import React from 'react';

import { ChatIcon, StarIcon } from '@chakra-ui/icons';
import { Flex, Icon, Text } from '@chakra-ui/react';

interface PostStatsProps {
  likes: number;
  comments: number;
}

export const PostStats: React.FC<PostStatsProps> = ({ likes, comments }) => (
  <Flex gap={6} mt={11} fontSize="2xl" color="gray.700">
    <Flex align="center" gap={1}>
      <Icon as={StarIcon} w={6} h={6} />
      <Text>{likes}</Text>
    </Flex>
    <Flex align="center" gap={1}>
      <Icon as={ChatIcon} w={6} h={6} />
      <Text>{comments}</Text>
    </Flex>
  </Flex>
);
