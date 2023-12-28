import type {
  IPSearchPost,
  IPSearchResult,
  VtSearchResult,
} from "@/interface/search";

import { request } from "./request";

export const apiSearchIp = (data: IPSearchPost) =>
  request<IPSearchResult>("post", "/api/search/ip/", data);

export const apiVtSearchIp = (ip: string) =>
  request<VtSearchResult>("get", `/api/search/virustotal/ip/${ip}`);
