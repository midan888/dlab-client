import { get, post } from 'core/httpClient';
import { UserModel } from 'user/models';

interface UsersResponse {
  email: string;
  fullName: string;
  id: number;
  password: string;
  updated_at: string | null;
  created_at: string | null;
}

interface UpdateUserRequest extends UserModel {}

export const searchUsers = () => {
  return get<UsersResponse[]>('/users');
};

export const getUser = (id: string) => {
  return get<UsersResponse>(`/users/${id}`);
};

export const updateUser = (user: UpdateUserRequest) => {
  return post<UserModel>(`users/${user.id}`, user);
};

interface CreateUserRequest extends UserModel {
  password: string;
}

export const createUser = (user: CreateUserRequest) => {
  return post<UserModel>('users', user);
};
