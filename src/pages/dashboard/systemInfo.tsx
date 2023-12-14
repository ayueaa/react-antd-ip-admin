import type { SystemInfoResult } from '@/interface/dashbord/overview';
import type { FC } from 'react';

import { Card, Col, Row, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip as RTooltip } from 'recharts';

import { apiOverviewSystemInfo } from '@/api/overview';
// ...其他导入

const { Paragraph } = Typography;

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const SystemInfo: FC = () => {
  // ...已有的状态和函数
  const [loading, setLoading] = useState<boolean>(true);
  const [systemInfo, setSystemInfo] = useState<SystemInfoResult | null>(null);

  // 获取系统信息
  useEffect(() => {
    const fetchSystemInfo = async () => {
      const { status, result } = await apiOverviewSystemInfo();

      if (status && result !== null) {
        setSystemInfo(result);
      }

      setLoading(false);
    };

    fetchSystemInfo();
  }, []);
  const renderPieChart = (data: any[], dataKey: string, nameKey: string, title: string) => (
    <PieChart width={400} height={250}>
      <Pie data={data} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey={dataKey} nameKey={nameKey} label>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <RTooltip />
      <Legend />
    </PieChart>
  );
  const cpuData = [
    { name: 'Used', value: systemInfo?.cpu_percent },
    { name: 'Free', value: 100 - systemInfo?.cpu_percent },
  ];

  const memoryData = [
    { name: 'Used', value: systemInfo?.memory_usage.used },
    { name: 'Free', value: systemInfo?.memory_usage.available },
  ];

  const diskData = [
    { name: 'Used', value: systemInfo?.disk_usage.used },
    { name: 'Free', value: systemInfo?.disk_usage.free },
  ];

  return (
    <Row gutter={16}>
      {/* CPU Usage */}
      <Col span={8}>
        <Card title="CPU Usage" bordered={false}>
          {renderPieChart(cpuData, 'value', 'name', 'CPU Usage')}
        </Card>
      </Col>

      {/* Memory Usage */}
      <Col span={8}>
        <Card title="Memory Usage" bordered={false}>
          {renderPieChart(memoryData, 'value', 'name', 'Memory Usage')}
        </Card>
      </Col>

      {/* Disk Usage */}
      <Col span={8}>
        <Card title="Disk Usage" bordered={false}>
          {renderPieChart(diskData, 'value', 'name', 'Disk Usage')}
        </Card>
      </Col>

      {/* Network Stats */}
      <Col span={24}>
        <Card title="Network Stats" bordered={false}>
          <Paragraph>Bytes Sent: {systemInfo?.network_stats.bytes_sent}</Paragraph>
          <Paragraph>Bytes Received: {systemInfo?.network_stats.bytes_recv}</Paragraph>
        </Card>
      </Col>
    </Row>
  );
};

export default SystemInfo;
