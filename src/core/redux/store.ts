import { createStore, combineReducers, applyMiddleware  } from 'redux';
import authReducer from 'auth/reducer';
import formReducer from 'form/reducer';
import usersReducer from 'user/userCrud/reducer';
import { reducer as resetPasswordReducer } from 'user/resetPassword/reducer';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AppState } from 'core/typings';

export const initReduxStore = () => {
  return createStore(
    combineReducers<AppState>({
      auth: authReducer,
      form: formReducer,
      users: usersReducer,
      resetPassword: resetPasswordReducer,
    }),
    composeWithDevTools(
      applyMiddleware(thunk),
    ),
  );
};
