import { Form, Input, Button, Select, DatePicker, Space } from "antd";
import { useState } from "react";
import "./billRoom.css";
const { Option } = Select;
function CreateBill() {
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  }
  return (
    <div className="create_bill">
      <Form name="control-ref">
        <Form.Item name="note" label="Mã phòng" rules={[{ required: true }]}>
          <Select>{children}</Select>
        </Form.Item>
        <Form.Item name="note" label="Ngày tạo" rules={[{ required: true }]}>
        <DatePicker className="dataPicker" onChange={onChange} />
        </Form.Item>
        <Form.Item name="note" label="Nhân viên lập" rules={[{ required: true }]}>
        <Select>{children}</Select>
        </Form.Item>
        <Form.Item name="note" label="Số điện tiêu thụ" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="note" label="giá điện" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="note" label="Số nước tiêu thụ" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="note" label="Giá nước" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
}
export default CreateBill;
