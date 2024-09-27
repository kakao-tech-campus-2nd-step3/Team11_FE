import React, { ReactNode } from 'react';

import { Box } from '@chakra-ui/react';

export const RoundedBox: React.FC<{ children: ReactNode; bg: string }> = ({
  children,
  bg,
}) => (
  <Box borderRadius={20} bg={bg} h={150}>
    {children}
  </Box>
);
