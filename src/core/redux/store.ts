import { createStore, combineReducers, applyMiddleware  } from 'redux';
import authReducer from 'auth/reducer';
import serverReducer from 'server/reducer';
import usersReducer from 'users/reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const initReduxStore = () => {
  return createStore(
    combineReducers({
      auth: authReducer,
      server: serverReducer,
      users: usersReducer,
    }),
    composeWithDevTools(
      applyMiddleware(thunk),
    ),
  );
};
