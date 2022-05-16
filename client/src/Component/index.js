import "antd/dist/antd.css";
import React from "react";
import { Typography } from "antd";
import { Layout } from "antd";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  PicRightOutlined,
  HolderOutlined ,
  ToolOutlined ,
  LineChartOutlined
} from "@ant-design/icons";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import Sigin from "../Component/Sigin/Sigin";
import Index from "../Component/manageStudent/index";
import AddStudent from "./manageStudent/AddStudent";
import IndexRoom from "./Room";
import Room from "./Room/Room";
import Staff from "./Staff/Staff";
import AddStaff from "./Staff/AddStaff";
import ManageRoom from "./Room/ManageRoom";
import RentRoom from "./Room/rentRoom";
import AddRoom from "./Room/addRoom";
import Contract from "./Contract";
import BillRoom from "./BillRoom";
import IndexSupplies from "./supplies/index"
import EditStudent from "./manageStudent/editStudent";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

const { Title } = Typography;
const { SubMenu } = Menu;
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
const { Sider, Content } = Layout;

function Index1() {
  const [openKeys, setOpenKeys] = React.useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Router>
      <Layout>
        <Sider
          style={{
            height: 600,
            backgroundColor: "White",
            right: 1,
            width: 256,
          }}
        >
          <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange}>
            <Menu.Item key="51" icon={<HomeOutlined/>}>Trang chủ</Menu.Item>
            <SubMenu
              key="/sigin2"
              icon={<PicRightOutlined />}
              title="Sơ đồ nhà/phòng"
            >
              <Menu.Item key="91">
                <NavLink to="/manage/building">
                  <Title level={5}>Sơ đồ tòa nhà</Title>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="102">
                <NavLink to="/manage/room">
                  <Title level={5}>Sơ đồ phòng</Title>
                </NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="/siginhh" icon={<AppstoreOutlined />} title="Phòng">
              <Menu.Item key="manageRoom">
                <NavLink to="/manage/manageRoom">
                  <Title level={5}>Quản lý phòng</Title>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="rentRoom">
                <NavLink to="/manage/rentRoom">
                  <Title level={5}>Thuê phòng</Title>
                </NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="/sigin" icon={<SettingOutlined />} title="Quản lý">
              <Menu.Item key="5">
                <NavLink to="/manage/Staff">
                  <Title level={5}>Quản lý nhân viên</Title>
                </NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/manage/student">
                  <Title level={5}>Quản lý sinh viên</Title>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="mangeContract">
                <NavLink to="/manage/contract">
                  <Title level={5}>Quản lý hợp đồng</Title>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="9a1">
              <NavLink to="/manage/billRoom">
                <Title level={5}>Hóa đơn điện nước</Title>
              </NavLink>
            </Menu.Item>
            {/* <Menu.Item key="901">
              <NavLink to="/manage/supplies">
                <Title level={5}>Quản lý vật tư</Title>
              </NavLink>
            </Menu.Item> */}
            </SubMenu>
            <Menu.Item key="9a4" icon={<LineChartOutlined/>}>Thống kê</Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <Switch>
              <Route exact path="/manage/student">
                <Index />
              </Route>
              <Route path="/manage/addstudent">
                <AddStudent />
              </Route>
              <Route path="/manage/editSudent">
                <EditStudent/>
              </Route>
              <Route path="/manage/building">
                <IndexRoom />
              </Route>
              <Route path="/manage/room">
                <Room />
              </Route>
              <Route path="/manage/Staff">
                <Staff />
              </Route>
              <Route path="/manage/addStaff">
                <AddStaff />
              </Route>
              <Route path="/manage/manageRoom">
                <ManageRoom />
              </Route>
              <Route path="/manage/rentRoom">
                <RentRoom />
              </Route>
              <Route path="/manage/addRoom">
                <AddRoom />
              </Route>
              <Route path="/manage/contract">
                <Contract />
              </Route>
              <Route path="/manage/billRoom">
                <BillRoom />
              </Route>
              <Route path="/manage/supplies">
                <IndexSupplies />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}
export default Index1;
