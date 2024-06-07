import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  avatar?: SortOrder;
  bio?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  profileAvatar?: SortOrder;
  updatedAt?: SortOrder;
  userBio?: SortOrder;
  website?: SortOrder;
  webUrl?: SortOrder;
};
