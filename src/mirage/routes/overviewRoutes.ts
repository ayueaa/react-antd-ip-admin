// src/mirage/routes/documentRoutes.ts
import {
  OverviewResult,
  Overview7DaysResult,
  SystemInfoResult,
} from "@/interface/dashbord/overview";
import { Server } from "miragejs";

export default function setupOverviewRoutes(server: Server) {
  // Visable数据概览
  server.get(
    "/overview/visable",
    (): OverviewResult => ({
      total: 1393875,
      increase_today: 0,
      increase_7day: 73570,
    })
  );

  // 历史数据概览
  server.get(
    "/overview/history",
    (): OverviewResult => ({
      total: 1099178,
      increase_today: 0,
      increase_7day: 49492,
    })
  );

  // 历史数据按7天计数
  server.get("/overview/7daycount/history", (): Overview7DaysResult[] => [
    { date: "20230101", count: 800 },
    { date: "20230102", count: 600 },
    { date: "20230103", count: 1245 },
    { date: "20230104", count: 3472 },
    { date: "20230105", count: 2466 },
    { date: "20230106", count: 3271 },
    { date: "20230107", count: 6233 },
  ]);

  server.get("/overview/7daycount/visable", (): Overview7DaysResult[] => [
    { date: "20230101", count: 600 },
    { date: "20230102", count: 400 },
    { date: "20230103", count: 945 },
    { date: "20230104", count: 2472 },
    { date: "20230105", count: 2066 },
    { date: "20230106", count: 2271 },
    { date: "20230107", count: 4233 },
  ]);

  server.get("/overview/group/tag", () => ({
    "SSH Bruteforcer": 4038,
    Scanner: 408465,
    "Telnet Bruteforcer": 22619,
    "RCE Attempt": 345,
    "Web Crawler": 57594,
    "ZMap Client": 9536,
    "Carries HTTP Referer": 453,
    "Rsync Crawler": 310,
    "Chimay Red Scanner": 1242,
    "SSH Worm": 18527,
  }));
  server.get("/overview/group/source", () => ({
    osint_emergingthreats: 1757,
    dataplane: 789060,
    osint_ssl_blacklist: 8464,
    zoomeye: 1983,
    greynoise: 130782,
    urlhaus: 7049,
    otx_unknown: 10609,
    otx_bruteforce: 46001,
    osint_cinsscore: 155592,
    osint_cybercure: 12005,
    otx_trojan: 5108,
    otx_phishing: 2949,
    osint_blocklist_de: 166386,
    otx_malvertising: 77,
    osint_greensnow: 56053,
  }));

  // 系统信息
  server.get(
    "/overview/system-info",
    (): SystemInfoResult => ({
      cpu_percent: 20,
      memory_usage: {
        total: 8192,
        available: 4096,
        percent: 50,
        used: 2048,
        free: 6144,
        active: 1000,
        inactive: 500,
        wired: 300,
      },
      disk_usage: {
        total: 102400,
        used: 51200,
        free: 51200,
        percent: 50,
      },
      network_stats: {
        bytes_sent: 1000000,
        bytes_recv: 2000000,
        packets_sent: 1000,
        packets_recv: 2000,
        errin: 0,
        errout: 0,
        dropin: 0,
        dropout: 0,
      },
    })
  );
}
