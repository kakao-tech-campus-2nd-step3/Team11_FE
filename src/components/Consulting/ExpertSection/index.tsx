import { MostAnswersExpertSection } from '@/components/Consulting/ExpertSection/MostAnswersExpertSection';
import { RecommendedExpertSection } from '@/components/Consulting/ExpertSection/RecommendedExpertSection';
import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';
import cloud from '@images/cloud.svg';

export const ExpertSection = () => {
  return (
    <Box>
      <VStack spacing={0} mt="86px">
        <Flex alignItems="center" gap="6px">
          <Text
            fontSize="38px"
            fontWeight={800}
            color="#0071DE"
            lineHeight="38px"
          >
            부메랑 지식인들에게 빨리 물어보기!
          </Text>
          <Image src={cloud} />
        </Flex>
        <Text fontSize="24px" fontWeight="bold" color="#9CA9C0">
          부메랑 서비스에서 인증된 컨설턴트들에게 답변받아보아요!
        </Text>
      </VStack>
      <RecommendedExpertSection />
      <MostAnswersExpertSection />
    </Box>
  );
};
