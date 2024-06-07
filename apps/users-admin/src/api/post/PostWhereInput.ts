import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PostWhereInput = {
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  createdDateAndTime?: DateTimeNullableFilter;
  creationDateTime?: DateTimeNullableFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  postContent?: StringNullableFilter;
  postContentBody?: StringNullableFilter;
  postImageUri?: StringNullableFilter;
  postImageUrl?: StringNullableFilter;
  postTitle?: StringNullableFilter;
  postTitleText?: StringNullableFilter;
  title?: StringNullableFilter;
};
