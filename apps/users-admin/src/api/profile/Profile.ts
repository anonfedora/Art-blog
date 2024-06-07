import { JsonValue } from "type-fest";

export type Profile = {
  avatar: JsonValue;
  bio: string | null;
  createdAt: Date;
  id: string;
  profileAvatar: JsonValue;
  updatedAt: Date;
  userBio: string | null;
  website: string | null;
  webUrl: string | null;
};
