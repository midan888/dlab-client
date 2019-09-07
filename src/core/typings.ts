import { ThunkAction as ThunkActionVendor, ThunkDispatch as ThunkDispatchVendor } from 'redux-thunk';
import { ServerState, ServerActions } from 'server/typings';
import { AuthState, AuthActions } from 'auth/reducer';
import { UserState, UserActions } from 'users/reducer';

export type AppActions = UserActions | AuthActions | ServerActions;

export interface AppState {
  server: ServerState;
  auth: AuthState;
  users: UserState;
}

export type ThunkDispatch = ThunkDispatchVendor<AppState, undefined, AppActions>;

export type ThunkAction<R> = ThunkActionVendor<R, AppState, undefined, AppActions>;
