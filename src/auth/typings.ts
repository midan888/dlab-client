import { User } from './models';
import { updateToken, updateUser } from './actions/auth';

export interface AuthState {
  user: User;
  token: string;
}

export type AuthActions = ReturnType<typeof updateUser> |
  ReturnType<typeof updateToken>;

export interface ServerState {
  validationErrors: {[key:string]: string};
}
