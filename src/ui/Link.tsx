import { styled } from 'styletron-react';

export default styled('a', {
  textDecoration: 'inherit',
  padding: '0.2rem',
  borderRadius: '0.2rem',
  ':hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  transition: 'background-color 0.2s',
});