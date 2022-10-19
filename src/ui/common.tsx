import { styled } from 'styletron-react';

export const ItemContainer = styled('div', ({ $clickable }: { $clickable: boolean }) => ({
  ':hover': $clickable ? {
    backgroundColor: `rgba(0, 0, 0, 0.1)`,
  } : {},
  cursor: $clickable ? 'pointer' : 'default',
  padding: '1rem',
  marginLeft: '-1rem',
  marginRight: '-1rem',
  ':not(:last-child)': {
    borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
  },
  transition: 'background-color 0.2s',
}));

export const ItemTop = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '1.2em',
  alignItems: 'center',
  ':not(:last-child)': {
    marginBottom: '1rem',
  }
});