/**
 * Generates a random integer between 0 (inclusive) and a specified limit (exclusive).
 *
 * @param limit - The upper limit for the generated number, exclusive.
 * @returns A random integer between 0 and the specified limit.
 */
export const generateRandomNumber = (limit: number): number =>
  Math.floor(Math.random() * limit);
