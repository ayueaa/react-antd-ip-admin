import type {
  Overview7DaysResult,
  OverviewResult,
  SystemInfoResult,
} from "../interface/dashbord/overview";
import type { AxiosRequestConfig } from "axios";

import { request } from "./request";

/** Visable数据概览 */
export const apiOverviewVisable = (config: AxiosRequestConfig = {}) =>
  request<OverviewResult>("get", "/api/overview/visable", {}, config);

/** 历史数据概览 */
export const apiOverviewHistory = (config: AxiosRequestConfig = {}) =>
  request<OverviewResult>("get", "/api/overview/history", {}, config);

/** 历史数据按数据源聚合数量 */
export const apiOverviewGroupSource = (config: AxiosRequestConfig = {}) =>
  request("get", "/api/overview/group/source", {}, config);

/** 历史数据按标签聚合数据 */
export const apiOverviewGroupTag = (config: AxiosRequestConfig = {}) =>
  request("get", "/api/overview/group/tag", {}, config);

/** 历史数据按标签聚合数据 */
export const apiOverview7DaysHistoryCount = (config: AxiosRequestConfig = {}) =>
  request<Overview7DaysResult[]>(
    "get",
    "/api/overview/7daycount/history",
    {},
    config
  );

/** 历史数据按标签聚合数据 */
export const apiOverview7DaysVisableCount = (config: AxiosRequestConfig = {}) =>
  request<Overview7DaysResult[]>(
    "get",
    "/api/overview/7daycount/visable",
    {},
    config
  );

/** 系统信息 */
export const apiOverviewSystemInfo = (config: AxiosRequestConfig = {}) =>
  request<SystemInfoResult>("get", "/api/overview/system-info", {}, config);
