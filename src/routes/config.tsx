import { Button, Result } from 'antd';
import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// 假设 PrivateRoute 是一个根据认证状态渲染路由的组件

export interface WrapperRouteProps {
  titleId: string;
  requiresLogin?: boolean;
  requiresSuperUser?: boolean;
  element: React.ReactElement;
}

const WrapperRouteComponent: React.FC<WrapperRouteProps> = ({ titleId, requiresLogin, requiresSuperUser, element }) => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const { logged, isSuperUser } = useSelector(state => state.user);

  useEffect(() => {
    document.title = formatMessage({ id: titleId });
  }, [formatMessage, titleId]);

  // 检查是否满足登录要求
  const isLoginRequired = requiresLogin && !logged;
  // 检查是否满足超级用户要求
  const isSuperUserRequired = requiresSuperUser && !isSuperUser;

  // 用户未登录时的处理
  const handleGoToLogin = () => {
    navigate(`/login?from=${encodeURIComponent(location.pathname)}`, { replace: true });
  };

  if (isLoginRequired || isSuperUserRequired) {
    // 显示403错误页面
    return (
      <Result
        status="403"
        title="403"
        subTitle={isLoginRequired ? 'Login required' : 'Superuser privileges required'}
        extra={
          <Button type="primary" onClick={handleGoToLogin}>
            {formatMessage({ id: 'gloabal.tips.goToLogin' })}
          </Button>
        }
      />
    );
  }

  return element;
};

export default WrapperRouteComponent;
