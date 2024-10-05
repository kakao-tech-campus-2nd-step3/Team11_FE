import { IFlexBox } from '@components/MainSection/IFlexBox';

import React from 'react';

import { VStack } from '@chakra-ui/react';

export const Categories: React.FC = ({ flex, children }: IFlexBox) => (
  <VStack flex={flex} align="stretch" justify="space-between">
    {children}
  </VStack>
);
