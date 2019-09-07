import React from 'react';
import logoSrc from './logo.png';
import styled from 'styled-components';

const Image = styled.img``;

interface Props {
  size?: 'large' | 'small';
}

const Logo = ({ size }: Props) => {
  const style = {
    width: size === 'small' ? '160px' : '',
  };

  return (
    <Image src={logoSrc} style={style} />
  );
};

export default Logo;
