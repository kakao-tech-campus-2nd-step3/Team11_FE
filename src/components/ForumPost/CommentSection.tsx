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

import { Comment, CommentProps } from './Comment';

const comments: CommentProps[] = [
  {
    content:
      '공동유예 신청할때 같이 되나요? 사건번호가 같으면 다른아파트가 유예신청시 저희 것도 같이 되나요?',
    author: '라이언',
    location: '온천동/개인/다세대',
    timestamp: '14분 전',
    likes: 3,
  },
  {
    content: '저도 같은 상황이에요.. 😢',
    author: '라이언',
    location: '온천동/개인/다세대',
    timestamp: '10/09 19:07',
    likes: 2,
  },
  {
    content: '저도 궁금합니다!!! 알게되면 알려주세요!!',
    author: '라이언',
    location: '온천동/개인/다세대',
    timestamp: '10/09 19:13',
    likes: 1,
  },
];

export const CommentSection: React.FC = () => (
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
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </VStack>
  </Box>
);
