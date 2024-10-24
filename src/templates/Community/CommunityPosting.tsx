import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

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

export const CommunityPosting: React.FC = () => {
  return (
    <Container bg={'#EDEDED'} maxW={1024} p={1} borderBottomRadius={20}>
      <VStack spacing={8} maxW={1024} p={12} pt={10} align="stretch" m="0 auto">
        <Flex justifyContent={'space-between'}>
          <HStack spacing={3}>
            <Link to={'-1'}>
              <Text
                color={BoomerangColors.deepBlue}
                fontSize={27}
                fontWeight={900}
              >
                {'<'}
              </Text>
            </Link>
            <Text
              color={BoomerangColors.deepBlue}
              fontWeight={900}
              fontSize={27}
            >
              자유게시판
            </Text>
            <Text
              color={BoomerangColors.deepBlue}
              fontWeight={700}
              fontSize={14}
            >
              ●
            </Text>
            <Text
              color={BoomerangColors.deepBlue}
              fontWeight={700}
              fontSize={20}
            >
              게시글 작성하기
            </Text>
          </HStack>
          <Button bg={BoomerangColors.deepBlue} w={105} h={45}>
            <Text color={BoomerangColors.white} fontSize={20} fontWeight={700}>
              작성 완료
            </Text>
          </Button>
        </Flex>
        <Input
          fontWeight={900}
          fontSize={24}
          _placeholder={{
            color: BoomerangColors.deepBlue,
            opacity: 0.3,
          }}
          _focus={{
            outline: 'none',
            border: 'none',
          }}
          border={'none'}
          pt={8}
          pb={8}
          pl={10}
          borderRadius={0}
          placeholder="제목을 작성해주세요."
          borderBottom={'2px solid #7FADFF'}
        />
        <Select
          borderRadius={0}
          h={75}
          fontSize={24}
          color={BoomerangColors.white}
          bg={BoomerangColors.deepBlue}
        >
          <option value={'자유 게시판'}>게시판 유형 - 자유 게시판</option>
          <option value={'지역 게시판'}>게시판 유형 - 지역 게시판</option>
          <option value={'비밀 게시판'}>게시판 유형 - 비밀 게시판</option>
          <option value={'단계별 게시판'}>게시판 유형 - 단계별 게시판</option>
        </Select>
        <Box
          h={272}
          bg={BoomerangColors.white}
          borderRadius={15}
          p={10}
          pt={5}
          pb={5}
        >
          <div>게시글 내용을 작성해 주세요.</div>
        </Box>
      </VStack>
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
          <br /> 모든 회원은 서로의 의견과 경험을 존중해야 합니다. 비방이나
          공격적인 언행은 금지합니다.
          <br />
          - 정보 공유
          <br /> 전세사기와 관련된 정보나 경험을 자유롭게 공유하세요. 하지만
          개인 정보는 절대 게시하지 말아야 합니다.
          <br /> - 전문가 의견 존중 전문가의 조언과 의견을 존중하고, 그들의
          의견을 반영하여 문제 해결에 도움을 받으세요.
          <br />
          - 사기 예방 정보
          <br />
          전세사기 예방 및 대처 방법에 대한 유용한 정보를 제공해주세요. 많은
          이들이 도움을 받을 수 있습니다.
          <br />
          - 허위 정보 금지
          <br />
          사실이 아닌 정보나 허위 사실을 유포하는 것은 금지합니다. 커뮤니티의
          신회성을 지켜주세요.
          <br />
          - 비밀 유지
          <br />
          이 커뮤니티는 민감한 주제를 다루고 있으므로, 다른 회원의 개인적인
          이야기는 외부에 공개하지 않도록 주의해주세요.
          <br />
          - 신고 시스템
          <br />
          불법적인 내용이나 규칙 위반을 발견할 경우, 즉시 운영진에게 신고해
          주세요.
          <br />
          - 자율 규제
          <br />
          회원 스스로가 커뮤니티를 건강하게 유지할 수 있도록 노력해주세요!{' '}
          <br />
        </Text>
      </Box>
    </Container>
  );
};
