export interface OverviewResult {
  total: number;
  increase_today: number;
  increase_7day: number;
}

export interface Overview7DaysResult {
  date: string;
  count: number;
}

export interface SystemInfoResult {
  cpu_percent: number;
  memory_usage: {
    total: number;
    available: number;
    percent: number;
    used: number;
    free: number;
    active: number;
    inactive: number;
    wired: number;
  };
  disk_usage: {
    total: number;
    used: number;
    free: number;
    percent: number;
  };
  network_stats: {
    bytes_sent: number;
    bytes_recv: number;
    packets_sent: number;
    packets_recv: number;
    errin: number;
    errout: number;
    dropin: number;
    dropout: number;
  };
}
