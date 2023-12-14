import type { RegisterParams } from '@/interface/user/login';
import type { FC } from 'react';

import './index.less';

import { Button, Checkbox, Form, Input, message, Modal } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { apiRegister, apiRequestVerifyToken, apiVerify } from '@/api/user.api';

const RegisterForm: FC = () => {
  const navigate = useNavigate();
  // const { formatMessage } = useLocale();
  const [verificationCode, setVerificationCode] = useState(''); // 用于存储验证码的状态
  const [openVerify, setOpenVerify] = useState<boolean>(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const onFinished = async (form: RegisterParams) => {
    // 请求注册,并给注册邮箱发送验证邮件
    const { status, result } = await apiRegister(form);

    if (status === true) {
      console.log(result);
      const reqVerifyRes = await apiRequestVerifyToken({ email: form.email });

      if (reqVerifyRes.status === true) {
        console.log('验证码发送到注册邮箱成功');
        setOpenVerify(true);
      }
    }
  };

  // 邮件验证码提交处理逻辑,用户认证
  const handleVerifySubmit = async () => {
    setConfirmLoading(true);
    const { status, result } = await apiVerify({ token: verificationCode });

    if (status === true) {
      console.log(result);
      message.success('注册及邮箱认证成功!');
      // 稍微延迟1秒,体验更佳
      setTimeout(() => {
        setConfirmLoading(false);
        setOpenVerify(false);
        navigate('/login');
      }, 1000);
    }
  };

  // 取消提交验证码
  const handleVerifyCancel = () => {
    console.log('Clicked cancel button');
    setOpenVerify(false);
  };

  return (
    <div className="register-page">
      <Form
        name="register"
        onFinish={onFinished}
        initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
        style={{ maxWidth: 600 }}
        scrollToFirstError
      >
        <h4>新用户注册</h4>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: '无效的邮箱地址!',
            },
            {
              required: true,
              message: '请输入你得邮箱地址!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: '请设置你的密码!',
            },
            {
              min: 8,
              message: '密码长度至少为8个字符',
            },
            {
              pattern: /^(?=.*[A-Za-z])(?=.*\d)/,
              message: '密码必须包含至少一个字母和一个数字',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: '请确认你的密码!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('前后密码不匹配,请检查你的密码!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error('请先阅读后同意协议'))),
            },
          ]}
        >
          <Checkbox>
            我已经阅读并同意 <a href="">用户协议</a>
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="register-page-form_button">
            注册并认证
          </Button>
        </Form.Item>
      </Form>
      <Modal
        title="验证令牌"
        open={openVerify}
        onOk={handleVerifySubmit}
        onCancel={handleVerifyCancel}
        confirmLoading={confirmLoading}
      >
        <Input
          placeholder="请查看邮件, 输入验证令牌"
          value={verificationCode}
          onChange={e => setVerificationCode(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default RegisterForm;
