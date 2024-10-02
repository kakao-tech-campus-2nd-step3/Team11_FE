import React from 'react';

import { BoomerangColors } from '@/utils/colors';
import { Button, Text, VStack } from '@chakra-ui/react';
import ConsultationImage from '@images/consultation.svg?react';

export const ConsultationSection: React.FC = () => (
  <VStack
    h={470}
    bg={BoomerangColors.white}
    boxShadow="md"
    borderRadius={20}
    pt={30}
  >
    <ConsultationImage />
    <Button bg={BoomerangColors.blue} w={294} h={69} borderRadius={34.5}>
      <Text color={BoomerangColors.white} fontSize="24px">
        전문가와 상담해보기
      </Text>
    </Button>
  </VStack>
);
