import 'typeface-roboto';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { loadDict } from 'core/i18n/i18n';
import LoginPage from 'auth/components/LoginPage';
import Home from './Home';
import RouteLayout from 'core/components/Route';
import { initReduxStore } from 'core/redux/store';
import { theme } from 'core/styles/theme';

loadDict();

const Container = styled.div`
  margin: 0;
  display: flex;
  font-family: Roboto, Helvetica, Arial, sans-serif;
`;

const App = () => (
  <Provider store={initReduxStore()}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Container>
          <Switch>
            <RouteLayout path="/" exact={true} component={Home}/>
            <Route path="/login" exact={true} component={LoginPage} />
          </Switch>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

export default App;
