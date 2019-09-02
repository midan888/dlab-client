import { ThunkResult } from 'core/typings';
import { HTTPError } from 'ky';
import {
  updateServerError,
  updateValidationErrors,
} from 'core/server/actions';

export const processServerError = (e: HTTPError): ThunkResult<void> => async (dispatch) => {
  const { status } = e.response;
  const body = await e.response.json();

  switch (status) {
    case 422:
      dispatch(updateValidationErrors(body.errors));
      break;
    default:
      dispatch(updateServerError(body.message));
      break;
  }
};
