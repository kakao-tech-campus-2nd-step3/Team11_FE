import React, { ReactNode } from 'react';

import { Header } from '@/components/commons/Header';
import { Container } from '@chakra-ui/react';

export const BasicLayout: React.FC<{ children: ReactNode; maxW: number }> = ({
  children,
  maxW,
}) => {
  const headerHeight = 55;
  return (
    <Container maxW={maxW} p={0} pt={headerHeight}>
      <Header h={headerHeight} />
      {children}
      {/*푸터*/}
    </Container>
  );
};
