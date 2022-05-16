import { Form, Select, Input } from "antd";
import { useState } from "react";
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;
function handleChange(value) {
  console.log(`Selected: ${value}`);
}
function AddContract() {
  const children = [];
  const [size, setSize] = useState("default");
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }
  return (
    <div>
      <Form>
        <Form.Item
          name="note"
          label="Mã sinh viên"
          rules={[{ required: true }]}
        >
          <Select
            size={size}
            defaultValue="a1"
            onChange={handleChange}
            style={{ width: 200 }}
            className="Select_addContract"
          >
            {children}
          </Select>
        </Form.Item>
        <Form.Item
          name="note"
          label="Tên sinh viên"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="note" label="Ảnh hợp đồng" rules={[{ required: true }]}>
          <Upload >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
      </Form>
    </div>
  );
}
export default AddContract;
