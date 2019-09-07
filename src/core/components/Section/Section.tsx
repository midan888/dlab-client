import React, { ReactChildren, ReactChild } from 'react';
import styled from 'styled-components';
import Typography from 'core/components/Typography';

const Root = styled.div`
  padding: 24px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Title = styled(Typography)`
  font-size: 20px;
  padding-bottom: 16px;
`;

interface Props {
  children: ReactChildren | ReactChild;
  title: string;
}

const Section = ({ children, title }: Props) => (
  <Root>
    <Title>{title}</Title>
    {children}
  </Root>
);

export default Section;
