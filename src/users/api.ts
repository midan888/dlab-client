import { get } from 'core/httpClient';

interface SearchUsersResponse {
  result: SearchUsersResponseItem[];
}

interface SearchUsersResponseItem {
  email: string;
  fullName: string;
  id: number;
  password: string;
  updated_at: string | null;
  created_at: string | null;
}

export const searchUsers = () => {
  return get<SearchUsersResponse>('/users');
};
