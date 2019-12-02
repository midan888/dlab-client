import { createAction } from 'core/redux/action';
import { UserModel } from 'user/models';

export enum Action {
  UpdateUsers = 'UpdateUsers',
  UpdateActiveUser = 'UpdateActiveUser',
  UpdateResetPasswordLink = 'UpdateResetPasswordLink',
}

export const updateUsers = (users: UserModel[]) => createAction(
  Action.UpdateUsers,
  users,
);

export const updateActiveUser = (users: UserModel) => createAction(
  Action.UpdateActiveUser,
  users,
);
