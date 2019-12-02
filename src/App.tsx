import 'typeface-roboto';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { loadDict } from 'core/i18n/i18n';
import LoginPage from 'auth/components/LoginPage';
import Home from './Home';
import RouteLayout from 'core/components/Routes/Route';
import { initReduxStore } from 'core/redux/store';
import { theme } from 'core/styles/theme';
import { getAuthToken } from 'auth/storage';
import { updateToken, updateUser } from 'auth/actions/auth';
import { decrypt } from 'auth/token';
import Profile from 'auth/components/Profile';
import NotFound from 'core/components/Routes/NotFound';
import { UserCrudRoutes } from 'user/userCrud';
import { ResetPasswordRoutes } from 'user/resetPassword';

loadDict();

const Container = styled.div`
  margin: 0;
  display: flex;
  font-family: Roboto, Helvetica, Arial, sans-serif;
`;

const bootstrap = (dispatch: Function) => {
  const token = getAuthToken();
  dispatch(updateToken(token));
  if (token) {
    dispatch(updateUser(decrypt(token)));
  }
};

const App = () => {
  const store = initReduxStore();

  bootstrap(store.dispatch);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Container>
            <Switch>
              <RouteLayout path="/" exact={true} component={Home} />
              <Route path="/login" exact={true} component={LoginPage} />
              <RouteLayout path="/profile" exact={true} component={Profile} />
              <Route path="/users">
                <UserCrudRoutes />
              </Route>
              <Route path="/reset">
                <ResetPasswordRoutes />
              </Route>
              <RouteLayout component={NotFound} />
            </Switch>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
