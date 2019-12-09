import { ThunkAction as ThunkActionVendor, ThunkDispatch as ThunkDispatchVendor } from 'redux-thunk';
import { FormActions, FormState } from 'form/typings';
import { LoginState, LoginActions } from 'login/reducer';
import { UserState, UserActions } from 'user/userCrud';
import { ResetPasswordActions, ResetPasswordState } from 'user/resetPassword/reducer';

export type AppActions =
  UserActions |
  LoginActions |
  FormActions |
  ResetPasswordActions;

export interface AppState {
  form: FormState;
  login: LoginState;
  users: UserState;
  resetPassword: ResetPasswordState;
}

export type ThunkDispatch = ThunkDispatchVendor<AppState, undefined, AppActions>;

export type ThunkAction<R> = ThunkActionVendor<R, AppState, undefined, AppActions>;
