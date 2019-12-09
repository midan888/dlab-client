import React from 'react';
import { LinkWrap } from 'core/components/Routes/Link';
import {
  ItemRoot,
  ItemText,
} from './MenuBlockItem.styles';

interface Props {
  text: string;
  to: string;
  children: React.ReactNode;
}

const MenuBlockItem = ({ text, to }: Props) => {
  return (
    <ItemRoot>
      <LinkWrap to={to}>
        <ItemText>{text}</ItemText>
      </LinkWrap>
    </ItemRoot>
  );
};

export default MenuBlockItem;
