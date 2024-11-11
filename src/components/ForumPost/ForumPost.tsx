import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Box, Flex } from '@chakra-ui/react';

import LoadingSpinner from '../CommunityBoard/LoadingSpinner';
import { CommentSection } from './CommentSection';
import { PostContent } from './PostContent';
import { PostHeader } from './PostHeader';
import { PostStats } from './PostStats';
import { ReportButton } from './ReportButton';
import { PostData } from './types';
import { fetchPostById } from './utils/api';

const ForumPost: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      try {
        if (postId) {
          const data = await fetchPostById(postId);
          setPost(data);
        } else {
          setError('유효하지 않은 게시글 ID입니다.');
        }
      } catch {
        setError('게시글을 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [postId]);

  if (loading) return <LoadingSpinner />;
  if (error) return <Box>{error}</Box>;
  if (!post) return <Box>게시글이 존재하지 않습니다.</Box>;

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
          title={post.title}
          location={post.location}
          date={post.createdAt}
          content={post.content}
        />
        <PostStats likes={post.likes} comments={post.comments} />
        <ReportButton />
        <CommentSection comments={post.commentsList} />
      </Flex>
    </Box>
  );
};

export default ForumPost;
