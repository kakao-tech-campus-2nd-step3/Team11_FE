import React from 'react';

import { Box, Text } from '@chakra-ui/react';

const Pagination: React.FC = () => (
  <Box mt={8} textAlign="center">
    <Text fontSize="2xl" color="gray.500">
      1 / 2 /{' '}
      <Text as="span" fontWeight="extrabold" color="blue.600">
        3
      </Text>{' '}
      / 4 / 5 / 6
    </Text>
  </Box>
);

export default Pagination;
