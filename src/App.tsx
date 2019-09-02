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
            </Switch>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
