import React, { ReactNode } from 'react';

import { Header } from '@/components/commons/Header';
import { Container } from '@chakra-ui/react';

export const BasicLayout: React.FC<{
  children: ReactNode;
  maxW: number;
  bg?: string;
}> = ({ children, maxW, bg = undefined }) => {
  const headerHeight = 55;
  return (
    <Container maxW={maxW} minH={'100vh'} p={0} pt={headerHeight} bg={bg}>
      <Header h={headerHeight} />
      {children}
      {/*푸터*/}
    </Container>
  );
};
