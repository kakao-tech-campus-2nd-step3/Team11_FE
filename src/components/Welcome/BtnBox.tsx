import React, { ReactNode } from 'react';

import { Button } from '@chakra-ui/react';

interface BtnBoxProps {
  children: ReactNode;
  bgColor: string;
  color: string;
}

export const BtnBox: React.FC<BtnBoxProps> = ({ children, bgColor, color }) => {
  return (
    <Button
      color={color}
      fontSize={'22px'}
      w={'250px'}
      h={'80px'}
      bg={bgColor}
      borderRadius={8}
      shadow={'0px 0px 5px rgba(0,0,0,0.25)'}
    >
      {children}
    </Button>
  );
};
