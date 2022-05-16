import { Form, Select, Input, Button, Modal } from "antd";
import { useState, useEffect } from "react";
import { GetRoom } from "../action/room";
import { useDispatch, useSelector } from "react-redux";
import { GetRoomIsloading } from "../action/room";
const { Option } = Select;
function ModalRentRoom(props) {
  const dispatch = useDispatch();
  const children = [];
  const array = [];
  const [size, setSize] = useState("default");
  const [maphong, setMaphong] = useState("");
  const room = useSelector((state) => state.getRoomReducer);
  for (let i = 1; i < 4; i++) {
    children.push(<Option key={"A" + i.toString(36)}>A{i}</Option>);
  }
  useEffect(() => {
    dispatch(GetRoomIsloading());
  }, []);

  function handleChange(value) {
    dispatch(GetRoom(value));
  }

  const options = room.room?.data || [];
  const children2 = [];
  options.map((e) => {
    children2.push(<Option key={e.maphong}>{e.map}</Option>);
  });

  return (
    <div>
      <Form>
        <Form.Item name="note" label="Tên tòa nhà" rules={[{ required: true }]}>
          <Select
            size={size}
            defaultValue="Mời bạn chọn tên tòa nhà"
            onChange={handleChange}
            style={{ width: 200 }}
          >
            {children}
          </Select>
        </Form.Item>
        <Form.Item name="maphong" label="Mã phòng" rules={[{ required: true }]}>
          <Select onChange={(value) => props.callback(value)}>
            {children2}
          </Select>
        </Form.Item>
        <Form.Item
          name="tenphong"
          label="Tên phòng"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
}
export default ModalRentRoom;
