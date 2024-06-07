import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  comments?: CommentUpdateManyWithoutPostsInput;
  content?: string | null;
  createdDateAndTime?: Date | null;
  creationDateTime?: Date | null;
  imageUrl?: string | null;
  postContent?: string | null;
  postContentBody?: string | null;
  postImageUri?: string | null;
  postImageUrl?: string | null;
  postTitle?: string | null;
  postTitleText?: string | null;
  title?: string | null;
};
