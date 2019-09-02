import { ServerState, Action, ServerActions } from './typings';

export const initialState = {
  validationErrors: [],
  serverError: '',
};

const reducer = (state: ServerState = initialState, action: ServerActions): ServerState => {
  switch (action.type) {
    case Action.UpdateValidationErrors:
      return {
        ...state,
        validationErrors: action.payload,
      };
    case Action.UpdateServerError:
      return {
        ...state,
        serverError: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
