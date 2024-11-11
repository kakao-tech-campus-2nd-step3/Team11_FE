import { useEffect, useState } from 'react';

import { PostData } from '../../CommunityBoard/types';
import { fetchPostById } from '../../CommunityBoard/utils/api';

const usePostDetail = (postId: string) => {
  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      try {
        const data = await fetchPostById(postId);
        setPost(data);
      } catch {
        setError('게시글을 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [postId]);

  return { post, loading, error };
};

export default usePostDetail;
