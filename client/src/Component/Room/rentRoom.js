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
import { Tabs } from "antd";
import { BrowserRouter as NavLink } from "react-router-dom";
import { DeleteFilled , UserOutlined, EditFilled, HomeOutlined} from "@ant-design/icons";
import { Typography } from "antd";
import ModalRentRoom from "./modalRentRoom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateRentRoom } from "../action/student";
import { GetSuccess, Get } from "../action/student";
import { useEffect } from "react";
const { Text, Title } = Typography;
const { TabPane } = Tabs;
const { Column } = Table;
function RentRoom() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [id, setId] = useState("")
  const [maphong, setMaphong] = useState("")
  const student = useSelector((state) => state.studentReducer);
  const studentSucess = useSelector((state) => state.studentReducer.studentSucces);
  const isLoaDing = useSelector((state) => state.studentReducer.isloading);
  const dispatch = useDispatch();
  const onClose = () =>{
    setIsModalVisible(false)
    dispatch(updateRentRoom({maphong: maphong, id: id}))
  }
  useEffect(() => {
    dispatch(GetSuccess())
    dispatch(Get())
  }, []);
  const btnModal = (data) =>{
    setIsModalVisible(true)
    setId(data)
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
              <Text style={{ fontFamily: "Roboto" }}>Thuê phòng</Text>
            </span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="body_rentRoom">
        <Modal
          visible={isModalVisible}
          onOk={() => onClose()}
          onCancel={() => setIsModalVisible(false)}
        >
          <ModalRentRoom  callback={(e) => setMaphong(e)}/>
        </Modal>
        <Tabs onChange={()=> dispatch(GetSuccess())}>
          <TabPane tab="Danh sách sinh viên chưa đăng ký" key="1">
            <Input placeholder="Search ..." className="search_staff" />
            {student.isloading ? null : (
              <Table className="table" dataSource={student.student}>
                <Column title="Mã sinh viên" dataIndex="masv" key="masv" />
                <Column title="Họ và tên" dataIndex="hoten" key="hoten" />
                <Column title="Email" dataIndex="email" key="email" />
                <Column title="Năm sinh" dataIndex="namsinh" key="namsinh" />
                <Column title="Số điện thoại" dataIndex="sdt" key="sdt" />
                <Column
                  title="Hành động"
                  dataIndex="_id"
                  width={"10%"}
                  key="_id"
                  render={(text, render) => {
                    return (
                      <Button className="btn-rentRoom" onClick={() => btnModal(text)}>
                        Thuê phòng
                      </Button>
                    );
                  }}
                />
              </Table>
            )}
          </TabPane>
          <TabPane tab="Danh sách sinh viên đã đăng ký" key="2">
            <Input placeholder="Search ..." className="search_staff" />
            {studentSucess ? (
              <Table className="table" dataSource={studentSucess}>
                <Column title="Mã sinh viên" dataIndex="masv" key="masv" />
                <Column title="Họ và tên" dataIndex="hoten" key="hoten" />
                <Column title="Email" dataIndex="email" key="email" />
                <Column title="Năm sinh" dataIndex="namsinh" key="namsinh" />
                <Column title="Số điện thoại" dataIndex="sdt" key="sdt" />
                <Column
                  title="Hành động"
                  dataIndex="_id"
                  width={"10%"}
                  key="_id"
                  render={(text, render) => {
                    return (
                      <div>
                    <NavLink to="/manage/editSudent">
                      <EditFilled
                      /*    onClick={() => onEditStudent(render)}  */
                        style={{ marginRight: 15, marginLeft: 15 }}
                      />
                    </NavLink>
                    <DeleteFilled  style={{ marginRight: 15 }} />
                  </div>
                    );
                  }}
                />
              </Table>
            ):null}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
export default RentRoom;
