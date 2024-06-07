import { InputJsonValue } from "../../types";

export type ProfileCreateInput = {
  avatar?: InputJsonValue;
  bio?: string | null;
  profileAvatar?: InputJsonValue;
  userBio?: string | null;
  website?: string | null;
  webUrl?: string | null;
};
