import { Profile as TProfile } from "../api/profile/Profile";

export const PROFILE_TITLE_FIELD = "website";

export const ProfileTitle = (record: TProfile): string => {
  return record.website?.toString() || String(record.id);
};
