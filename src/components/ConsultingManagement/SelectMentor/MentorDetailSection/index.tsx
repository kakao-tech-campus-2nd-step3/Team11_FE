import { useNavigate } from 'react-router-dom';

import { ConsultingManagementHeader } from '@/components/ConsultingManagement/ConsultingManagementHeader';
import { MentorDetailCard } from '@/components/ConsultingManagement/MentorDetailCard';
import { BoomerangButton } from '@/components/commons/BoomerangButton';
import { ROUTER_PATH } from '@/routerPath';
import { Box, VStack } from '@chakra-ui/react';

export const MentorDetailSection = () => {
  const navigate = useNavigate();

  const navigateScheduling = () => {
    navigate(ROUTER_PATH.CONSULTING_SCHEDULING);
  };

  return (
    <Box>
      <ConsultingManagementHeader category="멘토 정보 탐색하기" />
      <VStack mt="55px" pb="69px" gap="35px">
        <MentorDetailCard />
        <BoomerangButton
          w="350px"
          h="63px"
          fontSize="30px"
          onClick={navigateScheduling}
        >
          멘토와 상담 신청하기
        </BoomerangButton>
      </VStack>
    </Box>
  );
};
