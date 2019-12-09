import { FormActions, FormState } from './typings';
import { Action } from './actions';

export const initialState = {
  validationErrors: [],
  errorMessage: '',
  successMessage: '',
};

const reducer = (state: FormState = initialState, action: FormActions): FormState => {
  switch (action.type) {
    case Action.UpdateValidationErrors:
      return {
        ...state,
        validationErrors: action.payload,
      };
    case Action.UpdateErrorMessage:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case Action.UpdateSuccessMessage:
      return {
        ...state,
        successMessage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
