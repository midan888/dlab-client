const STORAGE_AUTH_TOKEN = 'auth_token';

export const storeAuthToken = (token: string) => {
  localStorage.setItem(STORAGE_AUTH_TOKEN, token);
};

export const getAuthToken = () => {
  return localStorage.getItem(STORAGE_AUTH_TOKEN) || '';
};
