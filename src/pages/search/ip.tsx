import type { IPHistoryRecord, IPSearchPost, IPSearchResult, RawTag } from '@/interface/search';
import type { ColumnsType } from 'antd/es/table';

import { Card, Input, Table, Tag } from 'antd';
import React, { useState } from 'react';

import { apiSearchIp } from '@/api/search';

// 预定义的颜色列表
const colors = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'];

const SearchPage: React.FC = () => {
  const [ipAddress, setIpAddress] = useState<string>('');
  const [result, setResult] = useState<IPSearchResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Function to handle search
  const handleSearch = async () => {
    setLoading(true);
    setResult(null); // 开始搜索前清除之前的结果
    const payload: IPSearchPost = { ip: ipAddress };

    const { status, result } = await apiSearchIp(payload);

    status && setResult(result);
    console.log(status, result);
    setLoading(false);
  };

  // Define the columns for the Ant Design Table
  const columns: ColumnsType<IPHistoryRecord> = [
    {
      title: 'IP',
      dataIndex: 'ip',
      key: 'ip',
    },
    {
      title: 'Source',
      dataIndex: 'source',
      key: 'source',
    },
    {
      title: 'Last Seen',
      dataIndex: 'last_seen',
      key: 'last_seen',
    },
    {
      title: 'Raw Tags',
      dataIndex: 'raw_tags',
      key: 'raw_tags',
      render: (tags: RawTag[]) => (
        <>
          {tags.map((tag, index) => (
            <Tag color={colors[index % colors.length]} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          ))}
        </>
      ),
    },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <Input.Search
          placeholder="请输入IP地址"
          enterButton="搜索"
          value={ipAddress}
          onChange={e => setIpAddress(e.target.value)}
          onSearch={handleSearch}
          style={{ width: '50%' }} // 设置搜索框宽度为一半
        />
      </div>
      {loading && <p>正在搜索...</p>}
      {result && (
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {/* Visable 信息 */}
          <Card title="IP情报概览" style={{ flex: 1, margin: '16px' }}>
            <p>IP: {result.visable.ip}</p>
            <p>首次发现: {result.visable.first_seen}</p>
            <p>最后发现: {result.visable.last_seen}</p>
            <p>
              原始标签:{' '}
              {result.visable.raw_tags.map((tag, index) => (
                <Tag color={colors[index % colors.length]} key={tag}>
                  {tag}
                </Tag>
              ))}
            </p>
          </Card>

          {/* Extro 信息 */}
          <Card title="额外信息" style={{ flex: 1, margin: '16px' }}>
            <p>国家: {result.extro.country}</p>
            <p>城市: {result.extro.city}</p>
            <p>邮政编码: {result.extro.zip}</p>
            <p>纬度: {result.extro.lat}</p>
            <p>经度: {result.extro.lon}</p>
            <p>时区: {result.extro.timezone}</p>
            <p>ISP: {result.extro.isp}</p>
            <p>组织: {result.extro.org}</p>
            <p>AS: {result.extro.as}</p>
          </Card>
        </div>
      )}

      {result && (
        <Card title="历史行为追踪" style={{ margin: '16px 0' }}>
          <Table
            columns={columns}
            dataSource={result.history}
            rowKey={(_, index) => index.toString()}
            pagination={false}
          />
        </Card>
      )}
    </div>
  );
};

export default SearchPage;
