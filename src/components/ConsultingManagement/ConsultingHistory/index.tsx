import { ConsultingManagementHeader } from '@/components/ConsultingManagement/ConsultingManagementHeader';
import { BoomerangColors } from '@/utils/colors';
import { Box, Button, Text, VStack } from '@chakra-ui/react';

export const ConsultingHistory = () => {
  return (
    <Box flex="1" bg="white">
      <ConsultingManagementHeader category="진행중인 상담" />
      <VStack>
        <ConsultingHistoryBtn date="2024-11-09" />
      </VStack>
    </Box>
  );
};

const ConsultingHistoryBtn = ({ date }: { date: string }) => {
  return (
    <Button
      bg="#176CFF"
      w="80%"
      h="70px"
      borderRadius={0}
      mt="47px"
      alignItems="center"
    >
      <Text fontWeight={800} fontSize="23px" color={BoomerangColors.white}>
        {date} 상담 내역 조회하기
      </Text>
    </Button>
  );
};
