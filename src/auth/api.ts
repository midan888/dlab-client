import { post } from 'core/httpClient';

interface AuthResponse {
  token: string;
}

interface AuthRequest {
  email: string;
  password: string;
}

export const login = async (request: AuthRequest, remember: boolean) => {
  const { token } = await post<AuthResponse>('auth/login', request);

  return token;
};

export default {
  login,
};
