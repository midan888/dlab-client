import { User } from './models';
import {
  updateUser,
} from './actions/auth';

export type UpdateUserAction = ReturnType<typeof updateUser>;
export type AuthAction = UpdateUserAction;

export enum Action {
  UpdateUser = 'UpdateUser',
}

export interface AuthState {
  user: User;
}
