import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { DatePicker, Button, Select, Breadcrumb, Radio } from "antd";
import { Input, Typography } from "antd";
import { Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRoomAll } from "../action/room";
import "antd/dist/antd.css";
const { TabPane } = Tabs;
const { Text, Title } = Typography;
function Room() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.getRoomReducer);
  useEffect(() => {
    dispatch(getRoomAll());
  }, []);
  console.log("data", data);
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
          <Breadcrumb.Item>
            <Text style={{ fontFamily: "Roboto" }}>Sơ đồ phòng</Text>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="body_tabRoom">
        <Tabs>
          <TabPane tab="Nhà N1" key="1">
            <div className="diagramRoom">
              {data.isloading
                ? null
                : data.roomAll.map((e) => {
                    if (e.tentoanha == "A1") {
                      return (
                        <div style={{height: 140,marginLeft: "1.2%", marginRight: "1.2%", minWidth: "10%", marginBottom: 15}}>
                          <div className="fourth_floor_one"  >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                width: "100%",
                                
                              }}
                            >
                              <Text style={{ marginLeft: "5%", width: "60%" }}>{e.maphong}</Text>
                              <Text style={{  }}>
                                ({e.sinhvienID.length}/6)
                              </Text>
                            </div>
                            {e.sinhvienID.map((el) => {
                              return (
                                <Text style={{ fontSize: 12 }}>{el.hoten}</Text>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }
                  })}
            </div>
          </TabPane>
          <TabPane tab="Nhà N2" key="2">
            <div className="diagramRoom">
            {data.isloading
                ? null
                : data.roomAll.map((e) => {
                    if (e.tentoanha == "A2") {
                      return (
                        <div style={{height: 140,marginLeft: "1.2%", marginRight: "1.2%", minWidth: "10%"}}>
                          <div className="fourth_floor_one">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                width: "100%",
                              }}
                            >
                              <Text>{e.maphong}</Text>
                              <Text style={{ marginLeft: "33%" }}>
                                ({e.sinhvienID.length}/6)
                              </Text>
                            </div>
                            <Text>Số giường: 2</Text>
                            {e.sinhvienID.map((el) => {
                              return (
                                <Text style={{ fontSize: 12 }}>{el.hoten}</Text>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }
                  })}
            </div>
          </TabPane>
          <TabPane tab="Nhà N3" key="3">
            <div className="diagramRoom">
            {data.isloading
                ? null
                : data.roomAll.map((e) => {
                    if (e.tentoanha == "A3") {
                      return (
                        <div style={{height: 140,marginLeft: "1.2%", marginRight: "1.2%", minWidth: "10%"}}>
                          <div className="fourth_floor_one">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                width: "100%",
                              }}
                            >
                              <Text>{e.maphong}</Text>
                              <Text style={{ marginLeft: "33%" }}>
                                ({e.sinhvienID.length}/6)
                              </Text>
                            </div>
                            <Text>Số giường: 2</Text>
                            {e.sinhvienID.map((el) => {
                              return (
                                <Text style={{ fontSize: 12 }}>{el.hoten}</Text>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }
                  })}
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
export default Room;
