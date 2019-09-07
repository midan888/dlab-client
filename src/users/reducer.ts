import { UserModel } from 'users/models';
import { Action, updateUsers } from './actions';

export type UserActions = ReturnType<typeof updateUsers>;

export interface UserState {
  users: UserModel[];
}

export const initialState = {
  users: [],
};

const reducer = (state: UserState = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case Action.UpdateUserS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
