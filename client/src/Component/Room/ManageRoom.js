import {
  Button,
  Select,
  Breadcrumb,
  Table,
  Input,
  Modal,
} from "antd";
import { HomeOutlined, UserOutlined, EditFilled,DeleteFilled } from "@ant-design/icons";
import { Typography } from "antd";
import { useState, useEffect } from "react";
import { Form } from "antd";
import { postRoom } from "../action/room";
import { useDispatch, useSelector } from "react-redux";
import { getRoomAll } from "../action/room";
import AddRoom from "./addRoom";
import { updateRoom } from "../action/student";
const { Option } = Select;
const { Text, Title } = Typography;
const children = [];
const { Column } = Table;
for (let i = 1; i < 5; i++) {
  children.push(<Option key={"A" + i}>{"A" + i}</Option>);
}

function ManageRoom() {
  const [isModalVisible, setIsVisibleModal] = useState(false);
  const [isModalVisibleEdit, setVisibleModalEdit] = useState(false)
  const [size, setSize] = useState("default");
  const [tentoanha, setTentoanha] = useState("");
  const [maphong, setMaphong] = useState("");
  const [tenphong, setTenphong] = useState("");
  const [id, setId] = useState("")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoomAll());
  }, []);
  const getRoom = useSelector((state) => state.getRoomReducer.roomAll);
  console.log("getRoomAll", getRoom);
  const showModal = () => {
    setIsVisibleModal(true);
  };
  const handlerCancel = () => {
    setIsVisibleModal(false);
  };
  const onOk = () => {
    const payload = {
      tentoanha: tentoanha,
      maphong: maphong,
      tenphong: tenphong,
    };
    dispatch(postRoom(payload));
    setIsVisibleModal(false);
    dispatch(getRoomAll());
  };
  function handleChange(value) {
    console.log("value", value);
    setTentoanha(value);
  }
  const onOkEdit = () => {
    const payload = {
      id: id,
      maphong: maphong,
      tenphong: tenphong
    }
    setVisibleModalEdit(false)
    dispatch(updateRoom(payload))
  }
  const handlerCancelEdit = () => {
    setVisibleModalEdit(false)
  }
  const handlerEdit = (value) => {
    setVisibleModalEdit(true)
    console.log("value",value)
    setTentoanha(value.tentoanha)
    setMaphong(value.maphong)
    setTenphong(value.tenphong)
    setId(value._id)
  }
 
  function handlerDelete(id) {
    Modal.confirm({
      title: 'B???n ?????ng ?? x??a ph??ng kh??ng ?',
      okText: <div>?????ng ??</div>,
      cancelText: 'Quay l???i',
    });
  }
  return (
    <div>
      <div
        className="headerManage"
        style={{
          background: "white",
          height: 64,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: 30,
        }}
      >
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/manage/student">
            <UserOutlined />
            <span>
              <Text style={{ fontFamily: "Roboto" }}>Qu???n l?? ph??ng</Text>
            </span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="body_manageRoom">
        <div>
          <Modal
            title="Th??m m???i ph??ng"
            visible={isModalVisible}
            onOk={onOk}
            onCancel={handlerCancel}
          >
            <Form>
              <Form.Item
                name="note1"
                label="T??n t??a nh??"
                rules={[{ required: true }]}
              >
                <Select
                  defaultValue="M???i b???n ch???n t??a nh??"
                  onChange={handleChange}
                  style={{ width: 200 }}
                >
                  {children}
                </Select>
              </Form.Item>
              <Form.Item
                name="note2"
                label="M?? ph??ng"
                rules={[{ required: true }]}
              >
                <Input onChange={(e) => setMaphong(e.target.value)} />
              </Form.Item>
              <Form.Item
                name="note3"
                label="T??n ph??ng"
                rules={[{ required: true }]}
              >
                <Input onChange={(e) => setTenphong(e.target.value)} />
              </Form.Item>
            </Form>
          </Modal>
        </div>
        <div>
          <Modal
            title="S???a ph??ng"
            visible={isModalVisibleEdit}
            onOk={onOkEdit}
            onCancel={handlerCancelEdit}
          >
            <Form>
              <Form.Item
                name="note1"
                label="T??n t??a nh??"
                rules={[{ required: true }]}
              >
                <Input disabled defaultValue={tentoanha}/>
              </Form.Item>
              <Form.Item
                name="note2"
                label="M?? ph??ng"
                rules={[{ required: true }]}
              >
                <Input defaultValue={maphong} onChange={(e) => setMaphong(e.target.value)} />
              </Form.Item>
              <Form.Item
                name="note3"
                label="T??n ph??ng"
                rules={[{ required: true }]}
              >
                <Input defaultValue={tenphong} onChange={(e) => setTenphong(e.target.value)} />
              </Form.Item>
            </Form>
          </Modal>
        </div>
        <div style={{ marginTop: 10, display: "flex" }}>
          <Title level={5}>Qu???n l?? ph??ng</Title>
        </div>
        <div style={{ marginTop: 10, display: "flex", height: 40 }}>
          <Input placeholder="Search ..." className="search_staff" />
          <Button className="btn_Search" onClick={showModal}>
            <Text style={{ color: "white" }}>Th??m m???i ph??ng</Text>
          </Button>
        </div>
        <div>
          <Table className="table" dataSource={getRoom}>
            <Column title="T??n t??a nh??" dataIndex="tentoanha" key="tentoanha" />
            <Column title="M?? ph??ng" dataIndex="maphong" key="maphong" />
            <Column title="T??n ph??ng" dataIndex="tenphong" key="tenphong" />
            <Column 
              title="H??nh ?????ng" 
              dataIndex="_id" 
              key="_id"
              width={"10%"}
              render = {(text,render) => {
                return (
                  <div>
                    <EditFilled
                      style={{ marginRight: 15 }}
                      onClick={() => handlerEdit(render)}
                    />
                    <DeleteFilled  onClick={() => handlerDelete(text)}  style={{ marginRight: 15 }} />
                  </div>
                );
              }}
              />
          </Table>
        </div>
      </div>
    </div>
  );
}
export default ManageRoom;
