import React from 'react';

import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';

import { CommentData } from '../CommunityBoard/types';
import { Comment } from './Comment';

interface CommentSectionProps {
  comments: CommentData[];
}

export const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => (
  <Box w="full" px={{ base: 5, md: 20 }} mt={7}>
    <Divider borderColor="blue.600" borderStyle="dashed" borderWidth="3px" />
    <Flex mt={8} ml={{ base: 2.5, md: 9 }} align="center" gap={2}>
      <Text fontSize="2xl" fontWeight="extrabold" color="blue.600">
        댓글 달기
      </Text>
    </Flex>
    <Flex
      as="form"
      direction={{ base: 'column', md: 'row' }}
      bg="gray.50"
      border="2px solid"
      borderColor="blue.300"
      borderRadius="2xl"
      p={5}
      mt={2}
      mx={{ base: 0, md: 4 }}
    >
      <Input
        placeholder="함께 이용하는 부메랑 커뮤니티 게시판입니다! 쾌적한 서비스를 지켜주세요."
        fontSize="l"
        border="none"
        color="blue.400"
        flex="1"
        mb={{ base: 10, md: 20 }}
      />
      <Button type="submit" bg="blue.600" color="white" ml={{ md: 4 }}>
        댓글 달기
      </Button>
    </Flex>
    <VStack align="stretch" spacing={4} mt={9} bg="##EDEDED" p={5}>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          content={comment.text}
          author={comment.writer_name}
          timestamp={comment.last_modified_at}
          likes={0} // 좋아요 수는 API에서 받아오지 않는다면 기본값 사용
        />
      ))}
    </VStack>
  </Box>
);
