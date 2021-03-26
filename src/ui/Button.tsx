import styled from 'styled-components';

interface ButtonProps {
  simple?: boolean;
  fullWidth?: boolean;
  big?: boolean;
}

export default styled.button<ButtonProps>`
  height: ${({ big }) => (big ? '50px' : '38px')};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  background-color: ${({ simple }) => (simple ? 'transparent' : 'black')};
  color: ${({ simple }) => (simple ? 'black' : 'white')};

  border: 2px solid ${({ simple }) => (simple ? 'var(--input-border)' : 'black')};

  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 8%;

  padding: 0 2.5em;
  font-weight: 700;

  white-space: nowrap;
  cursor: pointer;
`;
