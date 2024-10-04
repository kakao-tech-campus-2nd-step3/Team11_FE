import React, { ReactNode } from 'react';

import { Container } from '@chakra-ui/react';

export const BasicLayout: React.FC<{ children: ReactNode; maxW: number }> = ({
  children,
  maxW,
}) => {
  return (
    <Container maxW={maxW} p={0}>
      {/*헤더*/}
      {children}
      {/*푸터*/}
    </Container>
  );
};
