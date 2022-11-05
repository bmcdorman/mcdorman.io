import Rgb from './Rgb';

interface Rgba {
  rgb: Rgb;
  a: number;
}

namespace Rgba {
  export const WHITE: Rgba = { rgb: Rgb.WHITE, a: 1 };
  export const BLACK: Rgba = { rgb: Rgb.BLACK, a: 1 };

  export const toCss = (rgba: Rgba) => `rgba(${rgba.rgb.r * 255}, ${rgba.rgb.g * 255}, ${rgba.rgb.b * 255}, ${rgba.a})`;
}

export default Rgba;