import {
  DatePicker,
  Button,
  Select,
  Breadcrumb,
  Card,
  Image,
  Table,
  Input,
  Modal,
} from "antd";
import { Form } from "antd";
import { Tabs } from "antd";
import { BrowserRouter as NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  HomeOutlined,
  UserOutlined,
  MoneyCollectFilled,
  EditFilled,
  ExclamationCircleOutlined
} from "@ant-design/icons";
import { Typography } from "antd";
import { useState, useEffect } from "react";
import "./billRoom.css";
import CreateBill from "./createBill";
import Payment from "./Payment";
import { getBillRoom } from "../action/student";
import { updateBillRoom } from "../action/student";
import { updatePayRoom } from "../action/student";
import { getPayRoom } from "../action/student";
const { Text, Title } = Typography;
const { TabPane } = Tabs;
const { Column } = Table;
const Option = Select;

function BillRoom() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisiblePayment, setIsModalVisiblePayment] = useState(false);
  const dispatch = useDispatch()
  const payRoom = useSelector((state) => state.billRoomReducer.payRoom)
  const state = useSelector((state) => state.billRoomReducer.billRoom);
  const [obj, setObj] = useState({});
  const [maphong, setMaphong] = useState();
  const [nhavientao, setNhanvientao] = useState();
  const [ngaytao, setNgaytao] = useState();
  const [sodientieuthu, setSodientieuthu] = useState();
  const [sonuoctieuthu, setSonuoctieuthu] = useState();
  const [giadien, setgiadien] = useState();
  const [gianuoc, setgianuoc] = useState();
  const [id, setId] = useState();
  const array = ["Nguyễn Quang Anh", "Lê Thị Oanh", "Hoàng Minh Thảo"];
  useEffect(() => {
    dispatch(getBillRoom());
  }, []);
  const onOKPayMent = () => {
    setIsModalVisiblePayment(false);
  };
  const onCancelPayMent = () => {
    setIsModalVisiblePayment(false);
  };
  const renderModal = (text, key) => {
    console.log("key", key);
    setObj(key);
    setIsModalVisible(true);
    setMaphong(key.maphong);
    setId(key._id);
  };
  const onOK = () => {
    setIsModalVisible(false);
    const payload = {
      maphong,
      ngaytao,
      nhavientao,
      sodientieuthu,
      giadien,
      sonuoctieuthu,
      gianuoc,
      id,
    };
    dispatch(updateBillRoom(payload));
  };
  const onCancel = () => {
    setIsModalVisible(false);
  };
  function onChange(date, dateString) {
    console.log(date, dateString);
    setNgaytao(dateString);
  }
  function onChangeSelect(value) {
    console.log("value", value);
  }
  function confirm(id) {
    Modal.confirm({
      title: 'Bạn đồng ý thanh toán hóa đơn không',
      icon: <ExclamationCircleOutlined />,
      okText: <div onClick={() => dispatch(updatePayRoom(id))}>Đồng ý</div>,
      cancelText: 'Quay lại',
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
              <Text style={{ fontFamily: "Roboto" }}>
                Quản lý hóa đơn điện nước
              </Text>
            </span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="body_rentRoom">
        <Modal
          visible={isModalVisible}
          onOk={onOK}
          onCancel={onCancel}
          title="Tạo hóa đơn điện nước"
        >
          <Form>
            <Form.Item
              name="maphong"
              label="Mã phòng"
              rules={[{ required: true }]}
            >
              {console.log("maphong", maphong)}
              <Input value={maphong} />
            </Form.Item>
            <Form.Item
              name="ngaytao"
              label="Ngày Tạo"
              rules={[{ required: true }]}
            >
              <DatePicker onChange={onChange} />
            </Form.Item>
            <Form.Item
              name="nhanvienlap"
              label="Nhân viên lập"
              rules={[{ required: true }]}
              value="kkkkk"
              onChange={onChangeSelect}
            >
              <Select>
                <Option value={"Nguyễn Quang Anh"}>Nguyễn Quang Anh</Option>
                <Option value={"Hoàng Khắc Hòa"}>Hoàng Khắc Hòa</Option>
                <Option value={"Lê Thi Thảo Quyên"}>Lê Thi Thảo Quyên</Option>
                <Option value={"Nguyễn Thị Hương"}>Nguyễn Thị Hương</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="sodientieuthu"
              label="Số điện tiêu thụ"
              rules={[{ required: true }]}
            >
              <Input
                value={sodientieuthu}
                onChange={(e) => setSodientieuthu(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="giadien"
              label="giá điện"
              rules={[{ required: true }]}
            >
              <Input
                value={giadien}
                onChange={(e) => setgiadien(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="sonuoctieuthu"
              label="Số nước tiêu thụ"
              rules={[{ required: true }]}
            >
              <Input
                value={sonuoctieuthu}
                onChange={(e) => setSonuoctieuthu(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="gianuoc"
              label="giá nước"
              rules={[{ required: true }]}
            >
              <Input
                value={gianuoc}
                onChange={(e) => setgianuoc(e.target.value)}
              />
            </Form.Item>
          </Form>
        </Modal>

        <Tabs onChange={()=>dispatch(getPayRoom())}>
          <TabPane tab="Danh sách sinh viên chưa đóng" key="1">
            <div className="billRoom_input">
              <Input placeholder="Search ..." className="search_staff" />
            </div>
            <Table className="table" dataSource={state}>
              <Column title="Mã phong" dataIndex="maphong" key="maphong" />
              <Column title="Ngày lập" dataIndex="ngaylap" key="ngaylap" />
              <Column
                title="Nhân viên lập"
                dataIndex="nhanvienlap"
                key="nhanvienlap"
              />
              <Column
                title="Số điện tiêu thụ"
                dataIndex="sodientieuthu"
                key="sodientieuthu"
              />
              <Column
              title="Giá điện"
              dataIndex="giadien"
              key="giadien"
              />
              <Column
                title="Số nước tiêu thụ"
                dataIndex="sonuoctieuthu"
                key="sonuoctieuthu"
              />
              <Column title="Giá nước" dataIndex="gianuoc" key="gianuoc" />
              <Column title="Tổng Tiền" dataIndex="tongtien" key="tongtien" />
              <Column
                title="Hành động"
                dataIndex="_id"
                key="_id"
                render={(text, key) => (
                  
                  <div>
                    {console.log("text",text)}
                    <EditFilled
                      onClick={() => renderModal(text, key)}
                      style={{ marginLeft: 15 }}
                    />
                    <MoneyCollectFilled onClick={() => confirm(text)} style={{ marginLeft: 30 }} />
                  </div>
                )}
              />
            </Table>
          </TabPane>
          <TabPane tab="Danh sách sinh viên đã đóng" key="2">
            <Input placeholder="Search ..." className="search_staff" />
            <Table className="table" dataSource={payRoom}>
              <Column title="Mã phong" dataIndex="maphong" key="maphong" />
              <Column title="Ngày lập" dataIndex="ngaylap" key="ngaylap" />
              <Column
                title="Nhân viên lập"
                dataIndex="nhanvienlap"
                key="nhanvienlap"
              />
              <Column
                title="Số điện tiêu thụ"
                dataIndex="sodientieuthu"
                key="sodientieuthu"
              />
              <Column
              title="Giá điện"
              dataIndex="giadien"
              key="giadien"
              />
              <Column
                title="Số nước tiêu thụ"
                dataIndex="sonuoctieuthu"
                key="sonuoctieuthu"
              />
              <Column title="Giá nước" dataIndex="gianuoc" key="gianuoc" />
              <Column title="Tổng Tiền" dataIndex="tongtien" key="tongtien" />
              <Column
                title="Hành động"
                dataIndex="_id"
                key="_id"
                render={(text, key) => (
                  
                  <div>
                    {console.log("text",text)}
                    <EditFilled
                      onClick={() => renderModal(text, key)}
                      style={{ marginLeft: 15 }}
                    />
                    <MoneyCollectFilled onClick={() => confirm(text)} style={{ marginLeft: 30 }} />
                  </div>
                )}
              />
            </Table>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
export default BillRoom;
