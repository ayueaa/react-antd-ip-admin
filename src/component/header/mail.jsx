import React from 'react';
import { List } from 'ant';
import Dropdown from '@/component/dropdown'

const data = [
  { name: '曾小贤', message: '好男人就是我，我就是好男人，曾 小 贤~' },
  { name: '孙悟空', message: '呔！猪精，哪里逃？吃俺老孙一棒！' },
  { name: '白展堂', message: '葵花点穴手！' }
];

export default class App extends React.Component {
  render() {
    return (
      <Dropdown 
        icon="mail"
        title="收件箱"
        linkName="查看全部邮件"
        linkUrl="/admin">
        <div>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<a>{item.name}</a>}
                  description={item.message}
                />
              </List.Item>
            )}
          />
          <style>{`
            .ant-list-item {
              padding: 8px 0;
            }
            .ant-list-item-meta-description {
              width: 280px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          `}</style>
        </div>
      </Dropdown>
    )
  }
}