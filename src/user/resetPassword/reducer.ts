import { Action, updateResetPasswordLink } from './actions';

export type ResetPasswordActions = ReturnType<typeof updateResetPasswordLink>;

export interface ResetPasswordState {
  link: string;
}

export const initialState = {
  link: '',
};

export const reducer = (state: ResetPasswordState = initialState, action: ResetPasswordActions): ResetPasswordState => {
  switch (action.type) {
    case Action.UpdateResetPasswordLink:
      return {
        ...state,
        link: action.payload,
      };
    default:
      return state;
  }
};
