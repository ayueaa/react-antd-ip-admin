import type { ColProps } from 'antd/es/col';
import type { FC } from 'react';

import { Badge, Card, Col, List, Row } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReactWordcloud from 'react-wordcloud';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import { apiOverviewGroupSource, apiOverviewGroupTag } from '@/api/overview';
import { useLocale } from '@/locales';

type SourceData = {
  [key: string]: number;
};

type ConvertedData = {
  text: string;
  value: number;
}[];

//转换为键值对列表,并排序
function transformData(data: SourceData): ConvertedData {
  return Object.entries(data)
    .map(([text, value]) => ({
      text,
      value,
    }))
    .sort((a, b) => b.value - a.value); // 逆序排序;
}

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#E36E7E',
  '#8F66DE',
  '#A0522D',
  '#CD5C5C',
  '#FFA07A',
  '#20B2AA',
  '#87CEFA',
  '#778899',
  '#B0C4DE',
  '#FFFF00',
  '#32CD32',
  '#BA55D3',
  '#40E0D0',
  '#FF69B4',
  '#1E90FF',
  '#D2691E',
];

const wrapperCol: ColProps = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 12,
  xxl: 12,
};

const SourceTagGroup: FC = () => {
  // const { locale } = useSelector(state => state.user);
  const [loading, setLoading] = useState<boolean>(true);
  const { formatMessage } = useLocale();
  const [overviewSource, setOverviewSource] = useState<ConvertedData>([]);
  const [overviewTag, setOverviewTag] = useState<ConvertedData>([]);

  const getOverviewGroup = async () => {
    const resultSource = await apiOverviewGroupSource();
    const resultTag = await apiOverviewGroupTag();

    resultSource.status && setOverviewSource(transformData(resultSource.result));
    resultTag.status && setOverviewTag(transformData(resultTag.result));
    setLoading(false);
  };

  useEffect(() => {
    getOverviewGroup();
  }, []);

  return (
    <div>
      <Card className="salePercent" title={formatMessage({ id: 'app.dashboard.overview.source' })} loading={loading}>
        <Row gutter={20}>
          <Col span={12} style={{ width: '60%', ...wrapperCol }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip
                  content={({ active, payload }: any) => {
                    if (active) {
                      const { text, value } = payload[0].payload;
                      const total = overviewSource.map(d => d.value).reduce((a, b) => a + b);
                      const percent = ((value / total) * 100).toFixed(2) + '%';

                      return (
                        <span className="customTooltip">
                          {text} : {percent}
                        </span>
                      );
                    }

                    return null;
                  }}
                />
                <Pie
                  strokeOpacity={0}
                  data={overviewSource}
                  innerRadius="50%"
                  cx="50%" // 中心点横坐标
                  cy="50%" // 中心点纵坐标
                  outerRadius="80%"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {overviewSource.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </Col>
          <Col span={12} style={{ width: '50%', overflow: 'auto', maxHeight: '300px', ...wrapperCol }}>
            <List
              bordered
              dataSource={overviewSource}
              renderItem={(item, index) => {
                const total = overviewSource.map(d => d.value).reduce((a, b) => a + b);
                const percent = ((item.value / total) * 100).toFixed(2) + '%';

                return (
                  <List.Item>
                    <Badge color={COLORS[index]} />
                    <span>{item.text}</span> | <span>{item.value}</span> <span>{percent}</span>
                  </List.Item>
                );
              }}
            />
          </Col>
        </Row>
      </Card>
      <Card className="salePercent" title={formatMessage({ id: 'app.dashboard.overview.tag' })} loading={loading}>
        <ReactWordcloud words={overviewTag} />
      </Card>
    </div>
  );
};

export default SourceTagGroup;
