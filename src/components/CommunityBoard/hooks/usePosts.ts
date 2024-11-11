import { useEffect, useState } from 'react';

import { PostData } from '../types';
import { fetchPosts } from '../utils/api';

const usePosts = (page: number) => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      try {
        const data = await fetchPosts(page);
        setPosts(data.posts);
        setTotalPages(data.totalPages);
      } catch {
        setError('게시글을 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [page]);

  return { posts, totalPages, loading, error };
};

export default usePosts;
