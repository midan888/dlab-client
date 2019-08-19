import React from 'react';
import { Root, LogoWrap } from './SideMenu.styles';
import MenuBlock, { MenuBlockItem } from './MenuBlock';

const SideMenu = () => (
  <Root>
    <LogoWrap />
    <MenuBlock title="Content Type">
      <MenuBlockItem text="Users" />
    </MenuBlock>
  </Root>
);

export default SideMenu;
