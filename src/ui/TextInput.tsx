import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

import InputLabel from './InputLabel';
import InputError from './InputError';

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const TextInputContainer = styled.div`
  input {
    width: 100%;
    background: node;
    padding: 0.5rem;
    border-radius: 0px;
    border: 2px solid var(--input-border);
  }
`;

const TextInput = ({ error, label, name, ...props }: TextInputProps) => (
  <TextInputContainer>
    {label ? <InputLabel htmlFor={name}>{label}</InputLabel> : null}
    <input id={name} {...props} />
    {error ? <InputError>{error}</InputError> : null}
  </TextInputContainer>
);

export default TextInput;
