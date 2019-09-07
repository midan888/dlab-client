import { ServerValidationError } from 'core/errors';
import { updateServerError, updateValidationErrors } from 'server/actions';

export interface ServerState {
  validationErrors: ServerValidationError[];
  serverError: string;
}

export enum Action {
  UpdateValidationErrors = 'UpdateValidationErrors',
  UpdateServerError = 'UpdateServerError',
}

export type ServerActions = ReturnType<typeof updateValidationErrors> |
  ReturnType<typeof updateServerError>;
