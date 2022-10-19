import { push } from 'connected-react-router';
import * as React from 'react';
import { connect } from 'react-redux';
import { styled } from 'styletron-react';
import State from './State';
import { FlexSpacer } from './style';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  fontSize: '1.5em',
  padding: '0.5rem',
});

const Title = styled('div', {
  display: 'inline-block',
  fontWeight: 500,
  cursor: 'pointer',
  padding: '0.5rem',
});

const Button = styled('div', {
  display: 'inline-block',
  fontWeight: 300,
  height: '100%',
  cursor: 'pointer',
  borderRadius: '0.5rem',
  padding: '0.5rem',
  ':hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  transition: 'background-color 0.2s',
});

class Top extends React.Component<Top.Props> {
  render() {
    const { props } = this;
    return (
      <Container>
        <Title onClick={props.onHomeClick}>Braden McDorman</Title>
        <FlexSpacer />
        <Button onClick={props.onResumeClick}>Resume</Button>
      </Container>
    );
  }
}

namespace Top {
  export interface PublicProps {

  }

  export interface PrivateProps {
    onHomeClick: () => void;
    onResumeClick: () => void;
  }

  export type Props = PublicProps & PrivateProps;
}

export default connect((state: State) => ({}), dispatch => ({
  onHomeClick: () => dispatch(push('/')),
  onResumeClick: () => dispatch(push('/resume')),
}))(Top) as React.ComponentType<Top.PublicProps>;