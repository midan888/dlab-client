import { decode } from 'jsonwebtoken';

interface TokenPayload {
  fullName: string;
  email: string;
  id: string;
}

export const decrypt = (token: string): TokenPayload => {
  const decodedPayload = decode(token);
  const payload = {
    fullName: '',
    id: '',
    email: '',
  };
  if (typeof decodedPayload === 'string' || !decodedPayload) {
    return payload;
  }

  payload.fullName = decodedPayload.fullName;
  payload.email = decodedPayload.email;
  payload.id = decodedPayload.id;

  return payload;
};
