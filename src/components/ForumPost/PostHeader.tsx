import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Flex, IconButton, Text } from '@chakra-ui/react';
import Vector from '@images/Vector.svg?react';

interface PostHeaderProps {
  boardType?: string;
}

export const PostHeader: React.FC<PostHeaderProps> = ({
  boardType = '자유',
}) => {
  const navigate = useNavigate();

  return (
    <Flex
      w="full"
      px={{ base: 5, md: 10 }}
      align="center"
      justify="space-between"
    >
      <Flex align="center" gap={2}>
        <IconButton
          icon={<Vector />}
          objectFit="contain"
          onClick={() => navigate(-1)}
          aria-label="뒤로가기"
          variant="unstyled"
        />
        <Text fontSize="3xl" fontWeight="extrabold" color="#176CFF">
          {boardType} 게시판
        </Text>
      </Flex>
    </Flex>
  );
};
