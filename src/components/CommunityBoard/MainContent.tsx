import React from 'react';

import { Box, Flex, Image, VStack } from '@chakra-ui/react';

import CategorySection from './CategorySection';
import CreatePostButton from './CreatePostButton';
import ErrorBoundary from './ErrorBoundary';
import FreeBoardExplorer from './FreeBoardExplorer';
import HotCommunity from './HotCommunity';
import LoadingSpinner from './LoadingSpinner';
import Pagination from './Pagination';
import PostCard from './PostCard';
import SearchBar from './SearchBar';
import SortButtons from './SortButtons';
import usePosts from './hooks/usePosts';

const MainContent: React.FC = () => {
  const { posts, loading, error } = usePosts();

  if (loading) return <LoadingSpinner />;
  if (error) return <Box>{error}</Box>;

  return (
    <ErrorBoundary>
      <Flex
        as="main"
        position="relative"
        flexDirection="column"
        alignItems="center"
        // selfAlign="center"
        px={{ base: 5, md: 20 }}
        pt={14}
        pb={6}
        mt={-7}
        w="full"
        maxW="1004px"
        minH="100vh"
      >
        {/*배경*/}
        <Image
          loading="lazy"
          // src=""
          position="absolute"
          inset={0}
          w="full"
          h="full"
          objectFit="cover"
          alt=""
        />
        <CategorySection />
        <HotCommunity />
        <FreeBoardExplorer />
        <Flex
          flexWrap="wrap"
          gap={5}
          mt={9}
          textStyle="base"
          lineHeight="tall"
          mr={{ base: 2, md: 0 }}
        >
          <SearchBar />
          <SortButtons />
        </Flex>
        <VStack spacing={4} align="stretch" w="full">
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </VStack>
        <Flex
          flexDirection="column"
          alignSelf="flex-end"
          mt={6}
          w="full"
          fontWeight="bold"
        >
          <CreatePostButton />
          <Pagination />
        </Flex>
      </Flex>
    </ErrorBoundary>
  );
};

export default MainContent;
