import { BasicLayout } from '@components/commons/BasicLayout';
import { PropH } from '@components/commons/types';

import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTER_PATH } from '@/router';
import { BoomerangColors } from '@/utils/colors';
import { boards } from '@/utils/statics';
import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';

const hits = [
  '혹시 임대인 사망으로 인해 피해자 인정 되신 분 있을까요??ㅠ',
  '지금 대출 만기가 당장 다음달인데 어떡하나요?',
  '오늘 부산 지검에서 문자왔던데',
];

const posts = [
  {
    title: '전세 사기에 대한 질문이 있어요!',
    content:
      '혹시 20년 분할 상환 전세사기 피해자 전용 디딤돌 대출 IH 우선 매수권\n이 모든 걸 중복 적용이 가능한걸까요?',
    likes: 3,
    comments: 2,
  },
  {
    title: '전세 사기에 대한 질문이 있어요!',
    content:
      '혹시 20년 분할 상환 전세사기 피해자 전용 디딤돌 대출 IH 우선 매수권\n이 모든 걸 중복 적용이 가능한걸까요?',
    likes: 3,
    comments: 2,
  },
  {
    title: '전세 사기에 대한 질문이 있어요!',
    content:
      '혹시 20년 분할 상환 전세사기 피해자 전용 디딤돌 대출 IH 우선 매수권\n이 모든 걸 중복 적용이 가능한걸까요?',
    likes: 3,
    comments: 2,
  },
  {
    title: '전세 사기에 대한 질문이 있어요!',
    content:
      '혹시 20년 분할 상환 전세사기 피해자 전용 디딤돌 대출 IH 우선 매수권\n이 모든 걸 중복 적용이 가능한걸까요?',
    likes: 3,
    comments: 2,
  },
];

export const Community: React.FC = () => (
  <BasicLayout maxW={1920} bg={BoomerangColors.white}>
    <Container bg={'#F3F3F3'} maxW={945}>
      <VStack spacing={10} maxW={726} align="stretch" m="0 auto">
        <Box mt={4}>
          <CommunityTitle h={78} />
          <CommunityCategoryNavigation h={'max-content'} />
        </Box>
        <CommunitySubHeader
          h={78}
          heading={'지금 가장 핫한 커뮤니티'}
          desc={
            '지금 커뮤니티에서 가장 뜨거운 토론이 벌어지고 있는 게시글이에요!\n다양한 의견을 나누고, 당신의 생각도 함께 더해보세요!'
          }
        />
        <VStack spacing={3} align="stretch">
          {hits.map((hit) => (
            <Box key={hit} bg={'#FFDEDE'} borderRadius={12} h={50}>
              <Text lineHeight={`${50}px`} fontSize={20} fontWeight={700}>
                {hit}
              </Text>
            </Box>
          ))}
        </VStack>
        <CommunitySubHeader
          h={78}
          heading={'자유게시판 탐색하기'}
          desc={
            '전세사기에 대한 고민과 경험을 자유롭게 나누고, 유용한 정보와 조언을 얻어가세요.\n함께 더 안전한 선택을 만들어가요!'
          }
        />
        <Flex h={11}>
          <Input size={'md'} />
          <Button>최신 순</Button>
          <Button>댓글 순</Button>
          <Button>추천 순</Button>
        </Flex>
        <VStack spacing={4} align="stretch">
          {posts.map((post, idx) => (
            <Box
              key={`${post.title}-${idx}`}
              bg={BoomerangColors.white}
              borderRadius={12}
              h={111}
            >
              <Text fontSize={20} fontWeight={900}>
                {post.title}
              </Text>
              <Text whiteSpace={'break-spaces'} fontSize={20}>
                {post.content}
              </Text>
            </Box>
          ))}
          <Link>
            <Text
              fontWeight={700}
              fontSize={18}
              to={ROUTER_PATH.POSTING}
              bg={BoomerangColors.deepBlue}
              w={136}
              h={10}
              borderRadius={8}
              color={BoomerangColors.white}
            >
              게시글 작성하기
            </Text>
          </Link>
          <Spacer />
          <Box>1/2/3/4/5/6</Box>
        </VStack>
        <Spacer />
      </VStack>
    </Container>
  </BasicLayout>
);

const CommunityTitle: React.FC<PropH> = ({ h }) => (
  <Box h={h}>
    <Text
      lineHeight={`${h}px`}
      fontSize={28}
      fontWeight={900}
      color={BoomerangColors.deepBlue}
    >
      부메랑 게시판 카테고리
    </Text>
  </Box>
);

const CommunityCategoryNavigation: React.FC<PropH> = ({ h }) => (
  <Box h={h}>
    <Flex h={45}>
      {boards.map((board) => (
        <Text
          key={board.type}
          width={182}
          fontSize={18}
          fontWeight={700}
          textAlign="center"
          borderTopRadius={13}
          bg={'#2C79FF'}
          color={BoomerangColors.white}
        >
          {board.type}
        </Text>
      ))}
    </Flex>
    <Box h={161} bg={'#2C79FF'}>
      배너
    </Box>
  </Box>
);

const CommunitySubHeader: React.FC<
  PropH & { heading: string; desc: string }
> = ({ h, heading, desc }) => (
  <Box h={78}>
    <Text fontSize={28} fontWeight={700}>
      {heading}
    </Text>
    <Text fontSize={16.5} color={'#878787'} whiteSpace={'pre-line'}>
      {desc}
    </Text>
  </Box>
);
