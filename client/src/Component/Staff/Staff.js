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
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import "./staff.css";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
const { Text, Title } = Typography;

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Nguồn",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Ngày Tạo",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Họ và tên",
    dataIndex: "addres3s",
    key: "address",
  },
  {
    title: "Ngày sinh",
    dataIndex: "addres2s",
    key: "address",
  },
  {
    title: "Sinh viên trường",
    dataIndex: "address1",
    key: "address",
  },
  {
    title: "Hoạt động",
    dataIndex: "address1",
    key: "address",
  },
];
function Staff() {
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
              <Text style={{ fontFamily: "Roboto" }}>Quản lý nhân viên</Text>
            </span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="body_staff">
        <div style={{ marginTop: 10, display: "flex" }}>
          <Title level={5}>Quản lý nhân viên</Title>
        </div>
        <div style={{ marginTop: 10, display: "flex", height: 40 }}>
          <Input placeholder="Search ..." className="search_staff" />
          <Button className="btn_Search">
            <NavLink to="/manage/addStaff">
              <Text style={{ color: "white" }}>Thêm mới nhân viên</Text>
            </NavLink>
          </Button>
        </div>
        <div>
          <Table className="table" dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </div>
  );
}
export default Staff;
