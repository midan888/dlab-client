import { ThunkAction } from 'core/typings';
import { HTTPError } from 'ky';
import {
  updateErrorMessage, updateSuccessMessage,
  updateValidationErrors,
} from 'form/actions';
import { ValidationError } from 'core/errors';

export const processServerError = (
  e: HTTPError | string | ValidationError,
): ThunkAction<void> => async (dispatch) => {
  let status = 500;
  let message = 'Server error! Contact support';
  let errors;

  if (e instanceof HTTPError) {
    const body = await e.response.json();
    status = e.response.status;
    message = body.message;
    errors = body.errors;
  } else if (e instanceof ValidationError) {
    status = 422;
    errors = [{
      msg: e.msg,
      param: e.param,
    }];
  }

  switch (status) {
    case 422:
      dispatch(updateValidationErrors(errors));
      dispatch(updateErrorMessage('Validation errors!'));
      break;
    default:
      dispatch(updateErrorMessage(message));
      break;
  }
};

export const processSuccessfulRequest = (message: string): ThunkAction<void> => async (dispatch) => {
  dispatch(updateSuccessMessage(message));
  dispatch(updateErrorMessage(''));
  dispatch(updateValidationErrors([]));
};
