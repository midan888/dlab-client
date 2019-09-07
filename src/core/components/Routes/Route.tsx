import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Header from '../Header';
import SideMenu from '../SideMenu';
import styled from 'styled-components';
import connectStore, { StateProps } from './connectStore';

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  background-color: #F5F5F5;
`;

const Body = styled.div`
  padding: 24px;
`;

interface Props extends StateProps {
  exact: boolean;
  path: string;
  component: React.ComponentType<any>;
}

const RouteLayout = ({ component: Component, token, ...rest }: Props) => {
  return token ? (
    (
      <Route {...rest}>
        <Container>
          <SideMenu />
          <Content>
            <Header />
            <Body>
              <Component />
            </Body>
          </Content>
        </Container>
      </Route>
    )
  ) : (
    <Redirect to="/login" />
  );
};

export default connectStore(RouteLayout);
