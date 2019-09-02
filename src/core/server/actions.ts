import { createAction } from 'core/redux/action';
import { Action } from './typings';

export const updateValidationErrors = (errors: any) => createAction(
  Action.UpdateValidationErrors,
  errors,
);

export const updateServerError = (serverError: string) => {
  return createAction(
    Action.UpdateServerError,
    serverError,
  );
};
