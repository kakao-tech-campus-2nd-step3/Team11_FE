import { PropH } from '@components/commons/types';

import React from 'react';
import { Link } from 'react-router-dom';

import { BoomerangColors } from '@/utils/colors';
import { Box, Image, Text } from '@chakra-ui/react';

export interface ICommunityBoardNavBox extends PropH {
  type: string;
  desc: string;
  img: string;
}

const convertBoardTypeToUri = (type: string): string => {
  if (type === '지역별 게시판') {
    return 'local';
  }
  if (type === '시크릿 게시판') {
    return 'secret';
  }
  if (type === '단계별 게시판') {
    return 'my-step';
  }

  return 'open-forum';
};

export const IndexCommunityBoardNavBox: React.FC = ({
  type,
  desc,
  img,
  h,
}: ICommunityBoardNavBox) => (
  <Link to={`community/${convertBoardTypeToUri(type)}`}>
    <Box w={230} h={h} bg={'#F3F3F3'} borderRadius={20} boxShadow="md">
      <Box bg={BoomerangColors.blue} h={26} borderTopRadius={20} mb="26px" />
      <Box pl={7} pr={7}>
        <Text color={'#1C6BF5'} fontSize="22px" fontWeight={900}>
          {type}
        </Text>
        <Text whiteSpace="pre-line" color={'#3F3F3F'} fontSize="15px" mb={4}>
          {desc}
        </Text>
        <Image
          alt="image of each board"
          objectFit="none"
          src={img}
          m="0 auto"
        />
      </Box>
    </Box>
  </Link>
);
