import { Box, Flex, Text } from '@chakra-ui/react';

interface MentorSelectionHeaderProps {
  title: string;
  subtitle: string;
  Icon?: React.ReactNode;
}
export const MentorSelectionHeader: React.FC<MentorSelectionHeaderProps> = ({
  title,
  subtitle,
  Icon,
}) => (
  <Box>
    <Flex gap="10px">
      <Text fontSize="27px" fontWeight={800} color="#5C5C5C">
        {title}
      </Text>
      {Icon}
    </Flex>
    <Text fontSize="24x" color="#5F646C">
      {subtitle}
    </Text>
  </Box>
);
