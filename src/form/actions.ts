import { createAction } from 'core/redux/action';
import { Action } from './typings';
import { ServerValidationError } from 'core/errors';

export const updateValidationErrors = (errors: ServerValidationError[]) => createAction(
  Action.UpdateValidationErrors,
  errors,
);

export const updateErrorMessage = (message: string) => {
  return createAction(
    Action.UpdateErrorMessage,
    message,
  );
};

export const updateSuccessMessage = (message: string) => {
  return createAction(
    Action.UpdateSuccessMessage,
    message,
  );
};
