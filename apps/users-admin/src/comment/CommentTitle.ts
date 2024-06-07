import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "relatedPost";

export const CommentTitle = (record: TComment): string => {
  return record.relatedPost?.toString() || String(record.id);
};
