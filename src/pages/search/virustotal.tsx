import type { VtIPAnalysis, VtSearchResult } from '@/interface/search';

import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Card, Col, Descriptions, Input, Row, Table, Tabs, Tooltip, Typography } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { ReactCountryFlag } from 'react-country-flag';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

import { apiVtSearchIp } from '@/api/search';

const { TabPane } = Tabs;
const { Text } = Typography;

const VtSearchPage: React.FC = () => {
  const [ip, setIp] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<VtSearchResult | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    setSearchResult(null);
    const { status, result } = await apiVtSearchIp(ip);

    status && setSearchResult(result);
    setLoading(false);
  };

  // 时间戳转换为 UTC+8 日期格式的函数
  const formatDate = (timestamp: number) => {
    return moment.unix(timestamp).utcOffset(8).format('YYYY-MM-DD HH:mm:ss');
  };

  //首字母大写
  const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  interface AnalysisResultsProps {
    last_analysis_results: Record<string, VtIPAnalysis>;
  }

  interface AnalysisStatProps {
    last_analysis_date: number;
    last_analysis_stats: Record<string, number>;
    whois: string;
  }

  interface WhoisTabPaneProps {
    whois: string;
    whoisDate: number;
  }

  const StatisticsCard: React.FC<AnalysisStatProps> = ({ last_analysis_date, last_analysis_stats, whois }) => {
    // 构造数据
    const data = [
      { name: 'Malicious', value: last_analysis_stats.malicious },
      {
        name: 'Other',
        value:
          Object.values(last_analysis_stats).reduce((acc, value) => acc + value, 0) - last_analysis_stats.malicious,
      },
    ];
    const countryRegex = /country:\s*(\S+)/;
    const match = whois.match(countryRegex);

    const country = match ? match[1] : 'Unknown';

    // 构造 malicious 的占比字符串
    const maliciousRatio = `${last_analysis_stats.malicious} / ${data[1].value + last_analysis_stats.malicious}`;

    const showMaliciousWarning = last_analysis_stats.malicious > 0;

    return (
      <Card title="Analysis Statistics" style={{ width: '100%' }}>
        <Row gutter={16}>
          <Col span={16}>
            <Descriptions bordered size="small" column={1}>
              <Descriptions.Item label={<strong>IP</strong>}>{<strong>{ip}</strong>}</Descriptions.Item>
              <Descriptions.Item label="Country">
                <Tooltip title={country} placement="rightTop">
                  <ReactCountryFlag
                    countryCode={country} // 使用国家的两位代码
                    svg // 指定使用 SVG 格式的旗帜
                    style={{
                      width: '2em',
                      height: '2em',
                      verticalAlign: 'middle', // 使图标垂直居中
                    }}
                  />
                </Tooltip>
              </Descriptions.Item>
              <Descriptions.Item label="Last Analysis Date">{formatDate(last_analysis_date)}</Descriptions.Item>
              {Object.entries(last_analysis_stats).map(([key, value]) => (
                <Descriptions.Item key={key} label={key.charAt(0).toUpperCase() + key.slice(1)}>
                  {key === 'malicious' && value > 0 ? (
                    <span style={{ color: 'red' }}>{value}</span>
                  ) : key === 'suspicious' && value > 0 ? (
                    <span style={{ color: 'orange' }}>{value}</span>
                  ) : (
                    value
                  )}
                </Descriptions.Item>
              ))}
            </Descriptions>
          </Col>
          <Col span={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={data} innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="value">
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#F4664A' : '#E8EDF3'} />
                  ))}
                </Pie>
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="central"
                  style={{ fontSize: '14px', fontWeight: 'bold' }}
                >
                  {maliciousRatio}
                </text>
              </PieChart>
            </ResponsiveContainer>
            {showMaliciousWarning && (
              <Text type="danger" style={{ marginTop: 10 }}>
                {last_analysis_stats.malicious} security vendor flagged this IP address as malicious
              </Text>
            )}
          </Col>
        </Row>
      </Card>
    );
  };

  const AnalysisResultsComponent: React.FC<AnalysisResultsProps> = ({ last_analysis_results }) => {
    // 自定义渲染函数

    const renderResult = (text: string, record: VtIPAnalysis) => {
      if (record.category === 'malicious') {
        return (
          <span style={{ color: 'red' }}>
            <ExclamationCircleOutlined style={{ marginRight: 4 }} />
            {capitalizeFirstLetter(text)}
          </span>
        );
      } else if (record.category === 'suspicious') {
        return (
          <span style={{ color: 'orange' }}>
            <InfoCircleOutlined style={{ marginRight: 4, color: 'orange' }} />
            {capitalizeFirstLetter(text)}
          </span>
        );
      } else if (record.category === 'harmless') {
        return (
          <span style={{ color: 'green' }}>
            <CheckCircleOutlined style={{ marginRight: 4, color: 'green' }} />
            {capitalizeFirstLetter(text)}
          </span>
        );
      } else if (record.category === 'undetected') {
        return (
          <span style={{ color: 'grey' }}>
            <QuestionCircleOutlined style={{ marginRight: 4, color: 'grey' }} />
            {capitalizeFirstLetter(text)}
          </span>
        );
      }

      // 默认情况，直接返回文本
      return text;
    };

    // 配置列
    const columns = [
      {
        title: 'Engine Name',
        dataIndex: 'engine_name',
        key: 'engine_name',
      },
      {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
      },
      {
        title: 'Result',
        dataIndex: 'result',
        key: 'result',
        render: renderResult, // 使用自定义渲染函数
      },
      {
        title: 'Method',
        dataIndex: 'method',
        key: 'method',
      },
    ];

    // 转换数据源
    const dataSource = Object.entries(last_analysis_results).map(([key, value]) => {
      return {
        key,
        ...value,
      };
    });

    return (
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ defaultPageSize: 50 }}
        scroll={{ x: 1500, y: 800 }}
      />
    );
  };

  const WhoisTabPane: React.FC<WhoisTabPaneProps> = ({ whois, whoisDate }) => {
    // 转换时间戳为可读日期
    return (
      <div>
        <Typography.Paragraph>
          <strong>Whois Date:</strong> {formatDate(whoisDate)}
        </Typography.Paragraph>
        <Typography.Paragraph>
          <strong>Whois Info:</strong>
          <br />
          <pre>{whois}</pre>
        </Typography.Paragraph>
      </div>
    );
  };

  return (
    <div>
      <Row align="middle" style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
        <Col span={24} style={{ textAlign: 'center', marginBottom: '20px' }}>
          {/* <div style={{ fontSize: '24px', fontWeight: 'bold' }}>FILE</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>URL</div> */}
          <div style={{ borderBottom: '2px solid #1890ff', display: 'inline-block', padding: '10px' }}>
            <SearchOutlined style={{ marginRight: '10px', fontSize: '24px', color: '#1890ff' }} />
            Search for a domain, IP address context
          </div>
        </Col>
        <Col span={24}>
          <Input
            size="middle"
            placeholder="IP address or domain"
            value={ip}
            onChange={e => setIp(e.target.value)}
            onPressEnter={handleSearch}
            style={{ borderRadius: '4px 0 0 4px', marginRight: '-1px' }}
          />
        </Col>
      </Row>

      {loading && <Typography.Text>Loading...</Typography.Text>}

      {searchResult && (
        <div>
          <StatisticsCard
            last_analysis_date={searchResult.attributes.last_analysis_date}
            last_analysis_stats={searchResult.attributes.last_analysis_stats}
            whois={searchResult.attributes.whois}
          />

          <Tabs defaultActiveKey="1">
            <TabPane tab="Last Analysis Results" key="1">
              <AnalysisResultsComponent last_analysis_results={searchResult.attributes.last_analysis_results} />
            </TabPane>
            <TabPane tab="WHOIS" key="2">
              <WhoisTabPane whois={searchResult.attributes.whois} whoisDate={searchResult.attributes.whois_date} />
            </TabPane>
            <TabPane tab="AS Information" key="3">
              <Typography.Paragraph>
                <strong>ASN:</strong> {searchResult.attributes.asn}
              </Typography.Paragraph>
              <Typography.Paragraph>
                <strong>AS OWNER:</strong> {searchResult.attributes.as_owner}
              </Typography.Paragraph>
            </TabPane>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default VtSearchPage;
