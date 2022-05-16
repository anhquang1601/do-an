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
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { UploadOutlined } from "@ant-design/icons";

import "./staff.css";
import { Typography } from "antd";
import { Row, Col } from "antd";
const { Text, Title } = Typography;

function AddStaff() {
  const handleChange = ({ fileList }) => this.setState({ fileList });
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
      <div className="body_addStaff">
        <div className="title_staff">
          <Title level={5}> Thêm mới nhân viên</Title>
          <Button className="btnSave">
            <Title level={5} style={{ color: "white" }}>
              Save
            </Title>
          </Button>
          <Button className="btnCancel">
            <Title level={5}>Cancel</Title>
          </Button>
        </div>
        <div style={{ height: 0.1, width: "100%", background: "black" }}></div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="body_add">
            <Row>
              <Col span={11}>
                <Text>Họ và tên</Text>
                <Input className="input_body" />
              </Col>
              <Col span={11} className="col_6">
                <Text>Ngày sinh</Text>
                <Input className="input_body" />
              </Col>
            </Row>
            <Row style={{ marginTop: 20 }}>
              <Col span={11}>
                <Text>Nơi sinh Tỉnh/Thành Phố</Text>
                <Input className="input_body" />
              </Col>
              <Col span={11} className="col_6">
                <Text>Nơi sinh Quận/Huyện</Text>
                <Input className="input_body" />
              </Col>
            </Row>
            <Row style={{ marginTop: 20 }}>
              <Col span={11}>
                <Text>Nơi sinh Xã/Phường</Text>
                <Input className="input_body" />
              </Col>
              <Col span={11} className="col_6">
                <Text>Số chứng minh thư</Text>
                <Input className="input_body" />
              </Col>
            </Row>
            <Row style={{ marginTop: 20 }}>
              <Col span={11}>
                <Text>Ngày cấp</Text>
                <Input className="input_body" />
              </Col>
              <Col span={11} className="col_6">
                <Text>Nơi cấp</Text>
                <Input className="input_body" />
              </Col>
            </Row>
            <Row style={{ marginTop: 20 }}>
              <Col span={11}>
                <Text>Ngày cấp</Text>
                <Input className="input_body" />
              </Col>
              <Col span={11} className="col_6">
                <Text>Nơi cấp</Text>
                <Input className="input_body" />
              </Col>
            </Row>
          </div>
          <div
            style={{
              height: 500,
              width: "25%",
              display: "flex",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture"
              className="picture-card"
            >
              <Button icon={<UploadOutlined />}>Tải ảnh lên</Button>
            </Upload>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddStaff;
