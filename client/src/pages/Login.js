import React from "react";
import { Button, Form, Input } from "antd";
import {Link} from 'react-router-dom'
function Login() {
  const onFinish = (values) => {
    console.log("Received values of form : ", values);
  };
  return (
    <div className="authentication">
      {" "}
      <div className="authentication-form card p-2">
        {" "}
        <h1 className="card-title">Welcome Back ! </h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>
          <Button className="primary-button my-3" htmlType="submit">
            login
          </Button>
          <Link className="anchor mt-2" to="/register">
            click here to Register
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;
