import React from 'react';
import styled from 'styled-components';
const Root = styled.tr`
  height: 48px;
  border-bottom: 1px solid #BCBCBC;
`;

interface Props {
  children: any;
}

const Row = ({ children }: Props) => (
  <Root>
    {children}
  </Root>
);

export default Row;
