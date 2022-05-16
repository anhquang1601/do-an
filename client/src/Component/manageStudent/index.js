import { useState, useEffect } from "react";
import { Breadcrumb, Input, Button, Typography, Table, Modal } from "antd";
import "./manageStudent.css";
import {
  HomeOutlined,
  UserOutlined,
  EditFilled,
  EyeFilled,
  DeleteFilled,
  DeleteTwoTone,
  EditTwoTone,
} from "@ant-design/icons";
import AddStudent from "./AddStudent";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Get } from "../action/student";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import { Delete } from "../action/student";
import EditStudent from "./editStudent";
const { Title, Text } = Typography;
const { Column } = Table;
const Index = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const student = useSelector((state) => state.studentReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("loiloi");
    dispatch(Get());
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handlerDelete = (id) => {
    dispatch(Delete(id));
  };
  const onEditStudent = (value) => {
    <EditStudent value={value}/> 
  }

  return (
    <div className="manageStudent">
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AddStudent />
      </Modal>
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
          <Breadcrumb.Item href="">
            <UserOutlined />
            <span>
              <Text style={{ fontFamily: "Roboto" }}>Quản lý sinh viên</Text>
            </span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Title level={5} style={{ marginLeft: "2.5%", marginTop: 10 }}>
        Quản lý sinh viên
      </Title>
      <div className="manageStudent_search">
        <div className="manage_headers">
          <Input
            style={{ borderRadius: 4, width: 250 }}
            placeholder="Mã sinh viên ..."
          />
        </div>
        <Button className="addStudent" onClick={showModal} type="primary">
          <NavLink to="/manage/addstudent">
            <Text style={{ color: "white" }}>Thêm mới sinh viên</Text>
          </NavLink>
        </Button>
      </div>
      <div className="manageStudent_table">
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
              key="_id"
              render={(text, render) => {
                return (
                  <div>
                    <NavLink to="/manage/editSudent">
                      <EditFilled
                         onClick={() => onEditStudent(render)} 
                        style={{ marginRight: 15 }}
                      />
                    </NavLink>
                    <DeleteFilled   onClick={() => handlerDelete(text)} style={{ marginRight: 15 }} />
                  </div>
                );
              }}
            />
          </Table>
        )}
      </div>
    </div>
  );
};
export default Index;
