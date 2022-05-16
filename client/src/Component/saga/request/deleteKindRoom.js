import axios from "axios";
var querystring = require("querystring");
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
export function* deleteKindRoom(id) {
  const token=getCookie('token')
  let res = yield axios.delete(
    `http://localhost:1000/delete/kindroom/${id.id}`,{headers:{token:token}})
    return yield res;
}

export function* deleteStudent(payload){
  const token = getCookie("token")
  console.log(token)
  let res = yield axios.delete(
    `http://localhost:1000/delete/student/${payload.payload}`,{headers:{token:token}}
    )
    return yield res;
}
