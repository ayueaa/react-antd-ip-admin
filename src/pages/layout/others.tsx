import { FloatButton } from 'antd';
import Icon, { GithubOutlined } from '@ant-design/icons';
// 全局悬浮按钮

const PageFloatButtons = () => {
    return (
        <>
            <FloatButton style={{ padding: "0px" }}
                icon={<GithubOutlined />}
                href="https://github.com/ayueaa/react-antd-ip-admin"
                target='_blank'
                tooltip="Go to Github"
            />
        </>
    );
};

export { PageFloatButtons };
