
export const getHost = () => {
  return 'http://localhost:4000';
};

export const getRequest = async <T>(path: string):Promise<T> => {
  const res = await fetch(`${getHost()}/${path}`);
  return await res.json();
};

export const getUsers = async () => {
  const res = await getRequest('users');

  return res
};
