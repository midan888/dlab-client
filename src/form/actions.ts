import { createAction } from 'core/redux/action';
import { ServerValidationError } from 'core/errors';

export enum Action {
  UpdateValidationErrors = 'UpdateValidationErrors',
  UpdateErrorMessage = 'UpdateErrorMessage',
  UpdateSuccessMessage = 'UpdateSuccessMessage',
}

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
