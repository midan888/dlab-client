import React, { useCallback } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
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
`;

interface Props extends StateProps {
  exact: boolean;
  path: string;
  component: React.ComponentType<any>;
}

const RouteLayout = ({ component: Component, token, ...rest }: Props) => {
  const renderRoute = useCallback((props: RouteProps) => {
    return (
      <Container>
        <SideMenu />
        <Content>
          <Header />
          <Component {...props} />
        </Content>
      </Container>
    );
  }, []);

  return token ? (
    (
      <Route
        {...rest}
        render={renderRoute}
      />
    )
  ) : (
    <Redirect to="/login" />
  );
};

export default connectStore(RouteLayout);
