import MainLayout from '@/layouts/MainLayout';
import { Button, Form, Input, Picker } from 'antd-mobile/es';
import { useState } from 'react';

import styles from './index.less';

const RegisterPage: React.FC = () => {
  const [domitoryPickerVisible, setDomitoryPickerVisible] = useState(false);
  const [domitoryPickerValue, setDomitoryPickerValue] =
    useState<(string | null)[]>();
  const [form] = Form.useForm();

  return (
    <MainLayout title="注册">
      <Form
        className={`${styles.form} my-form`}
        form={form}
        layout="horizontal"
        footer={
          <Button block type="submit" color="primary" size="large">
            注册
          </Button>
        }
      >
        <Form.Item
          label="邮箱"
          name="email"
          rules={[
            { required: true },
            { type: 'email', message: '请输入正确的邮箱地址' },
          ]}
        >
          <Input placeholder="请输入邮箱" clearable />
        </Form.Item>
        <Form.Item label="密码" name="password" rules={[{ required: true }]}>
          <Input placeholder="请输入密码" clearable type="password" />
        </Form.Item>
        <Form.Item
          label="确认密码"
          name="passwordConfirm"
          rules={[
            { required: true },
            {
              validator: (_: any, value: string) => {
                if (form.getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject();
              },
              message: '两次输入的密码不一致',
            },
          ]}
        >
          <Input placeholder="请再次输入密码" clearable type="password" />
        </Form.Item>
        <Form.Item
          label="寝室楼"
          name="domitory"
          trigger="onConfirm"
          required={true}
          onClick={() => {
            setDomitoryPickerVisible(true);
          }}
        >
          <Picker
            columns={[]}
            visible={domitoryPickerVisible}
            onClose={() => {
              setDomitoryPickerVisible(false);
            }}
            value={domitoryPickerValue}
            onConfirm={(value) => {
              setDomitoryPickerValue(value);
            }}
          />
          {domitoryPickerValue ? (
            domitoryPickerValue
          ) : (
            <span style={{ color: 'var(--adm-color-light)' }}>
              请选择你所在的寝室楼
            </span>
          )}
        </Form.Item>
        <Form.Item
          label="寝室号"
          name="roomNumber"
          rules={[
            { required: true },
            { pattern: /\d{3,4}/, message: '请输入正确的寝室号' },
          ]}
        >
          <Input placeholder="请输入寝室号" clearable />
        </Form.Item>
      </Form>
    </MainLayout>
  );
};

export default RegisterPage;
