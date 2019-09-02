import { AuthState, AuthActions } from './typings';
import { Action } from './actions/auth';

export const initialState = {
  user: {
    fullName: '',
    email: '',
    password: '',
    id: '',
  },
  token: '',
};

const reducer = (state: AuthState = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case Action.UpdateUser:
      return {
        ...state,
        user: action.payload,
      };
    case Action.UpdateToken:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
