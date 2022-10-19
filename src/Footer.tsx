import * as React from 'react';
import { styled } from 'styletron-react';

export interface FooterProps {

}

type Props = FooterProps;

const Container = styled('div', {
  width: '100%',
  textAlign: 'center',
  margin: '1rem',
  fontSize: '0.8em',

  color: 'white'
});

class Footer extends React.Component<Props> {
  render() {
    return (
      <Container>
        Written in React and TypeScript. <a href="https://github.com/bmcdorman/mcdorman.io" target="_blank">Source Code</a>.
        Copyright © 2022 Braden McDorman. All Rights Reserved.
      </Container>
    );
  }
}

export default Footer;