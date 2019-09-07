import React from 'react';
import styled from 'styled-components';
import { Link as LinkVendor, LinkProps } from 'react-router-dom';

const LinkWrapStyled = styled(LinkVendor)`
  text-decoration: none;
  color: inherit;
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
