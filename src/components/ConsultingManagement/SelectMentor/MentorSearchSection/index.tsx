import { MostAnswersExpertSection } from '@/components/Consulting/ExpertSection/MostAnswersExpertSection';
import { RecommendedExpertSection } from '@/components/Consulting/ExpertSection/RecommendedExpertSection';
import { ConsultingManagementHeader } from '@/components/ConsultingManagement/ConsultingManagementHeader';
import { Box, VStack } from '@chakra-ui/react';

export const MentorSearchSection = () => {
  return (
    <Box>
      <ConsultingManagementHeader category="부메랑 멘토 탐색하기" />
      <VStack>
        <RecommendedExpertSection />
        <MostAnswersExpertSection />
      </VStack>
    </Box>
  );
};
