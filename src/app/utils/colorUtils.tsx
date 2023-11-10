import chroma from "chroma-js";

export const toHsl = (color: string): [number, number, number] | null => {
  try {
    return chroma(color).hsl();
  } catch (e) {
    console.error("Invalid color format provided:", e);
    return null;
  }
};

export const calculateHueRotation = (
  initialHsl: [number, number, number],
  desiredHsl: [number, number, number],
): number => {
  const initialHue = initialHsl[0];
  const desiredHue = desiredHsl[0];
  let hueRotation = desiredHue - initialHue;

  hueRotation = ((hueRotation + 180) % 360) - 180;

  return hueRotation;
};
