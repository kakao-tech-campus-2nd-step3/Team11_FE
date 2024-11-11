export interface CommentData {
  id: number;
  writer_email: string;
  writer_name: string;
  text: string;
  last_modified_at: string;
  edited: boolean;
}

export interface PostData {
  postId: number;
  title: string;
  content: string;
  likes: number;
  comments: number;
  writerName: string;
  createdAt: string;
  commentsList: CommentData[];
  location: string;
}
