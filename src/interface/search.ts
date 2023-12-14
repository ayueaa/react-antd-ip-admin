export type RawTag = string;

export interface IPSearchPost {
  ip: string;
}

export interface IPVisableRecord {
  ip: string;
  first_seen: string;
  last_seen: string;
  raw_tags: RawTag[];
}

export interface IPHistoryRecord {
  ip: string;
  source: string;
  last_seen: string;
  raw_tags: RawTag[];
}
export interface IPExtroInfo {
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
}

export interface IPSearchResult {
  visable: IPVisableRecord;
  history: IPHistoryRecord[];
  extro: IPExtroInfo;
}

export interface VtIPAnalysis {
  category: string;
  result: string;
  method: string;
  engine_name: string;
}

export interface VtSearchIPAttributes {
  network: string;
  tags: string[];
  whois: string;
  whois_date: number;
  last_analysis_date: number;
  asn: number;
  as_owner: string;
  last_analysis_stats: Record<string, number>;
  last_analysis_results: Record<string, VtIPAnalysis>;
}

export interface VtSearchResult {
  ioc: string;
  ioc_type: string;
  attributes: VtSearchIPAttributes;
}
