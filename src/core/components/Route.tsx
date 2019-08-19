import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import Header from './Header';
import SideMenu from './SideMenu';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
`;

const RouteLayout = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(matchProps: RouteProps) => (
        <Container>
          <SideMenu />
          <Content>
            <Header />
            <Component {...matchProps} />
          </Content>
        </Container>
      )}
    />
  );
};

export default RouteLayout;
