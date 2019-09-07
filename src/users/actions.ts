import { createAction } from 'core/redux/action';
import { UserModel } from 'users/models';

export enum Action {
  UpdateUserS = 'UpdateUserS',
}

export const updateUsers = (users: UserModel[]) => createAction(
  Action.UpdateUserS,
  users,
);
