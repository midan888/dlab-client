import React from 'react';
import styled from 'styled-components';
const Root = styled.td`
  font-size: 14px;
`;

interface Props {
  children: any;
}

const Cell = ({ children }: Props) => (
  <Root>
    {children}
  </Root>
);

export default Cell;
