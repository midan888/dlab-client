import React from 'react';
import {
  Root,
  Input,
  Label,
} from './TextField.styles';

interface Props {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({
  value,
  onChange,
  placeholder,
  label,
}: Props) => (
  <Root>
    <Input
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
    <Label>{label}</Label>
  </Root>
);

export default TextField;
