import "./Sigin.css";
import { Form, Input, Button, Checkbox, message } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import postUser from "../action/user";
import getUserPassword from "../action/getUser";

import { useHistory } from "react-router-dom";

const Register = (props) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const onFinish = (values) => {
    if (values.password === values.EnterThePassword) {
      dispatch(postUser(values));
      message.error("Tạo tài khoản thành công");
      history.push("/");
    } else {
      message.error("password and enter the password fail");
    }
  };

  const onFinishFailed = (errorInfo) => {
  
  };
  useEffect(() => {
    dispatch(getUserPassword());
  }, []);
  return (
    <div style={{ height: 1000 }}>
      <Form
        style={{ height: 400 }}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Enter the password"
          name="EnterThePassword"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Đăng Ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Register;
