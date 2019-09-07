import React from 'react';
import styled from 'styled-components';

const Root = styled.th`
  vertical-align: middle;
  text-align: left;
  font-weight: normal;
  color: #878787;
  font-size: 12px;
`;

// const Inner = styled.div`
//   color: #BCBCBC;
//   font-size: 12px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
// `;

interface Props {
  children: any;
}

const CellHead = ({ children }: Props) => (
  <Root>
    {children}
  </Root>
);

export default CellHead;
