export const Post = (payload) => {
  return {
    type: "POST_STUDENT_REQUESTED",
    payload,
  };
};

export const Get = () => {
  return {
    type: "GET_STUDENT_REQUESTED",
  };
};

export const Delete = (payload) => {
  return {
    type: "DELETE_STUDENT_REQUESTED",
    payload,
  };
};

export const updateRentRoom = (payload) => {
  return {
    type: "UPDATE_RENTROOM_RESQUESED",
    payload,
  };
};

export const GetSuccess = () => {
  return {
    type: "GET_STUDENT_SUCCESS_REQUESTED",
  };
};
export const getBillRoom = () => {
  return {
    type: "GET_BILLROOM_SUCCESS_REQUESTED",
  };
};
export const updateBillRoom = (payload) => {
  return {
    type: "UPDATE_BILLROOM_RESQUESED",
    payload,
  };
};

export const updatePayRoom = (payload) => {
  return {
    type: "UPDATE_PAYROOM_RESQUESED",
    payload,
  };
};
export const getPayRoom = (payload) => {
  return {
    type: "GET_PAY_ROOM_REQUESTED",
    payload,
  };
};

export const postRoom = (payload) => {
  return {
    type: "POST_ROOM_REQUESTED",
    payload,
  };
};
export const gethopdong = () => {
  return {
    type: "GET_HOPDONG_SUCCESS_REQUESTED",
  };
};
export const updateRoom = (payload) => {
  return{
    type: "UPDATE_ROOM_RESQUESED",
    payload
  }
}
