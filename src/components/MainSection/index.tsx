import { Categories } from '@components/MainSection/Categories';
import { CategoryBox, ICategoryBox } from '@components/MainSection/CategoryBox';
import { IFlexBox } from '@components/MainSection/IFlexBox';

import React from 'react';

import { BoomerangColors } from '@/utils/colors';
import { Box, Flex, Text } from '@chakra-ui/react';
import home from '@images/home.png';
import info from '@images/info.png';
import pen from '@images/pen.svg';
import wash from '@images/wash.png';

const categories: ICategoryBox[] = [
  {
    category: '전세 피해 예방',
    example: 'EX.) 집이 위험한지 검사해드릴게요',
    img: home,
  },
  {
    category: '전세 사기 대비 가이드라인',
    example: 'EX.) 보험은 있어요',
    img: info,
  },
  {
    category: '집이 경매에 넘어갔다면',
    example: 'EX.) 보험이 없어요',
    img: wash,
  },
];

export const MainSection: React.FC = () => (
  <Flex h={492}>
    <Categories flex={0.377}>
      {categories.map((category) => (
        <CategoryBox key={category} {...category} />
      ))}
    </Categories>
    <LatestReviews flex={0.623}>
      <Box bg={BoomerangColors.blue} h={75} borderTopRadius={20}>
        <Flex ml={12} h="100%" alignItems={'center'}>
          <Text color={BoomerangColors.white} fontSize={24} as={'b'}>
            최신 후기
          </Text>
          <img alt={'image of a pen'} src={pen} />
        </Flex>
      </Box>
    </LatestReviews>
  </Flex>
);

const LatestReviews: React.FC = ({ flex, children }: IFlexBox) => (
  <Box
    flex={flex}
    ml={25}
    borderRadius={20}
    bg={BoomerangColors.white}
    boxShadow="xs"
  >
    {children}
  </Box>
);
