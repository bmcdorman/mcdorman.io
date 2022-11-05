interface Rgb {
  r: number;
  g: number;
  b: number;
}

namespace Rgb {
  export const RED: Rgb = { r: 1, g: 0, b: 0 };
  export const GREEN: Rgb = { r: 0, g: 1, b: 0 };
  export const BLUE: Rgb = { r: 0, g: 0, b: 1 };
  export const WHITE: Rgb = { r: 1, g: 1, b: 1 };
  export const BLACK: Rgb = { r: 0, g: 0, b: 0 };
  export const YELLOW: Rgb = { r: 1, g: 1, b: 0 };
  export const CYAN: Rgb = { r: 0, g: 1, b: 1 };
  export const MAGENTA: Rgb = { r: 1, g: 0, b: 1 };
  export const GRAY: Rgb = { r: 0.5, g: 0.5, b: 0.5 };

  export const toCss = (rgb: Rgb) => `rgb(${rgb.r * 255}, ${rgb.g * 255}, ${rgb.b * 255})`;
}

export default Rgb;