import * as React from 'react';
import { styled } from 'styletron-react';

export interface FooterProps {

}

type Props = FooterProps;

const Container = styled('div', {
  width: '100%',
  textAlign: 'center',
  marginTop: '1rem',
  fontSize: '0.8em'
});

class Footer extends React.Component<Props> {
  render() {
    return (
      <Container>
        Copyright © 2022 Braden McDorman. All Rights Reserved.
      </Container>
    );
  }
}

export default Footer;