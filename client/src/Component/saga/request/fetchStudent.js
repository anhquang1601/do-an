const url = "http://localhost:1000/get/";
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

const fetchApi = {
  /* fetchStudent:() => {
    return fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .catch((error) => {
        throw error;
      });
  }, */
  fetchKindRoom: () => {
    var myheader = new Headers();
    myheader.append("au", "Bearer" + getCookie("token"));
    return fetch("http://localhost:1000/get/kindroom", {
      method: "GET",
      headers: myheader,
    })
      .then((res) => res.json())
      .catch((err) => {
        throw err;
      });
  },
  fetchStudent: () => {
    let myheader = new Headers();
    myheader.append("au", "Bearer" + getCookie("token"));
    return fetch("http://localhost:1000/get/getStudent", {
      method: "GET",
      headers: myheader,
    })
      .then((res) => res.json())
      .catch((err) => {
        throw err;
      });
  },
  fetchStudentSuccess: () => {
    let myheader = new Headers();
    myheader.append("au", "Bearer" + getCookie("token"));
    return fetch("http://localhost:1000/get/getStudentSucess", {
      method: "GET",
      headers: myheader,
    })
      .then((res) => res.json())
      .catch((err) => {
        throw err;
      });
  },
  getBillRoom: () => {
    let myheader = new Headers();
    myheader.append("au", "Bearer" + getCookie("token"));
    return fetch("http://localhost:1000/get/getBillRoom", {
      method: "GET",
      headers: myheader,
    })
      .then((res) => res.json())
      .catch((err) => {
        throw err;
      });
  },
  fetchPayRoom: () => {
    let myheader = new Headers();
    myheader.append("au", "Bearer" + getCookie("token"));
    return fetch("http://localhost:1000/get/getListPayRoom", {
      method: "GET",
      headers: myheader,
    })
      .then((res) => res.json())
      .catch((err) => {
        throw err;
      });
  },
  getRoom: () => {
    let myheader = new Headers();
    myheader.append("au", "Bearer" + getCookie("token"));
    return fetch("http://localhost:1000/get/getRoomSucces", {
      method: "GET",
      headers: myheader,
    })
      .then((res) => res.json())
      .catch((err) => {
        throw err;
      });
  },
  getHopDong: () => {
    let myheader = new Headers();
    myheader.append("au", "Bearer" + getCookie("token"));
    return fetch("http://localhost:1000/get/gethopdong", {
      method: "GET",
      headers: myheader,
    })
      .then((res) => res.json())
      .catch((err) => {
        throw err;
      });
  }
};

export default fetchApi;
