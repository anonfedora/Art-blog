import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProfileWhereInput = {
  avatar?: JsonFilter;
  bio?: StringNullableFilter;
  id?: StringFilter;
  profileAvatar?: JsonFilter;
  userBio?: StringNullableFilter;
  website?: StringNullableFilter;
  webUrl?: StringNullableFilter;
};
