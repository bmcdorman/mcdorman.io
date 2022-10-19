import * as React from 'react';
import { styled } from 'styletron-react';
import Component from '../Component';
import { FlexSpacer, StyleProps } from '../style';

export interface SectionProps<P extends {} = any> extends StyleProps {
  title: string;
  children: React.ReactNode;
  right?: Component<P>;
}

type Props<P extends {} = any> = SectionProps<P>;

const TitleContainer = styled('div', {
  fontSize: '1.2em',
  fontWeight: 500,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: '0.5em',
});

const Title = styled('div', {

});

const Container = styled('div', {
  width: '100%',
  padding: '1rem',
  ':first-child': {
    marginTop: 0,
  },
  ':not(:last-child)': {
    borderBottom: '1px solid #ccc',
  }
});

class Section<P extends {} = any> extends React.Component<Props<P>> {
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
        {children}
      </Container>
    )
  }
}

export default Section;