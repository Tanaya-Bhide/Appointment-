import React from "react";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { showLoading } from "../redux/alertsSlice";
import { hideLoading } from "../redux/alertsSlice";
function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading);
      const response = await axios.post("api/user/register", values);
      dispatch(hideLoading);
      console.log(values);
      if (response.data.success) {
        toast.success(response.data.message);
        toast("Redirecting to login page");
        navigate("/login");
      } else {
        toast.success(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading);
      console.log(error);
    }
  };
  return (
    <div className="authentication">
      {" "}
      <div className="authentication-form card p-2">
        {" "}
        <h1 className="card-title">Nice to meet You</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name" name="name">
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>
          <Button className="primary-button my-3" htmlType="submit">
            Register
          </Button>
          <Link to="/login" className="anchor mt-2">
            Click here to continue
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Register;
