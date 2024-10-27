import React from 'react';

import { Box, Flex } from '@chakra-ui/react';

import { CommentSection } from './CommentSection';
import { PostContent } from './PostContent';
import { PostHeader } from './PostHeader';
import { PostStats } from './PostStats';
import { ReportButton } from './ReportButton';

interface ForumPostProps {
  title: string;
  location: string;
  date: string;
  content: string;
  likes: number;
  comments: number;
}

export const ForumPost: React.FC<ForumPostProps> = ({
  title,
  location,
  date,
  content,
  likes,
  comments,
}) => {
  return (
    <Box bg="white">
      <Flex
        direction="column"
        align="center"
        pt={16}
        bg="#EDEDED"
        borderRadius="3xl"
        shadow="md"
        maxW="screen-lg"
        mx="auto"
      >
        <PostHeader />
        <PostContent
          title={title}
          location={location}
          date={date}
          content={content}
        />
        <PostStats likes={likes} comments={comments} />
        <ReportButton />
        <CommentSection />
      </Flex>
    </Box>
  );
};
