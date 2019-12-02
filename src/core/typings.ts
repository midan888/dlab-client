import { ThunkAction as ThunkActionVendor, ThunkDispatch as ThunkDispatchVendor } from 'redux-thunk';
import { FormActions, FormState } from 'form/typings';
import { AuthState, AuthActions } from 'auth/reducer';
import { UserState, UserActions } from 'user/userCrud';
import { ResetPasswordActions, ResetPasswordState } from 'user/resetPassword/reducer';

export type AppActions =
  UserActions |
  AuthActions |
  FormActions |
  ResetPasswordActions;

export interface AppState {
  form: FormState;
  auth: AuthState;
  users: UserState;
  resetPassword: ResetPasswordState;
}

export type ThunkDispatch = ThunkDispatchVendor<AppState, undefined, AppActions>;

export type ThunkAction<R> = ThunkActionVendor<R, AppState, undefined, AppActions>;
