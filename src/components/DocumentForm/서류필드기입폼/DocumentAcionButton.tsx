import { BoomerangColors } from '@/utils/colors';
import { Button } from '@chakra-ui/react';

export const DocumentAcionButton: React.FC<{
  w: string;
  h: string;
  fontSize: string;
  children: React.ReactNode;
}> = ({ w, h, fontSize, children }) => (
  <Button
    width={w}
    height={h}
    borderRadius="4px"
    bg="#176CFF"
    shadow="1px 1px 4px rgba(0, 0, 0, 0.25)"
    color={BoomerangColors.white}
    fontSize={fontSize}
    fontWeight="bold"
  >
    {children}
  </Button>
);
