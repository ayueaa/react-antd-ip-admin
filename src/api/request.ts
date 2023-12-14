import type { AxiosRequestConfig, Method } from 'axios';

import { message as $message } from 'antd';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { history } from '@/routes/history';
import store from '@/stores';
import { setGlobalState } from '@/stores/global.store';
import { setUserItem } from '@/stores/user.store';

function extractErrorMessage(responseData: any) {
  if (responseData.errors && Array.isArray(responseData.errors)) {
    // 如果有 "errors" 字段并且是数组，处理第一个错误
    const firstError = responseData.errors[0];

    if (typeof firstError === 'string') {
      // 如果错误信息是字符串，直接返回
      return firstError;
    } else {
      return firstError.reason || firstError.msg;
    }
  }

  return 'An error occurred';
}

const axiosInstance = axios.create({
  timeout: 6000,
});

axiosInstance.interceptors.request.use(
  config => {
    store.dispatch(
      setGlobalState({
        loading: true,
      }),
    );
    // 从localStorage中获取Bearer token
    const authToken = localStorage.getItem('t');

    // 将Bearer token添加到请求的Authorization header中
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    store.getState().user.logged;

    return config;
  },
  error => {
    store.dispatch(
      setGlobalState({
        loading: false,
      }),
    );
    Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => {
    store.dispatch(
      setGlobalState({
        loading: false,
      }),
    );

    if (response?.data?.message) {
      // $message.success(response.data.message);
    }

    if (response.data && 'status' in response.data) {
      return response.data;
    } else {
      // 统一的Response结构
      return {
        status: true,
        message: response?.data?.message || 'Success', // 可根据实际情况设置成功消息
        result: response?.data,
      };
    }
  },
  error => {
    store.dispatch(
      setGlobalState({
        loading: false,
      }),
    );

    if (error.response.status === 401) {
      // JWT token过期，触发退出登录操作
      localStorage.clear();
      store.dispatch(
        setUserItem({
          logged: false,
        }),
      );
      history.push('/login');

      // 可选：取消当前请求的Promise
      return Promise.reject(error);
    } else {
      let errorMessage = extractErrorMessage(error?.response?.data) || error?.message;

      if (error?.message?.includes('Network Error')) {
        errorMessage = '网络错误，请检查您的网络';
      }

      console.dir(error);
      error.message && $message.error(errorMessage);

      return {
        status: false,
        message: errorMessage,
        result: error.response.data.errors,
      };
    }
  },
);

export type Response<T = any> = {
  status: boolean;
  message: string;
  result: T;
};

export type MyResponse<T = any> = Promise<Response<T>>;

/**
 *
 * @param method - request methods
 * @param url - request url
 * @param data - request data or params
 */
export const request = <T = any>(
  method: Lowercase<Method>,
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
): MyResponse<T> => {
  // const prefix = '/api'
  const prefix = '';

  url = prefix + url;

  switch (method) {
    case 'get':
      // Assume that 'data' in GET requests is meant for query parameters
      return axiosInstance.get(url, { params: data, ...config });

    case 'post':
      return axiosInstance.post(url, data, config);

    case 'put':
      // For PUT requests, 'data' is the payload
      return axiosInstance.put(url, data, config);

    case 'delete':
      // For DELETE requests, 'data' can be used for query parameters (if needed)
      return axiosInstance.delete(url, { params: data, ...config });
    case 'patch':
      // For DELETE requests, 'data' can be used for query parameters (if needed)
      return axiosInstance.patch(url, data, config);

    default:
      throw new Error(`Unsupported method: ${method}`);
  }
};
