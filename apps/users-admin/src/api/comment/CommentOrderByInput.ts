import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  commentContent?: SortOrder;
  commentCreatedAt?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  relatedPost?: SortOrder;
  updatedAt?: SortOrder;
};
