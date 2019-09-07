import React from 'react';
import styled from 'styled-components';

const Root = styled.tbody``;

interface Props {
  children: any;
}

const TableBody = ({ children }: Props) => (
  <Root>
    {children}
  </Root>
);

export default TableBody;
