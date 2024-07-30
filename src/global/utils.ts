/**
 * Generates a random integer between 0 (inclusive) and a specified limit (exclusive).
 *
 * @param limit - The upper limit for the generated number, exclusive.
 * @returns A random integer between 0 and the specified limit.
 */
export const generateRandomNumber = (limit: number): number =>
  Math.floor(Math.random() * limit);

interface GetFormattedCurrencyStringArgs {
  value: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
}

/**
 * Arguments for the getFormattedCurrencyString function.
 */
interface GetFormattedCurrencyStringArgs {
  /**
   * The numeric string to format.
   */
  value: string;

  /**
   * The minimum number of decimal places (default is 2).
   */
  minimumFractionDigits?: number;

  /**
   * The maximum number of decimal places (default is 2).
   */
  maximumFractionDigits?: number;
}

/**
 * Formats a numeric string into a currency string with commas and specified decimal places.
 *
 * @param args - An object containing the following properties:
 * @param args.value - The numeric string to format.
 * @param args.minimumFractionDigits - The minimum number of decimal places (default is 2).
 * @param args.maximumFractionDigits - The maximum number of decimal places (default is 2).
 * @returns A formatted currency string with commas and specified decimal places.
 */

export const getFormattedCurrencyString = ({
  value,
  minimumFractionDigits = 2,
  maximumFractionDigits = 2,
}: GetFormattedCurrencyStringArgs) =>
  parseFloat(value).toLocaleString("en-US", {
    minimumFractionDigits,
    maximumFractionDigits,
  });
