import React from 'react';

import { Flex, Image, Text } from '@chakra-ui/react';
import vector from '@images/Vector.svg';

export const PostHeader: React.FC = () => (
  <Flex
    w="full"
    px={{ base: 5, md: 10 }}
    align="center"
    justify="space-between"
  >
    <Flex align="center" gap={2}>
      <Image src={vector} alt="" boxSize="18px" objectFit="contain" />
      <Text fontSize="3xl" fontWeight="extrabold" color="#176CFF">
        자유 게시판
      </Text>
    </Flex>
  </Flex>
);
