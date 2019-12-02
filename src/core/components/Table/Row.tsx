import React from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router';

const Root = styled.tr`
  height: 48px;
  border-bottom: 1px solid #BCBCBC;

  &.link {
    cursor: pointer;
  }

  &:hover {
    background-color: #efefef;
  }
`;

interface Props extends RouteComponentProps {
  children: any;
  to?: string;
}

const Row = ({ children, to, history }: Props) => {
  const handleClick = () => {
    if (to) {
      history.push(to);
    }
  };

  return (
    <Root className={to ? 'link' : ''} onClick={handleClick}>
      {children}
    </Root>
  );
};

export default withRouter(Row);
