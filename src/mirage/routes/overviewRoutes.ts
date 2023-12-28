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
      total: 12345678,
      increase_today: 2222,
      increase_7day: 23456,
    })
  );

  // 历史数据概览
  server.get(
    "/overview/history",
    (): OverviewResult => ({
      total: 23456789,
      increase_today: 3333,
      increase_7day: 34567,
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
    "Telnet Bruteforcer": 32619,
    "RCE Attempt": 345,
    "Web Crawler": 57594,
    "ZMap Client": 9536,
    "Carries HTTP Referer": 453,
    "Rsync Crawler": 310,
    "Chimay Red Scanner": 1242,
    "SSH Worm": 8527,
    "Botnet Tracker": 2345,
    "SQL Injection": 1876,
    "DDoS Attacker": 23348,
    "Spam Source": 4534,
    "Cryptocurrency Miner": 1042,
    "Malware Distributor": 9675,
    "XSS Attacker": 2145,
    "Credit Card Skimmer": 756,
    "VPN Exit Node": 1234,
    "Anonymous Proxy": 987,
    "FTP Bruteforcer": 1553,
    "DNS Amplification": 324,
    "Exploit Scanner": 442,
    "IoT Targeter": 1009,
    "Phishing Site": 4567,
    "Drive-by Compromise": 787,
    Adware: 854,
    Malvertising: 987,
    "Data Exfiltration": 633,
    "Man in the Middle": 1222,
    "Zero Day": 111,
  }));

  server.get("/overview/group/source", () => ({
    osintEmergingthreats: 1757,
    dataplane: 789060,
    osintSslBlacklist: 8464,
    zoomeye: 1983,
    greynoise: 130782,
    spamhaus: 230782,
    urlhaus: 7049,
    otxUnknown: 10609,
    otxBruteforce: 46001,
    osintCinsscore: 155592,
    osintCybercure: 12005,
    otxTrojan: 5108,
    otxPhishing: 2949,
    osintBlocklistDe: 166386,
    otxMalvertising: 77,
    osintGreensnow: 56053,
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
