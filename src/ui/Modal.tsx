import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  open: boolean;
}

const ModalContainer = styled.div<{ open: boolean }>`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 16px;
  border: none;
  overflow: hidden auto;

  display: ${({ open }) => (open ? 'block' : 'none')};

  @media (max-width: 600px) {
    padding: 0;
    background-color: white;
  }
`;

const Modal: React.FC<ModalProps> = ({ children, open }) => <ModalContainer open={open}>{children}</ModalContainer>;

export default Modal;
