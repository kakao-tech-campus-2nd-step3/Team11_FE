import { ConsultStatus, useInfiniteConsultRecords } from '@apis/mentee';
import { IConsultation } from '@apis/mentee/types';

import { Fragment, Suspense, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ConsultingInfoBox,
  ConsultingInfoItem,
} from '@/components/ConsultingManagement/ConsultingInfoBox';
import { ConsultingManagementHeader } from '@/components/ConsultingManagement/ConsultingManagementHeader';
import { BoomerangColors } from '@/utils/colors';
import { Box, Button, Flex, Spinner, Text, VStack } from '@chakra-ui/react';

const toConsultingInfo = (consultation: IConsultation): ConsultingInfoItem => {
  const { content, consultation_date_time, mentor_nick_name } = consultation;

  return {
    consultation_date_time: consultation_date_time,
    mentor_nick_name: mentor_nick_name,
    content: content,
  };
};

// RECEIVED //확정전 -> 상담 신청만 완료한 상태
// PENDING, //진행전 -> 멘토가 상담 확정하여 진행되기 전 상태
//   ONGOING, //진행중 -> 상담 신청하여 현재 진행중인 상태
//   FINISHED; //진행완료 -> 상담을 완료한 상태

export const ConsultingStart = () => {
  const [selectedStatus, setSelectedStatus] =
    useState<ConsultStatus>('RECEIVED');

  return (
    <Box flex="1" bg="white">
      <ConsultingManagementHeader category="상담 진행하기" />
      <Flex justifyContent={'center'} gap={'100px'} mt={10}>
        <Button
          onClick={() => setSelectedStatus('RECEIVED')}
          opacity={selectedStatus === 'PENDING' ? 0.5 : 1}
        >
          확정 대기
        </Button>
        <Button
          onClick={() => setSelectedStatus('PENDING')}
          opacity={selectedStatus === 'RECEIVED' ? 0.5 : 1}
        >
          확정 완료
        </Button>
      </Flex>
      <VStack mt="15px" pb="69px" spacing="52px">
        <Box>
          <Text fontSize="18px" fontWeight="bold" color="#979797" mb="17px">
            신청된 상담 내역
          </Text>
          <Suspense fallback={<Spinner />}>
            <ConsultingRecords selectedStatus={selectedStatus} />
          </Suspense>
        </Box>
      </VStack>
    </Box>
  );
};

const ConsultingRecords: React.FC<{
  selectedStatus: ConsultStatus;
}> = ({ selectedStatus }) => {
  const { data } = useInfiniteConsultRecords(selectedStatus, 4);

  const { pages } = data;

  return (
    <Fragment>
      {pages.map((res) => {
        const contents = res.content;
        return contents.map((content) => {
          return (
            <ConsultingApplicationRecord infoList={toConsultingInfo(content)} />
          );
        });
      })}
    </Fragment>
  );
};

const ConsultingApplicationRecord = ({
  infoList,
}: {
  infoList: ConsultingInfoItem;
}) => {
  return (
    <VStack spacing={0} alignItems="flex-end">
      <ConsultingInfoBox infoList={infoList} />
      <ConsultingStartBtn />
    </VStack>
  );
};

const ConsultingStartBtn = () => {
  const navigate = useNavigate();
  //TODO: 추후 수정
  const chatId = 1;

  const goConsultingChat = () => {
    navigate(`/consulting/start/${chatId}`);
  };

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
      onClick={goConsultingChat}
      _hover={{}}
    >
      상담 시작하기
    </Button>
  );
};
