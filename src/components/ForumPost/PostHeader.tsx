import React from 'react';

import { Flex, Image, Text } from '@chakra-ui/react';
import vector from '@images/Vector.svg';

interface PostHeaderProps {
  boardType?: string;
}

// TODO : 받아와야함
export const PostHeader: React.FC<PostHeaderProps> = ({
  boardType = '자유',
}) => (
  <Flex
    w="full"
    px={{ base: 5, md: 10 }}
    align="center"
    justify="space-between"
  >
    <Flex align="center" gap={2}>
      <Image src={vector} alt="" boxSize="18px" objectFit="contain" />
      <Text fontSize="3xl" fontWeight="extrabold" color="#176CFF">
        {boardType} 게시판
      </Text>
    </Flex>
  </Flex>
);
