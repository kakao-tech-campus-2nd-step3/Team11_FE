import { useEffect, useState } from 'react';

import { HotTopicData } from '../types';
import { fetchHotTopics } from '../utils/api';

const useHotTopics = () => {
  const [hotTopics, setHotTopics] = useState<HotTopicData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadHotTopics = async () => {
      try {
        const data = await fetchHotTopics();
        setHotTopics(data);
      } catch {
        setError('핫토픽을 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    loadHotTopics();
  }, []);

  return { hotTopics, loading, error };
};

export default useHotTopics;
