import ky from 'ky';

const buildUrl = (path: string) => {
  return `${process.env.API_URL}/${path.replace(/^\//, '')}`;
};

export const post = <T>(path: string, data: object): Promise<T> => {
  return ky.post(buildUrl(path), { json: data }).json();
};

export const get = <T>(path: string): Promise<T> => {
  return ky.get(buildUrl(path)).json();
};
