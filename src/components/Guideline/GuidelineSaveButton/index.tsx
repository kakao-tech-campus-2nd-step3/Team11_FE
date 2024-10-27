import { PropH } from '@/components/commons/types';
import { BoomerangColors } from '@/utils/colors';
import { Button, Text } from '@chakra-ui/react';
import Pencil from '@images/pencil.svg?react';

export const GuidelineSaveButton: React.FC<PropH> = ({ h }) => (
  <Button
    w={169}
    bg={BoomerangColors.deepBlue}
    borderRadius={8}
    h={h}
    // TODO: transform 속성이 안먹힘
    ml={`calc(100% - ${216}px)`}
  >
    <Pencil />
    <Text
      color={BoomerangColors.white}
      fontWeight={700}
      fontSize={'24px'}
      ml={'17px'}
    >
      저장하기
    </Text>
  </Button>
);
