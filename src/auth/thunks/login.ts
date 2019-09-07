import api from 'auth/api';
import { updateUser } from 'auth/actions/auth';
import { ThunkAction } from 'core/typings';
import { decrypt } from 'auth/token';
import { processServerError } from '../../server/thunks';
import { updateToken } from '../actions/auth';
import { storeAuthToken } from '../storage';

export const login = (data: any): ThunkAction<void> => async (dispatch) => {
  const { email, password, remember } = data;

  try {
    const token = await api.login({ email, password }, remember);
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
