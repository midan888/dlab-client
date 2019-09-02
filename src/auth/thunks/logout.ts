import { ThunkResult } from 'core/typings';
import { updateToken, updateUser } from '../actions/auth';

export const logout = (): ThunkResult<void> => (dispatch) => {
  dispatch(updateToken(''));
  dispatch(updateUser({
    fullName: '',
    email: '',
    id: '',
  }));
};
