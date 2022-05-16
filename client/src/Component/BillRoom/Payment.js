import { Form, Select, Input, DatePicker, Modal } from "antd";
import { useState, useEffect } from "react";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { updateBillRoom } from "../action/student";
const { Option } = Select;
function handleChange(value) {
  console.log(`Selected: ${value}`);
}

function onChange(date, dateString) {
  console.log(date, dateString);
}

function Payment(props) {
  const[isModalVisible, setIsModalVisible] = useState(props.visible)
  const dispatch = useDispatch();
  const state = useSelector((state) => state.billRoomReducer.billRoom);
  console.log("state33", state);
  useEffect(() => {}, []);

  const children = [];
  const [size, setSize] = useState("default");
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }
  async function handleLogin(values, props) {
    console.log("value",values)
  }
  const onFinishFailed = () => {
   
  };
  const onOK = () => {
    setIsModalVisible(false);
  };
  const onCancel = () => {
    setIsModalVisible(false);
  };
  return (
     <Modal
    visible={isModalVisible}
    onOk={onOK}
    onCancel={onCancel}
    title="Tạo hóa đơn điện nước"
  >
      <Form name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={handleLogin}
      onFinishFailed={onFinishFailed}
      autoComplete="off">
        <Form.Item name="maphong" label="Mã phòng" rules={[{ required: true }]}>
          <Input value={props.obj.maphong} />
        </Form.Item>
        <Form.Item name="ngaytao" label="Ngày Tạo" rules={[{ required: true }]}>
          <DatePicker onChange={onChange} />
        </Form.Item>
        <Form.Item
          name="nhanvienlap"
          label="Nhân viên lập"
          rules={[{ required: true }]}
          value="kkkkk"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="sodientieuthu"
          label="Số điện tiêu thụ"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="giadien" label="giá điện" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="sonuoctieuthu"
          label="Số nước tiêu thụ"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="gianuoc" label="giá nước" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
export default Payment;
