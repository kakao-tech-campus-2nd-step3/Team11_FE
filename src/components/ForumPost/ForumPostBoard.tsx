import React from 'react';

import { Box, Flex } from '@chakra-ui/react';

import { ForumPost } from '../ForumPost/ForumPost';

const ForumPostBoard: React.FC = () => {
  // api 대체 예정
  const postData = {
    title: '안녕하세요! 제가 내년 10월에 만기인데..',
    location: '광주월산동/ 다가구 주택',
    date: '10/09 19:05',
    content:
      '보증금을 못 돌려받을 것 같아서 피해자 신청하고 대환 생각 중입니다. 혹시 피해자 신청을 어느 시점에 해야 하는 건가요? 흑흑 ㅜㅜ 진짜 어떻게 해야할지 모르겠어요ㅜㅜ 제 상황은 이런데요..',
    likes: 10,
    comments: 5,
  };

  return (
    <Flex
      overflow="hidden"
      flexDirection="column"
      alignItems="center"
      px={{ base: 5, md: 20 }}
      bg="white"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        maxW="full"
        borderRadius="3xl"
        bg="gray.100"
        shadow="md"
        w="945px"
      >
        <Box display="flex" flexDirection="column" w="full">
          <ForumPost {...postData} />
        </Box>
      </Box>
    </Flex>
  );
};

export default ForumPostBoard;
