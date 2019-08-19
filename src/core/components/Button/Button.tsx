import React from 'react';
import {
  Root,
} from './Button.styles';

interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }:Props) => (
  <Root onClick={onClick}>{children}</Root>
);

export default Button;
