const initialState = {
  isloading: false,
  billRoom: [],
  payRoom: [],
  error: false,
};

const billRoomReducer = (state = initialState, action) => {
  console.log(action, "ac123");
  switch (action.type) {
    case "ISLOADING_BILLROOM":
      return {
        isloading: true,
        billRoom: [],
        error: false,
      };
    case "GET_BILLROOM_SUCCESS":
      return {
        ...state,
        isloading: false,
        billRoom: action.billroom,
        error: false,
      };
    case "UPDATE_BILLROOM_SUCCESS":
      return {
        isloading: false,
        billRoom: state.billRoom.map((e) => {
          if (e._id !== action.payload.id) {
            return e;
          }
          return {
            ...e,
            ngaytao: action.payload.ngaytao,
            nhanvienlap: action.payload.nhanvienlap,
            sodiensudung: action.payload.sodiensudung,
            gianuoc: action.payload.gianuoc,
            giadien: action.payload.giadien,
            sonuocsudung: action.payload.sonuocsudung,
          };
        }),
        error: false,
      };
    case "UPDATE_PAYROOM_SUCCESS":
      return {
        isloading: false,
        billRoom: state.billRoom.filter((e) => {
          console.log("ee",e)
          if (e._id !== action.payload) {
            return state;
          }
        }),
        error: false,
      };
    case "GET_LIST_PAY_SUSSCESS":
      return{
        ...state,
        isloading: false,
        payRoom: action.payload
      }
    default:
      return state;
  }
};
export default billRoomReducer;
