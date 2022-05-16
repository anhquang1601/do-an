const initialState = {
  isloading: false,
  student: [],
  studentSucces: [],
  error: false,
};

const studentReducer = (state = initialState, action) => {
  console.log(action.payload,"llll")
  switch (action.type) {
    case "ISLOADING":
      return { ...state, isloading: true };

    case "POST_STUDENT_SUCCESS":
      return {
        ...state,
        student: state.student.concat({
          cmnd: action.payload.cmnd,
          diachithuongtru: action.payload.diachithuongtru,
          email: action.payload.email,
          gioitinh: action.payload.gioitinh,
          hoten: action.payload.hoten,
          huyen: action.payload.huyen,
          masv: action.payload.masv,
          namsinh: action.payload.namsinh,
          nguyenquan: action.payload.nguyenquan,
          noicap: action.payload.noicap,
          sdt: action.payload.sdt,
          tinh: action.payload.tinh,
          xa: action.payload.xa,
        }),
        isloading: false,
        error: false,
      };
    case "GET_STUDENT_SUSSCESS":
      return {
        ...state,
        isloading: false,
        error: false,
        student: action.payload.map(e => {
          if(e.type !== true){
            return e
          }
        })
      };
      case "GET_STUDENT_SUCCESS_SUSSCESS":
        return {
          ...state,
          isloading: false,
          error: false,
          studentSucces: action.payload,
        };
    case "DELETE_STUDENT_REQUESTED":
      return {
        isloading:false,student: state.student.filter((e) => {
          if (e._id === action.payload.payload) {
            return state;
          }
          return state
        }),
      };
    case "UPDATE_RENTROOM_SUCCESS":
      return{
        ...state,
        /* student: state.student.map(e => {
          if(e._id !== action.payload._id){
            return e
          }
          return { ...e, type: true,roomId: action.payload.roomId  };
        }) */
        student: state.student.filter(e => {
          if(e._id !== action.payload.id){
            return state
          }
        })
      }
      
    case "ERROR":
      return {
        ...state,
        error: true,
        isloading: false,
      };
    default:
      return state;
  }
};
export default studentReducer;
