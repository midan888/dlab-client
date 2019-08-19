import { createStore, combineReducers, applyMiddleware  } from 'redux';
import authReducer from 'auth/reducer';
import thunk from 'redux-thunk';
// import { AuthState, AuthAction } from 'auth/typings';

// interface AppState {
//   auth: AuthState;
// }
//
// interface AppAction extends AuthAction {}

export const initReduxStore = () => {
  return createStore(
    combineReducers({
      auth: authReducer,
    }),
    applyMiddleware(thunk),
  );
};
