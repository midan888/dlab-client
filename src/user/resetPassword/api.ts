import { post } from 'core/httpClient';

interface SendResetLinkResponse {
  link: string;
}

interface SendResetLinkRequest {
  email: string;
}

export const sendResetLink = (data: SendResetLinkRequest) => {
  return post<SendResetLinkResponse>('reset-password-token', data);
};

interface ResetPasswordRequest {
  password: string;
  passwordConfirm: string;
  token: string;
}

interface ResetPasswordResponse {
  status: number;
}

export const resetPassword = (data: ResetPasswordRequest) => {
  return post<ResetPasswordResponse>('reset-password', data);
};
