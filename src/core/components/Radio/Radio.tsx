import React, {ChangeEventHandler} from 'react';
import {
  Root,
  Input,
  Label,
} from './Radio.styles';

interface Props {
  value: string | number;
  name?: string;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
}

export const Radio = ({
  value,
  name,
  label,
  onChange,
  checked,
}: Props) => (
  <Root>
    <Input
      value={value}
      name={name}
      type="radio"
      onChange={onChange}
      checked={checked}
    />
    <Label htmlFor={value.toString()}>{label}</Label>
  </Root>
);
