import React from 'react';
import {
  Root,
  Input,
  Label,
  ErrorMessage,
} from './TextField.styles';

interface Props {
  label: string;
  value: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const TextField = ({
  value,
  onChange,
  placeholder,
  label,
  error,
  errorMessage,
  type,
}: Props) => (
  <Root className={errorMessage || error ? 'error' : ''}>
    <Input
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      type={type}
    />
    <Label>{label}</Label>
    <ErrorMessage>{errorMessage || ''}</ErrorMessage>
  </Root>
);

export default TextField;
