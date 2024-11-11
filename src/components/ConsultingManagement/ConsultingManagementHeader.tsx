import { Flex, Text } from '@chakra-ui/react';

export const ConsultingManagementHeader = ({
  category,
}: {
  category: string;
}) => (
  <Flex boxShadow="0px 4px 5px rgba(0, 0, 0, 0.10)" h="105px">
    <Text fontWeight={800} fontSize="31px" color="#0063D4" mt="32px" ml="104px">
      {category}
    </Text>
  </Flex>
);
