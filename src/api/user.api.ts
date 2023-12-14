import type {
  LoginParams,
  LoginResult,
  LogoutParams,
  LogoutResult,
  RegisterParams,
  RegisterResult,
  RequestVerifyTokenParams,
  RequestVerifyTokenResult,
  User,
  UserInfo,
  UserPageResult,
  UserUpdateData,
  VerifyParams,
  VerifyResult,
} from '../interface/user/login';
import type { DocumentPageParams } from '@/interface/document';

import { request } from './request';

function loginParamsToFormData(params: LoginParams): FormData {
  const formData = new FormData();

  formData.append('username', params.username);
  formData.append('password', params.password);

  return formData;
}

/** 登出接口 */
export const apiLogout = (data: LogoutParams) =>
  request<LogoutResult>('post', 'http://127.0.0.1:8080/api/auth/jwt/logout', data);

export const apiLogin = (data: LoginParams) =>
  request<LoginResult>('post', 'http://127.0.0.1:8080/api/auth/jwt/login', loginParamsToFormData(data));

export const apiRegister = (data: RegisterParams) =>
  request<RegisterResult>('post', 'http://127.0.0.1:8080/api/auth/register', data);

export const apiRequestVerifyToken = (data: RequestVerifyTokenParams) =>
  request<RequestVerifyTokenResult>('post', 'http://127.0.0.1:8080/api/auth/request-verify-token', data);

export const apiVerify = (data: VerifyParams) =>
  request<VerifyResult>('post', 'http://127.0.0.1:8080/api/auth/verify', data);

export const apiUserInfo = () => request<UserInfo>('get', 'http://127.0.0.1:8080/api/users/me');

export const apiUserList = (data: DocumentPageParams) =>
  request<UserPageResult>('get', 'http://127.0.0.1:8080/api/users', data);

export const apiUserPatch = (data: UserUpdateData) => {
  const { id, ...restData } = data;

  return request<User>('patch', `http://127.0.0.1:8080/api/users/${id}`, restData);
};

export const apiUserDelete = (id: string) => {
  return request('delete', `http://127.0.0.1:8080/api/users/${id}`);
};
