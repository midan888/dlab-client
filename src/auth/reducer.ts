import { Action, updateToken, updateUser } from './actions/auth';
import { User } from './models';

export interface AuthState {
  user: User;
  token: string;
}

export type AuthActions = ReturnType<typeof updateUser> |
  ReturnType<typeof updateToken>;

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
