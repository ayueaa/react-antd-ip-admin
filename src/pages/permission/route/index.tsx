import type { FC } from 'react';

import './index.less';

import { Typography } from 'antd';

import { LocaleFormatter } from '@/locales';

const RoutePermissionPage: FC = () => {
  console.log('RoutePermissionPage');

  return (
    <div className="permission-page">
      <Typography className="permission-intro">
        <LocaleFormatter id="gloabal.tips.loginResult" />
      </Typography>
    </div>
  );
};

export default RoutePermissionPage;
