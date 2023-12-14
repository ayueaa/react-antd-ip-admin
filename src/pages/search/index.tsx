import type { FC } from 'react';

import IpSearch from './ip';
import VtSearchPage from './virustotal';

const IPSearchPage: FC = () => {
  return (
    <div>
      {/* <IpSearch /> */}
      <VtSearchPage />
    </div>
  );
};

export default IPSearchPage;
