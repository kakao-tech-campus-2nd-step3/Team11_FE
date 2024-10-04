import { Categories } from '@components/MainSection/Categories';
import { CategoryBox, ICategoryBox } from '@components/MainSection/CategoryBox';
import {
  ILatestReviewBox,
  LatestReviewBox,
} from '@components/MainSection/LatestReviewBox';
import { LatestReviews } from '@components/MainSection/LatestReviews';

import React from 'react';

import { Flex } from '@chakra-ui/react';
import figure1 from '@images/figure1.svg';
import figure2 from '@images/figure2.svg';
import figure3 from '@images/figure3.svg';
import home from '@images/home.svg';
import info from '@images/info.svg';
import wash from '@images/wash.svg';

const categories: ICategoryBox[] = [
  {
    category: '전세 피해 예방',
    example: 'EX.) 집이 위험한지 검사해드릴게요',
    img: home,
    path: '/probe',
  },
  {
    category: '대처 가이드라인',
    example: 'EX.) 보험은 있어요',
    img: info,
    path: '/guideline',
  },
  {
    category: '집이 경매에 넘어갔다면',
    example: 'EX.) 보험이 없어요',
    img: wash,
    path: '/help',
  },
];

const reviews: ILatestReviewBox[] = [
  {
    comment: '휴... 겨우 돌려받았습니다 ^_^ \n부메랑 체고네요!!',
    img: figure1,
    username: '김사우론',
  },
  {
    comment: '전세사기떄문에 막막할 땐 \n역시 부메랑! 고마워요!!',
    img: figure2,
    username: '박신디',
  },
  {
    comment:
      '처음 당해보는 전세사기에 어떻게 대응해야할 지\n 너무 힘들었는데 부메랑 감사합니다ㅠㅠ',
    img: figure3,
    username: '김이능',
  },
];

export const MainSection: React.FC<{ h: number }> = ({ h }) => (
  <Flex h={h}>
    <Categories flex={0.377}>
      {categories.map((category) => (
        <CategoryBox key={category.category} {...category} />
      ))}
    </Categories>
    <LatestReviews flex={0.623}>
      {reviews.map((review) => (
        <LatestReviewBox key={review.comment} {...review} />
      ))}
    </LatestReviews>
  </Flex>
);
