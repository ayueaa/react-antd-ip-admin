import type { LoginParams } from '../interface/user/login';
import type { Dispatch } from '@reduxjs/toolkit';

import { apiLogin, apiLogout, apiUserInfo } from '../api/user.api';
import { setUserItem } from './user.store';
import { createAsyncAction } from './utils';
// typed wrapper async thunk function demo, no extra feature, just for powerful typings
export const loginAsync = createAsyncAction<LoginParams, boolean>(payload => {
  return async dispatch => {
    const { result, status } = await apiLogin(payload);

    if (status) {
      localStorage.setItem('t', result.access_token);
      localStorage.setItem('username', payload.username);
      const userInfo = await apiUserInfo(); // 使用 await 获取用户信息

      dispatch(
        setUserItem({
          logged: true,
          username: payload.username,
          isSuperUser: userInfo.result.is_superuser,
          userid: userInfo.result.id,
        }),
      );

      return true;
    }

    return false;
  };
});

export const logoutAsync = () => {
  return async (dispatch: Dispatch) => {
    const { status } = await apiLogout({ token: localStorage.getItem('t')! });

    if (status) {
      localStorage.clear();
      dispatch(
        setUserItem({
          logged: false,
          isSuperUser: false,
          userid: '',
        }),
      );

      return true;
    }

    return false;
  };
};
