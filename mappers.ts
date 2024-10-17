import type { LegacyUser, User } from "./types.ts";

export const mapLegacyUserToUser = (legacyUser: LegacyUser): User => {
  return {
    name: legacyUser.user_name,
    email: legacyUser.user_email,
    age: legacyUser.user_age,
  };
};
