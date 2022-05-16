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
  HomeOutlined,
  UserOutlined,
  EditFilled,
  EyeFilled,
  DeleteFilled,
} from "@ant-design/icons";
import { Typography } from "antd";
import "./index.css";
import { useState } from "react";
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
    title: "Mã tòa nhà",
    dataIndex: "name",
    key: "name",
    width: "10%",
  },
  {
    title: "Mã phòng",
    dataIndex: "age",
    key: "age",
    width: "20%",
  },
  {
    title: "Giường",
    dataIndex: "addres3s",
    key: "address",
    width: "30%",
  },
  {
    title: "Bóng điện",
    dataIndex: "addres2s",
    key: "address",
    width: "10%",
  },
  {
    title: "Tủ",
    dataIndex: "address1",
    key: "address",
    with: "20%",
  },
  {
    title: "Hoạt động",
    dataIndex: "address1",
    key: "address",
    width: "10%",
    render: () => {
      return (
        <div>
          <EditFilled style={{ marginRight: 15 }} />
          <DeleteFilled style={{ marginRight: 15 }}/>
        </div>
      );
    },
  },
];
const IndexSupplies = () => {
    const [isVisibleModal, setIsVisibleModal] = useState(false)
    const showMdal = () =>{
      setIsVisibleModal(true)
    }
    const onOK = () =>{
      setIsVisibleModal(false)
    }
    const onCancel = () =>{
      setIsVisibleModal(false)
    }
  return (
    <div className="supplies">
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
              <Text style={{ fontFamily: "Roboto" }}>Quản lý vật tư</Text>
            </span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="contractBody">
        <div className="contract_title">
          <Title level={5}>Quản lý vật tư</Title>
        </div>
        <div className="contract_table">
          <div style={{ marginTop: 10, display: "flex", height: 40 }}>
            <Input placeholder="Search ..." className="search_staff" />
            <Button className="btn_Search" onClick={showMdal}>
              <Text style={{ color: "white" }}>Thêm mới vật tư</Text>
            </Button>
          </div>
          <div>
           {/*  <Modal
              visible={isVisibleModal}
              onOk={onOK}
              onCancel={onCancel}
              title="Thêm mới hợp đồng"
            >
              <AddContract />
            </Modal> */}
            <Table
              className="table"
              dataSource={dataSource}
              columns={columns}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default IndexSupplies;
