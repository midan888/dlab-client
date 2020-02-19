
export enum Role {
  Admin= 'admin',
  Editor = 'editor',
}

export interface UserModel {
  id?: number;
  fullName: string;
  email: string;
  role: Role;
  password?: string;
}
