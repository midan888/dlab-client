import { AuthState, Action, AuthAction } from './typings';

const initialState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
};

const reducer = (state: AuthState = initialState, action: AuthAction) => {
  switch (action.type) {
    case Action.UpdateUser:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
