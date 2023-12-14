import type { Document } from '@/interface/document';

import '@toast-ui/editor/dist/toastui-editor-viewer.css';

import { ArrowLeftOutlined, EditOutlined } from '@ant-design/icons';
import { Viewer } from '@toast-ui/react-editor';
import { Card, Descriptions, FloatButton, Tag, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { apiGetDocumentById } from '@/api/document';

const { Title } = Typography;

const DocumentViewer: React.FC = () => {
  const [docResult, setDocresult] = useState<Document>({ title: '', content: '', doc_id: '', updated_at: '' });
  const [isLoading, setIsLoading] = useState(true);
  const { docId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDocument = async () => {
      if (docId) {
        const { status, result } = await apiGetDocumentById(docId);

        if (status) {
          console.log(docResult);
          setDocresult(result);
          setIsLoading(false);
        }
      }
    };

    fetchDocument();
  }, [docId]);

  const handleEdit = () => {
    navigate(`/document/edit/${docId}`);
  };

  const handleBack = () => {
    navigate(-1); // 返回上一页
  };

  return (
    <div>
      <FloatButton.Group shape="circle" style={{ right: 24 }}>
        <FloatButton icon={<EditOutlined />} tooltip="编辑" onClick={handleEdit} />
        <FloatButton icon={<ArrowLeftOutlined />} tooltip="返回文档列表" onClick={handleBack} />
        <FloatButton.BackTop tooltip="回到顶部" visibilityHeight={0} />
      </FloatButton.Group>

      <div
        style={{
          width: '80%', // 设置宽度为屏幕宽度的 2/3
          maxWidth: '1200px', // 你可以设置一个最大宽度
          margin: '0 auto', // 居中显示
          padding: '24px', // 根据需要添加一些内边距
        }}
      >
        <Title level={2}>{docResult.title}</Title>
        <Descriptions size="small" column={1}>
          <Descriptions.Item label="更新时间">{docResult.updated_at}</Descriptions.Item>
        </Descriptions>
        <Card loading={isLoading}>
          <Viewer initialValue={docResult.content} />
        </Card>
      </div>
    </div>
  );
};

export default DocumentViewer;
