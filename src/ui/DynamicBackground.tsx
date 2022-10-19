import * as React from 'react';

import { styled } from 'styletron-react';

const Container = styled('div', {
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'red',
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

class DynamicBackground extends React.Component {
  render() {
    return (
      <Container>
        
      </Container>
    );
  }
}

export default DynamicBackground;

