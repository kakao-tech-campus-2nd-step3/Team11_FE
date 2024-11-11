import { useCommunityPostMutation } from '@apis/community';

import TextEditor from '@components/TextEditor';
import {
  PostDataContext,
  PostDataContextType,
} from '@components/TextEditor/PostDataContext';

import React, { ChangeEvent, useCallback, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  createPostContent,
  flushImagePreviewUrls,
} from '@/templates/Community/utils';
import { BoomerangColors } from '@/utils/colors';
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Input,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';

const boardType = {
  ENTIRE: 0,
  SECRETE: 1,
  LOCATION: 2,
  STEP: 3,
} as const;

type BoardType = (typeof boardType)[keyof typeof boardType];

const isBoardType = (value: number): value is BoardType => {
  return Object.values(boardType).some((r) => r === value);
};

export type CommunityPostData = {
  title: string;
  content: string;
  boardType: BoardType;
  location?: string;
};

export const CommunityPosting: React.FC = () => {
  const [postData, setPostData] = useState<CommunityPostData>(() => ({
    title: '',
    content: '',
    boardType: boardType.ENTIRE,
    location: undefined,
  }));
  const setContent = useCallback(
    (newContent: string) =>
      setPostData((prev) => ({
        ...prev,
        content: newContent,
      })),
    [setPostData]
  );

  return (
    <PostDataContext.Provider
      value={{
        postData: postData,
        setPostData: setPostData,
      }}
    >
      <Container bg={'#EDEDED'} maxW={1024} p={1} borderBottomRadius={20}>
        <VStack
          spacing={8}
          maxW={1024}
          p={12}
          pt={10}
          align="stretch"
          m="0 auto"
        >
          <PostingHookButtons />
          <PostingTitleInput />
          <PostingCategorySelection />
          <TextEditor forwardContent={setContent} />
        </VStack>
        <PostingRules />
      </Container>
      <Box h={'50px'} />
    </PostDataContext.Provider>
  );
};

const PostingHookButtons = () => {
  const postDataContext: PostDataContextType | null =
    useContext(PostDataContext);
  const { mutate } = useCommunityPostMutation();
  const onClick = () => {
    if (!postDataContext) {
      return;
    }

    const { postData } = postDataContext;
    const { content, title, boardType, location } = postData;
    const { updatedContent, images } = createPostContent(content);

    mutate({
      content: updatedContent,
      title: title,
      boardType: boardType,
      location: location,
      images: images,
    });

    flushImagePreviewUrls();
  };

  return (
    <Flex justifyContent={'space-between'}>
      <HStack spacing={3}>
        <Link to={'-1'}>
          <Text color={BoomerangColors.deepBlue} fontSize={27} fontWeight={900}>
            {'<'}
          </Text>
        </Link>
        <Text color={BoomerangColors.deepBlue} fontWeight={900} fontSize={27}>
          자유게시판
        </Text>
        <Text color={BoomerangColors.deepBlue} fontWeight={700} fontSize={14}>
          ●
        </Text>
        <Text color={BoomerangColors.deepBlue} fontWeight={700} fontSize={20}>
          게시글 작성하기
        </Text>
      </HStack>
      <Button
        bg={BoomerangColors.deepBlue}
        w={105}
        h={45}
        _hover={{}}
        onClick={onClick}
      >
        <Text color={BoomerangColors.white} fontSize={20} fontWeight={700}>
          작성 완료
        </Text>
      </Button>
    </Flex>
  );
};

const PostingTitleInput = () => {
  const postDataContext: PostDataContextType | null =
    useContext(PostDataContext);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!postDataContext) {
      return;
    }

    const { setPostData } = postDataContext;
    const newTitle = e.target.value;
    setPostData((prev: CommunityPostData) => ({
      ...prev,
      title: newTitle,
    }));
  };
  return (
    <Input
      fontWeight={900}
      fontSize={24}
      onChange={onChange}
      _placeholder={{
        color: BoomerangColors.deepBlue,
        opacity: 0.3,
      }}
      _hover={{
        border: '',
      }}
      outline={'none'}
      border={'none'}
      pt={8}
      pb={8}
      pl={10}
      borderRadius={0}
      placeholder="제목을 작성해주세요."
      borderBottom={'2px solid #7FADFF'}
    />
  );
};

const categories = [
  { name: '게시판 유형 - 자유 게시판', value: boardType.ENTIRE },
  {
    name: '게시판 유형 - 지역 게시판',
    value: boardType.LOCATION,
  },
  {
    name: '게시판 유형 - 비밀 게시판',
    value: boardType.SECRETE,
  },
  {
    name: '게시판 유형 - 단계별 게시판',
    value: boardType.STEP,
  },
];

const PostingCategorySelection = () => {
  const postDataContext: PostDataContextType | null =
    useContext(PostDataContext);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!postDataContext) {
      return;
    }

    const { setPostData } = postDataContext;

    const newBoardType = parseInt(e.target.value);
    if (isBoardType(newBoardType)) {
      setPostData((prev: CommunityPostData) => ({
        ...prev,
        boardType: newBoardType,
      }));
    }
  };

  return (
    <Select
      borderRadius={0}
      h={75}
      fontSize={24}
      color={BoomerangColors.white}
      bg={BoomerangColors.deepBlue}
      onChange={onChange}
    >
      {categories.map((item) => (
        <option
          style={{
            color: 'black',
          }}
          value={item.value}
          key={item.value}
        >
          {item.name}
        </option>
      ))}
    </Select>
  );
};

const PostingRules = () => (
  <Box
    h={482}
    bg={BoomerangColors.calmWhite}
    pl={90}
    pt={7}
    pb={7}
    borderBottomRadius={20}
  >
    <Text color={'#A3A3A3'} fontWeight={700} fontSize={18} mb={2}>
      부메랑 커뮤니티 게시판 이용규칙
    </Text>
    <Text
      color={'#757575'}
      fontWeight={300}
      fontSize={16}
      whiteSpace={'pre-line'}
      opacity={0.8}
    >
      -상호 존중
      <br /> 모든 회원은 서로의 의견과 경험을 존중해야 합니다. 비방이나 공격적인
      언행은 금지합니다.
      <br />
      - 정보 공유
      <br /> 전세사기와 관련된 정보나 경험을 자유롭게 공유하세요. 하지만 개인
      정보는 절대 게시하지 말아야 합니다.
      <br /> - 전문가 의견 존중 전문가의 조언과 의견을 존중하고, 그들의 의견을
      반영하여 문제 해결에 도움을 받으세요.
      <br />
      - 사기 예방 정보
      <br />
      전세사기 예방 및 대처 방법에 대한 유용한 정보를 제공해주세요. 많은 이들이
      도움을 받을 수 있습니다.
      <br />
      - 허위 정보 금지
      <br />
      사실이 아닌 정보나 허위 사실을 유포하는 것은 금지합니다. 커뮤니티의
      신회성을 지켜주세요.
      <br />
      - 비밀 유지
      <br />
      이 커뮤니티는 민감한 주제를 다루고 있으므로, 다른 회원의 개인적인 이야기는
      외부에 공개하지 않도록 주의해주세요.
      <br />
      - 신고 시스템
      <br />
      불법적인 내용이나 규칙 위반을 발견할 경우, 즉시 운영진에게 신고해 주세요.
      <br />
      - 자율 규제
      <br />
      회원 스스로가 커뮤니티를 건강하게 유지할 수 있도록 노력해주세요!
      <br />
    </Text>
  </Box>
);
