import React, { ChangeEvent } from 'react';
import {
  Root,
  Input,
  Label,
} from './Checkbox.styles';

interface Props {
  label: string;
  name?: string;
  checked?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ label, name, checked, onChange }: Props) => (
  <Root>
    <Input type="checkbox" onChange={onChange} checked={checked} name={name} />
    <Label>{label}</Label>
  </Root>
);

export default Checkbox;
