import {
  Button,
  Breadcrumb,
  Table,
  Modal,
  Input,
} from "antd";
import { useState, useEffect } from "react";
import AddContract from "./AddContract";
import { HomeOutlined, UserOutlined, EditFilled ,DeleteFilled  } from "@ant-design/icons";
import { Typography } from "antd";
import { gethopdong } from "../action/student";
import { useDispatch, useSelector } from "react-redux";
import "./contract.css";
const { Text, Title } = Typography;
const { Column } = Table;
function Contract() {
  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const dispatch = useDispatch()
  const data = useSelector((state) => state.hopdongReducer)
  console.log("stateqqq",data)
  const showMdal = () =>{
    setIsVisibleModal(true)
  }
  const onOK = () =>{
    setIsVisibleModal(false)
  }
  const onCancel = () =>{
    setIsVisibleModal(false)
  }
  useEffect(() => {
    dispatch(gethopdong())
  }, []);
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
              <Text style={{ fontFamily: "Roboto" }}>Quản lý hợp đồng</Text>
            </span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="contractBody">
        <div className="contract_title">
          <Title level={5}>Quản lý hợp đồng</Title>
        </div>
        <div className="contract_table">
        <div style={{ marginTop: 10, display: "flex", height: 40 }}>
          <Input placeholder="Search ..." className="search_staff" />
        </div>
          <div>
            <Modal
              visible ={isVisibleModal}
              onOk={onOK}
              onCancel={onCancel}
              title="Thêm mới hợp đồng"
            >
              <AddContract/>
            </Modal>
            {data.isloading ? null : (
          <Table className="table" dataSource={data.hopdong}>
             <Column title="Mã sinh viên" dataIndex="masv" key="masv" />
            <Column title="Họ và tên" dataIndex="hoten" key="hoten" />
            <Column title="Mã phòng" dataIndex="maphong" key="maphong" />
            <Column title="Ngày Tạo" dataIndex="ngaytao" key="ngaytao" />
            <Column title="Năm sinh" dataIndex="namsinh" key="namsinh" />
            <Column title="Địa chỉ" dataIndex="diachi" key="diachi" />
          </Table>
        )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contract;
