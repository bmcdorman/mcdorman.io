interface Vector2 {
  x: number;
  y: number;
}

namespace Vector2 {
  export const ZERO: Readonly<Vector2> = Object.freeze({ x: 0, y: 0 });

  export const create = (x: number, y: number): Vector2 => ({ x, y });

  export const midpoint = (a: Vector2, b: Vector2): Vector2 => ({
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2,
  });

  export const distance = (a: Vector2, b: Vector2): number => {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

export default Vector2;