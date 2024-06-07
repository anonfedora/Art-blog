import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  userEmail?: string | null;
  userFirstName?: string | null;
  userLastName?: string | null;
  username: string;
  userPasswordHash?: string | null;
};
