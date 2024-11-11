import { MentorDetailSection } from '@/components/ConsultingManagement/SelectMentor/MentorDetailSection';
import { MentorSearchSection } from '@/components/ConsultingManagement/SelectMentor/MentorSearchSection';
import { Box, Spacer } from '@chakra-ui/react';

export const SelectMentor = () => {
  return (
    <Box flex="1" bg="white">
      <MentorSearchSection />
      <Spacer h="40px" />
      <MentorDetailSection />
    </Box>
  );
};
