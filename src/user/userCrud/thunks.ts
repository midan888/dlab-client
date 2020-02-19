import {
  searchUsers,
  getUser,
  updateUser,
  createUser,
} from './api';
import { ThunkAction } from 'core/typings';
import { updateActiveUser, updateUsers } from './actions';
import { UserModel } from 'user/models';
import { processServerError, processSuccessfulRequest } from 'form/thunks';
import { updateValidationErrors } from 'form/actions';

export const requestSearchUsers = (): ThunkAction<Promise<void>> => async (dispatch) => {
  const res = await searchUsers();

  const users = res.map<UserModel>(item => ({
    email: item.email,
    fullName: item.fullName,
    id: item.id,
    role: item.role,
  }));

  dispatch(updateUsers(users));
};

export const requestUser = (id: string): ThunkAction<Promise<void>> => async (dispatch) => {
  const res = await getUser(id);

  const user = {
    email: res.email,
    fullName: res.fullName,
    id: res.id,
    role: res.role,
  };

  dispatch(updateActiveUser(user));
};

export const requestUpdateUser = (data: any): ThunkAction<Promise<void>> => async (dispatch) => {
  try {
    const user = await updateUser({
      id: data.id,
      fullName: data.fullName,
      email: data.email,
      role: data.role,
    });

    dispatch(updateActiveUser(user));
    dispatch(processSuccessfulRequest('User updated'));
  } catch (e) {
    dispatch(processServerError(e));
  }
};

export const requestCreateUser = (data: any): ThunkAction<Promise<void>> => async (dispatch) => {

  try {
    if (data.password !== data.confirmPassword) {
      dispatch(updateValidationErrors([{
        param: 'confirmPassword',
        location: '',
        msg: 'Password do not match',
      }]));
      return;
    }

    const user = await createUser({
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      role: data.role,
    });

    dispatch(updateActiveUser(user));
    dispatch(processSuccessfulRequest('User created'));
  } catch (e) {
    dispatch(processServerError(e));
  }
};
