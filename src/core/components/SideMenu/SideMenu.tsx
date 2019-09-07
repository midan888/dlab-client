import React from 'react';
import { Root, LogoWrap } from './SideMenu.styles';
import MenuBlock, { MenuBlockItem } from './MenuBlock';
import Logo from 'core/components/Logo';
import { LinkWrap } from 'core/components/Routes/Link';

const SideMenu = () => (
  <Root>
    <LinkWrap to="/">
      <LogoWrap>
        <Logo size="small" />
      </LogoWrap>
    </LinkWrap>
    <MenuBlock title="Content Type">
      <MenuBlockItem text="Users" to="/users" />
    </MenuBlock>
  </Root>
);

export default SideMenu;
