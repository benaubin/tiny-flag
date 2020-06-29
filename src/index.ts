const ascii_A = 65;
const regionalIndictor_A = 56806;

function charCodeToRegionalIndicatorCode(charCode: number): string {
  charCode -= ascii_A;

  // Santity check that this is a capital ASCII letter
  if (charCode < 0 || charCode > 25) throw new Error("Bad ASCII");

  return String.fromCharCode(55356, regionalIndictor_A + charCode);
}

/**
 * Convert a country code to an emoji flag.
 *
 * @param countryCode An ISO 3166-1 alpha-2 country code.
 * @returns An emoji flag
 */
export default function countryCodeToFlag(countryCode: string): string {
  if (countryCode.length != 2) throw new Error("len≠2");

  countryCode = countryCode.toUpperCase();

  return (
    charCodeToRegionalIndicatorCode(countryCode.charCodeAt(0)) +
    charCodeToRegionalIndicatorCode(countryCode.charCodeAt(1))
  );
}
