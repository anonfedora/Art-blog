import { Post } from "../post/Post";

export type Comment = {
  commentContent: string | null;
  commentCreatedAt: Date | null;
  content: string | null;
  createdAt: Date;
  id: string;
  post?: Post | null;
  relatedPost: string | null;
  updatedAt: Date;
};
