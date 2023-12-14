import type { User, UserUpdateData } from '@/interface/user/login';

import { Button, Form, message, Modal, Pagination, Space, Switch, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { apiUserDelete, apiUserList, apiUserPatch } from '@/api/user.api';

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [total, setTotal] = useState(0);
  const [pagination, setPagination] = useState({ page: 1, page_size: 10 });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const { userid } = useSelector(state => state.user);

  const [form] = Form.useForm();

  useEffect(() => {
    const fetchData = async () => {
      const { status, result } = await apiUserList(pagination);

      if (status) {
        setUsers(result.items);
        setTotal(result.total);
      }
    };

    fetchData();
  }, [pagination]);

  const showEditModal = (user: User) => {
    setEditingUser(user);
    form.setFieldsValue({
      is_active: user.is_active,
      is_verified: user.is_verified,
    });
    setIsModalVisible(true);
  };

  const showDeleteConfirm = (userId: string) => {
    Modal.confirm({
      title: 'Are you sure delete this user?',
      content: 'This action cannot be undone',
      async onOk() {
        await handleDelete(userId);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const handleEdit = (formValues: UserUpdateData) => {
    Modal.confirm({
      title: 'Confirm Edit',
      content: 'Are you sure you want to save these changes?',
      onOk: async () => {
        if (editingUser) {
          formValues.id = editingUser.id;
          console.log(formValues);
          await apiUserPatch(formValues);
          setIsModalVisible(false);
          setEditingUser(null);
          // 重新获取用户列表
          const { status, result } = await apiUserList(pagination);

          if (status) {
            setUsers(result.items);
          }
        }
      },
      onCancel() {
        console.log('Edit cancelled');
      },
    });
  };

  const resetPassword = async (userId: string) => {
    Modal.confirm({
      title: 'Confirm Password Reset',
      content: 'Are you sure you want to reset this user\'s password to "12345678"?',
      async onOk() {
        const { status } = await apiUserPatch({ id: userId, password: '12345678' });
        // 可以在这里添加一个消息提示，例如：message.success('Password reset successfully');

        status && message.success('Password reset successfully');
      },
    });
  };

  const handleDelete = async (userId: string) => {
    await apiUserDelete(userId);
    // 重新获取用户列表
    const { status, result } = await apiUserList(pagination);

    if (status) {
      setUsers(result.items);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingUser(null);
    form.resetFields(); // 重置表单字段
  };

  const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Superuser',
      dataIndex: 'is_superuser',
      key: 'is_superuser',
      render: (isActive: boolean) => <Tag color={isActive ? 'green' : 'volcano'}>{isActive ? 'Yes' : 'No'}</Tag>,
    },
    {
      title: 'Active',
      dataIndex: 'is_active',
      key: 'is_active',
      render: (isActive: boolean) => <Tag color={isActive ? 'green' : 'volcano'}>{isActive ? 'Yes' : 'No'}</Tag>,
    },
    {
      title: 'Verified',
      dataIndex: 'is_verified',
      key: 'is_verified',
      render: (isVerified: boolean) => <Tag color={isVerified ? 'green' : 'volcano'}>{isVerified ? 'Yes' : 'No'}</Tag>,
    },
    // 可以添加更多列，如操作列
    {
      title: 'Action',
      key: 'action',
      render: (_: any, user: User) => {
        const isCurrentUser = user.id === userid;

        return (
          <Space>
            <Button onClick={() => showEditModal(user)} disabled={isCurrentUser}>
              Edit
            </Button>
            <Button danger onClick={() => showDeleteConfirm(user.id)} disabled={isCurrentUser}>
              Delete
            </Button>
            <Button onClick={() => resetPassword(user.id)} disabled={isCurrentUser}>
              Reset Password
            </Button>
          </Space>
        );
      },
    },
  ];

  const handlePageChange = (page: number, pageSize?: number) => {
    setPagination({ page, page_size: pageSize || 10 });
  };

  return (
    <div>
      <Table dataSource={users} columns={columns} rowKey="id" pagination={false} />
      <Pagination total={total} current={pagination.page} pageSize={pagination.page_size} onChange={handlePageChange} />

      <Modal
        title="Edit User"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={() => form.submit()}>
            Save
          </Button>,
        ]}
      >
        <Form form={form} onFinish={handleEdit}>
          <Form.Item name="is_active" label="Active" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item name="is_verified" label="Verified" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserList;
