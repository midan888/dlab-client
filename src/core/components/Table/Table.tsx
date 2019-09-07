import React from 'react';
import styled from 'styled-components';

const Root = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

interface Props {
  children: any;
}

const Table = ({ children }: Props) => (
  <Root>
    {children}
  </Root>
);

export default Table;
