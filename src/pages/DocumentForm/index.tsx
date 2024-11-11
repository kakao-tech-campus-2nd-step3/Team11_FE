import React from 'react';

import { 서류필드기입폼 } from '@/components/DocumentForm/서류필드기입폼';
import { BasicLayout } from '@/components/commons/BasicLayout';
import { Spacer } from '@chakra-ui/react';
import documnetImg from '@images/documentImg.svg';

export interface FormProps {
  id?: number;
  title: string;
  description: string;
  image: string;
  fields: { id: number; label: string }[];
}

const documentsInfo: FormProps[] = [
  {
    id: 1,
    title: '결정 신청서',
    description:
      '"결정 신청서"는 일반적으로 법적 절차에서 특정 결정을 요청하기 위해 제출하는 서류입니다. 예를 들어, 법원이나 행정기관에 제출하는 경우가 많으며, 신청인이 특정 사건에 대해 판단이나 결정을 내려줄 것을 공식적으로 요청할 때 사용됩니다. 신청서에는 보통 사건의 배경, 필요한 결정 사항, 그리고 이를 지원하는 근거가 포함됩니다.',
    image: documnetImg,
    fields: [
      { id: 1, label: '이름' },
      { id: 2, label: '날짜' },
      { id: 3, label: '주민등록번호' },
      { id: 4, label: '이름' },
      { id: 5, label: '날짜' },
      { id: 6, label: '주민등록번호' },
    ],
  },
  {
    id: 2,
    title: '결정 신청서',
    description:
      '"결정 신청서"는 일반적으로 법적 절차에서 특정 결정을 요청하기 위해 제출하는 서류입니다. 예를 들어, 법원이나 행정기관에 제출하는 경우가 많으며, 신청인이 특정 사건에 대해 판단이나 결정을 내려줄 것을 공식적으로 요청할 때 사용됩니다. 신청서에는 보통 사건의 배경, 필요한 결정 사항, 그리고 이를 지원하는 근거가 포함됩니다.',
    image: documnetImg,
    fields: [
      { id: 1, label: '이름' },
      { id: 2, label: '날짜' },
      { id: 3, label: '주민등록번호' },
    ],
  },
];

export const DocumentForm: React.FC = () => {
  return (
    <BasicLayout maxW={1024}>
      {documentsInfo.map((doc) => (
        <서류필드기입폼
          key={doc.id}
          title={doc.title}
          description={doc.description}
          image={doc.image}
          fields={doc.fields}
        />
      ))}
      <Spacer h="50px" />
    </BasicLayout>
  );
};
