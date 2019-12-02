import { ThunkAction } from 'core/typings';
import { sendResetLink, resetPassword } from './api';
import { updateResetPasswordLink } from './actions';
import { processServerError, processSuccessfulRequest } from 'form/thunks';
import { ValidationError } from 'core/errors';

export const requestResetPasswordToken = (email: string): ThunkAction<Promise<void>> => async (dispatch) => {
  try {
    const { link } = await sendResetLink({
      email,
    });

    dispatch(updateResetPasswordLink(link));
  } catch (e) {
    dispatch(processServerError(e));
  }
};

export interface RequestResetPasswordParams {
  password: string;
  passwordConfirm: string;
  token: string;
}

export const requestResetPassword = ({
  password,
  passwordConfirm,
  token,
}: RequestResetPasswordParams): ThunkAction<Promise<void>> => async (dispatch) => {
  try {
    if (password !== passwordConfirm) {
      throw new ValidationError('passwordConfirm', 'Password do not match');
    }

    await resetPassword({
      password,
      passwordConfirm,
      token,
    });
    dispatch(processSuccessfulRequest('Password change successfully'));
  } catch (e) {
    dispatch(processServerError(e));
  }
};
