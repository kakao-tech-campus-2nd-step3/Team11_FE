import { useState } from 'react';

import { CheckListHeader } from '@/components/Guideline/GuidelineChecklist/CheckListHeader';
import { RequireDoc } from '@/components/Guideline/GuidelineChecklist/RequireDoc';
import { PropH } from '@/components/commons/types';
import { BoomerangColors } from '@/utils/colors';
import { Box } from '@chakra-ui/react';

export interface CheckListProps {
  id?: number;
  name: string;
  subName: string;
  description: string;
  value: boolean;
}

export type RequireDocPropsWithState = CheckListProps & {
  isOpen: boolean;
  onToggle: () => void;
  onCheck: () => void;
};

const initialCheckList: CheckListProps[] = [
  {
    id: 1,
    name: '결정 신청서',
    subName: '',
    description: '...',
    value: true,
  },
  {
    id: 2,
    name: '임대차 계약서 사본 1부',
    subName: '',
    description: '...',
    value: false,
  },
  {
    id: 3,
    name: '주민 등록표 초본 1부',
    subName: '',
    description: '...',
    value: false,
  },
  {
    id: 4,
    name: '임대인의 파산 선고 결정문 또는 회생 게시 결정문 사본 1부',
    subName: '',
    description: '...',
    value: false,
  },
  {
    id: 5,
    name: '경매, 공매게시 관련 서류 사본',
    subName: '',
    description: '...',
    value: false,
  },
  {
    id: 6,
    name: '집행권원',
    subName: '(판정결정본, 지금명령, 공정증서 등)',
    description: '...',
    value: false,
  },
  {
    id: 7,
    name: '임차권 등기 서류',
    subName: '(등기사항 전부 증명서, 임차권등기명령 결정문 등)',
    description: '...',
    value: false,
  },
];

export const GuidelineChecklist: React.FC<PropH> = ({ h }) => {
  const [openId, setOpenId] = useState<number | null>(null);
  const [checkList, setCheckList] =
    useState<CheckListProps[]>(initialCheckList);

  const toggleOpen = (id: number) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  const toggleCheckbox = (id: number) => {
    setCheckList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  };

  return (
    <Box
      shadow="0px 0px 8.9px 0px rgba(0, 0, 0, 0.26)"
      h={h}
      w={555}
      bg={BoomerangColors.white}
      borderRadius={38}
      overflow="hidden"
    >
      <CheckListHeader />
      <Box mt={'12px'}>
        {checkList.map((doc) =>
          openId === null || openId === doc.id ? (
            <RequireDoc
              key={doc.id}
              name={doc.name}
              subName={doc.subName}
              value={doc.value}
              description={doc.description}
              isOpen={openId === doc.id}
              onToggle={() => toggleOpen(doc.id!)}
              onCheck={() => toggleCheckbox(doc.id!)}
            />
          ) : null
        )}
      </Box>
    </Box>
  );
};
