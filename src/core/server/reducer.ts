import { ServerState, Action } from './typings';
import { ServerActions } from './actions';

const initialState: ServerState = {
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
