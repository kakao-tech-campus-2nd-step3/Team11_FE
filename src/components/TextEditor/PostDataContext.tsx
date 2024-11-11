import React from 'react';

import { CommunityPostData } from '@/templates/Community/CommunityPosting';

export type PostDataContextType = {
  postData: CommunityPostData;
  setPostData: (
    value:
      | ((prevState: CommunityPostData) => CommunityPostData)
      | CommunityPostData
  ) => void;
};

export const PostDataContext = React.createContext<PostDataContextType | null>(
  null
);
