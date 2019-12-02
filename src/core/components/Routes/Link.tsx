import React from 'react';
import styled from 'styled-components';
import { Link as LinkVendor, LinkProps } from 'react-router-dom';

const LinkWrapStyled = styled(LinkVendor)`
  text-decoration: none;
  color: inherit;
`;

const ButtonLinkStyled = styled(LinkVendor)`
  height: 32px;
  background-color: ${({ theme }) => theme.accentColor}
  border-radius: 4px;
  font-size: 14px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 300;
  outline: none;
  text-decoration: none;
  padding: 4px 8px;
`;

export const LinkWrap = (props: LinkProps) => (
  <LinkWrapStyled {...props} />
);

const TextLinkStyled = styled(LinkVendor)`
  color: ${({ theme }) => theme.accentColor };
`;

export const TextLink = (props: LinkProps) => (
  <TextLinkStyled {...props} />
);

export const ButtonLink = (props: LinkProps) => (
  <ButtonLinkStyled {...props}/>
);
