import {
  ConsultingInfoBox,
  ConsultingInfoItem,
} from '@/components/ConsultingManagement/ConsultingInfoBox';
import { ConsultingManagementHeader } from '@/components/ConsultingManagement/ConsultingManagementHeader';
import { BoomerangColors } from '@/utils/colors';
import { Box, Button, Text, VStack } from '@chakra-ui/react';

const ConsultingInfo: ConsultingInfoItem[] = [
  {
    title: '상담 일정',
    content: '24/10/22 오후 3시~ 오후 4시',
  },
  {
    title: '멘토명',
    content: '김땡땡',
  },
  {
    title: '신청 내용',
    content:
      '주택 전세사기를 당했어요... 주택 전세사기를 당했어요...주택 전세사기를 당했어요...주택 전세사기를 당했어요...',
  },
];

export const ConsultingStart = () => {
  return (
    <Box flex="1" bg="white">
      <ConsultingManagementHeader category="상담 진행하기" />
      <VStack mt="55px" pb="69px" spacing="52px">
        <Box>
          <Text fontSize="18px" fontWeight="bold" color="#979797" mb="17px">
            신청된 상담 내역
          </Text>
          <ConsultingApplicationRecord infoList={ConsultingInfo} />
        </Box>
      </VStack>
    </Box>
  );
};

const ConsultingApplicationRecord = ({
  infoList,
}: {
  infoList: ConsultingInfoItem[];
}) => {
  return (
    <VStack spacing={0} alignItems="flex-end">
      <ConsultingInfoBox infoList={infoList} />
      <ConsultingStartBtn />
    </VStack>
  );
};

const ConsultingStartBtn = () => {
  //TODO: 상담 기한에 따라 색상, 텍스트 다르게 변경
  return (
    <Button
      w="207px"
      h="60px"
      mt="19px"
      mb="65px"
      bg={BoomerangColors.deepBlue}
      fontSize="24px"
      fontWeight={800}
      color={BoomerangColors.white}
    >
      상담 시작하기
    </Button>
  );
};
