import * as React from 'react';

import { styled } from 'styletron-react';
import Component from '../Component';
import { StyleProps } from '../style';

export interface OneOfProps extends StyleProps {
  options: OneOf.Option[];

  index: number;
  onChange: (index: number) => void;
}

type Props = OneOfProps;

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
});

const OptionContainer = styled('div', ({ $selected }: { $selected: boolean }) => ({
  cursor: 'pointer',
  backgroundColor: $selected ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
  padding: '0.5rem',
  borderRadius: '0.5rem',
}));

class OneOf extends React.Component<Props> {
  private onOptionClick_ = (index: number) => (event: React.MouseEvent) => {
    this.props.onChange(index);
  };

  render() {
    const { props } = this;
    const { className, style, options } = props;
    return (
      <Container className={className} style={style}>
        {options.map((option, index) => (
          <OptionContainer
            key={index}
            $selected={index === props.index}
            onClick={this.onOptionClick_(index)}
          >
            {Component.render(option.component)}
          </OptionContainer>
        ))}
      </Container>
    );
  }
}

namespace OneOf {
  export interface Option {
    component: Component<any>;
    userData?: unknown | undefined;
  }
}

export default OneOf;