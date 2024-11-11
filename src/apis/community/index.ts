import apiInstance from '@/apis';
import { CommunityPostData } from '@/templates/Community/CommunityPosting';
import { useMutation } from '@tanstack/react-query';
import { HttpStatusCode } from 'axios';

export type UploadPostData = CommunityPostData & {
  images: File[];
};

export const useCommunityPostMutation = () => {
  return useMutation<boolean, Error, UploadPostData>({
    mutationFn: (postData: UploadPostData) => uploadPost(postData),
  });
};

const uploadPost = async ({
  title,
  content,
  boardType,
  images,
  location = 'BUSAN',
}: UploadPostData): Promise<boolean> => {
  const formData = new FormData();

  formData.append(
    'data',
    JSON.stringify({
      title: title,
      content: content,
      board_type: boardType,
      location: location,
    })
  );

  images.forEach((image) => {
    formData.append('image', image);
  });

  const response = await apiInstance.post('/api/v1/board', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.status === HttpStatusCode.Ok;
};
