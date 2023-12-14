import type { OverviewResult } from '@/interface/dashbord/overview';
import type { ColProps } from 'antd/es/col';
import type { FC } from 'react';

import { InfoCircleOutlined } from '@ant-design/icons';
import { Badge, Card, Col, Progress, Row, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import { Area, AreaChart, ResponsiveContainer, Tooltip as RTooltip, XAxis } from 'recharts';

import { apiOverviewHistory, apiOverviewVisable } from '@/api/overview';
import { useLocale } from '@/locales';

import { ReactComponent as CaretUpIcon } from './assets/caret-up.svg';

const increase7days = [
  { name: '2023-10-20', number: 1234 },
  { name: '2023-10-21', number: 1368 },
  { name: '2023-10-22', number: 2234 },
  { name: '2023-10-23', number: 3421 },
  { name: '2023-10-24', number: 2342 },
  { name: '2023-10-25', number: 5322 },
  { name: '2023-10-26', number: 3233 },
];

const wrapperCol: ColProps = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 12,
  xxl: 6,
};

interface ColCardProps {
  metaName: string;
  metaCount: string;
  body: React.ReactNode;
  loading: boolean;
  footer?: React.ReactNode;
  tootip?: string;
}

const ColCard: FC<ColCardProps> = ({ metaName, metaCount, body, footer, loading, tootip = 'Introduce' }) => {
  return (
    <Col {...wrapperCol}>
      <Card loading={loading} className="overview" bordered={false}>
        <div className="overview-header">
          <div className="overview-header-meta">{metaName}</div>
          <div className="overview-header-count">{metaCount}</div>
          <Tooltip title={tootip}>
            <InfoCircleOutlined className="overview-header-action" />
          </Tooltip>
        </div>
        <div className="overview-body">{body}</div>
        <div className="overview-footer">{footer}</div>
      </Card>
    </Col>
  );
};

interface TrendProps {
  today: number;
  days7: number;
  style?: React.CSSProperties;
}

const OverviewTrend: FC<TrendProps> = ({ today, days7, style = {} }) => {
  const { formatMessage } = useLocale();

  return (
    <div className="trend" style={style}>
      <div className="trend-item">
        <span className="trend-item-label">{formatMessage({ id: 'app.dashboard.overview.increase1days' })}</span>
        <span className="trend-item-text">{today}</span>
        <CaretUpIcon color="#f5222d" />
      </div>
      <div className="trend-item">
        <span className="trend-item-label">{formatMessage({ id: 'app.dashboard.overview.increase7days' })}</span>
        <span className="trend-item-text">{days7}</span>
        <CaretUpIcon color="#f5222d" />
      </div>
    </div>
  );
};

const CustomTooltip: FC<any> = ({ active, payload, label }) =>
  active && (
    <div className="customTooltip">
      <span className="customTooltip-title">
        <Badge color={payload[0].fill} /> {label} : {payload[0].value}
      </span>
    </div>
  );

const Overview: FC = () => {
  const { formatMessage } = useLocale();
  const [loading, setLoading] = useState<boolean>(true);
  const [overviewVisableData, setOverviewVisableData] = useState<OverviewResult | null>(null);
  const [overviewHistoryData, setOverviewHistoryData] = useState<OverviewResult | null>(null);

  const getOverview = async () => {
    const resultVisable = await apiOverviewVisable();
    const resultHistory = await apiOverviewHistory();

    resultVisable.status && setOverviewVisableData(resultVisable.result);
    resultHistory.status && setOverviewHistoryData(resultHistory.result);
    setLoading(false);
  };

  useEffect(() => {
    getOverview();
  }, []);

  return (
    <Row gutter={[12, 12]}>
      <ColCard
        loading={loading}
        tootip="聚合后的唯一IP数量统计"
        metaName={formatMessage({ id: 'app.dashboard.overview.visable' })}
        metaCount={overviewVisableData !== null ? overviewVisableData.total.toString() : '0'}
        body={
          <OverviewTrend
            today={overviewVisableData !== null ? overviewVisableData.increase_today : 0}
            days7={overviewVisableData !== null ? overviewVisableData.increase_7day : 0}
          />
        }
        // footer={<Field name={formatMessage({ id: 'app.dashboard.overview.dailySales' })} number="￥12,423" />}
      />
      <ColCard
        loading={loading}
        tootip="以IP情报记录为维度的数量统计"
        metaName={formatMessage({ id: 'app.dashboard.overview.history' })}
        metaCount={overviewHistoryData !== null ? overviewHistoryData.total.toString() : '0'}
        body={
          <OverviewTrend
            today={overviewHistoryData !== null ? overviewHistoryData.increase_today : 0}
            days7={overviewHistoryData !== null ? overviewHistoryData.increase_7day : 0}
          />
        }
        // footer={<Field name={formatMessage({ id: 'app.dashboard.overview.dailySales' })} number="￥12,423" />}
      />
      <ColCard
        loading={loading}
        metaName={formatMessage({ id: 'app.dashboard.overview.increase7daysline' })}
        metaCount={overviewHistoryData !== null ? overviewHistoryData.increase_7day.toString() : '0'}
        body={
          <ResponsiveContainer>
            <AreaChart data={increase7days}>
              <XAxis dataKey="name" hide />
              <RTooltip content={<CustomTooltip />} />
              <Area strokeOpacity={0} type="monotone" dataKey="number" fill="#8E65D3" />
            </AreaChart>
          </ResponsiveContainer>
        }
      />
      <ColCard
        loading={loading}
        metaName={formatMessage({ id: 'app.dashboard.overview.operationalEffect' })}
        metaCount="8846"
        body={<Progress strokeColor="#58BFC1" percent={85} />}
      />
    </Row>
  );
};

export default Overview;
