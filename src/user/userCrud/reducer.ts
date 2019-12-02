import { UserModel } from 'user/models';
import { Action, updateUsers, updateActiveUser } from './actions';

export type UserActions = ReturnType<typeof updateUsers> |
  ReturnType<typeof updateActiveUser>;

export interface UserState {
  users: UserModel[];
  activeUser?: UserModel;
}

export const initialState = {
  users: [],
  activeUser: undefined,
};

export const reducer = (state: UserState = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case Action.UpdateUsers:
      return {
        ...state,
        users: action.payload,
      };
    case Action.UpdateActiveUser:
      return {
        ...state,
        activeUser: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
