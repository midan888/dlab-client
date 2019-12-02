import React from 'react';
import { Switch } from 'react-router-dom';
import RouteLayout from 'core/components/Routes/Route';
import ResetPasswordPage from './components/ResetPasswordPage';
import NewPasswordPage from './components/NewPasswordPage';

export const ResetPasswordRoutes = () => (
  <Switch>
    <RouteLayout path="/reset/password" exact={true} component={ResetPasswordPage} />
    <RouteLayout path="/reset/newPassword/:token" component={NewPasswordPage} />
  </Switch>
);
