import React from 'react';
import {
  Root,
  ControlsWrap,
  Header,
  Title,
} from './Section.styles';

interface Props {
  children: React.ReactNode;
  title: string;
  controls?: React.ReactNode;
}

const Section = ({ children, title, controls }: Props) => (
  <Root>
    <Header>
      <Title>{title}</Title>
      <ControlsWrap>
        {controls}
      </ControlsWrap>
    </Header>
    {children}
  </Root>
);

export default Section;
