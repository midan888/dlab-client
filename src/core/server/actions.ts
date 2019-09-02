import { createAction } from 'core/redux/action';
import { Action } from './typings';

export type ServerActions = ReturnType<typeof updateValidationErrors> |
  ReturnType<typeof updateServerError>;

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
