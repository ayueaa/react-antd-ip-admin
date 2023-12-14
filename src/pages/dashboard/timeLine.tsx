import type { Overview7DaysResult } from '@/interface/dashbord/overview';
import type { FC } from 'react';

import { Badge, Card } from 'antd';
import { useEffect, useState } from 'react';
import { Brush, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { apiOverview7DaysHistoryCount, apiOverview7DaysVisableCount } from '@/api/overview';
import { LocaleFormatter, useLocale } from '@/locales';

const CustomTooltip: FC<any> = ({ active, payload, label }) => {
  if (active) {
    const { value: value1, stroke: stroke1 } = payload[0];
    const { value: value2, stroke: stroke2 } = payload[1];

    return (
      <div className="customTooltip">
        <span className="customTooltip-title">{label}</span>
        <ul className="customTooltip-content">
          <li key="history">
            <Badge color={stroke1} />
            <LocaleFormatter id="app.dashboard.overview.recent7History" /> {value1}
          </li>
          <li key="visable">
            <Badge color={stroke2} />
            <LocaleFormatter id="app.dashboard.overview.recent7Visable" /> {value2}
          </li>
        </ul>
      </div>
    );
  }

  return null;
};

const TimeLine: FC = () => {
  const { formatMessage } = useLocale();
  const [loading, setLoading] = useState<boolean>(true);
  const [historyData, setHistoryData] = useState<Overview7DaysResult[]>([]);
  const [visibleData, setVisibleData] = useState<Overview7DaysResult[]>([]);

  const get7DaysCount = async () => {
    const [historyResponse, visibleResponse] = await Promise.all([
      apiOverview7DaysHistoryCount(),
      apiOverview7DaysVisableCount(),
    ]);

    setHistoryData(historyResponse.result);
    setVisibleData(visibleResponse.result);
    setLoading(false);
  };

  useEffect(() => {
    get7DaysCount();
  }, []);
  // 组合数据
  const combined = historyData.map((item, index) => {
    return {
      name: item.date,
      history: item.count,
      visable: visibleData[index]?.count || 0, // 假设两个数组是对齐的
    };
  });

  return (
    <Card
      loading={loading}
      style={{ marginTop: 12 }}
      title={formatMessage({ id: 'app.dashboard.overview.dailyIncrease' })}
    >
      <ResponsiveContainer height={400}>
        <LineChart data={combined} syncId="anyId">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="history" stroke="#3F90F7" />
          <Line type="monotone" dataKey="visable" stroke="#61BE82" />
          <Brush dataKey="name" fill="#13c2c2" />
          <Legend
            verticalAlign="top"
            height={40}
            formatter={value => <LocaleFormatter id={('app.dashboard.overview.' + value) as any} />}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default TimeLine;
