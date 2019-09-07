import React from 'react';
import { TextLink } from 'core/components/Routes/Link';
import styled from 'styled-components';
import Typography from 'core/components/Typography';
const Root = styled.td`
  font-size: 14px;
  text-align: center;
`;

interface Props {
  path: string;
}

const CellAction = ({ path } : Props) => (
  <Root>
    <TextLink to={path}>
      <Typography>Edit</Typography>
    </TextLink>
  </Root>
);

export default CellAction;
