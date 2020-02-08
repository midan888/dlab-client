import React from 'react';
import {
  Root,
  Input,
  Label,
} from './Radio.styles';

interface Props {
  value: string;
  name: string;
  label: string;
  onChange: any;
}

export const Radio = ({
  value,
  name,
  label,
}: Props) => (
  <Root>
    <Label htmlFor={value}>{label}</Label>
    <Input value={value} name={name} type="radio" />
  </Root>
);
