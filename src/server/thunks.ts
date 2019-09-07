import { ThunkAction } from 'core/typings';
import { HTTPError } from 'ky';
import {
  updateServerError,
  updateValidationErrors,
} from 'server/actions';

export const processServerError = (e: HTTPError | string): ThunkAction<void> => async (dispatch) => {
  let status = 500;
  let message = 'Server error! Contact support';
  let errors;

  if (e instanceof HTTPError) {
    const body = await e.response.json();
    status = e.response.status;
    message = body.message;
    errors = body.errors;
  }

  switch (status) {
    case 422:
      dispatch(updateValidationErrors(errors));
      break;
    default:
      dispatch(updateServerError(message));
      break;
  }
};
