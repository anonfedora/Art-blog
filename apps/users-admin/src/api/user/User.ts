import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userEmail: string | null;
  userFirstName: string | null;
  userLastName: string | null;
  username: string;
  userPasswordHash: string | null;
};
