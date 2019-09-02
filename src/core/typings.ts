import { ThunkAction } from 'redux-thunk';
import { ServerState } from 'core/server/typings';
import { AuthState } from 'auth/typings';

export interface AppState {
  server: ServerState;
  auth: AuthState;
}

export type ThunkResult<R> = ThunkAction<R, AppState, any, any>;
