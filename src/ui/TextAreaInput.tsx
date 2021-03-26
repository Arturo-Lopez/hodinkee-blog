import { TextareaHTMLAttributes } from 'react';
import styled from 'styled-components';

import InputLabel from './InputLabel';
import InputError from './InputError';

type TextAreaInputProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
};

const TextAreaInputContainer = styled.div`
  textarea {
    background: none;
    padding: 0.5rem;
    border-radius: 0px;
    border: 2px solid var(--input-border);
    resize: none;
    width: 100% !important;
    height: 150px !important;
    line-height: 1.5em;
  }
`;

const TextAreaInput = ({ error, label, ...props }: TextAreaInputProps) => (
  <TextAreaInputContainer>
    {label ? <InputLabel>{label}</InputLabel> : null}
    <textarea {...props} />
    {error ? <InputError>{error}</InputError> : null}
  </TextAreaInputContainer>
);

export default TextAreaInput;
