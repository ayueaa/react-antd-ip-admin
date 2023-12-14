import type { IPSearchPost, IPSearchResult, VtSearchResult } from '@/interface/search';

import { request } from './request';

export const apiSearchIp = (data: IPSearchPost) =>
  request<IPSearchResult>('post', 'http://127.0.0.1:8080/api/search/ip/', data);

export const apiVtSearchIp = (ip: string) =>
  request<VtSearchResult>('get', `http://127.0.0.1:8080/api/search/virustotal/ip/${ip}`);
