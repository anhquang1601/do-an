import { v4 as uuidv4 } from "uuid";
const initialState = {
  isloading: false,
  kindroom: [],
  error: false,
};
const kindRoomReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ISLOADING":
      return { isloading: true };
    case "POST_KINDROOM_SUCCESS":
      console.log("action", action);
      return {
        ...state,
        kindroom: state.kindroom.concat({
          _id: uuidv4(),
          maloaiphong: action.payload.maloaiphong,
          tenloaiphong: action.payload.tenloaiphong,
        }),
      };
    case "GET_KINDROOM_SUCCESS":
      return {
        ...state,
        kindroom: action.kindroom,
      };
    case "DELETE_KINDROOM_SUCCESS":
      return {
        kindroom: state.kindroom.filter((e) => {
          if (e._id !== action.payload.id) {
            return state;
          }
        }),
      };
    case "UPDATE_KIND_SUCCESS":
      console.log("action", action);
      return {
        kindroom: state.kindroom.map((e) => {
          if (e.maloaiphong !== action.payload.id) {
            return e;
          }
          return { ...e, tenloaiphong: action.payload.name };
        }),
      };

    case "DELETE_KINDROOM_ERROR":
      return {
        ...state,
        error: true,
        isloading: false,
      };
    default:
      return state;
  }
};
export default kindRoomReducer;
