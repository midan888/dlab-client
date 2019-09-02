import { createStore, combineReducers, applyMiddleware  } from 'redux';
import authReducer from 'auth/reducer';
import serverReducer from 'core/server/reducer';
import thunk from 'redux-thunk';

export const initReduxStore = () => {
  return createStore(
    combineReducers({
      auth: authReducer,
      server: serverReducer,
    }),
    applyMiddleware(thunk),
  );
};
