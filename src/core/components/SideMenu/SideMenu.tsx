import React from 'react';
import { Root, LogoWrap } from './SideMenu.styles';
import MenuBlock from './MenuBlock';
import MenuBlockItem from './MenuBlockItem';
import MenuBlockSubItem from './MenuBlockSubItem';
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
      <MenuBlockItem text="Users" to="/users">
        <MenuBlockSubItem key="1" text="Add user" to="/addUser" />
      </MenuBlockItem>
    </MenuBlock>
  </Root>
);

export default SideMenu;
