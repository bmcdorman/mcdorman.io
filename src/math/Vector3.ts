import Vector2 from './Vector2';

interface Vector3 {
  x: number;
  y: number;
  z: number;
}

namespace Vector3 {
  export const ZERO: Readonly<Vector3> = Object.freeze({ x: 0, y: 0, z: 0 });

  export const create = (x: number, y: number, z: number): Vector3 => ({ x, y, z });

  export const add = (a: Vector3, b: Vector3): Vector3 => ({
    x: a.x + b.x,
    y: a.y + b.y,
    z: a.z + b.z,
  });

  export const subtract = (a: Vector3, b: Vector3): Vector3 => ({
    x: a.x - b.x,
    y: a.y - b.y,
    z: a.z - b.z,
  });

  export const midpoint = (a: Vector3, b: Vector3): Vector3 => ({
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2,
    z: (a.z + b.z) / 2,
  });

  export const multiplyXY = ({ x, y, z }: Vector3, { x: bx, y: by }: Vector2): Vector3 => ({
    x: x * bx,
    y: y * by,
    z
  });

  export const multiply = (a: Vector3, b: Vector3): Vector3 => ({
    x: a.x * b.x,
    y: a.y * b.y,
    z: a.z * b.z,
  });

  export const multiplyScalar = (a: Vector3, b: number): Vector3 => ({
    x: a.x * b,
    y: a.y * b,
    z: a.z * b,
  });

  export const cross = (a: Vector3, b: Vector3): Vector3 => ({
    x: a.y * b.z - a.z * b.y,
    y: a.z * b.x - a.x * b.z,
    z: a.x * b.y - a.y * b.x,
  });

  export const normalize = (a: Vector3): Vector3 => {
    const length = Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
    return {
      x: a.x / length,
      y: a.y / length,
      z: a.z / length,
    };
  };

  export const dot = (a: Vector3, b: Vector3): number => a.x * b.x + a.y * b.y + a.z * b.z;

  export const distance = (a: Vector3, b: Vector3): number => {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    const dz = a.z - b.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  };
}

export default Vector3;