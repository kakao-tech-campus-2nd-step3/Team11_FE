import { useEffect, useState } from 'react';

import { PostData } from '../types';
import { fetchPosts } from '../utils/api';

const usePosts = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch {
        setError('Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return { posts, loading, error };
};

export default usePosts;
