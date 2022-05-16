import React from "react";
import { Input, Typography } from "antd";
import "./manageStudent.css";
import { DatePicker, Button, Select, Breadcrumb, Radio } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Post } from "../action/student";
import { useDispatch } from "react-redux";
import { useState } from "react";
const { Text, Title } = Typography;
const { Option } = Select;

function EditStudent(props) {
  const [value, setValue] = useState("");
  const [hoten, setHoTen] = useState("");
  const [gioitinh, setGioitinh] = React.useState("");
  const [namsinh, setNamsinh] = React.useState("");
  const [sdt, setSdt] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [masv, setMasv] = React.useState("");
  const [madoituong, setMadoituong] = React.useState("");
  const [tinh, setTinh] = React.useState("");
  const [huyen, setHuyen] = React.useState("");
  const [xa, setXa] = React.useState("");
  const [cmnd, setCmnd] = React.useState("");
  const [diachithuongtru, setDiachithuongtru] = React.useState("");
  const [maphong, setMaphong] = React.useState("");
  const [noicap, setNoicap] = React.useState("");
  const [nguyenquan, setNguyenquan] = React.useState("");
  const dispatch = useDispatch();

  function onChange(date, dateString) {
    setNamsinh(dateString);
  }
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  function onChangeRadio(e) {
    setGioitinh(e.target.value);
  }

  function onSave() {
    const payload = {
      hoten,
      gioitinh,
      namsinh,
      sdt,
      email,
      masv,
      tinh,
      huyen,
      xa,
      cmnd,
      diachithuongtru,
      noicap,
      nguyenquan,
    };
    dispatch(Post(payload));
  }
  return (
    <div className="addStudent_modal">
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
        {console.log("pppp",gioitinh)}
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/manage/student">
            <UserOutlined />
            <span>
              <Text style={{ fontFamily: "Roboto" }}>Quản lý sinh viên</Text>
            </span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Text style={{ fontFamily: "Roboto" }}>Sửa sinh viên</Text>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <div className="addStudent_title">
          <Button className="btnSave" onClick={() => onSave()}>
            <Title level={5} style={{ color: "white" }}>
              Save
            </Title>
          </Button>
          <Button className="btnCancel">
            <Title level={5}>Cancel</Title>
          </Button>
          <Title
            lavel={5}
            style={{ fontSize: 25, position: "absolute", left: 230 }}
          >
            Sửa thông tin sinh viên
          </Title>
        </div>
        <div
          style={{
            height: 0.1,
            backgroundColor: "black",
            width: "95%",
            marginTop: "10px",
            marginLeft: "2.5%",
          }}
        ></div>
        <div className="addStudent_row">
          <div className="rowItem">
            <Text>Họ và tên</Text>
            <Input
              className="input_modalText"
              onChange={(e) => setHoTen(e.target.value)}
            />
          </div>
          <div className="rowItemText">
            <Text>Ngày sinh</Text>
            <DatePicker className="input_modalText" onChange={onChange} />
          </div>
          <div className="rowItemText">
            <Text>Dân tộc</Text>
            <Select
              defaultValue="tg1"
              className="input_modalText"
              onChange={handleChange}
            >
              <Option value="tg1">Kinh</Option>
              <Option value="tg2">Thái</Option>
              <Option value="tg2">Mường</Option>
            </Select>
          </div>
          <div className="rowItemText">
            <Text>Giới tính</Text>
            <Radio.Group
              name="radiogroup"
              onChange={onChangeRadio}
              defaultValue={1}
            >
              <Radio value="Nam">Nam</Radio>
              <Radio value="Nữ">Nữ</Radio>
            </Radio.Group>
          </div>
        </div>

        <div className="addStudent_rowTow">
          <div className="rowItemText">
            <Text>Nơi sinh Tỉnh/Thành phố</Text>
            <Input
              className="input_modalText"
              onChange={(e) => setTinh(e.target.value)}
            />
          </div>
          <div className="rowItemText">
            <Text>Nơi sinh Quận/Huyện</Text>
            <Input
              className="input_modalText"
              onChange={(e) => setHuyen(e.target.value)}
            />
          </div>
          <div className="rowItemText">
            <Text>nơi sinh xã/phường</Text>
            <Input
              className="input_modalCommune"
              onChange={(e) => setXa(e.target.value)}
            />
          </div>
        </div>
        <div className="addStudent_rowThree">
          <div className="rowItemText">
            <Text>Số CMND</Text>
            <Input
              className="input_modalText"
              onChange={(e) => setCmnd(e.target.value)}
            />
          </div>
          <div className="rowItemText">
            <Text>Ngày cấp</Text>
            <DatePicker className="input_modalText" onChange={onChange} />
          </div>
          <div className="rowItemText">
            <Text>nơi cấp</Text>
            <Input
              className="input_modalCommune"
              onChange={(e) => setNoicap(e.target.value)}
            />
          </div>
        </div>
        <div className="addStudent_rowThree">
          <div className="rowItemText">
            <Text>Địa chỉ Email</Text>
            <Input
              className="input_modalText"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="rowItemText">
            <Text>Số điện thoại</Text>
            <Input
              className="input_modalText"
              onChange={(e) => setSdt(e.target.value)}
            />
          </div>
        </div>
        <div className="addStudent_rowThree">
          <div className="rowItemText">
            <Text>Nguyên quán</Text>
            <Input
              className="input_modalTextAdrress"
              onChange={(e) => setNguyenquan(e.target.value)}
            />
          </div>
          <div className="rowItemText">
            <Text>Địa chỉ thường trú</Text>
            <Input
              className="input_modalTextAdrress"
              onChange={(e) => setDiachithuongtru(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditStudent;
