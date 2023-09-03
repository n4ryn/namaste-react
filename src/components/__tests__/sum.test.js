import { sum } from "../../utils/sum.js";

/**
 * - test() takes 2 arguments
 *      1. Description: String which test what that test case is doing.
 *      2. Callback Function: A function that performs the test.
 */

describe("Sum function should calculate the sum of two numbers", () => {
  test("If sum of two numbers are correct", () => {
    const result = sum(3, 4);

    expect(result).toBe(7);
  });
});
