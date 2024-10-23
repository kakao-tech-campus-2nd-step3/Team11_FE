import { HotTopicData, PostData } from '../types';

export const fetchPosts = async (): Promise<PostData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: '전세 사기에 대한 질문이 있어요!',
          content:
            '혹시 20년 분할 상환 전세사기 피해자 전용 디딤돌 대출 IH 우선 매수권 이 모든 걸 중복 적용이 가능한걸까요?',
          likes: 3,
          comments: 0,
        },
        {
          title: '대환 대출 일반 시중에서도...',
          content:
            '카카오뱅크에서 청년전월세대출보증 받았는데 추후 피해자로 전환시 대환대출을 일반 시중에서도 가능한가요?',
          likes: 3,
          comments: 2,
        },
        {
          title: '피해자 신청 어느 시점에서...',
          content:
            '제가 내년 10월에 만기인데 대환 대출 질문합니다 혹시 대환대출 받으려면 피해자 신청을 어느시점에 해야할까요?',
          likes: 3,
          comments: 1,
        },
        {
          title: '공동유예 신청할 때 같이해도...',
          content:
            '공동유예 신청할때 같이 되나요? 사건번호가 같으면 다른아파트가 유예신청시 저희 것도 같이 되나요?',
          likes: 3,
          comments: 12,
        },
      ]);
    }, 500);
  });
};

export const fetchHotTopics = async (): Promise<HotTopicData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          title: '혹시 임대인 사망으로 인해 피해자 인정 되신 분 있을까요?? ㅠ',
        },
        { title: '지금 대출 만기가 당장 다음달인데 어떡하나요?' },
        { title: '오늘 부산 지검에서 문자왔던데' },
      ]);
    }, 300);
  });
};
