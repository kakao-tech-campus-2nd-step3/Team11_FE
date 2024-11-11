import axios from 'axios';

import { PostData } from '../types';

const baseUrl = 'http://3.34.197.198:8080';

export const fetchPostById = async (postId: string): Promise<PostData> => {
  const response = await axios.get(`${baseUrl}/api/v1/board/${postId}`);
  const data = response.data;

  return {
    postId: data.id,
    title: data.title,
    content: data.content,
    likes: data.like_count,
    comments: data.comment_count,
    writerName: data.writer_name,
    createdAt: data.created_at,
    commentsList:
      data.comment_list_response_dto?.comment_response_dto_list || [],
    location: data.location,
  };
};
