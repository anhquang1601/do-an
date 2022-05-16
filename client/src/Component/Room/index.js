import "./room.css";
import { DatePicker, Button, Select, Breadcrumb, Card, Image } from "antd";
import { HomeOutlined, UserOutlined, BankOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Text, Title } = Typography;
function IndexRoom() {
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
              <Text style={{ fontFamily: "Roboto" }}>Sơ đồ phòng/nhà</Text>
            </span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="room_title">
        <Title level={5}>Sơ đồ</Title>
        <div style={{ height: 0.1, backgroundColor: "#dcdcdc" }}></div>
      </div>
      <div className="room_card">
        <div className="room_cardItem">
          <Title lavel={5} style={{ fontSize: 20, marginLeft: 10 }}>
            Khu A
          </Title>
          <Button
            style={{
              borderRadius: 4,
              marginLeft: 10,
              marginRight: 10,
              height: 30,
            }}
          >
            <Text>Chỉnh sửa</Text>
          </Button>
          <Button style={{ borderRadius: 4, marginRight: 10, height: 30 }}>
            <Text>Xóa</Text>
          </Button>
          <Text>Tổng số giường:</Text>
          <div
            style={{
              height: 20,
              width: 40,
              backgroundColor: "#00bfff",
              borderRadius: 20,
              textAlign: "center",
              marginRight: 10,
            }}
          >
            <Text>200</Text>
          </div>
          <Text>Tổng số giường trống:</Text>
          <div
            style={{
              height: 20,
              width: 40,
              backgroundColor: "#00bfff",
              borderRadius: 20,
              textAlign: "center",
              marginRight: 10,
            }}
          >
            <Text>200</Text>
          </div>
          <Text>Tổng số sinh viên thuê:</Text>
          <div
            style={{
              height: 20,
              width: 40,
              backgroundColor: "#00bfff",
              borderRadius: 20,
              textAlign: "center",
              marginRight: 10,
            }}
          >
            <Text>200</Text>
          </div>
        </div>
        <div className="room_cardContent">
          <Button className="btn_addRoom">
            <Title level={5} style={{ color: "white" }}>
              Thêm mới ktx
            </Title>
          </Button>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <div className="room_item">
              <div style={{ float: "right" }}>
                <BankOutlined
                  height={20}
                  style={{ marginTop: 5, marginRight: 5 }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Image
                  style={{ height: 30, width: 30 }}
                  src="https://freeyourmindexperience.com/wp-content/uploads/person-icon-person-icon-clipart-image-from-our-icon-clipart-category-9-500x500.png"
                />
                <Title level={5}>N1</Title>
              </div>
              <div
                style={{
                  height: 25,
                  width: 70,
                  backgroundColor: "violet",
                  marginLeft: 10,
                  textAlign: "center",
                  borderRadius: 4,
                }}
              >
                <Text>60 phòng</Text>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 10,
                }}
              >
                <Text>Tổng sô giường: 300</Text>
                <Text>Tổng sô trống: 100</Text>
                <Text>Tổng sô sinh viên: 200</Text>
              </div>
            </div>

            <div className="room_item">
              <div style={{ float: "right" }}>
                <Image
                  style={{ height: 40, width: 40 }}
                  src="https://thumbs.dreamstime.com/b/town-building-isometric-d-icon-town-building-isometric-d-icon-city-real-estate-element-commercial-property-quarter-urban-133630400.jpg"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Image
                  style={{ height: 30, width: 30 }}
                  src="https://freeyourmindexperience.com/wp-content/uploads/person-icon-person-icon-clipart-image-from-our-icon-clipart-category-9-500x500.png"
                />
                <Title level={5}>N1</Title>
              </div>
              <div
                style={{
                  height: 25,
                  width: 70,
                  backgroundColor: "violet",
                  marginLeft: 10,
                  textAlign: "center",
                  borderRadius: 4,
                }}
              >
                <Text>60 phòng</Text>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 10,
                }}
              >
                <Text>Tổng sô giường: 300</Text>
                <Text>Tổng sô trống: 100</Text>
                <Text>Tổng sô sinh viên: 200</Text>
              </div>
            </div>
            <div className="room_item">
              <div style={{ float: "right" }}>
                <Image
                  style={{ height: 40, width: 40 }}
                  src="https://thumbs.dreamstime.com/b/town-building-isometric-d-icon-town-building-isometric-d-icon-city-real-estate-element-commercial-property-quarter-urban-133630400.jpg"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Image
                  style={{ height: 30, width: 30 }}
                  src="https://freeyourmindexperience.com/wp-content/uploads/person-icon-person-icon-clipart-image-from-our-icon-clipart-category-9-500x500.png"
                />
                <Title level={5}>N1</Title>
              </div>
              <div
                style={{
                  height: 25,
                  width: 70,
                  backgroundColor: "violet",
                  marginLeft: 10,
                  textAlign: "center",
                  borderRadius: 4,
                }}
              >
                <Text>60 phòng</Text>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 10,
                }}
              >
                <Text>Tổng sô giường: 300</Text>
                <Text>Tổng sô trống: 100</Text>
                <Text>Tổng sô sinh viên: 200</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default IndexRoom;
