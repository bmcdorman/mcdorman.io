import * as React from 'react';
import { styled } from 'styletron-react';

export interface StyleProps {
  className?: string;
  style?: React.CSSProperties;
}

export const FlexSpacer = styled('div', {
  flex: '1 1 auto',
});