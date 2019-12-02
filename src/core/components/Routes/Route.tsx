import React from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom';
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

interface Props extends StateProps, RouteProps {
  exact?: boolean;
  path?: string;
  component: React.ComponentType<any>;
}

const RouteLayout = ({ component: Component, token, ...rest }: Props) => {
  return token ? (
    (
      <Route
        {...rest}
        render={(props: RouteComponentProps) => (
          <Container>
            <SideMenu />
            <Content>
              <Header />
              <Body>
                <Component {...props} />
              </Body>
            </Content>
          </Container>
        )}
      />
    )
  ) : (
    <Redirect to="/login" />
  );
};

export default connectStore(RouteLayout);
