import * as React from 'react';

import { styled } from 'styletron-react';
import { StyleProps } from '../style';

const Container = styled('div', {
});

class Select extends React.Component<Select.Props> {
  render() {
    const { props } = this;
    const { className, style } = props;
    return (
      <Container>
      </Container>
    );
  }
}

namespace Select {
  export interface Props extends StyleProps {
    options: Select.Option[];
  }

  export interface Option {
    text: string;
    userData: unknown;
  }
}

export default Select;