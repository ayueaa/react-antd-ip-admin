export interface DocumentPageParams {
  page: number;
  page_size: number;
}

export interface DocumentCreateData {
  doc_id?: string;
  title: string;
  content: string;
}

export interface DocumentId {
  doc_id: string;
}

export interface Document {
  doc_id: string;
  owner_id?: string;
  title: string;
  content: string;
  created_at?: string;
  updated_at?: string;
}

export interface DocumentPageResult {
  total: number;
  page: number;
  page_size: number;
  items: Document[];
}

export interface DocumentHandleResult {
  doc_id: string;
  success: boolean;
  msg: string;
}
