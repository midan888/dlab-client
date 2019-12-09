import api from 'login/api';
import { updateUser } from 'login/actions';
import { ThunkAction } from 'core/typings';
import { decrypt } from 'login/token';
import { processServerError } from 'form/thunks';
import { updateToken } from './actions';
import { storeAuthToken } from './storage';

export const login = (data: any): ThunkAction<void> => async (dispatch) => {
  const { email, password } = data;

  try {
    const token = await api.login({ email, password });
    const decryptedToken = decrypt(token);

    dispatch(updateToken(token));
    dispatch(updateUser({
      fullName: decryptedToken.fullName,
      id: decryptedToken.id,
      email: decryptedToken.email,
    }));

    storeAuthToken(token);
  } catch (e) {
    dispatch(processServerError(e));
  }
};

export const logout = (): ThunkAction<void> => (dispatch) => {
  dispatch(updateToken(''));
  dispatch(updateUser({
    fullName: '',
    email: '',
    id: '',
  }));

  storeAuthToken('');
};
