import React from 'react';
import logoSrc from './logo.png';
import styled from 'styled-components';

const Image = styled.img``;

const Logo = () => (
  <Image src={logoSrc} />
);

export default Logo;
