import { ThunkAction } from 'core/typings';
import { updateToken, updateUser } from '../actions/auth';
import { storeAuthToken } from '../storage';

export const logout = (): ThunkAction<void> => (dispatch) => {
  dispatch(updateToken(''));
  dispatch(updateUser({
    fullName: '',
    email: '',
    id: '',
  }));

  storeAuthToken('');
};
