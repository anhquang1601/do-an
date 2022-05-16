import {
  DatePicker,
  Button,
  Select,
  Breadcrumb,
  Card,
  Image,
  Table,
  Input,
} from "antd";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { UploadOutlined } from "@ant-design/icons";

import "./room.css";
import { Typography } from "antd";
import { Form } from "antd";
import { FormInstance } from "antd/es/form";
import { useState } from "react";
const { Option } = Select;
const { Text, Title } = Typography;

function AddRoom() {
  const children = [];
  const [size, setSize] = useState('default');
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }
  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }
  return (
    <div className="form_addRoom">
      <Form>
        <Form.Item name="note" label="Tên tòa nhà" rules={[{ required: true }]}>
          <Select
            size={size}
            defaultValue="a1"
            onChange={handleChange}
            style={{ width: 200 }}
          >
            {children}
          </Select>
        </Form.Item>
        <Form.Item name="note" label="Mã phòng" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="note" label="Tên phòng" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
}
export default AddRoom;
