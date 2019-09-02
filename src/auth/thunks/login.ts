import api from 'auth/api';
import { updateUser } from 'auth/actions/auth';
import { ThunkResult } from 'core/typings';
import { decode } from 'jsonwebtoken';
import { processServerError } from '../../core/server/thunks';

export const login = (data: any): ThunkResult<void> => async (dispatch) => {
  const { email, password, remember } = data;

  try {
    const token = await api.login({ email, password }, remember);

    const decodedPayload = decode(token);
    if (!decodedPayload || typeof decodedPayload === 'string') {
      throw new Error('invalid token');
    }

    dispatch(updateUser({
      fullName: decodedPayload.fullName,
      id: decodedPayload.id,
      email: decodedPayload.email,
      password: '',
    }));
  } catch (e) {
    dispatch(processServerError(e));
  }
};
