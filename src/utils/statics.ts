import { ICommunityBoardNavBox } from '@components/CommunitySection/IndexCommunityBoardNavBox';

import free from '@images/free.svg';
import local from '@images/local.svg';
import shush from '@images/shush.svg';
import steps from '@images/steps.svg';

export const boards: ICommunityBoardNavBox[] = [
  {
    type: '자유게시판',
    desc: '다른 사람들과 자유롭게\n 소통해요!',
    img: free,
  },
  {
    type: '지역별 게시판',
    desc: '같은 지역의 다른 사람과\n 자유롭게 소통해요!',
    img: local,
  },
  {
    type: '시크릿 게시판',
    desc: '같은 임대인을 갖는 사람들과\n 자유롭게 소통해요!',
    img: shush,
  },
  {
    type: '단계별 게시판',
    desc: '나와 같은 상황과 단계를\n 갖는 사람들과 소통해요!',
    img: steps,
  },
];
