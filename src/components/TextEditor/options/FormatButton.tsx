import React, { MutableRefObject, ReactNode } from 'react';

import { BoomerangColors } from '@/utils/colors';
import { Button } from '@chakra-ui/react';

export const FormatButton: React.FC<{
  isActive: boolean;
  onClick: () => void;
  buttonRef?: MutableRefObject<HTMLButtonElement | null>;
  children: ReactNode;
}> = ({ isActive, onClick, buttonRef, children }) => (
  <Button
    onClick={onClick}
    padding="4px 8px"
    margin="4px 0"
    borderRadius="4px"
    transform={isActive ? 'scale(1.2)' : undefined}
    backgroundColor={isActive ? BoomerangColors.calmWhite : undefined}
    variant="unstyled"
    _hover={{
      outline: '1px dashed black',
    }}
    ref={buttonRef}
  >
    {children}
  </Button>
);
