import { Button, Image, Text } from '@chakra-ui/react';

interface GuidelineBtnProps {
  bg: string;
  icon: string;
  children: React.ReactNode;
}

export const GuidelineBtn: React.FC<GuidelineBtnProps> = ({
  bg,
  icon,
  children,
}) => (
  <Button w={350} h={59} bg={bg} borderRadius={8}>
    <Image src={icon} />
    <Text
      color={'#FFF'}
      fontSize={'22px'}
      fontWeight={700}
      ml={'18px'}
      w={'223px'}
    >
      {children}
    </Text>
  </Button>
);
