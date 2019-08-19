import React from 'react';
import Account from './Account';
import {
  Root,
  HeaderItem,
} from './Header.styles';

const Header = () => (
  <Root>
    <HeaderItem>
      <Account />
    </HeaderItem>
  </Root>
);

export default Header;
