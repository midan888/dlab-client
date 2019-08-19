import 'typeface-roboto';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { loadDict } from 'core/i18n/i18n';
import LoginPage from 'auth/components/LoginPage';
import Home from './Home';
import RouteLayout from 'core/components/Route';
import { initReduxStore } from 'core/redux/store';

loadDict();

const Container = styled.div`
  margin: 0;
  display: flex;
  font-family: Roboto, Helvetica, Arial, sans-serif;
`;

const App = () => (
  <Provider store={initReduxStore()}>
    <BrowserRouter>
      <Container>
        <Switch>
          <RouteLayout path="/" exact={true} component={Home}/>
          <Route path="/login" exact={true} component={LoginPage} />
        </Switch>
      </Container>
    </BrowserRouter>
  </Provider>
);

export default App;
