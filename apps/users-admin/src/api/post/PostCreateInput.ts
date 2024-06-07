import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  comments?: CommentCreateNestedManyWithoutPostsInput;
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
