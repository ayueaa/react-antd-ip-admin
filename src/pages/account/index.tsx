import type { UserInfo } from '@/interface/user/login';
import type { FC } from 'react';

import './index.less';

import { Avatar, Card } from 'antd';
import { useEffect, useState } from 'react';

import { apiUserInfo } from '@/api/user.api';

const { Meta } = Card;

const UserInformation: FC = () => {
  const [userData, setUserData] = useState<UserInfo>({
    id: '',
    email: '',
    is_active: false,
    is_superuser: false,
    is_verified: false,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const { status, result } = await apiUserInfo(); // 使用 await 获取用户信息

      if (status === true) {
        setUserData(result);
      }
    };

    fetchUserData();
  }, []); // 空数组作为依赖表示只在组件挂载时获取一次用户信息

  return (
    <Card
      style={{ width: 400 }}
      cover={
        <img
          alt="example"
          style={{ maxHeight: '200px' }}
          src="https://images.unsplash.com/photo-1698734419287-2fc55dcf344f?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
        />
      }
    >
      <Meta
        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
        title={userData.email} // 用户名
        description={
          <div>
            <p>User ID: {userData.id}</p>
            <p>Is Active: {userData.is_active ? '已激活' : '未激活'}</p> {/* 是否激活 */}
            <p>Is Verified: {userData.is_verified ? '已认证' : '未认证'}</p> {/* 是否验证 */}
            <p>Is Super User: {userData.is_superuser ? '是' : '否'}</p> {/* 是否是超级会员 */}
          </div>
        }
      />
    </Card>
  );
};

export default UserInformation;
