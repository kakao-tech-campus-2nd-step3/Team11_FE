import React, { ReactNode } from 'react';

import { Flex } from '@chakra-ui/react';

interface ICard {
  children: ReactNode;
  h?: number;
  bg?: string;
  boxShadow?: string;
  className?: string;
}

export const Card: React.FC = ({
  children,
  bg = 'white',
  h = 150,
  boxShadow = 'md',
  className = undefined,
}: ICard) => (
  <Flex
    pl={10}
    pr={10}
    alignItems="center"
    justifyContent="space-between"
    borderRadius={20}
    bg={bg}
    h={h}
    boxShadow={boxShadow}
    className={className}
  >
    {children}
  </Flex>
);
