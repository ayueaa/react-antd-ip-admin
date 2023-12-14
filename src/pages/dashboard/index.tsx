import type { FC } from 'react';

import './index.less';

import Overview from './overview';
import SourceTagGroup from './sourceTagGroup';
import SystemInfo from './systemInfo';
import TimeLine from './timeLine';

const DashBoardPage: FC = () => {
  return (
    <div>
      <Overview />
      <SourceTagGroup />
      <TimeLine />
      <SystemInfo />
    </div>
  );
};

export default DashBoardPage;
