import { Comment } from "../comment/Comment";

export type Post = {
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  createdDateAndTime: Date | null;
  creationDateTime: Date | null;
  id: string;
  imageUrl: string | null;
  postContent: string | null;
  postContentBody: string | null;
  postImageUri: string | null;
  postImageUrl: string | null;
  postTitle: string | null;
  postTitleText: string | null;
  title: string | null;
  updatedAt: Date;
};
