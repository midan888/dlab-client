import { ServerValidationError } from 'core/errors';
import { updateErrorMessage, updateSuccessMessage, updateValidationErrors } from 'form/actions';

export interface FormState {
  validationErrors: ServerValidationError[];
  errorMessage: string;
  successMessage: string;
}

export type FormActions = ReturnType<typeof updateValidationErrors> |
  ReturnType<typeof updateErrorMessage> |
  ReturnType<typeof updateSuccessMessage>;
