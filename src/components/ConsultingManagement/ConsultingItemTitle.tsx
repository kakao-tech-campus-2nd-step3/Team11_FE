import { Flex, Image, Text } from '@chakra-ui/react';

export const ConsultingItemTitle: React.FC<{ title: string; icon: string }> = ({
  title,
  icon,
}) => (
  <Flex gap="15px" mb="25px">
    <Image src={icon} />
    <Text fontWeight="bold" fontSize="30px" color="#373737">
      {title}
    </Text>
  </Flex>
);
