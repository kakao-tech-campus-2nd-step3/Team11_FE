import React from 'react';

import { Box, Text } from '@chakra-ui/react';

interface HotTopicProps {
  title: string;
}

const HotTopic: React.FC<HotTopicProps> = ({ title }) => (
  <Box px={3} py={3.5} bg="red.100" borderRadius="xl" mb={2}>
    <Text>🔥 {title}</Text>
  </Box>
);

export default HotTopic;
