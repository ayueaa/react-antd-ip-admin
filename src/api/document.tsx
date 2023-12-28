
import type {
  Document,
  DocumentCreateData,
  DocumentHandleResult,
  DocumentPageParams,
  DocumentPageResult,
} from '@/interface/document';

import { request } from './request';

export const apiGetDocuments = (data: DocumentPageParams) =>
  request<DocumentPageResult>('get', '/api/docs', data);

export const apiCreateDocument = (data: DocumentCreateData) =>
  request<Document>('post', '/api/docs', data);

export const apiGetDocumentById = (doc_id: string) =>
  request<Document>('get', `/api/docs/${doc_id}`);

export const apiUpdateDocument = (data: DocumentCreateData) => {
  const { doc_id, ...restData } = data;

  return request<DocumentHandleResult>('put', `/api/docs/${doc_id}`, restData);
};

export const apiDeleteDocument = (doc_id: string) =>
  request<DocumentHandleResult>('delete', `/api/docs/${doc_id}`);
