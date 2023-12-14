import '@toast-ui/editor/dist/toastui-editor.css'; // Toast UI Editor 的样式

import { SaveOutlined } from '@ant-design/icons';
import { Editor } from '@toast-ui/react-editor';
import { Button, Input } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { apiCreateDocument, apiGetDocumentById, apiUpdateDocument } from '@/api/document';

const DocumentEditor: React.FC = () => {
  const [document, setDocument] = useState({ title: '', content: '' });
  const { docId } = useParams();
  const navigate = useNavigate();
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    const loadDocument = async () => {
      if (docId) {
        const { status, result } = await apiGetDocumentById(docId);

        if (status) {
          setDocument({ title: result.title, content: result.content });
          // 如果编辑器已加载，可以这样设置内容
          editorRef.current?.getInstance().setMarkdown(result.content);
        }
      }
    };

    loadDocument();
  }, [docId]);

  const handleSave = async () => {
    const editorInstance = editorRef.current?.getInstance();
    const markdownContent = editorInstance?.getMarkdown() || '';

    if (docId) {
      // 更新文章
      await apiUpdateDocument({ ...document, content: markdownContent, doc_id: docId });

      navigate(`/document/${docId}`);
    } else {
      // 创建新文章
      await apiCreateDocument({ ...document, content: markdownContent });

      navigate(`/documentation`);
    }
  };

  return (
    <div>
      <Input
        placeholder="请输入文章标题"
        value={document.title}
        onChange={e => setDocument({ ...document, title: e.target.value })}
      />
      <Editor
        ref={editorRef}
        initialValue={document.content}
        previewStyle="vertical"
        height="600px" // 设置您想要的高度
        initialEditType="markdown"
        useCommandShortcut={true}
      />
      <Button
        type="primary"
        icon={<SaveOutlined />}
        onClick={handleSave}
        style={{
          position: 'fixed',
          right: '24px',
          bottom: '24px',
          zIndex: 1000,
        }}
      >
        {docId ? '更新文章' : '保存文章'}
      </Button>
    </div>
  );
};

export default DocumentEditor;
