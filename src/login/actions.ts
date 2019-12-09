import { createAction } from 'core/redux/action';
import { User } from './models';

export enum Action {
  UpdateUser = 'UpdateUser',
  UpdateToken = 'UpdateToken',
}

export const updateUser = (user: User) => createAction(
  Action.UpdateUser,
  user,
);

export const updateToken = (token: string) => createAction(
  Action.UpdateToken,
  token,
);
