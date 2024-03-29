import { push } from 'connected-react-router';
import * as React from 'react';
import { connect } from 'react-redux';
import { styled } from 'styletron-react';
import State from './State';
import { FlexSpacer } from './style';

import { FontAwesomeIcon as Icon, FontAwesomeIconProps as IconProps } from '@fortawesome/react-fontawesome';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  fontSize: '1.5em',
  color: 'white',
  alignItems: 'center',
  '@media (max-width: 900px)': {
    fontSize: '1.1em',
  }
});

const Title = styled('div', {
  display: 'inline-block',
  fontWeight: 500,
  cursor: 'pointer',
});

const Button = styled('div', {
  display: 'inline-block',
  fontWeight: 300,
  height: '100%',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
});

const Sep = styled('div', {
  display: 'inline-block',
  borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
  height: '1.5rem',
  margin: '1rem',
});

const UnderConstructionNotice = styled('div', {
  display: 'inline-block',
  fontSize: '0.8em',
});

class Top extends React.Component<Top.Props> {
  render() {
    const { props } = this;
    return (
      <Container>
        <Title onClick={props.onHomeClick}>Braden McDorman</Title>
        <Sep />
        <Button onClick={props.onResumeClick}>Resume</Button>
        <FlexSpacer />
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