import { styled } from 'styletron-react';
import Rgba from '../math/Rgba';

export default styled('span', ({ $backgroundColor }: { $backgroundColor: Rgba }) => ({
  padding: '0.5rem',
  borderRadius: '1rem',
  margin: '0.1rem',
  backgroundColor: Rgba.toCss($backgroundColor),
  color: 'white',
}));