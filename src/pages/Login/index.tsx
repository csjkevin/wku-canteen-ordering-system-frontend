import Logo from '@/components/Logo';
import HomeLayout from '@/layouts/HomeLayout';
import { Button, Form, Input } from 'antd-mobile/es';
import { Link } from 'umi';

import styles from './index.less';

const LoginPage: React.FC = () => {
  const upper = (
    <>
      <Logo />
      <div className={styles.login}>
        <Form
          className={`${styles.form} my-form`}
          layout="horizontal"
          footer={
            <div className={styles.buttons}>
              <Button block type="submit" color="primary" size="large">
                登录
              </Button>
              <Link to="/register">
                <Button block color="primary" fill="outline" size="large">
                  注册
                </Button>
              </Link>
            </div>
          }
        >
          <Form.Item
            label="邮箱"
            name="email"
            rules={[
              { required: true },
              {
                type: 'email',
                message: '请输入正确的邮箱地址',
              },
            ]}
          >
            <Input placeholder="请输入邮箱" clearable />
          </Form.Item>
          <Form.Item label="密码" name="password" rules={[{ required: true }]}>
            <Input placeholder="请输入密码" clearable type="password" />
          </Form.Item>
        </Form>
      </div>
    </>
  );

  return <HomeLayout upper={upper} />;
};

export default LoginPage;
