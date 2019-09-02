import { User } from './models';

export interface AuthState {
  user: User;
  token: string;
}

export interface ServerState {
  validationErrors: {[key:string]: string};
}
