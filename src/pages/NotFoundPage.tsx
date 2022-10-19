import * as React from 'react';
import { styled } from 'styletron-react';

const Container = styled('div', {
  width: '100%',
  textAlign: 'center',
  padding: '1rem',
});

class NotFound extends React.Component {
  render() {
    return (
      <Container>
        <h1>Not Found</h1>
      </Container>
    );
  }
}

export default NotFound;