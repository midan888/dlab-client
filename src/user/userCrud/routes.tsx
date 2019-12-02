import React from 'react';
import { Switch } from 'react-router-dom';
import RouteLayout from 'core/components/Routes/Route';
import UsersListPage from './components/UsersListPage';
import CreateUserPage from './components/CreateUserPage';
import EditUserPage from './components/EditUserPage';

export const UserCrudRoutes = () => (
  <Switch>
    <RouteLayout path="/users" exact={true} component={UsersListPage} />
    <RouteLayout path="/users/create" exact={true} component={CreateUserPage} />
    <RouteLayout path="/users/:id" component={EditUserPage} />
  </Switch>
);
