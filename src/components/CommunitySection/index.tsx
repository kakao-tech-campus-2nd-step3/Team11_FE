import React, { Fragment } from 'react';

import { BoomerangColors } from '@/utils/colors';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import CommentBubble from '@images/commentBubble.svg?react';
import Speaker from '@images/speaker.svg?react';

const boards = [
  {
    type: '자유게시판',
    desc: '다른 사람들과 자유롭게 소통해요!',
  },
  {
    type: '지역별 게시판',
    desc: '같은 지역의 다른 사람과 자유롭게 소통해요!',
  },
  {
    type: '시크릿 게시판',
    desc: '같은 임대인을 갖는 사람들과 자유롭게 소통해요!',
  },
  {
    type: '단계별 게시판',
    desc: '나와 같은 상황과 단계를 갖는 사람들과 소통해요!',
  },
];

export const CommunitySection: React.FC = () => (
  <Box h={700} bg={BoomerangColors.white} borderRadius={20}>
    <Box
      bg={BoomerangColors.blue}
      h={75}
      borderTopRadius={20}
      pl="45px"
      mb={30}
      lineHeight="75px"
      boxShadow={'xl'}
    >
      <Text fontSize={'24px'} color={BoomerangColors.white}>
        커뮤니티
      </Text>
    </Box>
    <Flex bg={'#176CFF'} h={250} pl={70}>
      <Fragment>
        <Text>부메랑 커뮤니티 게시판</Text>
        <Text>
          전세사기 피해자들의 목소리를 한곳에,
          <br />
          함께 나누는 해결의 길
        </Text>
      </Fragment>
      <Speaker />
      <CommentBubble />
    </Flex>
    <Flex mt={35} pl={8} pr={8} justifyContent="space-between">
      {boards.map((board) => (
        <VStack w={230} h={283} bg={'#F3F3F3'} borderRadius={20}>
          <Box
            bg={BoomerangColors.blue}
            h={26}
            w={'100%'}
            borderTopRadius={20}
          />
          <Text>{board.type}</Text>
          <Text>{board.desc}</Text>
        </VStack>
      ))}
    </Flex>
  </Box>
  // <Box h={700} bg={'white'}>
  //   커뮤니티
  // </Box>
);
