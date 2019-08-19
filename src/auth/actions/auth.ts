import { createAction } from 'core/redux/action';
import { Action } from '../typings';
import { User } from '../models';

export const updateUser = (user: User) => createAction(
  Action.UpdateUser,
  user,
);
