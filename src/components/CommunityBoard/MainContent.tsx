import React, { useState } from 'react';

import { Box, Flex, VStack } from '@chakra-ui/react';

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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { posts, totalPages, loading, error } = usePosts(currentPage);

  if (loading) return <LoadingSpinner />;
  if (error) return <Box>{error}</Box>;

  return (
    <ErrorBoundary>
      <Flex
        as="main"
        position="relative"
        flexDirection="column"
        alignItems="center"
        zIndex="0"
        px={{ base: 5, md: 20 }}
        pt={14}
        pb={6}
        mt={-7}
        w="full"
        maxW="1004px"
        minH="100vh"
      >
        <CategorySection />
        <HotCommunity />
        <FreeBoardExplorer />
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap={5}
          mt={8}
          w="730px"
        >
          <SearchBar />
          <SortButtons />
        </Flex>
        <VStack spacing={4} align="stretch" w="full" mt={5}>
          {posts.map((post) => (
            <PostCard key={post.postId} {...post} />
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
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </Flex>
      </Flex>
    </ErrorBoundary>
  );
};

export default MainContent;
