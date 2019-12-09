import React from 'react';
import LoginForm from './LoginForm';
import {
  Root,
} from './LoginPage.styles';
import { Redirect, RouteComponentProps } from 'react-router';
import connectStore, { StateProps } from './connectStore';

interface Props extends RouteComponentProps, StateProps {}

const LoginPage = ({ token }: Props) => {
  return token ? (
    <Redirect to="/" />
  ) : (
    <Root>
      <LoginForm />
    </Root>
  );
};

export default connectStore(LoginPage);
