import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import { Image } from 'react-feather';

import InputLabel from './InputLabel';
import InputError from './InputError';

interface FileInputProps {
  value: string;
  onChange: (uri: string) => void;
  label?: string;
  error?: string;
}

const FileInputContainer = styled.div`
  .file-input-wrapper {
    border: 2px solid var(--input-border);
    text-align: center;
    font-size: 14px;
    color: var(--text-dimmed);

    .content {
      margin: 1rem 0;
    }

    img {
      height: 100px;
      object-fit: cover;
      padding-bottom: 1rem;
    }
  }
`;

const FileInput: React.FC<FileInputProps> = ({ value, onChange, error, label }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      onChange(reader.result as string);
    };
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png',
  });

  return (
    <FileInputContainer>
      {label ? <InputLabel>{label}</InputLabel> : null}
      <div className="file-input-wrapper" {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="content">
          {!value ? (
            <>
              <Image size={32} />
              {isDragActive ? (
                <p>Drop the image here ...</p>
              ) : (
                <p>Drag &apos;n&apos; drop some image here, or click to select the image</p>
              )}
            </>
          ) : null}
        </div>
        {value ? <img src={value} alt="input-preview" /> : null}
      </div>
      {error ? <InputError>{error}</InputError> : null}
    </FileInputContainer>
  );
};

export default FileInput;
