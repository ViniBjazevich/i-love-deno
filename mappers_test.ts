import { assertEquals } from "@std/assert";
import type { LegacyUser, User } from "./types.ts";
import { mapLegacyUserToUser } from "./mappers.ts";

Deno.test("should map legacy user to user", () => {
  const legacyUser: LegacyUser = {
    user_name: "Vini",
    user_email: "vini@email.com",
    user_age: 22,
  };

  const expected: User = {
    name: "Vini",
    email: "vini@email.com",
    age: 22,
  };

  assertEquals(mapLegacyUserToUser(legacyUser), expected);
});
