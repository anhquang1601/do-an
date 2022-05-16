const initialState = {
    isloading: false,
    hopdong: [],
    error: false,
  };



const hopdongReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ISLOADING":
      return { isloading: true };
    case "GET_HOPDONG_SUCCESS":
      return {
        ...state,
        hopdong: action.hopdong,
      };
   /*  case "DELETE_KINDROOM_SUCCESS":
      return {
        kindroom: state.kindroom.filter((e) => {
          if (e._id !== action.payload.id) {
            return state;
          }
        }),
      }; */
 /*    case "UPDATE_KIND_SUCCESS":
      console.log("action", action);
      return {
        kindroom: state.kindroom.map((e) => {
          if (e.maloaiphong !== action.payload.id) {
            return e;
          }
          return { ...e, tenloaiphong: action.payload.name };
        }),
      }; */

  /*   case "DELETE_KINDROOM_ERROR":
      return {
        ...state,
        error: true,
        isloading: false,
      }; */
    default:
      return state;
  }
};
export default hopdongReducer;