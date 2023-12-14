/** user's role */
export type Role = 'guest' | 'admin';

export interface LoginParams {
  /** 用户名 */
  username: string;
  /** 用户密码 */
  password: string;
}

export interface LoginResult {
  /** auth token */
  token: string;
  username: string;
  role: Role;
}

export interface LogoutParams {
  token: string;
}

export interface RegisterParams {
  /** 用户名 */
  email: string;
  /** 用户密码 */
  password: string;
}
export interface RegisterResult {
  id: string;
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
}

export interface LogoutResult {}

export interface RequestVerifyTokenParams {
  email: string;
}

export interface RequestVerifyTokenResult {}

export interface VerifyParams {
  token: string;
}

export interface VerifyResult extends RegisterResult {}

export interface UserInfo extends RegisterResult {}

export interface User {
  id: string;
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
}

export interface UserPageResult {
  total: number;
  page: number;
  page_size: number;
  items: User[];
}

export interface UserUpdateData {
  id: string;
  is_active?: boolean;
  is_verified?: boolean;
  password?: string;
}
