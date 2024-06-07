import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  userEmail?: StringNullableFilter;
  userFirstName?: StringNullableFilter;
  userLastName?: StringNullableFilter;
  username?: StringFilter;
  userPasswordHash?: StringNullableFilter;
};
