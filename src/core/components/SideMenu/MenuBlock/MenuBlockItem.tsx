import React from 'react';
import { LinkWrap } from 'core/components/Routes/Link';
import {
  ItemRoot,
  ItemText,
} from './MenuBlock.styles';

interface Props {
  text: string;
  to: string;
}

const MenuBlockItem = ({ text, to }: Props) => (
  <LinkWrap to={to}>
    <ItemRoot>
      <ItemText>{text}</ItemText>
    </ItemRoot>
  </LinkWrap>
);

export default MenuBlockItem;
