import React from 'react';
import { LinkWrap } from 'core/components/Routes/Link';
import {
  SubItemRoot,
} from './MenuBlockSubItem.styles';

interface Props {
  text: string;
  to: string;
}

const MenuBlockSubItem = ({ to, text }: Props) => (
  <LinkWrap to={to}>
    <SubItemRoot>{text}</SubItemRoot>
  </LinkWrap>
);

export default MenuBlockSubItem;
