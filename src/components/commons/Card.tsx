import React, { ReactNode } from 'react';

import { Flex } from '@chakra-ui/react';

interface ICard {
  children: ReactNode;
  height?: number;
  bg?: string;
  boxShadow?: string;
}

export const Card: React.FC = ({
  children,
  bg = 'white',
  height = 150,
  boxShadow = 'md',
}: ICard) => (
  <Flex
    pl={10}
    pr={10}
    alignItems="center"
    justifyContent={'space-between'}
    borderRadius={20}
    bg={bg}
    h={height}
    boxShadow={boxShadow}
  >
    {children}
  </Flex>
);
