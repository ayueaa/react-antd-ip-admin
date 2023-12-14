import type { Document, DocumentPageParams } from '@/interface/document';

import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { FloatButton, List, message, Modal, Pagination, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { apiDeleteDocument, apiGetDocuments } from '@/api/document';

const DocumentsList: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [pagination, setPagination] = useState<DocumentPageParams>({ page: 1, page_size: 10 });
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDocuments();
  }, [pagination]);

  const fetchDocuments = async () => {
    const { status, result } = await apiGetDocuments(pagination);

    if (status) {
      setDocuments(result.items);
      setTotal(result.total); // Assuming your apiGetDocuments returns total number of documents
    }
  };

  const handleCreateNewDocument = () => {
    navigate('/document/new'); // 假设 '/document/new' 是创建新文档的路由
  };

  const handleItemClickEdit = (doc_id: string) => {
    navigate(`/document/edit/${doc_id}`);
  };

  const handleItemClickView = (doc_id: string) => {
    navigate(`/document/${doc_id}`);
  };

  const handleItemClickDelete = (doc_id: string) => {
    Modal.confirm({
      title: '确认删除这篇文章吗？',
      content: '一旦删除，将无法恢复。',
      okText: '确认',
      okType: 'danger',
      cancelText: '取消',
      onOk: async () => {
        const { status } = await apiDeleteDocument(doc_id);

        if (status) {
          message.success('删除成功');
          await fetchDocuments(); // 重新获取文档列表以更新视图
        } else {
          message.error('删除失败');
        }
      },
      onCancel() {
        console.log('取消删除');
      },
    });
  };

  interface IconActionProps {
    icon: React.FC;
    item: Document;
    onClick: (docId: string) => void;
    text?: string;
  }

  const IconAction: React.FC<IconActionProps> = ({ icon, item, onClick, text }) => (
    <Space>
      <a onClick={() => onClick(item.doc_id)}>
        {React.createElement(icon)}
        {text}
      </a>
    </Space>
  );

  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={documents}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconAction icon={EditOutlined} item={item} onClick={handleItemClickEdit} text="编辑" />,
              <IconAction icon={DeleteOutlined} item={item} onClick={handleItemClickDelete} text="删除" />,
              <Space>{`${item.updated_at}`}</Space>,
            ]}
          >
            <List.Item.Meta
              title={<a onClick={() => handleItemClickView(item.doc_id)}>{item.title}</a>}
              description={`${item.content} ...`}
            />
          </List.Item>
        )}
      />
      <Pagination
        current={pagination.page}
        pageSize={pagination.page_size}
        total={total}
        onChange={(page, page_size) => setPagination({ page, page_size })}
        style={{ textAlign: 'center', marginTop: '20px' }}
      />
      <FloatButton
        icon={<PlusOutlined />}
        type="primary"
        shape="circle"
        tooltip="新建文档"
        style={{
          position: 'fixed',
          right: '24px',
          bottom: '24px',
          zIndex: 1000,
        }}
        onClick={handleCreateNewDocument}
      />
    </>
  );
};

export default DocumentsList;
