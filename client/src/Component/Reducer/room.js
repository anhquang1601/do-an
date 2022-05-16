const initialState = {
    isloading: false,
    room: [],
    roomAll: [],
    error: false,
  };

const getRoomReducer = (state = initialState, action) =>{
    console.log("ac",action)
    switch (action.type) {
        case "ISLOADING_ROOM":
            return { isloading: true };
        case "GET_ROOM_SUSSCESS":
            return{ isloading: false, error: false, room: action.payload }
        case "UPDATE_ROOM_RESQUESED":
            return { isloading:false, error:false, roomAll: state.roomAll.map((e)=>{
                if(e._id !== action.payload.id){
                    return e
                }
                return{ ...e, maphong: action.payload.maphong, tenphong: action.payload.tenphong}
            }) }
        case "GET_ROOMALL_SUSSCESS":
            return {
                isloading: false, error: false, roomAll: action.payload
            }
        default:
            return state
    }
}
export default getRoomReducer;