import React, { ReactNode } from 'react';

import { Container } from '@chakra-ui/react';

export const BasicLayout: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <Container maxW={1024} p={0}>
      {/*헤더*/}
      {children}
      {/*푸터*/}
    </Container>
  );
};
