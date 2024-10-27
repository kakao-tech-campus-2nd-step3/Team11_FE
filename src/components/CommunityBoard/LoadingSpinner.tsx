import React from 'react';

import { Flex, Spinner } from '@chakra-ui/react';

const LoadingSpinner: React.FC = () => (
  <Flex justify="center" align="center" h="20">
    <Spinner size="xl" color="blue.500" />
  </Flex>
);

export default LoadingSpinner;
