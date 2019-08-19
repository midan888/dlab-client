import React from 'react';
import {
  Root,
} from './Typography.styles';

interface Props {
  children: string;
}

const Typography = ({ children, ...other }: Props) => (
  <Root {...other}>
    {children}
  </Root>
);

export default Typography;
