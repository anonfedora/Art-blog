import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  userEmail?: SortOrder;
  userFirstName?: SortOrder;
  userLastName?: SortOrder;
  username?: SortOrder;
  userPasswordHash?: SortOrder;
};
