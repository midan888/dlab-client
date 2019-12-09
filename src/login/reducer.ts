import { Action, updateToken, updateUser } from './actions';
import { User } from './models';

export interface LoginState {
  user: User;
  token: string;
}

export type LoginActions = ReturnType<typeof updateUser> |
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

const reducer = (state: LoginState = initialState, action: LoginActions): LoginState => {
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
