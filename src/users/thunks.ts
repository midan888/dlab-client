import { searchUsers } from 'users/api';
import { ThunkAction } from 'core/typings';
import { updateUsers } from 'users/actions';
import { UserModel } from 'users/models';

export const requestSearchUsers = (): ThunkAction<Promise<void>> => async (dispatch) => {
  const res = await searchUsers();

  const users = res.result.map<UserModel>(item => ({
    email: item.email,
    fullName: item.fullName,
    id: item.id,
  }));

  dispatch(updateUsers(users));
};
