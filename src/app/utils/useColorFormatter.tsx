import { useState } from "react";

// Define the hook function
export const useColorFormatter = () => {
  const [hex, setHex] = useState<string>("");
  const [rgb, setRgb] = useState<string>("");
  const [hsl, setHsl] = useState<string>("");

  // Utility functions to add prefixes if missing
  const formatHex = (input: string) =>
    input.startsWith("#") ? input : `#${input}`;
  const formatRgb = (input: string) =>
    input.startsWith("rgb(") ? input : `rgb(${input})`;
  const formatHsl = (input: string) =>
    input.startsWith("hsl(") ? input : `hsl(${input})`;

  // Function to get the formatted CSS color
  const getCssColor = (): string => {
    const HEX_PATTERN = /^#?([0-9A-F]{3}([0-9A-F]{3})?)$/i;
    const RGB_PATTERN = /^(rgb\()?\d{1,3},\s?\d{1,3},\s?\d{1,3}\)?$/i;
    const HSL_PATTERN = /^(hsl\()?\d{1,3},\s?\d{1,3}%,\s?\d{1,3}%\)?$/i;

    const formattedHex = formatHex(hex);
    const formattedRgb = formatRgb(rgb);
    const formattedHsl = formatHsl(hsl);

    if (hex && HEX_PATTERN.test(formattedHex)) {
      return formattedHex;
    } else if (rgb && RGB_PATTERN.test(formattedRgb)) {
      return formattedRgb;
    } else if (hsl && HSL_PATTERN.test(formattedHsl)) {
      return formattedHsl;
    }
    return "#000000"; // Default color if none is provided
  };

  return {
    hex,
    setHex,
    rgb,
    setRgb,
    hsl,
    setHsl,
    getCssColor,
  };
};

export default useColorFormatter;
