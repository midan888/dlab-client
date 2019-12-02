import { createAction } from 'core/redux/action';

export enum Action {
  UpdateResetPasswordLink = 'UpdateResetPasswordLink',
}

export const updateResetPasswordLink = (link: string) => createAction(
  Action.UpdateResetPasswordLink,
  link,
);
