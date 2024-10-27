import { PropH } from '@/components/commons/types';
import { BoomerangColors } from '@/utils/colors';
import { Box, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import Exclamation from '@images/exclamation.svg?react';

const cautions = [
  {
    id: 1,
    content:
      '신청서에는 신청인의 이름, 주소,연락처와 같은 기본 정보가 정확히 기재되어야 합니다. 특히, 신청인 정보와 임대차 계약서에 기재된 정보가 일치해야 합니다.',
  },
  {
    id: 2,
    content:
      '사유는 객관적 사실에 근거하여 상세하게 작성되어야 하며, 관련 증빙 자료가 있다면 함께 첨부하는 것이 좋습니다.',
  },
];
export const GuidelineWarning: React.FC<PropH> = ({ h }) => (
  <Box
    borderRadius={38}
    bg={BoomerangColors.white}
    w={430}
    h={h}
    boxShadow="xl"
    pl={'31px'}
    pr={'31px'}
    justifyContent={'center'}
    shadow="0px 0px 8.9px 0px rgba(0, 0, 0, 0.26)"
  >
    <Flex alignItems={'center'} gap={'12px'} mt={'23px'}>
      <Exclamation />
      <Text fontSize={'24px'} fontWeight={800} color={'#176CFF'}>
        주의사항
      </Text>
    </Flex>
    <UnorderedList mt={'25px'} spacing={'20px'}>
      {cautions.map((caution) => (
        <ListItem
          key={caution.id}
          fontSize={'19px'}
          fontWeight={700}
          color={'#3C3C3C'}
        >
          {caution.content}
        </ListItem>
      ))}
    </UnorderedList>
  </Box>
);
