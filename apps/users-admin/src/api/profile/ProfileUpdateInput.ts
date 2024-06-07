import { InputJsonValue } from "../../types";

export type ProfileUpdateInput = {
  avatar?: InputJsonValue;
  bio?: string | null;
  profileAvatar?: InputJsonValue;
  userBio?: string | null;
  website?: string | null;
  webUrl?: string | null;
};
