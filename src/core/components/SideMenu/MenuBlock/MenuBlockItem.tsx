import React from 'react';
import {
  ItemRoot,
  ItemText,
} from './MenuBlock.styles';

interface Props {
  text: string;
}

const MenuBlockItem = ({ text }: Props) => (
  <ItemRoot>
    <ItemText>{text}</ItemText>
  </ItemRoot>
);

export default MenuBlockItem;
