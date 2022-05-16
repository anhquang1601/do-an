import axios from "axios";
import { useDispatch } from "react-redux";
import isloading from "../../action/isloading";
var querystring = require("querystring");

export async function PostUser(values) {
  await axios
    .post(
      "http://localhost:1000/post/Sigup",
      querystring.stringify({
        username: values.username,
        password: values.password,
        enterThePassword: values.EnterThePassword,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

export function* PostStudent(payload) {
  var ress = yield axios.post(
    "http://localhost:1000/post/student/",
    querystring.stringify({
      hoten: payload.payload.hoten,
      namsinh: payload.payload.namsinh,
      gioitinh: payload.payload.gioitinh,
      sdt: payload.payload.sdt,
      email: payload.payload.email,
      masv: payload.payload.masv,
      tinh: payload.payload.tinh,
      huyen: payload.payload.huyen,
      xa: payload.payload.xa,
      cmnd: payload.payload.cmnd,
      ngaycap: payload.payload.ngaycap,
      noicap: payload.payload.noicap,
      nguyenquan: payload.payload.nguyenquan,
      diachithuongtru: payload.payload.diachithuongtru,
      maphong: payload.payload.maphong,
      roomId: payload.payload.roomId,
    }),
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );
  return yield ress;
}

export function* postKindRoom(payload) {
  var res = yield axios.post(
    "http://localhost:1000/post/Kindroom/",
    querystring.stringify({
      maloaiphong: payload.payload.maloaiphong,
      tenloaiphong: payload.payload.tenloaiphong,
    }),
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );
  return yield res;
}

export function* postRoomSuccess(payload){
  var res = yield axios.post(
    "http://localhost:1000/post/room",
    querystring.stringify({
      tentoanha: payload.payload.tentoanha,
      maphong: payload.payload.maphong,
      tenphong: payload.payload.tenphong
    }),
    { headers: { "Content-Type": "application/x-www-form-urlencoded" }}
  );
  return yield res
}

export function* postRoom(payload){
  console.log(",,,",payload)
  var res = yield axios.post(
    "http://localhost:1000/get/getRoom",
    querystring.stringify({
      tentoanha:payload.payload
    }),
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );
  return yield res;
}

export async function getUser() {
  return fetch("http://localhost:1000/post/getUser", {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}
