import type { MenuList } from '../../interface/layout/menu.interface';
import type { FC } from 'react';

import {
  DashboardOutlined,
  FileTextOutlined,
  InfoCircleOutlined,
  LockOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setUserItem } from '@/stores/user.store';

interface MenuProps {
  menuList: MenuList;
  openKey?: string;
  onChangeOpenKey: (key?: string) => void;
  selectedKey: string;
  onChangeSelectedKey: (key: string) => void;
}

// 定义菜单栏展示的图标icon
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'dashboard':
      return <DashboardOutlined />;
    case 'documentation':
      return <FileTextOutlined />;
    case 'users':
      return <UserOutlined />;
    case 'guide':
      return <InfoCircleOutlined />;
    case 'search':
      return <SearchOutlined />;
    case 'permission':
      return <LockOutlined />;
    // 添加更多图标的匹配
    default:
      return <SearchOutlined />; // 当没有匹配时返回 null 或默认图标
  }
};

const MenuComponent: FC<MenuProps> = props => {
  const { menuList, openKey, onChangeOpenKey, selectedKey, onChangeSelectedKey } = props;
  const { device, locale } = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getTitle = (menu: MenuList[0]) => {
    // 如果 menu.icon 不存在，则默认设置一个图标，例如 <InfoCircleOutlined />
    const icon = menu.icon ? getIcon(menu.icon) : <InfoCircleOutlined />;

    return (
      <span style={{ display: 'flex', alignItems: 'center' }}>
        {icon}
        <span>{menu.label[locale]}</span>
      </span>
    );
  };

  const onMenuClick = (path: string) => {
    onChangeSelectedKey(path);
    navigate(path);

    if (device !== 'DESKTOP') {
      dispatch(setUserItem({ collapsed: true }));
    }
  };

  const onOpenChange = (keys: string[]) => {
    const key = keys.pop();

    onChangeOpenKey(key);
  };

  return (
    <Menu
      mode="inline"
      selectedKeys={[selectedKey]}
      openKeys={openKey ? [openKey] : []}
      onOpenChange={onOpenChange}
      onSelect={k => onMenuClick(k.key)}
      className="layout-page-sider-menu text-2"
      items={menuList.map(menu => {
        return menu.children
          ? {
              key: menu.code,
              label: getTitle(menu),
              children: menu.children.map(child => ({
                key: child.path,
                label: child.label[locale],
              })),
            }
          : {
              key: menu.path,
              label: getTitle(menu),
            };
      })}
    ></Menu>
  );
};

export default MenuComponent;
