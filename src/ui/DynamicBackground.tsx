import * as React from 'react';

import { styled } from 'styletron-react';
import Triangle from '../math/Triangle';
import Vector2 from '../math/Vector2';
import Vector3 from '../math/Vector3';
import resizeListener, { ResizeListener } from '../util/resizeListener';

const Container = styled('div', {
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1,
});

const InnerContainer = styled('div', {
  width: '100%',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
});

const Svg = styled('svg', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

const BASE_COLOR: Vector3 = { x: 0xcc, y: 0x11, z: 0x11 };

class DynamicBackground extends React.Component<DynamicBackground.Props, DynamicBackground.State> {
  constructor(props: DynamicBackground.Props) {
    super(props);

    const vertices: Vector2[] = [
      // top left triangle
      Vector2.create(0, 0),
      Vector2.create(0, 1),
      Vector2.create(1, 0),

      // bottom right triangle
      Vector2.create(1, 0),
      Vector2.create(0, 1),
      Vector2.create(1, 1),
    ];

    let triangles: Triangle<number>[] = [{
      a: 0,
      b: 1,
      c: 2,
    }, {
      a: 3,
      b: 4,
      c: 5,
    }];

    // subdivide triangles
    const subdivide = (vertices: Vector2[], triangles: Triangle<number>[]): Triangle<number>[] => {
      const ret: Triangle<number>[] = [];
      for (const t of triangles) {
        const vA = Vector2.midpoint(vertices[t.a], vertices[t.b]);
        const vB = Vector2.midpoint(vertices[t.b], vertices[t.c]);
        const vC = Vector2.midpoint(vertices[t.c], vertices[t.a]);

        const a = vertices.length;
        const b = a + 1;
        const c = a + 2;

        vertices.push(vA, vB, vC);

        ret.push({ a: t.a, b: a, c });
        ret.push({ a, b: t.b, c: b });
        ret.push({ a: c, b, c: t.c });
        ret.push({ a, b, c });
      }

      return ret;
    };

    const subdivisions = 4;
    for (let i = 0; i < subdivisions; i++) {
      triangles = subdivide(vertices, triangles);
    }

    // merge vertices within a certain epsilon
    const epsilon = 0.0001;
    const mergedTriangles: Triangle<number>[] = [];
    for (const t of triangles) {
      const a = vertices.findIndex(v => Vector2.distance(v, vertices[t.a]) < epsilon);
      const b = vertices.findIndex(v => Vector2.distance(v, vertices[t.b]) < epsilon);
      const c = vertices.findIndex(v => Vector2.distance(v, vertices[t.c]) < epsilon);

      mergedTriangles.push({ a, b, c });
    }

    // Remove duplicate vertices
    const uniqueVertices: Vector2[] = [];
    const uniqueTriangles: Triangle<number>[] = [];

    for (const t of mergedTriangles) {
      const a = uniqueVertices.findIndex(v => Vector2.distance(v, vertices[t.a]) < epsilon);
      const b = uniqueVertices.findIndex(v => Vector2.distance(v, vertices[t.b]) < epsilon);
      const c = uniqueVertices.findIndex(v => Vector2.distance(v, vertices[t.c]) < epsilon);

      if (a === -1) {
        uniqueVertices.push(vertices[t.a]);
        t.a = uniqueVertices.length - 1;
      } else {
        t.a = a;
      }

      if (b === -1) {
        uniqueVertices.push(vertices[t.b]);
        t.b = uniqueVertices.length - 1;
      } else {
        t.b = b;
      }

      if (c === -1) {
        uniqueVertices.push(vertices[t.c]);
        t.c = uniqueVertices.length - 1;
      } else {
        t.c = c;
      }

      uniqueTriangles.push(t);
    }


    

    const startVertices = uniqueVertices.map(({ x, y }) => ({ x, y, z: Math.random() }));

    

    const jiggle = 1 / (2 ** (subdivisions + 1));

    const currentVertices = [ ...startVertices ];
    
    // "jiggle" the interior vertices
    for (let i = 0; i < currentVertices.length; i++) {
      const { x, y, z } = currentVertices[i];
      if (x === 0 || x === 1 || y === 0 || y === 1) continue;

      // Determine the smallest safe jiggle distance based on subdivision level
      

      currentVertices[i] = Vector3.create(
        x + (Math.random() * jiggle * 2) - jiggle,
        y + (Math.random() * jiggle * 2) - jiggle,
        z
      );
    }

    this.state = {
      startVertices,
      currentVertices,
      velocities: uniqueVertices.map(() => Vector3.create(
        Math.random() * 0.01 + 0.001,
        Math.random() * 0.01 + 0.001,
        Math.random() * 0.01 + 0.001,
      )),
      maxDelta: Vector3.create(jiggle, jiggle, 1),
      triangles: uniqueTriangles,
      
      size: Vector2.ZERO
    };
  }
  
  private listener_ = resizeListener(size => this.setState({ size }));

  componentDidMount() {
    this.tickHandle_ = window.requestAnimationFrame(this.tick_);
  }

  componentWillUnmount() {
    this.listener_.disconnect();
    window.cancelAnimationFrame(this.tickHandle_);
  }

  private ref_: HTMLDivElement;
  private bindContainerRef_ = (ref: HTMLDivElement) => {
    if (this.ref_) this.listener_.unobserve(this.ref_);
    this.ref_ = ref;
    if (this.ref_) this.listener_.observe(this.ref_);
  }

  private tickHandle_: number;
  private lastTick_ = Date.now();
  private tick_ = () => {
    const now = Date.now();
    const dt = (now - this.lastTick_) / 1000;
    this.lastTick_ = now;

    const { startVertices, currentVertices, maxDelta, velocities } = this.state;

    // Move current vertices by velocities, bouncing at maxDelta
    let nextCurrentVertices = [ ...currentVertices ];
    let nextVelocities = [ ...velocities ];

    for (let i = 0; i < currentVertices.length; i++) {
      if (currentVertices[i].x === 0 || currentVertices[i].y === 0) continue;
      if (currentVertices[i].x === 1 || currentVertices[i].y === 1) continue;
      
      const delta = Vector3.multiplyScalar(nextVelocities[i], dt);
      nextCurrentVertices[i] = Vector3.add(currentVertices[i], delta);

      if (Math.abs(startVertices[i].x - nextCurrentVertices[i].x) > maxDelta.x) {
        nextVelocities[i].x *= -1;
      }
      if (Math.abs(startVertices[i].y - nextCurrentVertices[i].y) > maxDelta.y) {
        nextVelocities[i].y *= -1;
      }
      if (Math.abs(startVertices[i].z - nextCurrentVertices[i].z) > maxDelta.z) {
        nextVelocities[i].z *= -1;
      }
    }

    this.setState({
      currentVertices: nextCurrentVertices,
      velocities: nextVelocities,
    });

    this.tickHandle_ = window.requestAnimationFrame(this.tick_);
  };
  
  render() {
    const { state } = this;
    const { currentVertices, triangles, size } = state;
    const { x, y } = size;
    return (
      <Container>
        <InnerContainer ref={this.bindContainerRef_}>
          <Svg viewBox={`0 0 ${x} ${y}`} preserveAspectRatio="none">
            {triangles.map(({ a, b, c }, i) => {
              const size3 = { x, y, z: Math.max(x, y)};

              const vA = Vector3.multiply(currentVertices[a], size3);
              const vB = Vector3.multiply(currentVertices[b], size3);
              const vC = Vector3.multiply(currentVertices[c], size3);
              
              // compute normal
              const vAB = Vector3.subtract(vB, vA);
              const vAC = Vector3.subtract(vC, vA);
              const normal = Vector3.normalize(Vector3.cross(vAB, vAC));

              if (i === 0) console.log(normal);

              const rgb = Vector3.add(BASE_COLOR, Vector3.multiplyScalar(normal, 10));

              return (
                <polygon
                  key={i}
                  points={`${vA.x},${vA.y} ${vB.x},${vB.y} ${vC.x},${vC.y}`}
                  fill={`rgb(${rgb.x}, ${rgb.y}, ${rgb.z})`}
                  stroke={`rgb(${BASE_COLOR.x}, ${BASE_COLOR.y}, ${BASE_COLOR.z})`}
                />
              );
            })}
          </Svg>
        </InnerContainer>
      </Container>
    );
  }
}

namespace DynamicBackground {
  

  export interface Props {
    
  }

  export interface State {
    startVertices: Vector3[];
    currentVertices: Vector3[];
    maxDelta: Vector3;
    velocities: Vector3[];
    triangles: Triangle<number>[];
    size: Vector2;
  }
}

export default DynamicBackground;

