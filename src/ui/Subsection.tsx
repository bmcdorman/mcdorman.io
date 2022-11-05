import * as React from 'react';
import { styled } from 'styletron-react';
import Component from '../Component';
import { FlexSpacer, StyleProps } from '../style';

export interface SubsectionProps<P extends {} = any> extends StyleProps {
  title: string;
  children: React.ReactNode;
  right?: Component<P>;
}

type Props<P extends {} = any> = SubsectionProps<P>;

const TitleContainer = styled('div', {
  fontSize: '1rem',
  fontWeight: 500,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: '0.5rem',
});

const Title = styled('div', {

});

const Container = styled('div', {
  width: '100%',
  ':first-child': {
    marginTop: 0,
  },
  ':not(:last-child)': {
    paddingBottom: '1rem',
    borderBottom: '1px solid #ccc',
    marginBottom: '1rem',
  }
});

const ContentContainer = styled('div', {
});

class Subsection<P extends {} = any> extends React.Component<Props<P>> {
  render() {
    const { props } = this;
    const { title, children, className, style, right } = props;
    return (
      <Container className={className} style={style}>
        <TitleContainer>
          <Title>{title}</Title>
          <FlexSpacer />
          {right && Component.render<P>(right)}
        </TitleContainer>
        <ContentContainer>
          {children}
        </ContentContainer>
      </Container>
    )
  }
}

export default Subsection;