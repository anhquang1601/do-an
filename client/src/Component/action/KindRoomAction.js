export const getKindRoomAction=()=>{
    return{
        type:"GET_KINDROOM_RESQUESTED"
    }
}

export const postKindRoom=(payload)=>{
   
    return{
        type:"POST_KINDROOM_RESQUESTED",payload
    }
}
export const deleteKindRoom=(id)=>{
    return{
        type:"DELETE_KINDROOM_RESQUESTED",id
    }
}

export const updateKindRoom=(payload)=>{
    console.log("payload",payload)
    return{
        type:"UPDATE_KINDROOM_RESQUESED",payload
    }
}