import 'typeface-roboto';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { loadDict } from 'core/i18n/i18n';
import LoginPage from 'login/components/LoginPage';
import RouteLayout from 'core/components/Routes/Route';
import { initReduxStore } from 'core/redux/store';
import { theme } from 'core/styles/theme';
import { getAuthToken } from 'login/storage';
import { updateToken, updateUser } from 'login/actions';
import { decrypt } from 'login/token';
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
              <Route path="/login" exact={true} component={LoginPage} />
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
