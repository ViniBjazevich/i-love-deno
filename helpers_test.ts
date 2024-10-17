import { assertEquals } from "@std/assert";
import { add } from "./helpers.ts";

Deno.test("should add two numbers together", () => {
  assertEquals(add(2, 3), 5);
});
