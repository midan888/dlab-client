import { ServerValidationError } from 'core/errors';

export interface ServerState {
  validationErrors: ServerValidationError[];
  serverError: string;
}

export enum Action {
  UpdateValidationErrors = 'UpdateValidationErrors',
  UpdateServerError = 'UpdateServerError',
}
