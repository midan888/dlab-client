import React from 'react';
import {
  Title,
  Root,
} from './MenuBlock.styles';

interface Props {
  title: string;
  children: any;
}

const MenuBlock = ({ title, children }: Props) => (
  <Root>
    <Title>{title}</Title>
    {children}
  </Root>
);

export default MenuBlock;
