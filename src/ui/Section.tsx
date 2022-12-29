import * as React from 'react';
import { styled } from 'styletron-react';
import Component from '../Component';
import { FlexSpacer, StyleProps } from '../style';

export interface SectionProps<P extends {} = any> extends StyleProps {
  title: string;
  children: React.ReactNode;
  right?: Component<P>;
  inline?: boolean;
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

const Container = styled('div', ({ $inline }: { $inline: boolean; }) => ({
  width: '100%',
  padding: !$inline ? '1rem' : 0,
  ':first-child': {
    marginTop: 0,
  },
  ':not(:last-child)': {
    borderBottom: '1px solid #ccc',
  }
}));

class Section<P extends {} = any> extends React.Component<Props<P>> {
  render() {
    const { props } = this;
    
    const {
      title,
      children,
      className,
      style,
      right,
      inline
    } = props;
    
    return (
      <Container
        className={className}
        style={style}
        $inline={inline || false}
      >
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