import React from 'react';

import { WarningIcon } from '@chakra-ui/icons';
import { Button, Icon } from '@chakra-ui/react';

export const ReportButton: React.FC = () => (
  <Button
    leftIcon={<Icon as={WarningIcon} w={5} h={5} />}
    variant="ghost"
    color="red.400"
    mt={3.5}
    mr={{ base: 2.5, md: 5 }}
    alignSelf="flex-end"
  >
    부적절한 게시글 신고하기
  </Button>
);
