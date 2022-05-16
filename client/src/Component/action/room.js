export const GetRoom = (payload) =>{
    return{
        type: "GET_ROOM_REQUESTED",payload
    }
}

export const GetRoomIsloading = () =>{
    return{
        type: "ISLOADING_ROOM"
    }
}

export const postRoom = (payload) => {
    return {
        type: "POST_ROOM_RESQUESTED", payload
    }
}

export const getRoomAll = () => {
    return {
        type: "GET_ROOMALL_REQUESTED"
    }
}