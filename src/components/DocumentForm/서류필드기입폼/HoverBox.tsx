import { BoomerangColors } from '@/utils/colors';
import { Flex, Text } from '@chakra-ui/react';

export const HoverBox: React.FC<{ description: string }> = ({
  description,
}) => (
  <Flex
    mt="18px"
    zIndex={999}
    p="0 29px"
    alignItems="center"
    position="absolute"
    top="100%"
    left={0}
    w="604px"
    h="123px"
    bgColor="rgba(0, 0, 0, 0.70)"
    borderRadius={5}
    visibility="hidden"
    opacity={0}
    transition="visibility 0s, opacity 0.4s ease-in-out"
    _groupHover={{
      visibility: 'visible',
      opacity: 1,
    }}
  >
    <Text fontSize="15px" color={BoomerangColors.white}>
      {description}
    </Text>
  </Flex>
);
