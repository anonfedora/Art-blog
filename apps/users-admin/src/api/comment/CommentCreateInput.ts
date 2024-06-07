import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentCreateInput = {
  commentContent?: string | null;
  commentCreatedAt?: Date | null;
  content?: string | null;
  post?: PostWhereUniqueInput | null;
  relatedPost?: string | null;
};
