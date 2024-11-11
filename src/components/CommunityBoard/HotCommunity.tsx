import React from 'react';

import { Box, Flex, Text } from '@chakra-ui/react';

import HotTopic from './HotTopic';
import LoadingSpinner from './LoadingSpinner';
import useHotTopics from './hooks/useHotTopics';

const HotCommunity: React.FC = () => {
  const { hotTopics, loading, error } = useHotTopics();

  if (loading) return <LoadingSpinner />;
  if (error) return <Box>{error}</Box>;

  return (
    <Box as="section" mt={20} w="729px">
      <Text fontSize="3xl" fontWeight="extrabold" color="#202020">
        🔥 지금 가장 핫한 커뮤니티
      </Text>
      <Text mt={2} fontSize="lg" lineHeight="short" color="#878787">
        지금 커뮤니티에서 가장 뜨거운 토론이 벌어지고 있는 게시글이에요!
        <br />
        다양한 의견을 나누고, 당신의 생각도 함께 더해보세요!
      </Text>
      <Flex
        flexDirection="column"
        pl={2}
        mt={7}
        fontSize="xl"
        fontWeight="bold"
        color="#363636"
      >
        {hotTopics.map((topic, index) => (
          <HotTopic key={index} title={topic.title} />
        ))}
      </Flex>
    </Box>
  );
};

export default HotCommunity;
