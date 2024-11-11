import { ConsultingItemTitle } from '@/components/ConsultingManagement/ConsultingItemTitle';
import { Box, VStack } from '@chakra-ui/react';
import pointer from '@images/pointer.svg';

export const SelectConsultingDaySection = () => {
  return (
    <Box w="951px">
      <ConsultingItemTitle
        title="원하시는 상담 날짜를 선택해주세요!"
        icon={pointer}
      />
      <VStack justifyContent="center">
        <Box w="870px" h="394px" borderRadius="17px" bg="#F4F4F4">
          calendar
        </Box>
      </VStack>
    </Box>
  );
};
