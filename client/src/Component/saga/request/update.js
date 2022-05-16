import axios from "axios";
var querystring = require("querystring");
export function* updateKindRoom(payload) {
  var res = yield axios.put(
    `http://localhost:1000/update/updateKindRoom/${payload.payload.id}`,
    querystring.stringify({
      tenloaiphong: payload.payload.name,
    })
  );
  return yield res;
}

export function* updateBillRoom(payload){
  console.log("payload1",payload)
  var res = yield axios.put(
    `http://localhost:1000/update/billroom/${payload.payload.id}`,
    querystring.stringify({
      ngaytao: payload.payload.ngaytao,
      nhanvienlap: payload.payload.nhanvienlap,
      sodiensudung: payload.payload.sodientieuthu,
      sodientieuthu: payload.payload.sodientieuthu,
      gianuoc: payload.payload.gianuoc,
      giadien: payload.payload.giadien,
      sonuocsudung: payload.payload.sonuoctieuthu,
      sonuoctieuthu: payload.payload.sonuoctieuthu,
    })
  )
  return yield res;
}

export function* updateRentRoom(payload) {
  var ress = yield axios.put(
    `http://localhost:1000/update/updateRentRoom/${payload.payload.id}`,
    querystring.stringify({
      roomId: payload.payload.maphong,
    })
  );
  return yield ress;
}

export function* updatePayRoom(payload) {
  var ress = yield axios.put(
    `http://localhost:1000/update/updatePayRoom/${payload.payload}`,
    querystring.stringify({
      roomId: payload.payload.maphong,
    })
  );
  return yield ress;
}
export function* updateRoom(payload) {
  console.log("pay67",payload)
  var ress = yield axios.put(
    `http://localhost:1000/update/updateRoom/${payload.payload.id}`,
    querystring.stringify({
      maphong: payload.payload.maphong,
      tenphong: payload.payload.tenphong
    })
  );
  return yield ress;
}


