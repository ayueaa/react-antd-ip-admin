import type { FC } from 'react';

import {
  BulbOutlined,
  GlobalOutlined,
  HomeTwoTone,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Dropdown, Layout, theme as antTheme, Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Avator from '@/assets/header/avator.jpeg';
import { LocaleFormatter, useLocale } from '@/locales';
import { setGlobalState } from '@/stores/global.store';
import { setUserItem } from '@/stores/user.store';

import { logoutAsync } from '../../stores/user.action';
import HeaderNoticeComponent from './notice';

const { Header } = Layout;

interface HeaderProps {
  collapsed: boolean;
  toggle: () => void;
}

type Action = 'userInfo' | 'userSetting' | 'logout';

const HeaderComponent: FC<HeaderProps> = ({ collapsed, toggle }) => {
  const { logged, locale, device } = useSelector(state => state.user);
  const { theme } = useSelector(state => state.global);
  const navigate = useNavigate();
  const token = antTheme.useToken();
  const dispatch = useDispatch();
  const { formatMessage } = useLocale();

  const onActionClick = async (action: Action) => {
    switch (action) {
      case 'userInfo':
        return;
      case 'userSetting':
        return;
      case 'logout':
        const res = Boolean(await dispatch(logoutAsync()));

        res && navigate('/login');

        return;
    }
  };

  const toLogin = () => {
    navigate('/login');
  };

  const selectLocale = ({ key }: { key: any }) => {
    dispatch(setUserItem({ locale: key }));
    localStorage.setItem('locale', key);
  };

  const onChangeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    localStorage.setItem('theme', newTheme);
    dispatch(
      setGlobalState({
        theme: newTheme,
      }),
    );
  };

  // 语言切换菜单
  const languageMenu = {
    items: [
      {
        key: 'zh_CN',
        icon: <GlobalOutlined />,
        disabled: locale === 'zh_CN',
        label: '简体中文',
      },
      {
        key: 'en_US',
        icon: <GlobalOutlined />,
        disabled: locale === 'en_US',
        label: 'English',
      },
    ],
    onClick: selectLocale, // 使用 selectLocale 作为点击事件的处理函数
  };

  // 用户登录菜单
  const userMenu = {
    items: [
      {
        key: 'account',
        icon: <UserOutlined />,
        label: <LocaleFormatter id="header.avator.account" />,
        onClick: () => navigate('/account'),
      },
      {
        key: 'logout',
        icon: <LogoutOutlined />,
        label: <LocaleFormatter id="header.avator.logout" />,
        onClick: () => onActionClick('logout'),
      },
    ],
  };

  return (
    <Header className="layout-page-header bg-2" style={{ backgroundColor: token.token.colorBgContainer }}>
      {device !== 'MOBILE' && (
        <div className="logo" style={{ width: collapsed ? 80 : 160 }}>
          <HomeTwoTone style={{ fontSize: '20px', marginRight: collapsed ? '2px' : '20px' }} twoToneColor="#1890ff" />
        </div>
      )}
      <div className="layout-page-header-main">
        <div onClick={toggle}>
          <span id="sidebar-trigger">{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</span>
        </div>
        <div className="actions">
          {/* 主题切换 */}
          <Tooltip
            title={formatMessage({
              id: theme === 'dark' ? 'gloabal.tips.theme.lightTooltip' : 'gloabal.tips.theme.darkTooltip',
            })}
          >
            <BulbOutlined onClick={onChangeTheme} />
          </Tooltip>
          <HeaderNoticeComponent />
          {/* 语言切换 */}
          <Dropdown menu={languageMenu}>
            <GlobalOutlined />
          </Dropdown>

          {logged ? (
            <Dropdown menu={userMenu}>
              <span className="user-action">
                <img src={Avator} className="user-avator" alt="avator" />
                {/* <UserOutlined className="user-avatar" /> */}
              </span>
            </Dropdown>
          ) : (
            <span style={{ cursor: 'pointer' }} onClick={toLogin}>
              {formatMessage({ id: 'gloabal.tips.login' })}
            </span>
          )}
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
