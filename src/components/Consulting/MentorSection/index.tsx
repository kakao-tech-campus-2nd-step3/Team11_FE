import { MentorCard } from '@/components/Consulting/MentorCard';
import { MentorSelectionHeader } from '@/components/Consulting/MentorSelectionHeader';
import { Box, Grid } from '@chakra-ui/react';

export const MentorSection = () => {
  return (
    <Box p="26px 31px" mt="33px">
      <MentorSelectionHeader
        title="그 외의 경험자들⚡"
        subtitle="보험없이 소송으로 해결한 분들"
      />
      <Grid
        mt="40px"
        templateColumns="repeat(2, 1fr)"
        rowGap="15px"
        columnGap="35px"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <MentorCard
            key={index}
            w="479px"
            h="227px"
            name="김땡땡"
            matchingCount={33}
          />
        ))}
      </Grid>
    </Box>
  );
};
